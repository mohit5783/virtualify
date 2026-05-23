import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand, PageHero } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import {
  findTassengerLegalPage,
  readTassengerLegalMarkdown,
  tassengerLegalPageSchema,
  tassengerLegalPages,
  tassengerSupportEmail,
  type TassengerLegalPage
} from "@/lib/tassenger-legal";

type MarkdownBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

type ParsedMarkdown = {
  title: string;
  lastUpdated: string;
  schemaDate: string;
  blocks: MarkdownBlock[];
};

export function generateStaticParams() {
  return tassengerLegalPages.map((page) => ({ policySlug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ policySlug: string }> }) {
  const { policySlug } = await params;
  const page = findTassengerLegalPage(policySlug);
  if (!page) return {};

  return pageMetadata({
    title: page.seoTitle,
    description: page.description,
    path: `/tassenger/${page.slug}`,
    image: "/tassenger/opengraph-image",
    imageAlt: "Tassenger by VSC",
    keywords: page.keywords
  });
}

function parseTassengerMarkdown(markdown: string): ParsedMarkdown {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const title = lines[0]?.replace(/^#\s+/, "").trim() || "Tassenger";
  const lastUpdatedLine = lines.find((line) => line.startsWith("Last updated:")) || "Last updated: May 22, 2026";
  const lastUpdated = lastUpdatedLine.replace("Last updated:", "").trim();
  const schemaDate = new Date(lastUpdated).toISOString().slice(0, 10);
  const contentLines = lines.slice(1).filter((line) => line.trim() !== lastUpdatedLine);
  const blocks: MarkdownBlock[] = [];

  for (let index = 0; index < contentLines.length; index += 1) {
    const line = contentLines[index].trim();
    if (!line) {
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", level: 2, text: line.replace(/^##\s+/, "") });
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "heading", level: 3, text: line.replace(/^###\s+/, "") });
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (contentLines[index]?.trim().startsWith("- ")) {
        items.push(contentLines[index].trim().replace(/^-\s+/, ""));
        index += 1;
      }
      index -= 1;
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (/^\d+\.\s+/.test(contentLines[index]?.trim() || "")) {
        items.push(contentLines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      index -= 1;
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    const paragraphLines = [line];
    while (
      contentLines[index + 1]?.trim() &&
      !contentLines[index + 1].trim().startsWith("## ") &&
      !contentLines[index + 1].trim().startsWith("### ") &&
      !contentLines[index + 1].trim().startsWith("- ") &&
      !/^\d+\.\s+/.test(contentLines[index + 1].trim())
    ) {
      index += 1;
      paragraphLines.push(contentLines[index].trim());
    }

    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return { title, lastUpdated, schemaDate, blocks };
}

function normalizeHref(href: string) {
  if (href.startsWith(site.baseUrl)) {
    return href.replace(site.baseUrl, "") || "/";
  }

  return href;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const tokenPattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`strong-${match.index}`}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, rawHref] = linkMatch;
        const href = normalizeHref(rawHref);
        const isExternal = href.startsWith("http");
        nodes.push(
          <Link
            key={`link-${match.index}`}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {label}
          </Link>
        );
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function LegalMarkdown({ blocks }: { blocks: MarkdownBlock[] }) {
  return (
    <div className="tassenger-legal-document">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return block.level === 2 ? (
            <h2 key={`${block.text}-${index}`}>{block.text}</h2>
          ) : (
            <h3 key={`${block.text}-${index}`}>{block.text}</h3>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={`list-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ListTag>
          );
        }

        return <p key={`paragraph-${index}`}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}

function RelatedPages({ current }: { current: TassengerLegalPage }) {
  return (
    <div className="tassenger-legal-related">
      <span>Related Tassenger pages</span>
      {tassengerLegalPages.map((page) => (
        <Link
          key={page.slug}
          href={`/tassenger/${page.slug}`}
          aria-current={page.slug === current.slug ? "page" : undefined}
          data-analytics-event="tassenger_legal_related_click"
          data-analytics-label={page.title}
          data-analytics-section="tassenger_legal_hero"
        >
          {page.label}
        </Link>
      ))}
    </div>
  );
}

export default async function TassengerLegalPage({ params }: { params: Promise<{ policySlug: string }> }) {
  const { policySlug } = await params;
  const page = findTassengerLegalPage(policySlug);
  if (!page) notFound();

  const parsed = parseTassengerMarkdown(readTassengerLegalMarkdown(page));

  return (
    <>
      <JsonLd data={tassengerLegalPageSchema(page, parsed.schemaDate)} />
      <PageHero label={`Tassenger ${page.label}`} title={parsed.title} text={page.description}>
        <div className="tassenger-legal-hero-card">
          <span>Last updated</span>
          <b>{parsed.lastUpdated}</b>
          <p>{page.ctaText}</p>
          <ButtonLink
            href={`mailto:${tassengerSupportEmail}`}
            analyticsEvent="tassenger_support_email_click"
            analyticsLabel={page.title}
            analyticsSection="tassenger_legal_hero"
          >
            Email support <ArrowIcon />
          </ButtonLink>
        </div>
      </PageHero>

      <section className="tassenger-legal-section">
        <div className="container tassenger-legal-layout">
          <aside>
            <RelatedPages current={page} />
          </aside>
          <LegalMarkdown blocks={parsed.blocks} />
        </div>
      </section>

      <ContactBand title={page.ctaTitle} text={page.ctaText} />
    </>
  );
}
