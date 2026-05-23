import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, tassengerPageSchema } from "@/lib/schema";
import { site, tassengerFaqs } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tassenger | Calm Messenger with Accountability",
  description:
    "Tassenger turns everyday chat into accountable tasks for people, teams, departments, organizations, and cross-org workspaces.",
  path: "/tassenger",
  image: "/tassenger/opengraph-image",
  imageAlt: "Tassenger product page showing taskable chat, proof, review, and organization setup screens.",
  keywords: [
    "Tassenger",
    "taskable messaging",
    "accountable chat app",
    "team accountability software",
    "organization task management",
    "department task tracking",
    "proof submission app",
    "task review workflow",
    "VSC product"
  ]
});

const demoUrl =
  "https://api.whatsapp.com/send?phone=919826065894&text=Hi%20VSC%2C%20I%20want%20a%20Tassenger%20demo%20for%20my%20team.";
const launchUrl =
  "https://api.whatsapp.com/send?phone=919826065894&text=Hi%20VSC%2C%20please%20notify%20me%20when%20Tassenger%20launches.";

const workflow = [
  {
    title: "Chat",
    text: "People talk naturally in personal chats, groups, departments, and organization spaces."
  },
  {
    title: "Convert",
    text: "Important messages become tasks without losing the original conversation context."
  },
  {
    title: "Own",
    text: "Each task has a responsible person, due state, status, and a clear place outside the chat stream."
  },
  {
    title: "Prove",
    text: "People can submit proof, explain blockers, request changes, and keep the work visible."
  },
  {
    title: "Review",
    text: "Review states help teams confirm completion instead of letting responsibility fade."
  }
] as const;

const surfaces = [
  {
    title: "Today",
    text: "A clear daily surface for tasks that need attention.",
    image: "/tassenger/dark-today.png",
    alt: "Tassenger Today task screen in dark theme"
  },
  {
    title: "Chats",
    text: "Personal, group, official, and department conversations stay familiar.",
    image: "/tassenger/chats.png",
    alt: "Tassenger chat list"
  },
  {
    title: "Create task",
    text: "Turn a message into accountable work with owner, due date, and context.",
    image: "/tassenger/create-task.png",
    alt: "Tassenger create task screen"
  },
  {
    title: "Proof",
    text: "Keep completion evidence and task detail attached to the responsibility.",
    image: "/tassenger/proof-sheet.png",
    alt: "Tassenger proof submission screen"
  }
] as const;

const adminScopes = [
  "People and invitations",
  "Roles and permissions",
  "Departments and groups",
  "Reviewer rules",
  "Proof and due policies",
  "Organization spaces"
] as const;

const audiences = [
  {
    title: "Teams and departments",
    text: "For managers, owners, reviewers, and teams that need work to stay visible after a conversation moves on."
  },
  {
    title: "Vendors and cross-org work",
    text: "For external partners, service providers, and client-side groups where ownership often gets blurred."
  },
  {
    title: "Small businesses",
    text: "For teams that already coordinate on chat and need accountability without forcing a heavy project tool."
  },
  {
    title: "Personal and family work",
    text: "For real-life responsibilities that begin as casual messages but still need follow-through."
  }
] as const;

export default function TassengerPage() {
  return (
    <>
      <JsonLd data={tassengerPageSchema()} />
      <section className="tassenger-hero">
        <div className="tassenger-wrap tassenger-hero-grid">
          <div className="tassenger-hero-copy">
            <div className="tassenger-brand-line">
              <Image src="/tassenger/icon.png" alt="Tassenger app icon" width={62} height={62} priority />
              <span>Tassenger by VSC</span>
            </div>
            <h1>Chat can stay natural. Work can stay accountable.</h1>
            <p>
              Tassenger is a calm messenger with an accountability layer. People keep chatting the way they already do,
              while important messages become visible tasks for people, teams, departments, organizations, and cross-org
              spaces.
            </p>
            <div className="tassenger-actions">
              <ButtonLink
                href={demoUrl}
                external
                analyticsEvent="tassenger_demo_request"
                analyticsLabel="Hero request demo"
                analyticsSection="tassenger_hero"
              >
                Request demo <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/tassenger/admin"
                variant="secondary"
                analyticsEvent="tassenger_admin_click"
                analyticsLabel="Hero web admin setup"
                analyticsSection="tassenger_hero"
              >
                Web admin setup <ArrowIcon />
              </ButtonLink>
            </div>
            <div className="tassenger-store-status" aria-label="Tassenger app launch status">
              <span>Play Store coming soon</span>
              <span>App Store coming soon</span>
              <Link
                href={launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="tassenger_launch_notify"
                data-analytics-label="Hero launch notify"
                data-analytics-section="tassenger_hero"
              >
                Notify me
              </Link>
            </div>
          </div>

          <div className="tassenger-hero-stage" aria-label="Real Tassenger product screenshots">
            <div className="tassenger-stage-card">
              <div className="tassenger-phone tassenger-phone-chat">
                <Image src="/tassenger/chats.png" alt="Tassenger chats screen" width={360} height={800} loading="eager" />
              </div>
              <div className="tassenger-phone tassenger-phone-main">
                <Image
                  src="/tassenger/dark-today.png"
                  alt="Tassenger Today screen"
                  width={420}
                  height={880}
                  priority
                  sizes="(max-width: 760px) 190px, 270px"
                />
              </div>
              <div className="tassenger-phone tassenger-phone-proof">
                <Image src="/tassenger/proof-sheet.png" alt="Tassenger proof screen" width={360} height={800} loading="eager" />
              </div>
              <div className="tassenger-floating-note">
                <b>Tasks get their own surface.</b>
                <span>Chats can move fast. Responsibilities stay findable.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tassenger-positioning">
        <div className="tassenger-wrap tassenger-positioning-grid">
          <div>
            <h2>Messages are good for coordination. They are terrible places to bury responsibility.</h2>
          </div>
          <div>
            <p>
              Most real teams do not fail because nobody talked. They fail because the decision, owner, proof, or due
              state disappeared inside a long conversation. Tassenger keeps chat human, then gives important work a
              separate accountable life.
            </p>
          </div>
        </div>
      </section>

      <section className="tassenger-workflow">
        <div className="tassenger-wrap">
          <h2>From message to follow-through.</h2>
          <div className="tassenger-flow">
            {workflow.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{step.title}</b>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tassenger-surfaces">
        <div className="tassenger-wrap tassenger-surfaces-grid">
          <div className="tassenger-section-copy">
            <h2>Real product surfaces, not a fake phone mockup.</h2>
            <p>
              Tassenger already has the important pieces of the accountability loop: chats, today focus, task creation,
              alerts, proof, and review-aware task detail. The homepage shows the brand. This page shows the product.
            </p>
          </div>
          <div className="tassenger-surface-gallery">
            {surfaces.map((surface) => (
              <article key={surface.title}>
                <div>
                  <Image
                    src={surface.image}
                    alt={surface.alt}
                    width={360}
                    height={800}
                    loading="lazy"
                    sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1120px) 40vw, 150px"
                  />
                </div>
                <b>{surface.title}</b>
                <p>{surface.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tassenger-admin">
        <div className="tassenger-wrap tassenger-admin-grid">
          <div className="tassenger-admin-copy">
            <h2>Organization setup belongs above the chat.</h2>
            <p>
              For companies and formal teams, Tassenger is not only an app screen. The web admin entry is where the
              organization prepares people, departments, permissions, reviewer rules, and accountability policies before
              work begins.
            </p>
            <div className="tassenger-actions">
              <ButtonLink
                href="/tassenger/admin"
                analyticsEvent="tassenger_admin_click"
                analyticsLabel="Admin section entry"
                analyticsSection="tassenger_admin"
              >
                Open admin entry <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href={demoUrl}
                external
                variant="secondary"
                analyticsEvent="tassenger_admin_demo_request"
                analyticsLabel="Admin section demo"
                analyticsSection="tassenger_admin"
              >
                Request setup help <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="tassenger-admin-board" aria-label="Tassenger organization setup areas">
            <div className="tassenger-admin-root">
              Organization
              <span>Owner / admin</span>
            </div>
            <div className="tassenger-admin-list">
              {adminScopes.map((scope) => (
                <span key={scope}>{scope}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tassenger-audience">
        <div className="tassenger-wrap">
          <h2>Built for the messy middle between casual chat and formal work management.</h2>
          <div className="tassenger-audience-grid">
            {audiences.map((audience) => (
              <article key={audience.title}>
                <b>{audience.title}</b>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tassenger-faq">
        <div className="tassenger-wrap tassenger-faq-grid">
          <div>
            <h2>Questions teams usually ask before trying Tassenger.</h2>
            <p>
              The product is about to launch. Until the public app links are live, VSC can walk interested
              organizations through the product direction, admin setup, and onboarding path.
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

      <section className="tassenger-final">
        <div className="tassenger-wrap tassenger-final-grid">
          <div>
            <h2>Bring Tassenger into the organization before responsibilities start escaping again.</h2>
            <p>
              Start with a demo, an organization setup conversation, or a launch update. VSC will keep the path simple
              until the app-store links and production admin entry are ready.
            </p>
          </div>
          <div className="tassenger-final-actions">
            <ButtonLink
              href={demoUrl}
              external
              analyticsEvent="tassenger_demo_request"
              analyticsLabel="Final request demo"
              analyticsSection="tassenger_final"
            >
              Request demo <ArrowIcon />
            </ButtonLink>
            <ButtonLink
              href={launchUrl}
              external
              variant="secondary"
              analyticsEvent="tassenger_launch_notify"
              analyticsLabel="Final launch notify"
              analyticsSection="tassenger_final"
            >
              Get launch updates <ArrowIcon />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
