import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, CheckIcon, MenuIcon } from "@/components/icons";
import { industries, nav, products, services, site } from "@/lib/site";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  external?: boolean;
  className?: string;
  analyticsEvent?: string;
  analyticsLabel?: string;
  analyticsSection?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  analyticsEvent,
  analyticsLabel,
  analyticsSection
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`button button-${variant} ${className}`}
      data-analytics-event={analyticsEvent}
      data-analytics-label={analyticsLabel}
      data-analytics-section={analyticsSection}
    >
      {children}
    </Link>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand">
      <Image
        src={compact ? "/brand/vsc-logo.svg" : "/brand/vscfull-logo.svg"}
        alt="VSC VirtualifyMe"
        width={compact ? 54 : 196}
        height={compact ? 54 : 71}
        priority
        className={compact ? "brand-mark" : "brand-full-logo"}
      />
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href={site.whatsapp} external variant="dark" className="header-cta">
          Talk to VSC <ArrowIcon />
        </ButtonLink>
        <ButtonLink href={site.whatsapp} external className="mobile-talk">
          Talk
        </ButtonLink>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <MenuIcon />
          </summary>
          <div className="mobile-menu-panel">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href={site.whatsapp} external>
              Talk to VSC <ArrowIcon />
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-reverse">
            <img
              src="/brand/vscfull-logo-reverse.png"
              alt="VSC VirtualifyMe"
              width={320}
              height={116}
              loading="eager"
              style={{ width: "260px", height: "auto" }}
            />
          </div>
          <p>{site.legalName}</p>
          <p>{site.address}</p>
          <div className="footer-social-row" aria-label="VSC social media links">
            <Link
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VSC on LinkedIn"
              data-analytics-label="linkedin"
              data-analytics-section="footer"
            >
              in
            </Link>
            <Link
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VSC on X"
              data-analytics-label="x"
              data-analytics-section="footer"
            >
              X
            </Link>
            <Link
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VSC on YouTube"
              data-analytics-label="youtube"
              data-analytics-section="footer"
            >
              YT
            </Link>
          </div>
        </div>
        <FooterColumn
          title="Services"
          links={services.slice(0, 7).map((service) => ({
            label: service.title,
            href: `/services/${service.slug}`
          }))}
        />
        <FooterColumn
          title="Industries"
          links={industries.slice(0, 6).map((industry) => ({
            label: industry.title,
            href: `/industries/${industry.slug}`
          }))}
        />
        <FooterColumn
          title="Products"
          links={[
            { label: "Tassenger", href: "/tassenger" },
            { label: "Tassenger Support", href: "/tassenger/support" },
            { label: "Tassenger Privacy", href: "/tassenger/privacy" },
            { label: "Tassenger Terms", href: "/tassenger/terms" },
            { label: "Delete Tassenger Account", href: "/tassenger/delete-account" },
            { label: "Product Directions", href: "/products" },
            ...products.slice(1, 4).map((product) => ({
              label: product.title,
              href: `/products/${product.slug}`
            }))
          ]}
        />
        <FooterColumn
          title="Work"
          links={[
            { label: "FMT case study", href: "/work/free-malaysia-today" },
            { label: "Tassenger", href: "/tassenger" },
            { label: "Service map", href: "/services" }
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Notice", href: "/privacy-notice" },
            { label: "Cookie Policy", href: "/cookie-policy" },
            { label: "Terms of Use", href: "/terms-of-use" },
            { label: "Security Policy", href: "/security-policy" },
            { label: "Disclaimer", href: "/disclaimer" },
            { label: "Sitemap", href: "/sitemap" }
          ]}
        />
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <span>{site.email} · {site.phone}</span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="footer-column">
      <h2>{title}</h2>
      {links.map((link) => (
        <Link key={`${title}-${link.href}`} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function AppStoreBadge() {
  return (
    <svg className="store-badge-svg" viewBox="0 0 170 52" role="img" aria-label="Download on the App Store" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="169" height="51" rx="11" fill="#000" stroke="rgba(255,255,255,0.28)" />
      <g transform="translate(18,12) scale(0.82)" fill="#fff">
        <path d="M23.1 18.2c0-4.1 3.3-6 3.5-6.1-1.9-2.8-4.8-3.2-5.8-3.2-2.5-.3-4.9 1.5-6.1 1.5-1.3 0-3.2-1.5-5.2-1.4-2.7 0-5.1 1.6-6.5 4-2.8 4.8-.7 11.9 2 15.8 1.3 1.9 2.9 4.1 5 4 2-.1 2.8-1.3 5.2-1.3s3.1 1.3 5.2 1.2c2.2 0 3.5-2 4.9-4 1.5-2.2 2.1-4.3 2.1-4.4-.1 0-4.3-1.6-4.3-6.1ZM19.2 6.3c1.1-1.4 1.9-3.2 1.7-5.1-1.7.1-3.7 1.1-4.9 2.5-1.1 1.2-2 3.1-1.8 4.9 1.9.1 3.8-.9 5-2.3Z" />
      </g>
      <text x="58" y="21" fill="#fff" fontSize="9" fontWeight="400" letterSpacing="0.5" fontFamily="var(--font-sans)">Download on the</text>
      <text x="57" y="40" fill="#fff" fontSize="21" fontWeight="600" letterSpacing="-0.3" fontFamily="var(--font-sans)">App Store</text>
    </svg>
  );
}

export function GooglePlayBadge() {
  return (
    <svg className="store-badge-svg" viewBox="0 0 182 52" role="img" aria-label="Get it on Google Play" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="181" height="51" rx="11" fill="#000" stroke="rgba(255,255,255,0.28)" />
      <g transform="translate(18,13.5) scale(0.7)">
        <path d="M3 2.4 19.2 18 3 33.6Z" fill="#00d3ff" />
        <path d="m19.2 18 5.3-5.1 6.4 3.7c1.5.9 1.5 2.9 0 3.8l-6.4 3.7Z" fill="#ffce00" />
        <path d="M3 2.4 24.5 12.9 19.2 18Z" fill="#00f076" />
        <path d="m3 33.6 16.2-15.6 5.3 5.1Z" fill="#ff3a44" />
      </g>
      <text x="58" y="21" fill="#fff" fontSize="9" fontWeight="400" letterSpacing="1.4" fontFamily="var(--font-sans)">GET IT ON</text>
      <text x="57" y="40" fill="#fff" fontSize="21" fontWeight="600" letterSpacing="-0.3" fontFamily="var(--font-sans)">Google Play</text>
    </svg>
  );
}

export function StoreBadges({
  location,
  className = ""
}: {
  location: string;
  className?: string;
}) {
  return (
    <div className={`store-badges ${className}`} aria-label="Download Tassenger">
      <Link
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge"
        data-analytics-event="tassenger_app_store_click"
        data-analytics-label="App Store"
        data-analytics-section={location}
        aria-label="Download Tassenger on the App Store"
      >
        <AppStoreBadge />
      </Link>
      <Link
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge"
        data-analytics-event="tassenger_google_play_click"
        data-analytics-label="Google Play"
        data-analytics-section={location}
        aria-label="Get Tassenger on Google Play"
      >
        <GooglePlayBadge />
      </Link>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function SectionIntro({
  title,
  text,
  label,
  align = "left"
}: {
  title: string;
  text?: string;
  label?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro ${align === "center" ? "section-intro-center" : ""}`}>
      {label && <p className="section-label">{label}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({
  title,
  text,
  label,
  children
}: {
  title: ReactNode;
  text: string;
  label?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          {label && <p className="section-label">{label}</p>}
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function ClaimBadge({ level }: { level: string }) {
  return <span className={`claim claim-${level.toLowerCase().replace(/\s/g, "-")}`}>{level}</span>;
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span><CheckIcon /></span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PhoneMockup({
  src,
  alt,
  priority = false,
  className = ""
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`}>
      <Image src={src} alt={alt} width={360} height={800} priority={priority} sizes="(max-width: 700px) 70vw, 260px" />
    </div>
  );
}

export function TassengerScreens({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`phone-stage ${compact ? "phone-stage-compact" : ""}`} aria-label="Tassenger app screenshots">
      <PhoneMockup src="/tassenger/today.png" alt="Tassenger Today screen" priority className="phone-front" />
      <PhoneMockup src="/tassenger/create-task.png" alt="Tassenger Create Task screen" className="phone-middle" />
      <PhoneMockup src="/tassenger/alerts.png" alt="Tassenger Alerts screen" className="phone-back" />
    </div>
  );
}

export function FmtProofPanel() {
  return (
    <div className="fmt-proof-panel">
      <div className="fmt-chain">
        {["Reader", "CDN", "Cache", "WordPress", "API", "Mobile"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="log-panel" aria-label="FMT delivery chain status sample">
        <p>12:45:21 CDN HIT /news/malaysia/politics 200</p>
        <p>12:45:21 Cache HIT /news/malaysia/politics 200</p>
        <p>12:45:22 WordPress /wp-json/ page generated 200</p>
        <p>12:45:22 API /v1/articles 200</p>
        <p>12:45:23 Mobile App latest OK 200</p>
      </div>
    </div>
  );
}

export function MetricStrip({
  metrics
}: {
  metrics: readonly { value: string; label: string }[];
}) {
  return (
    <div className="metric-strip">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ContactBand({
  title = "Ready to build something that lasts?",
  text = "Talk to VSC about your product, platform, launch, modernization, or stability problem."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="contact-band">
      <div className="container contact-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="contact-actions">
          <ButtonLink href={site.whatsapp} external>
            Talk to VSC <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact details <ArrowIcon />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && <span aria-hidden="true">/</span>}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}

export function AdminOrgMap() {
  return (
    <div className="org-map" aria-label="Tassenger web admin organization map">
      <div className="org-node org-root">VirtualifyMe Pvt. Ltd.<span>Owner / Admin</span></div>
      <div className="org-row">
        <div className="org-node">Operations<span>Department</span></div>
        <div className="org-node">Engineering<span>Department</span></div>
        <div className="org-node">Finance<span>Department</span></div>
      </div>
      <div className="org-row org-row-small">
        <div className="org-node">Vendor group</div>
        <div className="org-node">Task reviewers</div>
        <div className="org-node">Policy rules</div>
      </div>
    </div>
  );
}
