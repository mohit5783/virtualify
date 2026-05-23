import { ArrowIcon } from "@/components/icons";
import { AdminOrgMap, ButtonLink, CheckList, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, tassengerAdminPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tassenger Admin | Organization Setup",
  description:
    "Tassenger web admin entry for organization setup, people, roles, permissions, departments, and policies.",
  path: "/tassenger/admin",
  image: "/tassenger/opengraph-image",
  keywords: [
    "Tassenger admin",
    "Tassenger organization setup",
    "roles permissions departments",
    "accountable messaging admin",
    "organization chart setup"
  ]
});

export default function TassengerAdminPage() {
  const hasLiveAdmin =
    Boolean(site.tassengerAdminUrl) &&
    site.tassengerAdminUrl !== "/tassenger/admin" &&
    site.tassengerAdminUrl !== `${site.baseUrl}/tassenger/admin`;
  const adminHref = hasLiveAdmin ? site.tassengerAdminUrl : site.whatsapp;

  return (
    <>
      <JsonLd data={tassengerAdminPageSchema()} />
      <section className="admin-entry-hero">
        <div className="home-wrap admin-entry-grid">
          <div>
            <h1>Tassenger organization setup before the work begins.</h1>
            <p>
              The admin entry prepares organizations for people, roles, permissions, departments, invite flows, policy
              rules, task review, proof, and audit trails. When the production web app is ready, this page can become
              the clean bridge into `/admin` after login.
            </p>
            <div className="home-actions">
              <ButtonLink
                href={adminHref}
                external={!hasLiveAdmin}
                analyticsEvent={hasLiveAdmin ? "tassenger_admin_login_click" : "tassenger_admin_setup_request"}
                analyticsLabel="Tassenger admin hero"
                analyticsSection="admin_entry_hero"
              >
                {hasLiveAdmin ? "Open admin" : "Request setup"} <ArrowIcon />
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
              The production admin URL can be connected here when ready. Until then, the page routes interested
              organizations to VSC so onboarding does not land on a broken surface.
            </p>
            <div className="page-actions">
              <ButtonLink href={adminHref} external={!hasLiveAdmin}>
                {hasLiveAdmin ? "Open admin" : "Request setup"} <ArrowIcon />
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
