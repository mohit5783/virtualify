import { notFound } from "next/navigation";
import { ContactBand, PageHero } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, legalPageSchema } from "@/lib/schema";
import { findLegalPage, legalPages } from "@/lib/site";

export function generateStaticParams() {
  return legalPages.map((page) => ({ legalSlug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ legalSlug: string }> }) {
  const { legalSlug } = await params;
  const page = findLegalPage(legalSlug);
  if (!page) return {};
  return pageMetadata({
    title: `${page.title} | VSC VirtualifyMe`,
    description: page.description,
    path: `/${page.slug}`,
    keywords: [page.title, "VSC legal", "VirtualifyMe legal", "Virtualify Software Consultancy Pvt. Ltd."]
  });
}

export default async function LegalPage({ params }: { params: Promise<{ legalSlug: string }> }) {
  const { legalSlug } = await params;
  const page = findLegalPage(legalSlug);
  if (!page) notFound();

  return (
    <>
      <JsonLd data={legalPageSchema(page)} />
      <PageHero label="Legal" title={page.title} text={page.description} />
      <section className="section">
        <div className="container legal-grid">
          {page.sections.map((section) => (
            <article className="legal-card" key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactBand title="Questions about this page?" text="Contact VSC by WhatsApp or email for clarification." />
    </>
  );
}
