import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand, StoreBadges } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { homepageSchema, JsonLd } from "@/lib/schema";
import { industries, services, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "VSC VirtualifyMe | Software Product Engineering & Digital Transformation",
  description:
    "VirtualifyMe (VSC) builds software products, web and mobile platforms, automation systems, modernization programs, and digital services for growing organizations.",
  path: "/",
  imageAlt:
    "VSC VirtualifyMe software company homepage for product engineering, modernization, automation, and digital services.",
  keywords: [
    "software product engineering",
    "digital transformation company",
    "custom software development",
    "web app development",
    "mobile app development",
    "platform modernization",
    "AI automation",
    "cloud DevOps",
    "cybersecurity",
    "quality engineering",
    "data analytics",
    "news media platform services"
  ]
});

const fmtStats = [
  {
    value: "22M+",
    label: "Annual readers listed on FMT's official advertise audience page."
  },
  {
    value: "183M",
    label: "Annual pageviews across a public, high-traffic news platform."
  },
  {
    value: "15.6B",
    label: "Annual social impressions around the FMT news audience."
  },
  {
    value: "2.9B",
    label: "Annual video views, showing the wider publishing surface."
  }
] as const;

const operatingModes = [
  {
    title: "Build",
    text: "Custom software, web apps, mobile apps, product engineering, and serious frontend/backend work."
  },
  {
    title: "Modernize",
    text: "Website revamps, WordPress cleanup, API behavior, legacy flows, and platform restructuring."
  },
  {
    title: "Run",
    text: "Cloud, DevOps, monitoring, release discipline, reliability, and production support."
  },
  {
    title: "Protect",
    text: "Cybersecurity, quality engineering, testing strategy, access control, and safer delivery practices."
  },
  {
    title: "Grow",
    text: "SEO, AEO, GEO, news/media visibility, analytics, and content-led technical improvements."
  },
  {
    title: "Automate",
    text: "AI workflows, dashboards, data analytics, reporting, and internal process automation."
  }
] as const;

const industryAngles = [
  {
    title: "News & media",
    text: "Platforms where publishing speed, cache behavior, mobile delivery, visibility, and reader confidence matter every hour."
  },
  {
    title: "Organizations & teams",
    text: "Departments, owners, vendors, managers, and field teams that need chat, roles, proof, reviews, and responsibility to stay connected."
  },
  {
    title: "Retail & operations",
    text: "Catalogues, orders, inventory, staff workflows, customer communication, and dashboards for teams that cannot pause the business."
  },
  {
    title: "Education, services & local business",
    text: "Training, forms, portals, admin workflows, lead handling, reporting, and practical software for teams outside metro assumptions."
  }
] as const;

function Sparkline({ variant = "up" }: { variant?: "up" | "wide" | "channel" }) {
  const paths = {
    up: "M4 40 C24 36 29 43 45 34 S70 36 84 25 S108 26 122 15 S144 16 156 7",
    wide: "M4 42 C22 39 36 41 50 33 S73 32 88 24 S112 22 126 14 S145 11 156 6",
    channel: "M4 44 C24 43 34 43 48 40 S70 36 86 29 S108 21 124 14 S142 9 156 6"
  };

  return (
    <svg className="home-sparkline" viewBox="0 0 160 52" aria-hidden="true">
      <path className="home-spark-area" d={`${paths[variant]} V52 H4 Z`} />
      <path className="home-spark-line" d={paths[variant]} />
    </svg>
  );
}

export default function HomePage() {
  const featuredServices = services.slice(0, 10);

  return (
    <>
      <JsonLd data={homepageSchema()} />
      <section className="home-hero">
        <div className="home-wrap home-hero-grid">
          <div className="home-hero-copy">
            <h1>
              Software that holds up when <span>real work</span> depends on it.
            </h1>
            <p>
              VirtualifyMe is a software company from Harda, Madhya Pradesh. We build our own product, Tassenger, and
              help organizations plan, build, stabilize, secure, automate, and improve digital systems people actually
              rely on.
            </p>
            <div className="home-actions">
              <ButtonLink href={site.whatsapp} external>
                Talk to VSC
              </ButtonLink>
              <ButtonLink href="/tassenger" variant="secondary" className="home-button-secondary">
                Explore Tassenger
              </ButtonLink>
            </div>
          </div>

          <div className="home-hero-visual" aria-label="Tassenger product plane">
            <div className="home-hero-product-panel">
              <div className="home-product-panel-copy">
                <h2>Tassenger shows what VSC means by serious software.</h2>
                <p>A VSC-owned product where chat becomes accountable work.</p>
              </div>
              <div className="home-hero-phone">
                <Image src="/tassenger/tasks-live.png" alt="Tassenger task command center showing Blocked, Do First, and Needs review states" width={420} height={1012} priority />
              </div>
              <div className="home-responsibility-card">
                <b>From message to accountable work</b>
                <div>
                  <span>Chat</span>
                  <span>Task</span>
                  <span>Proof</span>
                  <span>Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-proof-band" aria-label="VSC signals">
        <div className="home-wrap home-proof-strip">
          <div>
            <b>Owned product</b>
            <span>Tassenger — taskable messaging for people, teams, and organizations.</span>
          </div>
          <div>
            <b>Client platform</b>
            <span>Free Malaysia Today, stabilized across web, app, cache, CDN, and APIs.</span>
          </div>
          <div>
            <b>Operating base</b>
            <span>Built from Harda for teams that need practical software, not theatre.</span>
          </div>
        </div>
      </section>

      <section className="home-tassenger" id="tassenger">
        <div className="home-wrap home-tassenger-grid">
          <div>
            <div className="home-product-lockup">
              <Image src="/tassenger/icon.png" alt="Tassenger" width={56} height={56} />
              <b>Tassenger</b>
            </div>
            <h2>The product that shows how VSC thinks.</h2>
            <p>
              Tassenger keeps chat natural, then gives important work a place to stay visible. It is built for personal
              chats, groups, official departments, organizations, and cross-org spaces where messages cannot be allowed
              to disappear into history.
            </p>
            <div className="home-feature-list">
              <div>
                <b>Taskable chat</b>
                <span>Create accountable tasks from real conversations without breaking the flow of messaging.</span>
              </div>
              <div>
                <b>Org setup</b>
                <span>Prepare departments, roles, permissions, people, and workspaces from the admin side.</span>
              </div>
              <div>
                <b>Follow-through</b>
                <span>Use alerts, proof, blocked states, reviews, and task detail to keep work moving.</span>
              </div>
            </div>
            <div className="home-actions">
              <ButtonLink href="/tassenger">Explore Tassenger</ButtonLink>
              <ButtonLink href="/tassenger/admin" variant="secondary" className="home-button-secondary">
                Web admin setup
              </ButtonLink>
            </div>
            <StoreBadges location="home_tassenger" className="home-store-badges" />
          </div>

          <div className="home-product-stage">
            <div className="home-stage-phone home-stage-chat">
              <Image src="/tassenger/chats-live.png" alt="Tassenger chats with task counts per conversation" width={360} height={779} />
            </div>
            <div className="home-stage-phone home-stage-main">
              <Image src="/tassenger/tasks-live.png" alt="Tassenger task command center" width={360} height={779} />
            </div>
            <div className="home-stage-phone home-stage-task">
              <Image src="/tassenger/task-detail-live.png" alt="Tassenger task detail with owner, proof, and timeline" width={360} height={779} />
            </div>
            <div className="home-stage-note">
              <b>From conversation to responsibility.</b>
              <span>Real Tassenger surfaces: chats, focus tasks, proof, task detail, and accountability states.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-fmt" id="fmt">
        <div className="home-wrap">
          <h2>Free Malaysia Today under publishing pressure.</h2>
          <p className="home-section-copy">
            For FMT, the work was not about a pretty rebuild. It was about making a high-traffic web and app experience
            more dependable across cache, CDN, WordPress, APIs, mobile behavior, and publishing pressure. The scale is
            public: FMT now presents 22M+ annual readers, 183M annual pageviews, 15.6B social impressions, and 2.9B
            video views on its official advertise page.
          </p>

          <div className="home-case-board">
            <div className="home-case-top">
              <div>
                <div className="home-case-kicker">
                  <img src="/fmt/fmt-logo.svg" alt="FMT News" width={91} height={36} />
                  Case study
                </div>
                <h3>Stabilized a prominent news platform where traffic, ads, content, and mobile behavior all had to work together.</h3>
                <p>
                  VSC helped untangle reliability issues across the delivery stack so the reader experience could stay
                  fast, stable, and predictable under real publishing pressure.
                </p>
                <div className="home-case-metrics">
                  {fmtStats.map((metric) => (
                    <div className="home-metric" key={metric.value}>
                      <b>{metric.value}</b>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="home-device-area">
                <div className="home-laptop">
                  <div className="home-browser-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="home-screen">
                    <Image src="/fmt/fmt-live-home.png" alt="FMT homepage" width={900} height={520} priority />
                  </div>
                </div>
                <div className="home-case-phone">
                  <Image src="/fmt/fmt-live-home.png" alt="FMT mobile preview" width={280} height={600} priority />
                </div>
                <div className="home-signal-grid">
                  <div>
                    <b>Audience scale</b>
                    <Sparkline />
                    <span>22M+ annual readers and 183M annual pageviews create real delivery pressure.</span>
                  </div>
                  <div>
                    <b>Social + video reach</b>
                    <Sparkline variant="wide" />
                    <span>15.6B social impressions and 2.9B video views widen the stability surface.</span>
                  </div>
                  <div>
                    <b>Owned channels</b>
                    <Sparkline variant="channel" />
                    <span>5,412 WhatsApp followers and 6.9K Google News followers as current signals.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-case-bottom">
              <div>
                <b>The challenge</b>
                <ul>
                  <li>Traffic spikes and reader pressure</li>
                  <li>WordPress, API, cache, CDN, and mobile behavior</li>
                  <li>Reliability issues that affected confidence</li>
                </ul>
              </div>
              <div>
                <b>What VSC improved</b>
                <ul>
                  <li>Delivery behavior and stability</li>
                  <li>Cache/CDN and platform coordination</li>
                  <li>Database queries, indexing, and custom caching</li>
                </ul>
              </div>
              <div>
                <b>The outcome</b>
                <ul>
                  <li>A calmer, more dependable public reader experience</li>
                  <li>Delivery paths kept aligned across site, APIs, cache, CDN, and mobile</li>
                  <li>Current public scale now sits at 22M+ annual readers and 183M annual pageviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-capability" id="capability">
        <div className="home-wrap">
          <h2>One software partner for the work around a growing organization.</h2>
          <p className="home-section-copy">
            One team to build, stabilize, protect, improve, and automate the software your business runs on —
            so you are not stitching together five vendors around one workflow.
          </p>
          <div className="home-cap-grid">
            <div className="home-core-node">
              <Image
                src="/brand/vscfull-logo-reverse.png"
                alt="VSC VirtualifyMe"
                width={320}
                height={116}
                style={{ width: "230px", height: "auto" }}
              />
            <div>
                <h3>Software breadth with a product builder&apos;s discipline.</h3>
                <p>
                  Services connect to the same thinking behind Tassenger: clarity, ownership, stability, workflow,
                  and practical outcomes.
                </p>
              </div>
            </div>
            <div className="home-cap-list">
              {operatingModes.map((mode) => (
                <Link href="/services" key={mode.title}>
                  <b>{mode.title}</b>
                  <span>{mode.text}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="home-service-rail" aria-label="Featured services">
            {featuredServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-industries">
        <div className="home-wrap home-industries-grid">
          <div>
            <h2>Industries are not boxes. They are operating realities.</h2>
            <p>
              VSC can work across domains because most business software has the same hard center: people, permissions,
              workflows, data, devices, pressure, and trust. Tassenger and FMT give the brand useful depth, while the
              wider service map gives organizations one partner for the software work around growth.
            </p>
            <div className="home-industry-links">
              {industries.map((industry) => (
                <Link href={`/industries/${industry.slug}`} key={industry.slug}>
                  {industry.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="home-industry-cards">
            {industryAngles.map((angle) => (
              <article key={angle.title}>
                <b>{angle.title}</b>
                <p>{angle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-roots">
        <div className="home-wrap home-roots-grid">
          <div>
            <h2>Built from Harda. Designed for wider markets.</h2>
          </div>
          <div>
            <p>
              Harda keeps VSC close to the reality many software companies only read about: smaller teams, mixed
              devices, uneven networks, informal processes, urgent calls, WhatsApp coordination, and people trying to
              keep work moving without perfect systems.
            </p>
            <p>
              That is not a weakness. It is an operating advantage. VSC can build for organizations that need practical,
              durable software because we understand the friction at ground level and still design for serious scale.
            </p>
            <div className="home-actions">
              <ButtonLink href="/about" variant="secondary" className="home-button-secondary">
                About VSC <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/work/free-malaysia-today" variant="secondary" className="home-button-secondary">
                Read the FMT case study <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        title="Talk to VSC before the software becomes urgent."
        text="Message VSC about Tassenger setup, a platform build, a messy existing system, or a stability problem that needs careful hands."
      />
    </>
  );
}
