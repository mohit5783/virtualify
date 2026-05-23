import { readFileSync } from "node:fs";
import path from "node:path";
import { absoluteUrl, site } from "@/lib/site";

export type TassengerLegalSlug = "privacy" | "terms" | "support" | "delete-account";

export type TassengerLegalPage = {
  slug: TassengerLegalSlug;
  source: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  label: string;
  ctaTitle: string;
  ctaText: string;
};

export const tassengerLegalPages: readonly TassengerLegalPage[] = [
  {
    slug: "privacy",
    source: "privacy.md",
    title: "Tassenger Privacy Policy",
    seoTitle: "Tassenger Privacy Policy | VirtualifyMe",
    description:
      "How Tassenger collects, uses, stores, shares, and protects account, chat, task, media, contacts, workspace, support, and deletion data.",
    keywords: ["Tassenger privacy policy", "Tassenger data deletion", "Tassenger contacts", "Tassenger workspace data"],
    label: "Privacy",
    ctaTitle: "Privacy question about Tassenger?",
    ctaText: "Contact Tassenger support for privacy, deletion, account, or workspace-data questions."
  },
  {
    slug: "terms",
    source: "terms.md",
    title: "Tassenger Terms of Service",
    seoTitle: "Tassenger Terms of Service | VirtualifyMe",
    description:
      "Terms governing Tassenger account access, messaging, tasks, media, official workspaces, acceptable use, support, retention, and service availability.",
    keywords: ["Tassenger terms", "Tassenger terms of service", "taskable messenger terms", "Tassenger official workspace"],
    label: "Terms",
    ctaTitle: "Questions about Tassenger terms?",
    ctaText: "Contact Tassenger support if you need help understanding account, workspace, deletion, or acceptable-use terms."
  },
  {
    slug: "support",
    source: "support.md",
    title: "Tassenger Support",
    seoTitle: "Tassenger Support | VirtualifyMe",
    description:
      "Get help with Tassenger account access, OTP sign-in, contacts, notifications, chats, groups, official workspaces, tasks, media, privacy, and deletion.",
    keywords: ["Tassenger support", "Tassenger OTP help", "Tassenger account help", "Tassenger workspace support"],
    label: "Support",
    ctaTitle: "Need Tassenger support?",
    ctaText: "Email support with your account phone number, device details, app version, and a clear issue description."
  },
  {
    slug: "delete-account",
    source: "delete-account.md",
    title: "Delete Your Tassenger Account",
    seoTitle: "Delete Your Tassenger Account | VirtualifyMe",
    description:
      "How to request deletion of your Tassenger account, what is deleted or anonymized, retention timing, verification, and official workspace handling.",
    keywords: ["delete Tassenger account", "Tassenger account deletion", "Tassenger data deletion", "delete account request"],
    label: "Account deletion",
    ctaTitle: "Ready to request deletion?",
    ctaText: "Email Tassenger support with the subject Tassenger account deletion request and the verification details listed on this page."
  }
] as const;

export function findTassengerLegalPage(slug: string) {
  return tassengerLegalPages.find((page) => page.slug === slug);
}

export function readTassengerLegalMarkdown(page: TassengerLegalPage) {
  return readFileSync(path.join(process.cwd(), "content", "tassenger-legal", page.source), "utf8");
}

export function tassengerLegalPageSchema(page: TassengerLegalPage, lastUpdated: string) {
  const pageUrl = absoluteUrl(`/tassenger/${page.slug}`);
  const graph: Record<string, unknown>[] = [
    {
      "@type": page.slug === "support" ? "ContactPage" : "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.seoTitle,
      headline: page.title,
      description: page.description,
      dateModified: lastUpdated,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": absoluteUrl("/#website")
      },
      publisher: {
        "@id": absoluteUrl("/#organization")
      },
      about: {
        "@id": absoluteUrl("/tassenger#software")
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/")
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tassenger",
          item: absoluteUrl("/tassenger")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.title,
          item: pageUrl
        }
      ]
    }
  ];

  if (page.slug === "support") {
    graph.push({
      "@type": "ContactPoint",
      "@id": `${pageUrl}#support-contact`,
      contactType: "Tassenger support",
      email: "vscsocialhandle@gmail.com",
      url: pageUrl,
      availableLanguage: ["en", "hi"],
      areaServed: ["IN", "MY"]
    });
  }

  if (page.slug === "delete-account") {
    graph.push({
      "@type": "HowTo",
      "@id": `${pageUrl}#delete-account-howto`,
      name: "How to request deletion of a Tassenger account",
      description: page.description,
      totalTime: "P30D",
      supply: [
        "Phone number on the Tassenger account",
        "Display name on the account",
        "Optional profile email if available",
        "Contact email or phone number for verification"
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Open Tassenger or the delete-account page",
          text: "Use the in-app Delete account flow or open the public delete-account URL."
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Submit the deletion request",
          text: "Provide the account phone number, display name, optional profile email, and a verification contact."
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Complete verification",
          text: "Tassenger verifies account ownership before deletion to prevent unauthorized account removal."
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Deletion or anonymization",
          text: "Verified requests are processed through active-system deletion or anonymization, with backup aging handled separately."
        }
      ]
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

export const tassengerSupportEmail = "vscsocialhandle@gmail.com";
export const tassengerLegalPublisher = site.legalName;
