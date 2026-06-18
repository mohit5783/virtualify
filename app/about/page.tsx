import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, CheckList, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { aboutPageSchema, JsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About VSC VirtualifyMe | Software Company in Harda",
  description:
    "VirtualifyMe is Virtualify Software Consultancy Pvt. Ltd. aka VSC, a software company from Harda, Madhya Pradesh.",
  path: "/about",
  keywords: [
    "About VSC",
    "About VirtualifyMe",
    "Virtualify Software Consultancy Pvt. Ltd.",
    "software company India",
    "product engineering company"
  ]
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema()} />
      <section className="about-hero">
        <div className="home-wrap about-hero-grid">
          <div>
            <h1>A software company from a small town, building for <span>serious markets</span>.</h1>
            <p>
              VirtualifyMe is the public brand of {site.legalName} VSC is rooted in Harda, Madhya Pradesh, but the
              ambition is wider: build products, stabilize platforms, modernize digital systems, and deliver practical
              software for organizations that need work to keep moving.
            </p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="about_whatsapp_click"
                analyticsLabel="About hero"
                analyticsSection="about_hero"
              >
                Talk to VSC <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/work"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="about_work_click"
                analyticsLabel="About hero work"
                analyticsSection="about_hero"
              >
                See work <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="about-mark-panel">
            <Image src="/brand/vsc-logo-reverse.png" alt="VSC mark" width={260} height={260} priority />
            <p>Built from Harda. Designed for organizations that need practical software, not theatre.</p>
          </div>
        </div>
      </section>

      <section className="about-trust">
        <div className="home-wrap">
          <h2>How VSC earns trust through execution.</h2>
          <div className="about-trust-grid">
            <article>
              <span>Product</span>
              <h3>Tassenger is built by VSC.</h3>
              <p>The product shows product thinking, organization setup, accountability flows, and launch ambition.</p>
            </article>
            <article>
              <span>Platforms</span>
              <h3>FMT shows production pressure.</h3>
              <p>Free Malaysia Today is public client-service work across cache, CDN, WordPress, APIs, mobile behavior, and stability.</p>
            </article>
            <article>
              <span>Delivery</span>
              <h3>Depth is brought into the work.</h3>
              <p>VSC can bring specialists into projects where security, infrastructure, data, AI, or platform depth is needed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-roots">
        <div className="home-wrap about-roots-grid">
          <div>
            <h2>Small-town roots can be an advantage.</h2>
            <p>
              VSC understands the reality outside polished metro assumptions: unreliable processes, unclear ownership,
              manual follow-up, uneven digital systems, and teams that still need dependable software. That keeps the
              company close to practical pain, while the delivery standard remains built for wider markets.
            </p>
          </div>
          <div className="about-principles">
            <h3>Operating principles</h3>
            <CheckList
              items={[
                "Start with the business pressure, not a technology fashion",
                "Build the public story around execution, product thinking, and useful outcomes",
                "Use specialists where deeper expertise is required",
                "Keep public pages fast, crawlable, responsive, and maintainable"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="about-company">
        <div className="home-wrap contact-grid">
          <div className="contact-card">
            <h2>Company details</h2>
            <div className="contact-list">
              <span>{site.legalName}</span>
              <span>{site.address}</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.whatsapp}>{site.phone}</a>
            </div>
          </div>
          <div className="contact-card">
            <h2>Talk to VSC</h2>
            <p className="lead">The fastest path is still a direct WhatsApp conversation about the problem.</p>
            <ButtonLink
              href={site.whatsapp}
              external
              analyticsEvent="about_company_whatsapp"
              analyticsLabel="About company card"
              analyticsSection="about_company"
            >
              Message on WhatsApp <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
