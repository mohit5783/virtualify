import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { industriesHubSchema, JsonLd } from "@/lib/schema";
import { industries, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Industries VSC Serves | VirtualifyMe",
  description:
    "VSC helps news media, retail, education, logistics, fintech, healthcare, real estate, and public-service teams build better software.",
  path: "/industries",
  keywords: [
    "industry software services",
    "news media software",
    "retail software",
    "education software",
    "logistics software",
    "fintech software",
    "healthcare software",
    "real estate software",
    "public services software"
  ]
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={industriesHubSchema()} />
      <section className="industry-hero">
        <div className="home-wrap industry-hero-grid">
          <div>
            <h1>Industry software for teams that need systems to <span>behave in the real world</span>.</h1>
            <p>
              VSC approaches every industry through operating pressure: traffic, roles, forms, customers, staff,
              visibility, approvals, devices, decisions, and the daily systems that have to keep working.
            </p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="industries_inquiry_click"
                analyticsLabel="Industries hero"
                analyticsSection="industries_hero"
              >
                Discuss your industry <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="industries_services_click"
                analyticsLabel="Industries hero services"
                analyticsSection="industries_hero"
              >
                See service map <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="industry-pressure-board">
            <span>Traffic</span>
            <span>Teams</span>
            <span>Customers</span>
            <span>Approvals</span>
            <span>Search</span>
            <span>Mobile</span>
            <span>Security</span>
            <span>Dashboards</span>
          </div>
        </div>
      </section>

      <section className="industry-market-map">
        <div className="home-wrap">
          <h2>Software shaped around industry pressure.</h2>
          <p>
            Every market has its own rhythm. VSC starts from that rhythm, then brings the right mix of product
            engineering, modernization, automation, reliability, security, visibility, and delivery support.
          </p>
          <div className="industry-grid">
          {industries.map((industry) => (
            <Link
              href={`/industries/${industry.slug}`}
              className="industry-card"
              key={industry.slug}
              data-analytics-event="industry_card_click"
              data-analytics-label={industry.title}
              data-analytics-section="industry_market_map"
            >
              <h3>{industry.title}</h3>
              <p>{industry.short}</p>
              <span className="card-link">Explore industry <ArrowIcon /></span>
            </Link>
          ))}
          </div>
        </div>
      </section>
      <section className="industry-confidence">
        <div className="home-wrap industry-confidence-grid">
          <article>
            <b>News media</b>
            <h2>News platforms need delivery reliability.</h2>
            <p>VSC understands the pressure around cache, CDN, WordPress, APIs, mobile behavior, visibility, and high-traffic publishing flows.</p>
            <Link href="/work/free-malaysia-today">Open FMT case study <ArrowIcon /></Link>
          </article>
          <article>
            <b>Organizations</b>
            <h2>Organizations need responsibility to stay visible.</h2>
            <p>Tassenger brings VSC close to the daily reality of roles, departments, permissions, reviews, task ownership, and accountable work.</p>
            <Link href="/tassenger">Explore Tassenger <ArrowIcon /></Link>
          </article>
        </div>
      </section>
      <ContactBand title="Bring VSC into your industry problem." text="Start with the workflow, platform, visibility, reliability, or automation problem you need solved." />
    </>
  );
}
