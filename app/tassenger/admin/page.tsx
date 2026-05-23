import { ArrowIcon } from "@/components/icons";
import { AdminOrgMap, ButtonLink, CheckList, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, tassengerAdminPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tassenger WebApp Login | Organization Setup",
  description:
    "Open the Tassenger WebApp for organization setup, people, roles, permissions, groups, policies, reports, and official workspace administration.",
  path: "/tassenger/admin",
  image: "/tassenger/opengraph-image",
  keywords: [
    "Tassenger admin",
    "Tassenger WebApp login",
    "Tassenger organization setup",
    "roles permissions departments",
    "accountable messaging admin",
    "organization chart setup"
  ]
});

export default function TassengerAdminPage() {
  const adminHref = site.tassengerAdminUrl;
  const isExternalAdmin = adminHref.startsWith("http");

  return (
    <>
      <JsonLd data={tassengerAdminPageSchema()} />
      <section className="admin-entry-hero">
        <div className="home-wrap admin-entry-grid">
          <div>
            <h1>Tassenger WebApp login for organization setup.</h1>
            <p>
              The branded admin entry opens the live Tassenger WebApp for people, roles, permissions, groups, org chart,
              calendar, policy rules, reports, task review, proof, and audit-aware administration before daily work
              begins on mobile.
            </p>
            <div className="home-actions">
              <ButtonLink
                href={adminHref}
                external={isExternalAdmin}
                analyticsEvent="tassenger_admin_login_click"
                analyticsLabel="Tassenger admin hero"
                analyticsSection="admin_entry_hero"
              >
                Open WebApp <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/tassenger"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="tassenger_admin_back_to_product"
                analyticsLabel="Tassenger admin hero"
                analyticsSection="admin_entry_hero"
              >
                Back to Tassenger <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <AdminOrgMap />
        </div>
      </section>
      <section className="admin-entry-body">
        <div className="home-wrap contact-grid">
          <div className="contact-card">
            <h2>Admin login</h2>
            <p className="lead">
              This page keeps the public VirtualifyMe URL stable while the live Tassenger WebApp runs from the current
              deployment target. Organizations can start here and still get setup help from VSC when needed.
            </p>
            <div className="page-actions">
              <ButtonLink href={adminHref} external={isExternalAdmin}>
                Open WebApp <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="/tassenger" variant="secondary">
                Back to Tassenger <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="contact-card">
            <h3>Setup scope</h3>
            <CheckList items={["People", "Roles", "Permissions", "Departments", "Task policy", "Audit trail"]} />
          </div>
        </div>
      </section>
      <ContactBand title="Need help setting up an organization?" text="VSC prepares Tassenger roles, departments, and accountability rules with your team." />
    </>
  );
}
