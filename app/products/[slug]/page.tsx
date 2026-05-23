import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Breadcrumbs, ButtonLink, CheckList, ContactBand } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, productPageSchema } from "@/lib/schema";
import { findProduct, products, site } from "@/lib/site";

export function generateStaticParams() {
  return products.filter((product) => product.slug !== "tassenger").map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.seoTitle,
    description: product.metaDescription,
    path: product.slug === "tassenger" ? "/tassenger" : `/products/${product.slug}`,
    image: product.slug === "tassenger" ? "/tassenger/opengraph-image" : "/opengraph-image",
    keywords: [product.title, "VSC product direction", "VirtualifyMe", "product strategy", "MVP planning", ...product.bullets]
  });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd data={productPageSchema(product)} />
      <section className="product-detail-hero">
        <div className="home-wrap product-detail-grid">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.title, href: `/products/${product.slug}` }
              ]}
            />
            <h1>{product.title}</h1>
            <p>{product.summary}</p>
            <div className="home-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="product_detail_inquiry"
                analyticsLabel={product.title}
                analyticsSection="product_detail_hero"
              >
                Discuss this idea <ArrowIcon />
              </ButtonLink>
              <ButtonLink
                href="/products"
                variant="secondary"
                className="home-button-secondary"
                analyticsEvent="product_detail_products_click"
                analyticsLabel={product.title}
                analyticsSection="product_detail_hero"
              >
                Back to products <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <div className="product-detail-status">
            <span>Product direction</span>
            <h2>A useful starting point for product planning.</h2>
            <p>
              This direction gives VSC and prospective partners a concrete way to discuss MVP scope, workflow design,
              platform decisions, and what a launch-ready version should actually do.
            </p>
          </div>
        </div>
      </section>
      <section className="product-detail-body">
        <div className="home-wrap product-detail-cards">
          <article>
            <h2>Product scope</h2>
            <CheckList items={product.bullets} />
          </article>
          <article>
            <h2>Next step</h2>
            <p className="lead">
              Use this as a conversation starter for product strategy, MVP planning, design, and delivery. The useful
              question is not whether the name is final; it is what workflow deserves a real product surface.
            </p>
            <div className="page-actions">
              <ButtonLink
                href={site.whatsapp}
                external
                analyticsEvent="product_detail_next_step"
                analyticsLabel={product.title}
                analyticsSection="product_detail_body"
              >
                Talk to VSC <ArrowIcon />
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
      <section className="product-lab-related">
        <div className="home-wrap">
          <h2>Product thinking is connected to delivery work.</h2>
          <div className="product-lab-related-grid">
            <Link href="/services/custom-software-development">
              <b>Product engineering</b>
              <span>Scope, product flows, admin surfaces, and release-ready delivery.</span>
            </Link>
            <Link href="/services/ai-automation">
              <b>Automation</b>
              <span>Workflow assistants, review loops, dashboards, and internal process improvements.</span>
            </Link>
            <Link href="/services/data-analytics">
              <b>Decision surfaces</b>
              <span>Reports, dashboards, operational views, and cleaner signals for teams.</span>
            </Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
