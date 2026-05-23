import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand, MetricStrip } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, workHubSchema } from "@/lib/schema";
import { fmtMetrics, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Work | VSC Products and Client Platforms",
  description:
    "VSC work includes Tassenger and Free Malaysia Today across product thinking, platform stability, publishing delivery, and mobile behavior.",
  path: "/work",
  keywords: [
    "VSC work",
    "VirtualifyMe work",
    "Tassenger",
    "Free Malaysia Today",
    "software case study",
    "platform stabilization",
    "product engineering"
  ]
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workHubSchema()} />
      <section className="work-hero">
        <div className="home-wrap work-hero-grid">
          <div>
            <h1>Work that shows how VSC builds under real pressure.</h1>
            <p>
              VSC’s work story starts with two strong signals: Tassenger, a product built by VSC, and Free Malaysia
              Today, a high-traffic news platform VSC supported across stability, delivery, and mobile behavior.
            </p>
            <div className="home-actions">
              <ButtonLink
                href="/tassenger"
                analyticsEvent="work_tassenger_click"
                analyticsLabel="Work hero Tassenger"
                analyticsSection="work_hero"
              >
                Explore Tassenger <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/work/free-malaysia-today"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="work_fmt_click"
                analyticsLabel="Work hero FMT"
                analyticsSection="work_hero"
              >
                Read FMT case study <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="work-proof-stack" aria-label="VSC work anchors">
            <Link href="/tassenger" className="work-anchor-card work-anchor-dark">
              <Image src="/tassenger/icon.png" alt="Tassenger icon" width={72} height={72} priority />
              <div>
                <h2>Tassenger</h2>
                <p>Taskable messaging, organization setup, proof, review, and accountability surfaces.</p>
              </div>
            </Link>
            <Link href="/work/free-malaysia-today" className="work-anchor-card">
              <Image src="/fmt/fmt-logo.svg" alt="Free Malaysia Today logo" width={160} height={72} />
              <div>
                <h2>Free Malaysia Today</h2>
                <p>Cache, CDN, WordPress, API, mobile behavior, and reader-facing stability work.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="work-comparison">
        <div className="home-wrap work-comparison-grid">
          <article>
            <span>VSC product</span>
            <h2>Tassenger</h2>
            <p>
              VSC owns Tassenger. It is the clearest signal of product direction: chat should stay natural, while work
              gets owners, proof, review, and a place outside the message stream.
            </p>
            <Link href="/tassenger" className="card-link">
              Open product page <ArrowIcon />
            </Link>
          </article>
          <article>
            <span>Client platform</span>
            <h2>Free Malaysia Today</h2>
            <p>
              Free Malaysia Today brings the pressure of media, publishing, content, traffic, cache, API, and
              mobile-delivery problems into VSC’s story.
            </p>
            <Link href="/work/free-malaysia-today" className="card-link">
              Read case study <ArrowIcon />
            </Link>
          </article>
        </div>
      </section>

      <section className="work-metrics">
        <div className="home-wrap">
          <h2>FMT scale gives the case study weight.</h2>
          <p>
            The current public audience numbers are useful because they show why stability work matters. Publishing
            platforms do not only need pages to look good; they need delivery paths to keep behaving when the audience
            is large and impatient.
          </p>
          <MetricStrip metrics={fmtMetrics} />
        </div>
      </section>
      <ContactBand
        title="Bring VSC into the work before the system becomes painful."
        text="Start with Tassenger setup, a software build, or a platform that needs stability, visibility, and cleaner delivery behavior."
      />
    </>
  );
}
