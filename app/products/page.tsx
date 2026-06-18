import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, productsHubSchema } from "@/lib/schema";
import { products, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "VSC Products and Product Directions | VirtualifyMe",
  description:
    "Explore VSC products and product directions including Tassenger and future workflow, training, travel, parking, and dashboard platforms.",
  path: "/products",
  keywords: [
    "VSC products",
    "Tassenger",
    "product directions",
    "workflow products",
    "MVP development",
    "dashboard products",
    "software product ideas"
  ]
});

export default function ProductsPage() {
  const tassenger = products.find((product) => product.slug === "tassenger");
  const labProducts = products.filter((product) => product.slug !== "tassenger");

  return (
    <>
      <JsonLd data={productsHubSchema()} />
      <section className="products-hero">
        <div className="home-wrap products-hero-grid">
          <div>
            <h1><span>Products</span> and product thinking from VSC.</h1>
            <p>
              Tassenger is VSC’s flagship product. Around it, VSC continues shaping product directions for workflows,
              travel, parking, dashboards, training, and operational tools.
            </p>
            <div className="home-actions">
              <ButtonLink
                href="/tassenger"
                analyticsEvent="products_tassenger_click"
                analyticsLabel="Products hero Tassenger"
                analyticsSection="products_hero"
              >
                Explore Tassenger <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href={site.whatsapp}
                external
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="products_lab_inquiry"
                analyticsLabel="Products hero lab inquiry"
                analyticsSection="products_hero"
              >
                Discuss a product <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <Link href="/tassenger" className="products-feature">
            <div className="products-feature-lockup">
              <Image src="/tassenger/icon.png" alt="Tassenger icon" width={70} height={70} priority />
              <span>VSC flagship product</span>
            </div>
            <h2>{tassenger?.title}</h2>
            <p>{tassenger?.summary}</p>
            <div className="products-feature-screens">
              <Image src="/tassenger/chats-live.png" alt="Tassenger chats" width={180} height={390} />
              <Image src="/tassenger/tasks-live.png" alt="Tassenger task command center" width={180} height={390} />
              <Image src="/tassenger/task-detail-live.png" alt="Tassenger task detail" width={180} height={390} />
            </div>
          </Link>
        </div>
      </section>

      <section className="products-lab">
        <div className="home-wrap">
          <h2>Product directions VSC is exploring.</h2>
          <p>
            These directions show where VSC’s product thinking can go next: practical platforms around workflows,
            operations, visibility, learning, local movement, and decision support.
          </p>
          <div className="product-grid">
          {labProducts.map((product) => (
            <Link
              href={product.href}
              className="product-card"
              key={product.slug}
              data-analytics-event="product_lab_card_click"
              data-analytics-label={product.title}
              data-analytics-section="products_lab"
            >
              <h3>{product.title}</h3>
              <p>{product.short}</p>
              <span className="card-link">Explore <ArrowIcon /></span>
            </Link>
          ))}
          </div>
        </div>
      </section>
      <ContactBand title="Explore Tassenger or a product-lab idea." text="Talk to VSC about product thinking, MVPs, internal tools, and launch-ready software." />
    </>
  );
}
