import Link from "next/link";
import { PageHero } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { industries, legalPages, products, services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sitemap | VSC VirtualifyMe",
  description:
    "HTML sitemap for VirtualifyMe pages, including Tassenger, services, industries, products, work, company, contact, and legal pages.",
  path: "/sitemap"
});

const groups = [
  {
    title: "Core",
    links: [
      ["/", "Home"],
      ["/tassenger", "Tassenger"],
      ["/tassenger/admin", "Tassenger Admin"],
      ["/work", "Work"],
      ["/work/free-malaysia-today", "Free Malaysia Today"],
      ["/about", "About"],
      ["/contact", "Contact"]
    ]
  },
  {
    title: "Services",
    links: services.map((service) => [`/services/${service.slug}`, service.title])
  },
  {
    title: "Industries",
    links: industries.map((industry) => [`/industries/${industry.slug}`, industry.title])
  },
  {
    title: "Products",
    links: products.map((product) => [product.href, product.title])
  },
  {
    title: "Legal",
    links: legalPages.map((page) => [`/${page.slug}`, page.title])
  }
] as const;

export default function SitemapPage() {
  return (
    <>
      <PageHero
        label="Sitemap"
        title="Every launch page in one place."
        text="Use this sitemap to find the main public pages on the VirtualifyMe website, including VSC services, industries, products, work, Tassenger resources, company information, contact details, and legal pages."
      />
      <section className="section">
        <div className="container legal-grid">
          {groups.map((group) => (
            <article className="legal-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="contact-list">
                {group.links.map(([href, label]) => (
                  <Link href={href} key={`${group.title}-${href}`}>{label}</Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
