import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import {
  ButtonLink,
  ContactBand,
  MetricStrip
} from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { fmtCaseStudyPageSchema, JsonLd } from "@/lib/schema";
import { fmtMetrics, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Free Malaysia Today Case Study | VSC Stabilization Work",
  description:
    "VSC stabilized FMT across cache, CDN, WordPress, APIs, mobile behavior, and high-traffic reader experience.",
  path: "/work/free-malaysia-today",
  image: "/work/free-malaysia-today/opengraph-image",
  type: "article",
  keywords: [
    "Free Malaysia Today case study",
    "FMT stabilization",
    "news media platform",
    "WordPress performance",
    "CDN cache",
    "API stability",
    "mobile behavior",
    "VSC"
  ]
});

export default function FmtCaseStudyPage() {
  const chain = ["Reader", "CDN", "Cache", "WordPress", "API", "Mobile"];
  const improvements = [
    "Delivery behavior and cache confidence",
    "CDN/cache and WordPress coordination",
    "API and mobile experience consistency",
    "Database queries, indexing, and custom caching",
    "Reader-facing performance under publishing pressure",
    "Clearer monitoring and operational visibility"
  ];

  return (
    <>
      <JsonLd data={fmtCaseStudyPageSchema()} />
      <section className="fmt-case-hero">
        <div className="home-wrap fmt-case-grid">
          <div>
            <Image src="/fmt/fmt-logo.svg" alt="Free Malaysia Today logo" width={170} height={76} className="fmt-logo-mark" priority />
            <h1>Stabilized a high-traffic news platform where delivery had to hold together.</h1>
            <p>
              VSC worked across cache, CDN, WordPress, APIs, mobile behavior, database queries, indexing, and custom
              caching so the reader-facing experience could become more dependable under publishing pressure.
            </p>
            <p className="fmt-disclaimer">Client platform story across web, app, cache, CDN, WordPress, APIs, and publishing reliability.</p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="fmt_stabilization_inquiry"
                analyticsLabel="FMT hero discuss stabilization"
                analyticsSection="fmt_hero"
              >
                Discuss stabilization <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/services/news-media-visibility"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="fmt_news_media_service_click"
                analyticsLabel="FMT hero news media services"
                analyticsSection="fmt_hero"
              >
                News media services <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="fmt-device-proof" aria-label="Free Malaysia Today platform preview">
            <div className="fmt-device-laptop">
              <div className="home-browser-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="home-screen">
                <Image src="/fmt/fmt-live-home.png" alt="FMT homepage preview" width={900} height={520} priority />
              </div>
            </div>
            <div className="fmt-device-phone">
              <Image src="/fmt/fmt-live-home.png" alt="FMT mobile homepage preview" width={280} height={600} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="fmt-scale">
        <div className="home-wrap">
          <h2>Audience scale turns small delivery issues into business pressure.</h2>
          <p>
            FMT’s current public audience figures show why the work mattered: high traffic, large social reach, video
            surfaces, owned channels, mobile readers, ads, and publishing workflows all depend on the same delivery
            chain staying predictable.
          </p>
          <MetricStrip metrics={fmtMetrics} />
        </div>
      </section>

      <section className="fmt-delivery">
        <div className="home-wrap fmt-delivery-grid">
          <div>
            <h2>Reader to mobile stability is a chain, not a card.</h2>
            <p>
              The work sat across layers that affect each other. When a publisher is busy, the platform has to coordinate
              cache behavior, origin behavior, APIs, mobile clients, and reader-facing pages without turning every spike
              into a firefight.
            </p>
          </div>
          <div className="fmt-chain-board">
            <div className="fmt-chain-steps">
              {chain.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="fmt-chain-lines">
              <p>CDN/cache coordination for public traffic</p>
              <p>WordPress and API paths tuned for delivery behavior</p>
              <p>Mobile experience kept aligned with reader-facing stability</p>
              <p>Database queries, indexing, and custom caching improved where needed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fmt-improvements">
        <div className="home-wrap fmt-improvements-grid">
          <div>
            <h2>What VSC improved</h2>
            <p>
              The value was not a cosmetic rebuild. It was the quieter work that lets a prominent publisher keep
              operating with fewer surprises.
            </p>
            <div className="fmt-improvement-summary">
              <span>Fewer delivery surprises</span>
              <span>Clearer stack behavior</span>
              <span>Better confidence during publishing pressure</span>
            </div>
          </div>
          <div className="fmt-improvement-list">
            {improvements.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        title="Let’s make your platform calmer under pressure."
        text="Talk to VSC about cache behavior, performance, stability, mobile delivery, WordPress, APIs, and visibility goals."
      />
    </>
  );
}
