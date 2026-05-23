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
    "Tassenger is taskable chat for personal groups and official workspaces. Turn important messages into visible Tasks with owner, proof, review, recurrence, reports, and WebApp setup.",
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

function AppStoreSoon() {
  return <span className="tassenger-store-soon">App Store coming soon</span>;
}

function PlayStoreLink({ location }: { location: string }) {
  return (
    <ButtonLink
      href={site.playStoreUrl}
      external
      variant="dark"
      analyticsEvent="tassenger_play_store_click"
      analyticsLabel={`${location} Google Play`}
      analyticsSection={location}
    >
      Get Android app <ArrowIcon />
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
            <h1>Chat can stay natural. Work can stay accountable.</h1>
            <p>
              Tassenger is taskable chat for personal groups and official workspaces. Send messages, create Tasks from
              the right message, assign responsibility, track proof, review, recurrence, queues, blockers, and reports
              without letting work disappear inside a conversation.
            </p>
            <div className="tassenger-actions">
              <ButtonLink
                href="/tassenger/admin"
                analyticsEvent="tassenger_admin_click"
                analyticsLabel="Hero WebApp login"
                analyticsSection="tassenger_hero"
              >
                Open WebApp login <ArrowIcon />
              </ButtonLink>
              <PlayStoreLink location="tassenger_hero" />
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
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="tassenger_play_store_click"
                data-analytics-label="Hero store status"
                data-analytics-section="tassenger_hero"
              >
                Google Play package ready
              </Link>
              <AppStoreSoon />
            </div>
          </div>

          <div className="tassenger-hero-stage" aria-label="Tassenger product screenshots">
            <div className="tassenger-stage-card">
              <div className="tassenger-tablet-frame">
                <Image
                  src="/tassenger/tablet-thread.jpg"
                  alt="Tassenger tablet conversation with task above messages"
                  width={1400}
                  height={875}
                  priority
                  sizes="(max-width: 760px) 92vw, 48vw"
                />
              </div>
              <div className="tassenger-phone tassenger-phone-main">
                <Image
                  src="/tassenger/thread-light.jpg"
                  alt="Tassenger iPhone conversation showing tasks above messages"
                  width={720}
                  height={1564}
                  priority
                  sizes="(max-width: 760px) 52vw, 260px"
                />
              </div>
              <div className="tassenger-phone tassenger-phone-dark">
                <Image
                  src="/tassenger/tasks-dark.jpg"
                  alt="Tassenger dark task command center with blocked, Do First and review states"
                  width={720}
                  height={1565}
                  loading="eager"
                  sizes="(max-width: 760px) 42vw, 220px"
                />
              </div>
              <div className="tassenger-floating-note">
                <b>Tasks stay above messages.</b>
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
            <h2>Real product screens, not concept art.</h2>
            <p>
              The page uses actual Tassenger surfaces: conversations with Tasks above messages, task command center,
              tablet conversation layout, and organization-scale work views.
            </p>
          </div>
          <div className="tassenger-screen-board">
            <article className="tassenger-screen-card tassenger-screen-wide">
              <div>
                <Image
                  src="/tassenger/tablet-thread.jpg"
                  alt="Tassenger Android tablet chat and task layout"
                  width={1400}
                  height={875}
                  loading="lazy"
                  sizes="(max-width: 900px) 92vw, 1040px"
                />
              </div>
              <h3>Tasks stay above messages.</h3>
              <p>The conversation remains familiar, while the work created from it stays visible before the chat moves on.</p>
            </article>
            <article className="tassenger-screen-card">
              <div className="tassenger-screen-contain tassenger-screen-dark-phone">
              <Image
                src="/tassenger/tasks-dark.jpg"
                alt="Tassenger dark task command center"
                width={720}
                height={1565}
                loading="lazy"
                sizes="(max-width: 760px) 82vw, 360px"
              />
              </div>
              <h3>Blocked, Do First, Review, In progress.</h3>
              <p>A dedicated Tasks surface helps people decide what needs attention instead of hunting through chat history.</p>
            </article>
            <article className="tassenger-screen-card">
              <div className="tassenger-screen-contain">
                <Image
                  src="/tassenger/ipad-tasks.jpg"
                  alt="Tassenger iPad task command center"
                  width={820}
                  height={1093}
                  loading="lazy"
                  sizes="(max-width: 760px) 82vw, 480px"
                />
              </div>
              <h3>Workspace-scale task views.</h3>
              <p>Tablet and larger screens give official teams more room for queues, review states, and operating context.</p>
            </article>
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
              Open the WebApp for organization setup, install Tassenger from the Android listing, or ask VSC to walk
              your team through the first workspace.
            </p>
          </div>
          <div className="tassenger-final-actions">
            <ButtonLink
              href="/tassenger/admin"
              analyticsEvent="tassenger_admin_click"
              analyticsLabel="Final WebApp login"
              analyticsSection="tassenger_final"
            >
              Open WebApp login <ArrowIcon />
            </ButtonLink>
            <PlayStoreLink location="tassenger_final" />
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
            <AppStoreSoon />
          </div>
        </div>
      </section>
    </>
  );
}
