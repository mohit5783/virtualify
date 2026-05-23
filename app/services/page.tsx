import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, servicesHubSchema } from "@/lib/schema";
import { services, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Software Development Services | VSC VirtualifyMe",
  description:
    "VSC provides custom software, web, mobile, cloud, cybersecurity, testing, AI, analytics, modernization, and visibility services.",
  path: "/services",
  keywords: [
    "software development services",
    "custom software development",
    "web app development",
    "mobile app development",
    "cloud DevOps",
    "cybersecurity services",
    "quality engineering testing",
    "AI automation",
    "data analytics",
    "SEO AEO GEO services"
  ]
});

export default function ServicesPage() {
  const groups = ["Build", "Stabilize", "Secure", "Grow", "Automate"].map((group) => ({
    group,
    items: services.filter((service) => service.group === group)
  }));

  return (
    <>
      <JsonLd data={servicesHubSchema()} />
      <section className="service-hero">
        <div className="home-wrap service-hero-grid">
          <div>
            <h1>One software partner for build, stability, security, growth, and automation.</h1>
            <p>
              VSC plans, builds, modernizes, stabilizes, secures, improves, and automates digital systems for
              organizations that need practical technology work delivered with ownership.
            </p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="services_project_inquiry"
                analyticsLabel="Services hero start project"
                analyticsSection="services_hero"
              >
                Start a project <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/work"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="services_work_click"
                analyticsLabel="Services hero work"
                analyticsSection="services_hero"
              >
                See work <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="service-command-map" aria-label="VSC service operating map">
            {groups.map((column) => (
              <div key={column.group}>
                <b>{column.group}</b>
                <span>{column.items.map((service) => service.title).join(" / ")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-operating-system">
        <div className="home-wrap">
          <h2>Service areas as an operating system, not a random menu.</h2>
          <div className="service-group-grid">
            {groups.map((column) => (
              <article key={column.group}>
                <h3>{column.group}</h3>
                <div>
                  {column.items.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug}>
                      <span>{service.title}</span>
                      <small>{service.short}</small>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-catalog">
        <div className="home-wrap">
          <h2>From product builds to platform stability, VSC covers the work around a growing organization.</h2>
          <p>
            Bring one problem or a full roadmap. VSC shapes the build, modernization, security, automation,
            visibility, and operating support needed to move it forward.
          </p>
          <div className="service-catalog-grid">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                className="service-card"
                key={service.slug}
                data-analytics-event="service_card_click"
                data-analytics-label={service.title}
                data-analytics-section="service_catalog"
              >
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="card-link">Explore service <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBand title="Start a project with VSC." text="Tell us what is slow, stuck, unstable, exposed, manual, or ready to become a product." />
    </>
  );
}
