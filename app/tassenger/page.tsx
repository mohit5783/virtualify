import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, tassengerPageSchema } from "@/lib/schema";
import { site, tassengerFaqs } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tassenger | Taskable Chat for Personal and Official Work",
  description:
    "Tassenger is taskable chat for personal groups and official workspaces. Turn chats into tasks with personal tasks, official accountability, proof, review, and WebApp setup.",
  path: "/tassenger",
  image: "/tassenger/opengraph-image",
  imageAlt: "Tassenger product page showing taskable chat, Tasks above messages, WebApp setup, proof, review, and official workspace screens.",
  keywords: [
    "Tassenger",
    "taskable chat",
    "taskable messaging",
    "accountable chat app",
    "message to task app",
    "personal group tasks",
    "official workspace chat",
    "team accountability software",
    "organization task management",
    "proof submission app",
    "task review workflow",
    "recurring tasks",
    "VSC product"
  ]
});

const setupHelpUrl =
  "https://api.whatsapp.com/send?phone=919826065894&text=Hi%20VSC%2C%20I%20want%20help%20setting%20up%20Tassenger%20for%20my%20organization.";

const androidEarlyAccessUrl = site.tassengerAndroidEarlyAccessUrl;
const androidTesterGroupUrl = site.tassengerTesterGroupUrl;

const productStats = [
  {
    value: "1 tap",
    label: "Turn the right message into a Task when responsibility needs a place to live."
  },
  {
    value: "2 modes",
    label: "Personal stays light. Official adds policy, proof, review, audit, and reports."
  },
  {
    value: "15 min",
    label: "Setup target for normal owners and admins starting from the WebApp."
  },
  {
    value: "V1",
    label: "Personal groups plus Core Official workspaces, focused on launch-ready usefulness."
  }
] as const;

const features = [
  {
    label: "Messaging quality",
    title: "Chat still feels familiar.",
    text: "One-to-one chats, free groups, official groups, media, notifications, read receipts, and search foundations stay close to how people already coordinate."
  },
  {
    label: "Message to Task",
    title: "Accountability starts from exact context.",
    text: "A user turns the right message into a Task. No vague reminder, no silent decision, no responsibility detached from the original conversation."
  },
  {
    label: "Task command center",
    title: "Blocked, Do First, Review, In progress.",
    text: "Tasks are organized by urgency and state so the next action is visible before another message pushes it away."
  },
  {
    label: "Official work",
    title: "Due date, queue, priority, proof.",
    text: "Official Tasks support explicit responsibility, priority, queueing, blockers, due changes, proof, reviewer flow, and audit-aware history."
  },
  {
    label: "Recurrence",
    title: "Routine work becomes dependable.",
    text: "Daily, weekly, monthly, quarterly, half-yearly, yearly, and custom intervals keep repeating responsibilities from becoming memory games."
  },
  {
    label: "Reports and scoring",
    title: "Owners see health, not random chat.",
    text: "Workload, completion, ignored work, blockers, proof outcomes, queue discipline, and score signals help owners understand where work stands."
  }
] as const;

const personalMode = [
  "Create Tasks without forcing every small responsibility into a corporate process.",
  "Receiver can mark done; creator can reopen when the work is not actually finished.",
  "Decline and reassignment support natural negotiation.",
  "Free group Tasks can support first-claim ownership for anyone-can-do work.",
  "No proof, no score, no approval chain when the context should stay light."
] as const;

const officialMode = [
  "Due date, priority, status, and responsible person make ownership explicit.",
  "Queue, blockers, due extension, and change requests keep operational work traceable.",
  "Proof and review support work that needs evidence before it is accepted.",
  "Reports, scoring, audit, roles, groups, and policies keep the system governed.",
  "WebApp setup gives organization owners control before daily work starts."
] as const;

const webappTiles = [
  ["Organization", "Profile, logo, country, timezone, business template, and activation state."],
  ["People", "Phone, role, title, employee or guest state, invitations, and access paths."],
  ["Org chart", "Boss chain and authority that can support escalation and task conflicts."],
  ["Groups", "Official groups, members, guests, responsible person, and work boundaries."],
  ["Calendar", "Working days, holidays, end-of-day, and non-working-day behavior."],
  ["Reports", "Aggregate health, workload, scoring, and audit-safe drill-down."]
] as const;

const useCases = [
  ["Hardware shops", "Orders, vendor follow-ups, counter tasks, delivery proof, and stock-related responsibility."],
  ["Boutiques", "Alterations, pickup dates, payment checks, staff assignment, and customer follow-through."],
  ["Schools and colleges", "Departments, events, office work, parent communication, and repeated administrative follow-ups."],
  ["Agriculture teams", "Field routines, supply checks, seasonal work, worker coordination, and evidence from the ground."],
  ["Wedding venues", "Vendor timelines, proof photos, recurring preparation, review steps, and event-day readiness."],
  ["Studios and agencies", "Client onboarding, deliverables, reviews, launch boards, blockers, and creative operations."],
  ["Finance teams", "Invoices, payouts, receipt matching, due work, reviewer approval, and audit-friendly evidence."],
  ["Families", "Errands, trips, chores, reminders, shared decisions, and real-life work that starts as a message."]
] as const;

const legalLinks = [
  ["Privacy", "/tassenger/privacy"],
  ["Terms", "/tassenger/terms"],
  ["Support", "/tassenger/support"],
  ["Delete account", "/tassenger/delete-account"]
] as const;

const phoneScreens = [
  {
    src: "/tassenger/store/iphone-chats.jpg",
    alt: "Tassenger iPhone chats with tasks above messages",
    title: "Chats with Tasks above messages.",
    text: "Conversations stay familiar while work created from them stays visible.",
    width: 1284,
    height: 2778
  },
  {
    src: "/tassenger/store/iphone-tasks.jpg",
    alt: "Tassenger iPhone task command center",
    title: "Personal tasks. Official accountability.",
    text: "Blocked, Do First, Review, and In progress states make attention clear.",
    width: 1284,
    height: 2778
  },
  {
    src: "/tassenger/store/iphone-task-detail.jpg",
    alt: "Tassenger iPhone task detail with accountability context",
    title: "Turn chats into tasks.",
    text: "Task detail keeps owner, status, context, proof, and review in one place.",
    width: 1284,
    height: 2778
  }
] as const;

const tabletScreens = [
  {
    src: "/tassenger/store/ipad-studio-crew.jpg",
    alt: "Tassenger iPad workspace conversation",
    title: "Workspace conversations.",
    text: "Tablet layouts give teams more room for chat, work context, and shared responsibility.",
    width: 2732,
    height: 2048
  },
  {
    src: "/tassenger/store/ipad-tasks.jpg",
    alt: "Tassenger iPad tasks overview",
    title: "Task command center.",
    text: "A wider task surface helps official work stay readable across queues and states.",
    width: 2732,
    height: 2048
  },
  {
    src: "/tassenger/store/ipad-task-detail.jpg",
    alt: "Tassenger iPad task detail",
    title: "Detail that keeps work accountable.",
    text: "The task view keeps decisions, messages, and next steps from getting buried.",
    width: 2732,
    height: 2048
  }
] as const;

function GooglePlayMark() {
  return (
    <svg viewBox="0 0 32 36" aria-hidden="true">
      <path d="M3 2.4 19.2 18 3 33.6Z" fill="#34a853" />
      <path d="m19.2 18 5.3-5.1 6.4 3.7c1.5.9 1.5 2.9 0 3.8l-6.4 3.7Z" fill="#fbbc04" />
      <path d="M3 2.4 24.5 12.9 19.2 18Z" fill="#4285f4" />
      <path d="m3 33.6 16.2-15.6 5.3 5.1Z" fill="#ea4335" />
    </svg>
  );
}

function IosMark() {
  return <span className="tassenger-ios-mark">iOS</span>;
}

function StoreBadgeLink({
  href,
  eyebrow,
  label,
  note,
  location
}: {
  href: string;
  eyebrow: string;
  label: string;
  note?: string;
  location: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tassenger-store-badge"
      data-analytics-event="tassenger_android_early_access_click"
      data-analytics-label={label}
      data-analytics-section={location}
      aria-label={`${eyebrow} on ${label}`}
    >
      <span className="tassenger-store-mark">
        <GooglePlayMark />
      </span>
      <span>
        <small>{eyebrow}</small>
        <b>{label}</b>
        {note ? <em>{note}</em> : null}
      </span>
    </Link>
  );
}

function StoreBadgeSoon() {
  return (
    <span className="tassenger-store-badge tassenger-store-badge-soon" role="status" aria-label="iOS available soon">
      <span className="tassenger-store-mark">
        <IosMark />
      </span>
      <span>
        <small>iOS available soon</small>
        <b>App Store</b>
        <em>Review in progress</em>
      </span>
    </span>
  );
}

function TesterGroupLink({ location }: { location: string }) {
  return (
    <ButtonLink
      href={androidTesterGroupUrl}
      external
      variant="secondary"
      analyticsEvent="tassenger_tester_group_click"
      analyticsLabel={`${location} tester group`}
      analyticsSection={location}
    >
      Join tester group <ArrowIcon />
    </ButtonLink>
  );
}

export default function TassengerPage() {
  return (
    <>
      <JsonLd data={tassengerPageSchema()} />
      <section className="tassenger-hero" id="tassenger-hero">
        <div className="tassenger-wrap tassenger-hero-grid">
          <div className="tassenger-hero-copy">
            <div className="tassenger-brand-line">
              <Image src="/tassenger/icon.png" alt="Tassenger app icon" width={64} height={64} priority />
              <span>
                Tassenger
                <small>by VSC VirtualifyMe</small>
              </span>
            </div>
            <h1>Taskable chat for personal groups and official workspaces.</h1>
            <p>
              Turn chats into tasks. Personal tasks. Official accountability. Tassenger keeps messaging natural, then
              gives important work a visible place with owner, status, proof, review, and history.
            </p>
            <div className="tassenger-store-actions" aria-label="Tassenger app download links">
              <StoreBadgeLink
                href={androidEarlyAccessUrl}
                eyebrow="Join Android Early Access"
                label="Google Play"
                note="Early access"
                location="tassenger_hero"
              />
              <StoreBadgeSoon />
            </div>
            <div className="tassenger-actions">
              <TesterGroupLink location="tassenger_hero" />
              <ButtonLink
                href="/tassenger/admin"
                analyticsEvent="tassenger_admin_click"
                analyticsLabel="Hero WebApp login"
                analyticsSection="tassenger_hero"
                variant="secondary"
              >
                Open WebApp login <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href={setupHelpUrl}
                external
                variant="secondary"
                analyticsEvent="tassenger_setup_help_click"
                analyticsLabel="Hero setup help"
                analyticsSection="tassenger_hero"
              >
                Setup help <ArrowIcon />
              </ButtonLink>
            </div>
            <div className="tassenger-store-status" aria-label="Tassenger availability">
              <Link
                href={androidEarlyAccessUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="tassenger_android_early_access_click"
                data-analytics-label="Hero early access status"
                data-analytics-section="tassenger_hero"
              >
                Android early access open
              </Link>
              <Link
                href={androidTesterGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="tassenger_tester_group_click"
                data-analytics-label="Hero tester group status"
                data-analytics-section="tassenger_hero"
              >
                Tester group open
              </Link>
              <span>iOS App Store review in progress</span>
            </div>
          </div>

          <div className="tassenger-hero-stage" aria-label="Tassenger product screenshots">
            <div className="tassenger-stage-card">
              <div className="tassenger-tablet-frame">
                <Image
                  src="/tassenger/store/ipad-studio-crew.jpg"
                  alt="Tassenger iPad workspace conversation"
                  width={2732}
                  height={2048}
                  priority
                  sizes="(max-width: 760px) 92vw, 48vw"
                />
              </div>
              <div className="tassenger-phone tassenger-phone-main">
                <Image
                  src="/tassenger/store/iphone-chats.jpg"
                  alt="Tassenger iPhone chats with tasks above messages"
                  width={1284}
                  height={2778}
                  priority
                  sizes="(max-width: 760px) 52vw, 260px"
                />
              </div>
              <div className="tassenger-phone tassenger-phone-dark">
                <Image
                  src="/tassenger/store/iphone-tasks.jpg"
                  alt="Tassenger iPhone task command center with blocked, Do First and review states"
                  width={1284}
                  height={2778}
                  loading="eager"
                  sizes="(max-width: 760px) 42vw, 220px"
                />
              </div>
              <div className="tassenger-floating-note">
                <b>Turn chats into tasks.</b>
                <span>Owner, context, status, proof, review, and history stay findable after the chat moves on.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tassenger-proof-strip" id="tassenger-positioning" aria-label="Tassenger positioning">
        <div className="tassenger-wrap tassenger-stat-grid">
          {productStats.map((stat) => (
            <article key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="tassenger-product-story" id="product">
        <div className="tassenger-wrap tassenger-story-grid">
          <div>
            <h2>Chat is where work starts. Tassenger is where it stays accountable.</h2>
            <p>
              People already run shops, schools, farms, events, teams, departments, vendors, and families in chat.
              Tassenger keeps the conversation natural, then gives commitments a real place to live so they do not get
              buried.
            </p>
            <ul className="tassenger-check-list">
              <li>Personal chats, free groups, official groups, media, read receipts, push, and search foundations.</li>
              <li>Tasks stay visible with due today, overdue, blocked, review, ignored, and progress signals.</li>
              <li>Important work keeps the original message context, owner, status, proof, and review trail.</li>
            </ul>
          </div>
          <div className="tassenger-story-phone">
            <Image
              src="/tassenger/chats.png"
              alt="Tassenger chats list with personal and official task signals"
              width={1080}
              height={2400}
              loading="lazy"
              sizes="(max-width: 760px) 78vw, 320px"
            />
          </div>
        </div>
      </section>

      <section className="tassenger-feature-system" id="features">
        <div className="tassenger-wrap">
          <div className="tassenger-section-head">
            <h2>Every feature is built around one thing: visible responsibility.</h2>
            <p>
              Tassenger is not a chat app with a checklist bolted on. The Task is the core object across Personal and
              Official work.
            </p>
          </div>
          <div className="tassenger-feature-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <span>{feature.label}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tassenger-modes" id="modes">
        <div className="tassenger-wrap">
          <div className="tassenger-section-head tassenger-section-head-center">
            <h2>Personal enough for home. Serious enough for operations.</h2>
            <p>One Task object. Two behaviors. That is the product discipline.</p>
          </div>
          <div className="tassenger-mode-grid">
            <article>
              <h3>Personal mode</h3>
              <p>For family responsibilities, errands, trips, friends, and lightweight groups.</p>
              <ul>
                {personalMode.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Official mode</h3>
              <p>For SMB teams, departments, vendors, guest collaborators, and work that needs a real record.</p>
              <ul>
                {officialMode.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="tassenger-webapp" id="webapp">
        <div className="tassenger-wrap tassenger-webapp-grid">
          <div>
            <h2>The WebApp is the Official control room.</h2>
            <p>
              Mobile is where daily work happens. The WebApp is where an organization prepares people, groups, org
              chart, calendar, policy defaults, activation, reports, and audit-aware administration.
            </p>
            <div className="tassenger-actions">
              <ButtonLink
                href="/tassenger/admin"
                analyticsEvent="tassenger_admin_click"
                analyticsLabel="WebApp section login"
                analyticsSection="tassenger_webapp"
              >
                Open WebApp login <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/tassenger/support"
                variant="secondary"
                analyticsEvent="tassenger_support_click"
                analyticsLabel="WebApp section support"
                analyticsSection="tassenger_webapp"
              >
                Get support <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="tassenger-webapp-panel" aria-label="Tassenger WebApp setup capabilities">
            <div className="tassenger-webapp-top">
              <div>
                <strong>Tassenger WebApp</strong>
                <span>Official setup before activation.</span>
              </div>
              <Link
                href={site.tassengerAdminUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="tassenger_webapp_login_click"
                data-analytics-label="WebApp panel login"
                data-analytics-section="tassenger_webapp"
              >
                Login
              </Link>
            </div>
            <div className="tassenger-webapp-tiles">
              {webappTiles.map(([title, text]) => (
                <article key={title}>
                  <b>{title}</b>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tassenger-screens" id="screens">
        <div className="tassenger-wrap">
          <div className="tassenger-section-head">
            <h2>Current product screens, ready for launch.</h2>
            <p>
              Phone and tablet screenshots show the actual product surfaces: chats, tasks, task detail, and wider
              workspace views.
            </p>
          </div>
          <div className="tassenger-store-screens">
            <div className="tassenger-device-row tassenger-phone-row" aria-label="Tassenger phone screenshots">
              {phoneScreens.map((screen) => (
                <article className="tassenger-device-card tassenger-device-phone" key={screen.src}>
                  <div>
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      loading="lazy"
                      sizes="(max-width: 760px) 78vw, 290px"
                    />
                  </div>
                  <h3>{screen.title}</h3>
                  <p>{screen.text}</p>
                </article>
              ))}
            </div>
            <div className="tassenger-device-row tassenger-tablet-row" aria-label="Tassenger tablet screenshots">
              {tabletScreens.map((screen) => (
                <article className="tassenger-device-card tassenger-device-tablet" key={screen.src}>
                  <div>
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      loading="lazy"
                      sizes="(max-width: 760px) 88vw, (max-width: 1080px) 44vw, 360px"
                    />
                  </div>
                  <h3>{screen.title}</h3>
                  <p>{screen.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tassenger-use-cases" id="use-cases">
        <div className="tassenger-wrap">
          <div className="tassenger-section-head tassenger-section-head-center">
            <h2>Made for the places where work actually happens.</h2>
            <p>
              Tassenger is for people who already coordinate through messages and now need the work to become visible,
              assigned, reviewed, and finished.
            </p>
          </div>
          <div className="tassenger-use-case-grid">
            {useCases.map(([title, text]) => (
              <article key={title}>
                <b>{title}</b>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tassenger-privacy" id="trust">
        <div className="tassenger-wrap tassenger-privacy-grid">
          <div>
            <h2>Privacy and control are part of the product.</h2>
            <p>
              Personal and Official data stay separated. Group membership is the visibility boundary. Organization
              admins configure the ground rules without turning every private conversation into an open book. Support
              paths are scoped, deliberate, and documented.
            </p>
          </div>
          <div className="tassenger-legal-card">
            <span>Public review paths</span>
            <h3>Legal, support, and account deletion links are live.</h3>
            <div>
              {legalLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  data-analytics-event="tassenger_legal_click"
                  data-analytics-label={label}
                  data-analytics-section="tassenger_trust"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tassenger-faq" id="faq">
        <div className="tassenger-wrap tassenger-faq-grid">
          <div>
            <h2>Questions teams ask before trying Tassenger.</h2>
            <p>
              The simplest way to understand Tassenger is to start with one real conversation, turn one important
              message into a Task, and see whether the responsibility stays visible.
            </p>
          </div>
          <div className="tassenger-faq-list">
            {tassengerFaqs.map((faq) => (
              <details
                key={faq.question}
                data-analytics-event="tassenger_faq_toggle"
                data-analytics-label={faq.question}
                data-analytics-section="tassenger_faq"
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tassenger-final" id="download">
        <div className="tassenger-wrap tassenger-final-grid">
          <div>
            <Image src="/tassenger/icon.png" alt="Tassenger app icon" width={68} height={68} loading="lazy" />
            <h2>Start with one real conversation. Turn one message into work.</h2>
            <p>
              Join Android early access, enter the tester group, open the WebApp for organization setup, or ask VSC to
              walk your team through the first workspace.
            </p>
          </div>
          <div className="tassenger-final-actions">
            <div className="tassenger-store-actions" aria-label="Tassenger final app download links">
              <StoreBadgeLink
                href={androidEarlyAccessUrl}
                eyebrow="Join Android Early Access"
                label="Google Play"
                note="Early access"
                location="tassenger_final"
              />
              <StoreBadgeSoon />
            </div>
            <TesterGroupLink location="tassenger_final" />
            <ButtonLink
              href="/tassenger/admin"
              analyticsEvent="tassenger_admin_click"
              analyticsLabel="Final WebApp login"
              analyticsSection="tassenger_final"
            >
              Open WebApp login <ArrowIcon />
            </ButtonLink>
            <ButtonLink
              href={setupHelpUrl}
              external
              variant="secondary"
              analyticsEvent="tassenger_setup_help_click"
              analyticsLabel="Final setup help"
              analyticsSection="tassenger_final"
            >
              Ask VSC for setup help <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
