"use client";

import { Suspense, useEffect, useMemo } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || (process.env.NODE_ENV === "production" ? "G-EMXKKVZRCB" : undefined);
const SCROLL_DEPTHS = [25, 50, 75, 90] as const;

type AnalyticsValue = string | number | boolean | undefined | null;
type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "config" | "event" | "js", targetId: string | Date, params?: AnalyticsParams) => void;
  }
}

function cleanParams(params: AnalyticsParams) {
  return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""));
}

function sendEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, cleanParams({ site_area: "public_website", ...params }));
}

function sectionNameFor(element: Element) {
  if (element.closest(".site-header")) {
    return "header";
  }

  if (element.closest(".site-footer")) {
    return "footer";
  }

  const section = element.closest("section");
  if (!section) {
    return "page";
  }

  return section.id || section.className.toString().split(" ").find(Boolean) || "section";
}

function linkEventName(anchor: HTMLAnchorElement) {
  if (anchor.dataset.analyticsEvent) {
    return anchor.dataset.analyticsEvent;
  }

  const rawHref = anchor.getAttribute("href") || "";
  const url = new URL(anchor.href, window.location.href);
  const path = url.pathname;

  if (rawHref.startsWith("mailto:")) {
    return "email_click";
  }

  if (url.hostname.includes("whatsapp.com") || url.hostname === "wa.me") {
    return "whatsapp_click";
  }

  if (url.origin !== window.location.origin) {
    return "outbound_click";
  }

  if (path === "/tassenger/admin") {
    return "tassenger_admin_click";
  }

  if (path.startsWith("/tassenger/")) {
    return "tassenger_legal_click";
  }

  if (path === "/tassenger") {
    return "tassenger_interest_click";
  }

  if (path.startsWith("/work/free-malaysia-today")) {
    return "fmt_case_study_click";
  }

  if (path.startsWith("/services")) {
    return "service_interest_click";
  }

  if (path.startsWith("/industries")) {
    return "industry_interest_click";
  }

  if (path.startsWith("/products")) {
    return "product_interest_click";
  }

  if (path.startsWith("/contact")) {
    return "contact_click";
  }

  return anchor.classList.contains("button") ? "cta_click" : "internal_link_click";
}

function AnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pagePath = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    sendEvent("page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title
    });
  }, [pagePath]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      const linkText = anchor.textContent?.replace(/\s+/g, " ").trim().slice(0, 120);

      sendEvent(linkEventName(anchor), {
        link_text: linkText,
        analytics_label: anchor.dataset.analyticsLabel,
        link_url: anchor.href,
        link_domain: url.hostname,
        link_path: url.pathname,
        page_path: window.location.pathname,
        cta_location: anchor.dataset.analyticsSection || sectionNameFor(anchor)
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    const onToggle = (event: Event) => {
      const details = event.target instanceof HTMLDetailsElement ? event.target : null;
      if (!details?.dataset.analyticsEvent) {
        return;
      }

      sendEvent(details.dataset.analyticsEvent, {
        analytics_label: details.dataset.analyticsLabel,
        is_open: details.open,
        page_path: window.location.pathname,
        cta_location: details.dataset.analyticsSection || sectionNameFor(details)
      });
    };

    document.addEventListener("toggle", onToggle, { capture: true });
    return () => document.removeEventListener("toggle", onToggle, { capture: true });
  }, []);

  useEffect(() => {
    const sentDepths = new Set<number>();

    const onScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);
      for (const threshold of SCROLL_DEPTHS) {
        if (depth >= threshold && !sentDepths.has(threshold)) {
          sentDepths.add(threshold);
          sendEvent("scroll_depth", {
            scroll_depth: threshold,
            page_path: window.location.pathname
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const seenSections = new Set<string>();
    const sections = Array.from(document.querySelectorAll("main section"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target;
          const sectionName = sectionNameFor(section);

          if (entry.isIntersecting && !seenSections.has(sectionName)) {
            seenSections.add(sectionName);
            sendEvent("section_view", {
              section_name: sectionName,
              page_path: window.location.pathname
            });
          }
        }
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useReportWebVitals((metric) => {
    sendEvent("web_vital", {
      metric_name: metric.name,
      metric_id: metric.id,
      metric_rating: metric.rating,
      metric_delta: metric.name === "CLS" ? Math.round(metric.delta * 1000) : Math.round(metric.delta),
      value: metric.name === "CLS" ? Math.round(metric.value * 1000) : Math.round(metric.value),
      page_path: window.location.pathname
    });
  });

  return null;
}

export function Analytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', ${JSON.stringify(GA_MEASUREMENT_ID)}, { send_page_view: false });
          `
        }}
      />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="lazyOnload" />
      <Suspense fallback={null}>
        <AnalyticsEvents />
      </Suspense>
    </>
  );
}
