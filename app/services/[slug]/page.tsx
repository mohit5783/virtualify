import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Breadcrumbs, ButtonLink, CheckList, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, servicePageSchema } from "@/lib/schema";
import { findService, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      `${service.group} services`,
      "VSC",
      "VirtualifyMe",
      "software development company",
      ...service.industries.map((industry) => `${industry} software`)
    ]
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={servicePageSchema(service)} />
      <section className="service-detail-hero">
        <div className="home-wrap service-detail-grid">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.title, href: `/services/${service.slug}` }
              ]}
            />
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="service_detail_inquiry"
                analyticsLabel={service.title}
                analyticsSection="service_detail_hero"
              >
                Discuss this service <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/work"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="service_detail_work_click"
                analyticsLabel={service.title}
                analyticsSection="service_detail_hero"
              >
                See relevant work <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="service-detail-panel">
            <span>{service.group}</span>
            <h2>Where this service creates value</h2>
            <p>
              This service turns unclear digital work into a clearer delivery path: what needs to be built, improved,
              stabilized, measured, protected, or automated so the organization can move with less friction.
            </p>
          </div>
        </div>
      </section>
      <section className="service-detail-body">
        <div className="home-wrap">
          <div className="service-detail-cards">
            <article>
              <h2>Outcomes</h2>
              <CheckList items={service.outcomes} />
            </article>
            <article>
              <h2>Typical deliverables</h2>
              <CheckList items={service.deliverables} />
            </article>
          </div>
        </div>
      </section>
      <section className="service-fit">
        <div className="home-wrap service-fit-grid">
          <div>
            <h2>Where it fits</h2>
            <p className="lead">
              VSC positions this work around practical business pressure: reliability, delivery speed, user trust,
              operations, visibility, and maintainable software.
            </p>
          </div>
          <div className="service-fit-tags">
            {service.industries.map((industry) => (
              <span className="pill" key={industry}>{industry}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="service-proof">
        <div className="home-wrap proof-tiles">
          <Link
            href="/tassenger"
            className="proof-tile proof-tile-dark"
            data-analytics-event="service_detail_tassenger_proof_click"
            data-analytics-label={service.title}
            data-analytics-section="service_detail_proof"
          >
            <img src="/tassenger/icon.png" alt="Tassenger icon" width={82} height={82} />
            <div>
              <h2>Tassenger</h2>
              <p>A VSC product shaped around taskable messaging, workflow accountability, organization setup, and follow-through.</p>
            </div>
          </Link>
          <Link
            href="/work/free-malaysia-today"
            className="proof-tile"
            data-analytics-event="service_detail_fmt_proof_click"
            data-analytics-label={service.title}
            data-analytics-section="service_detail_proof"
          >
            <img src="/fmt/fmt-logo.svg" alt="Free Malaysia Today logo" width={160} height={72} />
            <div>
              <h2>FMT</h2>
              <p>A high-traffic media platform story across stability, delivery behavior, WordPress, APIs, mobile behavior, and growth pressure.</p>
            </div>
          </Link>
        </div>
      </section>
      <ContactBand
        title={`Talk to VSC about ${service.title.toLowerCase()}.`}
        text={`Message VSC on WhatsApp at ${site.phone} or email ${site.email}.`}
      />
    </>
  );
}
