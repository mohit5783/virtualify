export const site = {
  baseUrl: "https://www.virtualifyme.com",
  shortName: "VSC",
  brandName: "VirtualifyMe",
  legalName: "Virtualify Software Consultancy Pvt. Ltd.",
  location: "Harda, Madhya Pradesh",
  address:
    "103, Maharana Pratap Colony, Subhash Ward, Harda, Madhya Pradesh 461331, India",
  email: "virtualifyme@gmail.com",
  phone: "+91 98260 65894",
  whatsapp:
    "https://api.whatsapp.com/send?phone=919826065894&text=Hi%20VSC%2C%20I%20want%20to%20talk%20about%20a%20software%20project.",
  tassengerAdminUrl: "https://tasngr3-web.pages.dev/",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.virtualify.tasngr3",
  appStoreUrl: "",
  socials: {
    linkedin: "https://www.linkedin.com/company/virtualifyme/",
    x: "https://x.com/virtualifyme",
    youtube: "https://www.youtube.com/@Virtualify"
  }
} as const;

export const nav = [
  { label: "Tassenger", href: "/tassenger" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

export type Service = {
  slug: string;
  title: string;
  group: "Build" | "Stabilize" | "Secure" | "Grow" | "Automate";
  short: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  industries: string[];
  seoTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    group: "Build",
    short: "Plan, design, and build software around a real workflow instead of forcing teams into the wrong tool.",
    summary:
      "VSC defines, designs, and delivers custom software for teams that need a dependable system around their own process, data, approvals, people, and customer operations.",
    outcomes: [
      "Clear scope, workflows, and release roadmap",
      "Modern application architecture",
      "Role-aware interfaces and operational dashboards",
      "Maintainable codebase prepared for future specialists"
    ],
    deliverables: ["Discovery", "Product specification", "Web application", "Admin surfaces", "Documentation"],
    industries: ["Retail", "Education", "Logistics", "Public services"],
    seoTitle: "Custom Software Development Services | VSC VirtualifyMe",
    metaDescription:
      "VSC plans and builds custom software for workflows, approvals, dashboards, and operational systems."
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    group: "Build",
    short: "Fast, responsive, SEO-aware web applications for public sites, admin tools, portals, and operational products.",
    summary:
      "VSC builds modern web apps that load quickly, adapt to mobile, and support the public or internal workflows your organization actually needs.",
    outcomes: ["Responsive UI", "Static or server-rendered pages", "Admin and dashboard flows", "SEO metadata and schema"],
    deliverables: ["Next.js apps", "Landing pages", "Admin panels", "Forms", "Performance tuning"],
    industries: ["News media", "Retail", "Real estate", "Education"],
    seoTitle: "Web App Development Company in Harda | VSC",
    metaDescription:
      "VSC builds modern web applications, public websites, admin tools, portals, and responsive interfaces."
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    group: "Build",
    short: "Mobile apps and app-adjacent systems for teams that need reliable user behavior across devices.",
    summary:
      "VSC designs, builds, stabilizes, and improves mobile app experiences across product flows, APIs, notifications, and operational behavior.",
    outcomes: ["Mobile-first flows", "API-aware UX", "Release readiness", "Stability and behavior testing"],
    deliverables: ["React Native planning", "Mobile UX", "API coordination", "Testing", "Store-readiness support"],
    industries: ["News media", "Retail", "Logistics", "Healthcare"],
    seoTitle: "Mobile App Development Services | VSC VirtualifyMe",
    metaDescription:
      "VSC builds and improves mobile app experiences across product flows, APIs, notifications, and stability."
  },
  {
    slug: "site-revamp-modernization",
    title: "Site Revamp & Modernization",
    group: "Stabilize",
    short: "Turn slow, outdated, or fragile websites into cleaner systems that are easier to trust and maintain.",
    summary:
      "VSC modernizes old websites, improves performance, reorganizes content, repairs SEO basics, and rebuilds fragile interfaces with a clearer technical foundation.",
    outcomes: ["Cleaner information architecture", "Better load behavior", "Reduced page fragility", "Improved SEO hygiene"],
    deliverables: ["Audit", "Redesign", "Rebuild", "Redirect map", "Performance pass"],
    industries: ["News media", "Education", "Real estate", "Public services"],
    seoTitle: "Website Revamp and Modernization Services | VSC",
    metaDescription:
      "VSC revamps outdated websites with better performance, content structure, SEO, redirects, and maintainable frontend code."
  },
  {
    slug: "cloud-infrastructure-devops",
    title: "Cloud Infrastructure & DevOps",
    group: "Stabilize",
    short: "Infrastructure, deployment, monitoring, and delivery workflows that make software easier to operate.",
    summary:
      "VSC configures cloud infrastructure, deployment pipelines, caching layers, environment hygiene, and monitoring paths for growing software systems.",
    outcomes: ["Cleaner deployments", "Caching and CDN strategy", "Environment separation", "Operational visibility"],
    deliverables: ["Cloud setup", "CI/CD", "CDN rules", "Monitoring", "Runbooks"],
    industries: ["News media", "Fintech", "Retail", "Logistics"],
    seoTitle: "Cloud Infrastructure and DevOps Services | VSC",
    metaDescription:
      "VSC delivers cloud infrastructure, deployment pipelines, CDN rules, monitoring, and DevOps foundations."
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    group: "Secure",
    short: "Practical security support for access control, application risk, hardening, and review readiness.",
    summary:
      "VSC coordinates security reviews, hardens application surfaces, improves access controls, and brings specialist support into projects when deeper audits are required.",
    outcomes: ["Safer authentication and permissions", "Security review coordination", "Basic hardening", "Issue tracking"],
    deliverables: ["Risk review", "Access control checks", "Security backlog", "Specialist coordination"],
    industries: ["Fintech", "Healthcare", "Public services", "Education"],
    seoTitle: "Cyber Security Services | VSC VirtualifyMe",
    metaDescription:
      "VSC coordinates cybersecurity reviews, access-control hardening, application risk checks, and specialist delivery."
  },
  {
    slug: "quality-engineering-testing",
    title: "Quality Engineering & Testing",
    group: "Secure",
    short: "Testing strategies, regression checks, device behavior review, and release confidence for web and mobile.",
    summary:
      "VSC helps teams reduce silent failures through practical QA, regression checks, device behavior testing, and release readiness workflows.",
    outcomes: ["Regression coverage", "Device behavior checks", "Bug triage", "Release confidence"],
    deliverables: ["Test plans", "Manual QA", "Automation planning", "Bug reports", "Acceptance checks"],
    industries: ["News media", "Retail", "Healthcare", "Education"],
    seoTitle: "Quality Engineering and Testing Services | VSC",
    metaDescription:
      "VSC supports QA, testing, regression checks, mobile behavior review, and release readiness."
  },
  {
    slug: "seo-aeo-geo",
    title: "SEO, AEO & GEO",
    group: "Grow",
    short: "Technical visibility for search engines, answer engines, AI summaries, and structured web discovery.",
    summary:
      "VSC improves technical SEO, answer-engine readiness, generative-engine visibility, structured data, metadata, sitemaps, and performance signals.",
    outcomes: ["Cleaner crawl paths", "Structured data", "Better metadata", "AI/search visibility foundations"],
    deliverables: ["SEO audit", "Schema", "Metadata", "Sitemap", "Content structure"],
    industries: ["News media", "Real estate", "Education", "Retail"],
    seoTitle: "SEO AEO GEO Services | VSC VirtualifyMe",
    metaDescription:
      "VSC helps improve SEO, answer-engine optimization, generative-engine visibility, metadata, schema, and crawl readiness."
  },
  {
    slug: "news-media-visibility",
    title: "News Media Visibility",
    group: "Grow",
    short: "Platform stability, cache behavior, technical SEO, and delivery paths for high-traffic publishers.",
    summary:
      "VSC helps publishers improve delivery stability across cache, CDN, WordPress, APIs, mobile behavior, reader-facing performance, and technical visibility.",
    outcomes: ["More dependable delivery", "Clearer cache behavior", "Improved platform visibility", "Fewer recurring incidents"],
    deliverables: ["Platform audit", "CDN/cache tuning", "WordPress review", "API behavior review", "Monitoring path"],
    industries: ["News media", "Publishing"],
    seoTitle: "News Media Visibility and Platform Stability | VSC",
    metaDescription:
      "VSC helps news and media platforms improve cache, CDN, WordPress, API, mobile, SEO, and delivery stability."
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    group: "Automate",
    short: "Useful automation for internal tools, content workflows, operations, support, and repetitive decisions.",
    summary:
      "VSC identifies practical AI and automation opportunities, then designs workflows that improve operations, review loops, reporting, and internal coordination.",
    outcomes: ["Workflow mapping", "AI-assisted operations", "Internal tools", "Human review loops"],
    deliverables: ["Automation audit", "Prototype", "Internal assistant", "Workflow integration"],
    industries: ["Education", "Retail", "Logistics", "News media"],
    seoTitle: "AI Automation Services | VSC VirtualifyMe",
    metaDescription:
      "VSC builds practical AI automation, internal tools, workflow assistants, and review loops for organizations."
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    group: "Automate",
    short: "Dashboards, reporting, data cleanup, and decision surfaces for teams that need clearer operational signals.",
    summary:
      "VSC turns scattered operational data into dashboards, reports, and decision surfaces that make work easier to understand.",
    outcomes: ["Clearer metrics", "Cleaner reports", "Dashboard foundations", "Decision visibility"],
    deliverables: ["Dashboard design", "Data mapping", "Reporting views", "Analytics setup"],
    industries: ["Retail", "Logistics", "Education", "Fintech"],
    seoTitle: "Data Analytics and Dashboard Services | VSC",
    metaDescription:
      "VSC builds dashboards, reports, data mapping, analytics views, and operational decision surfaces."
  }
];

export type Industry = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  priorities: string[];
  relevantServices: string[];
  proof?: string;
  seoTitle: string;
  metaDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "news-media",
    title: "News & Media",
    short: "High-traffic publishing platforms, delivery stability, technical visibility, and mobile behavior.",
    summary:
      "VSC helps news and media teams improve delivery reliability, page speed, cache behavior, WordPress/API stability, and technical visibility across search, AI, and mobile surfaces.",
    priorities: ["Reader-facing reliability", "Cache and CDN behavior", "Technical SEO", "Mobile app and API consistency"],
    relevantServices: ["news-media-visibility", "site-revamp-modernization", "cloud-infrastructure-devops", "seo-aeo-geo"],
    proof: "Free Malaysia Today brings VSC close to the pressure of high-traffic publishing platforms.",
    seoTitle: "News Media Software and Visibility Services | VSC",
    metaDescription:
      "VSC helps news media teams improve platform stability, cache, CDN, WordPress, APIs, mobile behavior, and visibility."
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & Ecommerce",
    short: "Storefronts, inventory workflows, customer touchpoints, dashboards, and commerce operations.",
    summary:
      "VSC builds practical systems for catalogues, order flows, inventory visibility, customer communication, and operational dashboards.",
    priorities: ["Storefront speed", "Inventory visibility", "Customer workflows", "Operations dashboards"],
    relevantServices: ["web-app-development", "mobile-app-development", "custom-software-development", "data-analytics"],
    seoTitle: "Retail and Ecommerce Software Services | VSC",
    metaDescription:
      "VSC builds storefronts, mobile flows, dashboards, inventory tools, and customer workflows for retail and ecommerce teams."
  },
  {
    slug: "education-training",
    title: "Education & Training",
    short: "Learning workflows, training dashboards, attendance, assessment, and internal coordination.",
    summary:
      "VSC builds software for courses, learners, assessments, admin workflows, and role-based coordination for education and training teams.",
    priorities: ["Learning flows", "Admin coordination", "Attendance and assessment", "Training visibility"],
    relevantServices: ["custom-software-development", "web-app-development", "ai-automation", "quality-engineering-testing"],
    seoTitle: "Education and Training Software Services | VSC",
    metaDescription:
      "VSC builds learning platforms, admin workflows, dashboards, and automation for education and training teams."
  },
  {
    slug: "logistics-operations",
    title: "Logistics & Operations",
    short: "Task visibility, process automation, approvals, dashboards, and mobile coordination.",
    summary:
      "VSC builds software for tracking responsibilities, approvals, job status, vendor coordination, and dashboards for operations teams.",
    priorities: ["Task accountability", "Mobile coordination", "Workflow visibility", "Vendor and team operations"],
    relevantServices: ["custom-software-development", "mobile-app-development", "ai-automation", "data-analytics"],
    seoTitle: "Logistics and Operations Software Services | VSC",
    metaDescription:
      "VSC builds task, approval, vendor, workflow, and dashboard systems for logistics and operations teams."
  },
  {
    slug: "fintech",
    title: "Fintech",
    short: "Secure workflows, dashboards, compliance-aware product thinking, and specialist delivery support.",
    summary:
      "VSC can support fintech product work with careful planning, role-aware interfaces, security coordination, data visibility, and specialist network support.",
    priorities: ["Security and access control", "Audit trails", "Dashboards", "Specialist coordination"],
    relevantServices: ["cyber-security", "quality-engineering-testing", "custom-software-development", "data-analytics"],
    seoTitle: "Fintech Software Services | VSC",
    metaDescription:
      "VSC can support fintech software with secure workflows, dashboards, QA, access control, and specialist delivery coordination."
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Patient-facing flows, internal coordination, dashboards, security-aware systems, and testing.",
    summary:
      "VSC plans and builds careful digital systems for healthcare-adjacent teams with attention to access, reliability, role clarity, and user trust.",
    priorities: ["Role-based access", "Reliable patient or staff flows", "Careful QA", "Data visibility"],
    relevantServices: ["cyber-security", "quality-engineering-testing", "web-app-development", "mobile-app-development"],
    seoTitle: "Healthcare Software Services | VSC",
    metaDescription:
      "VSC builds secure, reliable web and mobile software for healthcare-adjacent teams with testing and role-aware access."
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    short: "Listings, lead flows, project dashboards, portals, content visibility, and mobile-first experiences.",
    summary:
      "VSC creates better property discovery, enquiry paths, admin workflows, project updates, and content visibility for real estate teams.",
    priorities: ["Listings and lead flow", "Project visibility", "Mobile-first UX", "Search-friendly content"],
    relevantServices: ["web-app-development", "seo-aeo-geo", "site-revamp-modernization", "data-analytics"],
    seoTitle: "Real Estate Software and Website Services | VSC",
    metaDescription:
      "VSC builds listing websites, enquiry flows, dashboards, project pages, and mobile-first experiences for real estate teams."
  },
  {
    slug: "public-services",
    title: "Public Services",
    short: "Citizen-facing forms, internal workflows, dashboards, accessibility, and reliable information delivery.",
    summary:
      "VSC builds clear information systems, forms, dashboards, and role-aware operational tools for public-service and community-facing teams.",
    priorities: ["Clear information architecture", "Forms and workflows", "Accessibility", "Operational dashboards"],
    relevantServices: ["web-app-development", "custom-software-development", "quality-engineering-testing", "seo-aeo-geo"],
    seoTitle: "Public Services Software Support | VSC",
    metaDescription:
      "VSC builds websites, forms, dashboards, operational tools, accessibility, and information systems for public-service teams."
  }
];

export type Product = {
  slug: string;
  title: string;
  status: "Owned" | "Upcoming" | "Concept" | "Exploration";
  short: string;
  summary: string;
  bullets: string[];
  href: string;
  seoTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "tassenger",
    title: "Tassenger",
    status: "Owned",
    short: "Taskable chat for personal groups and official workspaces.",
    summary:
      "Tassenger is a VSC-owned product. People chat naturally, then important messages can become visible Tasks with owner, context, proof, review, recurrence, reports, and organization setup.",
    bullets: ["Personal and official chat", "Message-to-Task conversion", "WebApp organization setup", "Proof, review and reports"],
    href: "/tassenger",
    seoTitle: "Tassenger | Taskable Chat by VSC",
    metaDescription:
      "Tassenger is taskable chat by VSC for personal groups, official workspaces, message-to-Task accountability, proof, review, reports, and WebApp setup."
  },
  {
    slug: "travelcrafter",
    title: "TravelCrafter",
    status: "Concept",
    short: "A product direction for planning travel workflows and discovery paths.",
    summary:
      "TravelCrafter is a VSC product direction for travel discovery, itinerary planning, bookings, and customer coordination.",
    bullets: ["Travel discovery", "Itinerary planning", "Booking workflow", "Partner coordination"],
    href: "/products/travelcrafter",
    seoTitle: "TravelCrafter Product Direction | VSC",
    metaDescription:
      "TravelCrafter is a VSC product direction for travel discovery, itinerary planning, and workflow coordination."
  },
  {
    slug: "smartspot-parkingpulse",
    title: "SmartSpot / ParkingPulse",
    status: "Concept",
    short: "A product direction around parking visibility, occupancy, and operations.",
    summary:
      "SmartSpot / ParkingPulse is a VSC product direction for parking discovery, occupancy tracking, and local operations.",
    bullets: ["Parking discovery", "Occupancy views", "Local operations", "Payment-ready thinking"],
    href: "/products/smartspot-parkingpulse",
    seoTitle: "SmartSpot ParkingPulse Product Direction | VSC",
    metaDescription:
      "SmartSpot / ParkingPulse is a VSC product direction for parking visibility, occupancy, and operations."
  },
  {
    slug: "ledgerchain",
    title: "LedgerChain",
    status: "Concept",
    short: "A concept for transparent ledger-style workflows and audit-ready records.",
    summary:
      "LedgerChain is a VSC concept for audit-friendly records, approvals, transactional visibility, and workflow integrity.",
    bullets: ["Audit trails", "Approval records", "Transaction visibility", "Workflow integrity"],
    href: "/products/ledgerchain",
    seoTitle: "LedgerChain Concept | VSC",
    metaDescription:
      "LedgerChain is a VSC concept for audit-friendly records, approvals, transactional visibility, and workflow integrity."
  },
  {
    slug: "dashview-pro",
    title: "Dashview Pro",
    status: "Concept",
    short: "A dashboard product direction for decision visibility and operational reporting.",
    summary:
      "Dashview Pro is a VSC product direction for operational dashboards, reporting surfaces, and decision visibility.",
    bullets: ["Operational dashboards", "KPI views", "Reporting", "Decision surfaces"],
    href: "/products/dashview-pro",
    seoTitle: "Dashview Pro Product Direction | VSC",
    metaDescription:
      "Dashview Pro is a VSC product direction for dashboards, reporting, KPI views, and decision visibility."
  },
  {
    slug: "smart-training",
    title: "Smart Training",
    status: "Exploration",
    short: "An exploration for structured training, tracking, and learning operations.",
    summary:
      "Smart Training is a VSC exploration for course delivery, training records, learning workflows, and team capability tracking.",
    bullets: ["Course delivery", "Training records", "Assessment flows", "Team capability tracking"],
    href: "/products/smart-training",
    seoTitle: "Smart Training Exploration | VSC",
    metaDescription:
      "Smart Training is a VSC exploration for course delivery, training records, learning workflows, and team capability tracking."
  }
];

export const fmtMetrics = [
  { value: "22M+", label: "annual readers" },
  { value: "183M", label: "annual pageviews" },
  { value: "15.6B", label: "social impressions" },
  { value: "2.9B", label: "video views" }
] as const;

export const tassengerFaqs = [
  {
    question: "Is Tassenger another task manager or another chat app?",
    answer:
      "No. Tassenger starts where work already starts: inside conversations. Chat stays natural, but important messages can become Tasks with owner, context, due signal, status, proof, review, and history."
  },
  {
    question: "What is the difference between Personal and Official work?",
    answer:
      "Personal mode stays light for families, friends, trips, errands, and informal groups. Official mode adds organization rules, due dates, priorities, queues, blockers, proof, review, reports, scoring, audit signals, and role-aware control."
  },
  {
    question: "What is the Tassenger WebApp for?",
    answer:
      "The WebApp is the organization control room. Owners and admins use it to prepare people, roles, groups, org chart, calendar, policy defaults, activation, reports, and audit-friendly administration before daily work happens on mobile."
  },
  {
    question: "Where can I get Tassenger?",
    answer:
      "The WebApp login is available now through the Tassenger admin entry. The Google Play listing uses the package com.virtualify.tasngr3. The App Store version is planned and will be linked when the Apple app record is ready."
  },
  {
    question: "Can VSC help set up an organization?",
    answer:
      "Yes. VSC can help an organization prepare its first workspace, people, groups, roles, permissions, task policy, and onboarding path so Tassenger starts with clean operating rules instead of becoming another unmanaged chat group."
  }
] as const;

export const legalPages = [
  {
    slug: "privacy-notice",
    title: "Privacy Notice",
    description:
      "How VSC handles contact details, inquiry information, website usage data, and product-related communication.",
    sections: [
      {
        heading: "Information we collect",
        body: "VSC collects only the information needed to respond to inquiries, provide software services, operate our websites, and support product conversations. This may include name, email, phone number, company details, project information, and messages shared by WhatsApp or email."
      },
      {
        heading: "How we use information",
        body: "We use contact and project information to respond, prepare proposals, deliver services, support products, improve our website, and maintain reasonable business records."
      },
      {
        heading: "Sharing",
        body: "We do not sell personal information. We may share limited information with trusted delivery partners or specialists when needed to complete requested work."
      }
    ]
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description:
      "How VSC may use essential, analytics, and performance cookies on VirtualifyMe websites.",
    sections: [
      {
        heading: "Current use",
        body: "The public VSC site is designed to be lightweight. If analytics, embedded media, or third-party tools are enabled, cookies may be used to understand performance and improve user experience."
      },
      {
        heading: "Control",
        body: "Visitors can control cookies through browser settings. Blocking non-essential cookies should not prevent access to core website content."
      }
    ]
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    description:
      "Basic terms for using the VirtualifyMe website and contacting VSC about software services or products.",
    sections: [
      {
        heading: "Website content",
        body: "The content on this website describes VSC, its owned product Tassenger, public work, capabilities, and product-lab concepts. It is provided for general business information."
      },
      {
        heading: "No automatic engagement",
        body: "Using this website or sending an inquiry does not create a service contract. Any project work requires a separate written agreement or confirmation."
      }
    ]
  },
  {
    slug: "security-policy",
    title: "Security Policy",
    description:
      "How to report security concerns related to VSC websites, products, or public digital surfaces.",
    sections: [
      {
        heading: "Responsible reporting",
        body: "If you find a security issue in a VSC website or product, contact virtualifyme@gmail.com with enough detail for the team to investigate responsibly."
      },
      {
        heading: "Good-faith behavior",
        body: "Do not access, alter, or extract data that does not belong to you. Do not disrupt services while testing or reporting an issue."
      }
    ]
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description:
      "Clarifies service descriptions, product directions, and client-platform positioning on the VSC website.",
    sections: [
      {
        heading: "Service descriptions",
        body: "Service pages describe areas where VSC provides planning, delivery, modernization, stabilization, visibility, automation, and specialist coordination. Final scope depends on discovery, project requirements, and written agreement."
      },
      {
        heading: "Product ownership",
        body: "Tassenger is a VSC-owned product. Product directions, concepts, upcoming ideas, and explorations describe VSC roadmap thinking and may change before any public release."
      },
      {
        heading: "FMT positioning",
        body: "Free Malaysia Today is a client platform story associated with VSC service work across stability, publishing delivery, and mobile behavior."
      }
    ]
  }
] as const;

export const launchRoutes = [
  "/",
  "/tassenger",
  "/tassenger/admin",
  "/tassenger/privacy",
  "/tassenger/terms",
  "/tassenger/support",
  "/tassenger/delete-account",
  "/work",
  "/work/free-malaysia-today",
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/industries",
  ...industries.map((industry) => `/industries/${industry.slug}`),
  "/products",
  ...products.filter((product) => product.slug !== "tassenger").map((product) => product.href),
  "/about",
  "/contact",
  ...legalPages.map((page) => `/${page.slug}`),
  "/sitemap"
];

export function absoluteUrl(path = "/") {
  return `${site.baseUrl}${path}`;
}

export function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function findIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function findLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
