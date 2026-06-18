import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { contactPageSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact VSC | VirtualifyMe",
  description:
    "Contact VirtualifyMe by WhatsApp or email for software development, Tassenger setup, modernization, and product work.",
  path: "/contact",
  keywords: [
    "contact VSC",
    "contact VirtualifyMe",
    "software development inquiry",
    "Tassenger setup",
    "website modernization inquiry",
    "software project WhatsApp"
  ]
});

const inquiryOptions = [
  "Tassenger organization setup",
  "Software development",
  "Website revamp",
  "News/media stability",
  "AI automation",
  "Cloud or security help"
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <section className="contact-hero">
        <div className="home-wrap contact-hero-grid">
          <div>
            <h1>Tell VSC what you want to <span>build, fix, stabilize, or launch</span>.</h1>
            <p>
              Message on WhatsApp first. Share the product, platform, link, issue, idea, or organization setup need,
              and VSC will respond with the practical next step.
            </p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="contact_primary_whatsapp"
                analyticsLabel="Contact hero"
                analyticsSection="contact_hero"
              >
                Message on WhatsApp <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href={`mailto:${site.email}`}
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="contact_primary_email"
                analyticsLabel="Contact hero"
                analyticsSection="contact_hero"
              >
                Email VSC <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="contact-route-card">
            <h2>Best first message</h2>
            <p>“Hi VSC, I want to discuss…”</p>
            <div>
              <span>what is broken or needed</span>
              <span>who uses it</span>
              <span>deadline or launch pressure</span>
              <span>existing link, app, or document</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-options">
        <div className="home-wrap contact-grid">
          <div className="contact-card">
            <h2>WhatsApp-first contact</h2>
            <p className="lead">Use the inquiry directions below as a guide, then send the message directly.</p>
            <div className="pill-row">
              {inquiryOptions.map((option) => (
                <span className="pill" key={option}>{option}</span>
              ))}
            </div>
            <div className="page-actions contact-page-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="contact_whatsapp_click"
                analyticsLabel="Contact page card"
                analyticsSection="contact_options"
              >
                Message on WhatsApp <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href={`mailto:${site.email}`}
                variant="secondary"
                analyticsEvent="contact_email_click"
                analyticsLabel="Contact page card"
                analyticsSection="contact_options"
              >
                Email VSC <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="contact-card">
            <h2>Contact details</h2>
            <div className="contact-list">
              <a href={site.whatsapp}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.address}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-paths">
        <div className="home-wrap contact-path-grid">
          <article>
            <b>Tassenger setup</b>
            <p>Organization setup, admin onboarding, roles, permissions, departments, and launch coordination.</p>
            <Link href="/tassenger/admin">Open admin entry <ArrowIcon /></Link>
          </article>
          <article>
            <b>Platform or site work</b>
            <p>Development, modernization, performance, SEO/AEO/GEO, cloud, QA, security, AI, and analytics.</p>
            <Link href="/services">Open services <ArrowIcon /></Link>
          </article>
          <article>
            <b>News/media stability</b>
            <p>Cache, CDN, WordPress, API, mobile behavior, publishing flow, and high-traffic reliability.</p>
            <Link href="/work/free-malaysia-today">Open FMT case study <ArrowIcon /></Link>
          </article>
        </div>
      </section>
      <ContactBand title="Ready when you are." text="A clear message beats a long form. Tell VSC the business problem and the desired outcome." />
    </>
  );
}
