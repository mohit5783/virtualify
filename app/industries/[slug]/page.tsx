import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Breadcrumbs, ButtonLink, CheckList, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { industryPageSchema, JsonLd } from "@/lib/schema";
import { findIndustry, findService, industries, site, type Service } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.seoTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    keywords: [
      industry.title,
      `${industry.title} software services`,
      "VSC",
      "VirtualifyMe",
      ...industry.priorities
    ]
  });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) notFound();
  const relevantServices = industry.relevantServices
    .map(findService)
    .filter((service): service is Service => Boolean(service));

  return (
    <>
      <JsonLd data={industryPageSchema(industry)} />
      <section className="industry-detail-hero">
        <div className="home-wrap industry-detail-grid">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: industry.title, href: `/industries/${industry.slug}` }
              ]}
            />
            <h1>{industry.title}</h1>
            <p>{industry.summary}</p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="industry_detail_inquiry"
                analyticsLabel={industry.title}
                analyticsSection="industry_detail_hero"
              >
                Discuss this market <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="industry_detail_services_click"
                analyticsLabel={industry.title}
                analyticsSection="industry_detail_hero"
              >
                Match services <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="industry-priority-panel">
            <h2>Primary priorities</h2>
            <CheckList items={industry.priorities} />
          </div>
        </div>
      </section>

      <section className="industry-service-path">
        <div className="home-wrap">
          {industry.proof && <p className="notice">{industry.proof}</p>}
          <h2>Service paths for {industry.title.toLowerCase()} teams.</h2>
          <div className="industry-service-grid">
            {relevantServices.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                className="service-card"
                key={service.slug}
                data-analytics-event="industry_detail_service_click"
                data-analytics-label={`${industry.title}: ${service.title}`}
                data-analytics-section="industry_service_path"
              >
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="card-link">Service page <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="industry-operating-lens">
        <div className="home-wrap industry-operating-grid">
          <article>
            <span>01</span>
            <h2>Start with pressure.</h2>
            <p>VSC looks at where the current system loses speed, trust, visibility, or ownership.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Shape the software.</h2>
            <p>The answer may be a web app, mobile flow, admin tool, dashboard, automation, revamp, or stabilization sprint.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Bring depth where needed.</h2>
            <p>Security, infrastructure, data, AI, and specialist work can be added around the project when the operating problem demands it.</p>
          </article>
        </div>
      </section>
      <ContactBand title={`Build for ${industry.title.toLowerCase()} with VSC.`} text="Discuss your platform, workflow, product, or visibility challenge." />
    </>
  );
}
