import {
  absoluteUrl,
  industries,
  legalPages,
  products,
  services,
  site,
  tassengerFaqs,
  type Industry,
  type Product,
  type Service
} from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}

function graphNode<T extends Record<string, unknown>>(node: T) {
  const { ["@context"]: _context, ...rest } = node;
  return rest;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: site.brandName,
    alternateName: [site.shortName, `${site.shortName} ${site.brandName}`, site.legalName],
    legalName: site.legalName,
    url: site.baseUrl,
    logo: absoluteUrl("/brand/vscfull-logo.png"),
    image: absoluteUrl("/opengraph-image"),
    slogan: "Software that holds up when real work depends on it.",
    description:
      "VirtualifyMe (VSC) is a software product engineering and digital transformation company from India. VSC builds software products, web and mobile platforms, automation systems, modernization programs, and digital services for growing organizations.",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "103, Maharana Pratap Colony, Subhash Ward",
      addressLocality: "Harda",
      addressRegion: "Madhya Pradesh",
      postalCode: "461331",
      addressCountry: "IN"
    },
    areaServed: ["India", "Malaysia", "Global remote delivery"],
    knowsAbout: [
      "software product engineering",
      "digital transformation",
      "custom software development",
      "web application development",
      "mobile application development",
      "platform modernization",
      "WordPress and API stability",
      "cloud infrastructure and DevOps",
      "cybersecurity",
      "quality engineering and testing",
      "AI automation",
      "data analytics",
      "SEO, AEO and GEO",
      "news media platforms"
    ],
    owns: {
      "@id": absoluteUrl("/tassenger#software")
    },
    makesOffer: {
      "@id": absoluteUrl("/#services-catalog")
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales and project inquiries",
        email: site.email,
        telephone: site.phone,
        url: site.whatsapp,
        areaServed: ["IN", "MY"],
        availableLanguage: ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        contactType: "Tassenger organization setup",
        email: site.email,
        telephone: site.phone,
        url: absoluteUrl("/tassenger/admin"),
        areaServed: ["IN", "MY"]
      }
    ],
    sameAs: [site.socials.linkedin, site.socials.x, site.socials.youtube]
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#local-business"),
    name: site.brandName,
    legalName: site.legalName,
    url: site.baseUrl,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/brand/vscfull-logo.png"),
    priceRange: "Project-based",
    parentOrganization: {
      "@id": absoluteUrl("/#organization")
    },
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "103, Maharana Pratap Colony, Subhash Ward",
      addressLocality: "Harda",
      addressRegion: "Madhya Pradesh",
      postalCode: "461331",
      addressCountry: "IN"
    }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: site.baseUrl,
    name: `${site.shortName} ${site.brandName}`,
    alternateName: site.brandName,
    description:
      "Official website of VSC / VirtualifyMe, a software product engineering and digital transformation company from India.",
    inLanguage: "en-IN",
    publisher: {
      "@id": absoluteUrl("/#organization")
    }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function tassengerProductSchema() {
  const androidEarlyAccessUrl = site.tassengerAndroidEarlyAccessUrl || site.playStoreUrl || absoluteUrl("/tassenger");

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": absoluteUrl("/tassenger#software"),
    name: "Tassenger",
    alternateName: "Tassenger by VSC",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Taskable messaging and accountability software",
    operatingSystem: "Android, Web",
    description:
      "Tassenger is taskable chat for personal groups and official workspaces. People chat naturally, then important messages can become visible Tasks with owner, context, due signal, proof, review, recurrence, reports, and accountable history.",
    image: absoluteUrl("/tassenger/icon.png"),
    screenshot: [
      absoluteUrl("/tassenger/store/iphone-chats.jpg"),
      absoluteUrl("/tassenger/store/iphone-tasks.jpg"),
      absoluteUrl("/tassenger/store/iphone-task-detail.jpg"),
      absoluteUrl("/tassenger/store/ipad-studio-crew.jpg"),
      absoluteUrl("/tassenger/store/ipad-tasks.jpg"),
      absoluteUrl("/tassenger/store/ipad-task-detail.jpg")
    ],
    brand: {
      "@id": absoluteUrl("/#brand")
    },
    creator: {
      "@id": absoluteUrl("/#organization")
    },
    publisher: {
      "@id": absoluteUrl("/#organization")
    },
    url: absoluteUrl("/tassenger"),
    downloadUrl: androidEarlyAccessUrl,
    installUrl: androidEarlyAccessUrl,
    softwareHelp: absoluteUrl("/tassenger/support"),
    releaseNotes:
      "Launch preparation focuses on Personal chat, groups, Core Official workspaces, message-to-Task conversion, proof, review, recurrence, reports, WebApp organization setup, and public legal/support/delete-account paths.",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      url: androidEarlyAccessUrl,
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      category: "Free Android early access with organization setup paths"
    },
    softwareRequirements: [
      "Android device for the mobile app",
      "Modern web browser for organization setup and WebApp login"
    ],
    countriesSupported: ["IN", "MY"],
    audience: {
      "@type": "Audience",
      audienceType:
        "Individuals, families, small businesses, departments, operations teams, schools, vendors, shops, studios, finance teams, and organization owners"
    },
    featureList: [
      "taskable personal chat",
      "free groups",
      "official groups and workspaces",
      "message-to-Task conversion",
      "owner and responsibility tracking",
      "due today, overdue, blocked, review and progress states",
      "proof submission",
      "review and reopen flows",
      "recurring work",
      "reports and scoring signals",
      "organization setup through WebApp",
      "roles, permissions, people, groups, calendar and audit-aware administration"
    ],
    sameAs: [absoluteUrl("/tassenger"), androidEarlyAccessUrl, site.tassengerTesterGroupUrl],
    privacyPolicy: absoluteUrl("/tassenger/privacy"),
    termsOfService: absoluteUrl("/tassenger/terms"),
    potentialAction: [
      {
        "@type": "UseAction",
        name: "Open Tassenger WebApp",
        target: absoluteUrl("/tassenger/admin")
      },
      {
        "@type": "InstallAction",
        name: "Join Tassenger Android Early Access",
        target: androidEarlyAccessUrl
      },
      {
        "@type": "JoinAction",
        name: "Join Tassenger tester group",
        target: site.tassengerTesterGroupUrl
      }
    ]
  };
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function caseStudySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/work/free-malaysia-today#case-study"),
    headline: "Free Malaysia Today platform stabilization case study",
    description:
      "A VSC case study about client work on Free Malaysia Today involving cache, CDN, WordPress, APIs, mobile behavior, and high-traffic publishing stability.",
    image: absoluteUrl("/fmt/fmt-logo.svg"),
    author: {
      "@id": absoluteUrl("/#organization")
    },
    publisher: {
      "@id": absoluteUrl("/#organization")
    },
    about: "High-traffic news platform stabilization",
    mentions: ["Free Malaysia Today", "WordPress", "CDN", "cache", "API behavior", "mobile experience"],
    mainEntityOfPage: absoluteUrl("/work/free-malaysia-today"),
    url: absoluteUrl("/work/free-malaysia-today")
  };
}

export function homepageSchema() {
  const serviceNodes = services.map((service) => ({
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    serviceType: service.title,
    category: service.group,
    description: service.summary,
    provider: {
      "@id": absoluteUrl("/#organization")
    },
    areaServed: ["India", "Malaysia", "Global remote delivery"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Growing organizations, product teams, publishers, operations teams and digital businesses"
    },
    url: absoluteUrl(`/services/${service.slug}`)
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": absoluteUrl("/#primaryimage"),
        url: absoluteUrl("/opengraph-image"),
        contentUrl: absoluteUrl("/opengraph-image"),
        caption:
          "VSC VirtualifyMe software company homepage for product engineering, modernization, automation, and digital services.",
        representativeOfPage: true
      },
      {
        "@type": "Brand",
        "@id": absoluteUrl("/#brand"),
        name: `${site.shortName} ${site.brandName}`,
        alternateName: [site.shortName, site.brandName],
        logo: absoluteUrl("/brand/vscfull-logo.png"),
        slogan: "Software that holds up when real work depends on it.",
        owner: {
          "@id": absoluteUrl("/#organization")
        }
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: site.baseUrl,
        name: `${site.shortName} ${site.brandName} | Software Product Engineering & Digital Transformation`,
        headline: "Software that holds up when real work depends on it.",
        description:
          "VirtualifyMe (VSC) builds software products, web and mobile platforms, automation systems, modernization programs, and digital services for growing organizations.",
        isPartOf: {
          "@id": absoluteUrl("/#website")
        },
        about: {
          "@id": absoluteUrl("/#organization")
        },
        mainEntity: {
          "@id": absoluteUrl("/#organization")
        },
        primaryImageOfPage: {
          "@id": absoluteUrl("/#primaryimage")
        },
        mentions: [
          {
            "@id": absoluteUrl("/tassenger#software")
          },
          {
            "@id": absoluteUrl("/work/free-malaysia-today#case-study")
          },
          {
            "@id": absoluteUrl("/#services-catalog")
          }
        ],
        significantLink: [
          absoluteUrl("/tassenger"),
          absoluteUrl("/services"),
          absoluteUrl("/industries"),
          absoluteUrl("/products"),
          absoluteUrl("/work/free-malaysia-today"),
          absoluteUrl("/contact")
        ],
        keywords:
          "software product engineering, digital transformation company, custom software development, web app development, mobile app development, platform modernization, AI automation, cloud DevOps, cybersecurity, quality engineering, data analytics, news media platform services",
        inLanguage: "en-IN"
      },
      {
        "@type": "OfferCatalog",
        "@id": absoluteUrl("/#services-catalog"),
        name: "VSC software engineering and digital services",
        description:
          "Software services VSC can deliver for organizations that need product engineering, modernization, automation, stability, visibility, and operational software.",
        provider: {
          "@id": absoluteUrl("/#organization")
        },
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": absoluteUrl(`/services/${service.slug}#service`)
          }
        }))
      },
      ...serviceNodes,
      graphNode(tassengerProductSchema()),
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#fmt"),
        name: "Free Malaysia Today",
        alternateName: "FMT",
        url: "https://www.freemalaysiatoday.com/"
      },
      graphNode(caseStudySchema())
    ]
  };
}

export function tassengerPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": absoluteUrl("/tassenger#primaryimage"),
        url: absoluteUrl("/tassenger/opengraph-image"),
        contentUrl: absoluteUrl("/tassenger/opengraph-image"),
        caption: "Tassenger taskable chat for personal groups and official workspaces by VSC VirtualifyMe",
        representativeOfPage: true
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/tassenger#webpage"),
        url: absoluteUrl("/tassenger"),
        name: "Tassenger | Taskable Chat for Personal and Official Work",
        headline: "Chat can stay natural. Work can stay accountable.",
        description:
          "Tassenger is taskable chat for personal groups and official workspaces. Messages can become visible Tasks with owner, status, proof, review, recurrence, reports, and WebApp organization setup.",
        isPartOf: {
          "@id": absoluteUrl("/#website")
        },
        about: {
          "@id": absoluteUrl("/tassenger#software")
        },
        mainEntity: {
          "@id": absoluteUrl("/tassenger#software")
        },
        primaryImageOfPage: {
          "@id": absoluteUrl("/tassenger#primaryimage")
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".tassenger-hero h1", ".tassenger-hero-copy > p", ".tassenger-product-story h2"]
        },
        breadcrumb: {
          "@id": absoluteUrl("/tassenger#breadcrumb")
        },
        hasPart: [
          {
            "@id": absoluteUrl("/tassenger#setup-steps")
          },
          {
            "@id": absoluteUrl("/tassenger#faq")
          }
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "People, families, shops, schools, departments, SMBs, organization owners, vendors, managers and cross-organization workspaces"
        },
        significantLink: [
          absoluteUrl("/tassenger/admin"),
          absoluteUrl("/tassenger/privacy"),
          absoluteUrl("/tassenger/terms"),
          absoluteUrl("/tassenger/support"),
          absoluteUrl("/tassenger/delete-account"),
          site.playStoreUrl,
          site.whatsapp
        ].filter(Boolean),
        keywords:
          "Tassenger, taskable chat, taskable messaging, accountable chat app, personal group tasks, official workspace chat, message to task app, team accountability app, organization task management, WebApp organization setup, department task tracking, proof submission, task review, recurring tasks, VSC Tassenger",
        inLanguage: "en-IN"
      },
      graphNode(tassengerProductSchema()),
      {
        "@type": "HowTo",
        "@id": absoluteUrl("/tassenger#setup-steps"),
        name: "How an organization starts with Tassenger",
        description:
          "A simple setup path for organizations that want to use Tassenger for taskable chat, people, groups, roles, policy defaults, and mobile work.",
        totalTime: "PT15M",
        tool: [
          {
            "@type": "HowToTool",
            name: "Tassenger WebApp"
          },
          {
            "@type": "HowToTool",
            name: "Tassenger mobile app"
          }
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open the WebApp",
            text: "Use the Tassenger admin entry to open the WebApp login and begin organization setup.",
            url: absoluteUrl("/tassenger/admin")
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Prepare organization rules",
            text: "Add people, groups, roles, org chart, calendar, policy defaults, and activation rules before the team starts daily work."
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Work from mobile conversations",
            text: "Use Tassenger chat for everyday coordination, then turn important messages into Tasks with visible responsibility."
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Track proof, review and reports",
            text: "Use proof, review, blocker, recurrence, reports, scoring and audit signals to keep work from disappearing inside chat."
          }
        ]
      },
      {
        "@id": absoluteUrl("/tassenger#faq"),
        ...graphNode(faqSchema(tassengerFaqs))
      },
      {
        "@id": absoluteUrl("/tassenger#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tassenger", path: "/tassenger" }
          ])
        )
      }
    ]
  };
}

function webPageNode({
  id,
  path,
  name,
  headline,
  description,
  type = "WebPage",
  breadcrumb,
  mainEntity,
  keywords
}: {
  id: string;
  path: string;
  name: string;
  headline: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ContactPage" | "AboutPage";
  breadcrumb?: string;
  mainEntity?: string | string[];
  keywords?: string;
}) {
  return {
    "@type": type,
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name,
    headline,
    description,
    isPartOf: {
      "@id": absoluteUrl("/#website")
    },
    about: {
      "@id": id
    },
    mainEntity:
      typeof mainEntity === "string"
        ? { "@id": mainEntity }
        : Array.isArray(mainEntity)
          ? mainEntity.map((item) => ({ "@id": item }))
          : { "@id": id },
    breadcrumb: breadcrumb ? { "@id": breadcrumb } : undefined,
    keywords,
    inLanguage: "en-IN",
    publisher: {
      "@id": absoluteUrl("/#organization")
    }
  };
}

function serviceNode(service: Service) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    serviceType: service.title,
    category: service.group,
    description: service.summary,
    provider: {
      "@id": absoluteUrl("/#organization")
    },
    areaServed: ["India", "Malaysia", "Global remote delivery"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: service.industries.join(", ")
    },
    termsOfService: absoluteUrl("/terms-of-use"),
    url: absoluteUrl(`/services/${service.slug}`),
    serviceOutput: service.outcomes,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Project pricing is scoped after discovery, business context, delivery depth, and specialist needs.",
      url: absoluteUrl("/contact")
    }
  };
}

function industryNode(industry: Industry) {
  return {
    "@type": "DefinedTerm",
    "@id": absoluteUrl(`/industries/${industry.slug}#industry`),
    name: industry.title,
    description: industry.summary,
    inDefinedTermSet: absoluteUrl("/industries#industry-set"),
    termCode: industry.slug,
    url: absoluteUrl(`/industries/${industry.slug}`)
  };
}

function productNode(product: Product) {
  if (product.slug === "tassenger") {
    return graphNode(tassengerProductSchema());
  }

  return {
    "@type": "CreativeWork",
    "@id": absoluteUrl(`/products/${product.slug}#product-direction`),
    name: product.title,
    alternateName: `${product.title} by VSC`,
    description: product.summary,
    creativeWorkStatus: product.status,
    creator: {
      "@id": absoluteUrl("/#organization")
    },
    publisher: {
      "@id": absoluteUrl("/#organization")
    },
    url: absoluteUrl(`/products/${product.slug}`),
    about: product.bullets
  };
}

export function servicesHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/#services-catalog"),
        path: "/services",
        type: "CollectionPage",
        name: "Software Development Services | VSC VirtualifyMe",
        headline: "Software services for building, stabilizing, securing, growing, and automating digital systems.",
        description:
          "VSC provides custom software, web, mobile, cloud, cybersecurity, testing, AI, analytics, modernization, and visibility services.",
        breadcrumb: absoluteUrl("/services#breadcrumb"),
        mainEntity: absoluteUrl("/#services-catalog"),
        keywords:
          "software development services, custom software, web app development, mobile app development, cloud DevOps, cybersecurity, QA testing, AI automation, SEO AEO GEO, data analytics"
      }),
      {
        "@type": "OfferCatalog",
        "@id": absoluteUrl("/#services-catalog"),
        name: "VSC software engineering and digital services",
        description:
          "A service catalog for organizations that need software product engineering, modernization, automation, stability, visibility, and operational software.",
        provider: {
          "@id": absoluteUrl("/#organization")
        },
        hasOfferCatalog: ["Build", "Stabilize", "Secure", "Grow", "Automate"].map((group) => ({
          "@type": "OfferCatalog",
          name: `${group} services`,
          itemListElement: services
            .filter((service) => service.group === group)
            .map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@id": absoluteUrl(`/services/${service.slug}#service`)
              }
            }))
        }))
      },
      ...services.map(serviceNode),
      {
        "@id": absoluteUrl("/services#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" }
          ])
        )
      }
    ]
  };
}

export function servicePageSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl(`/services/${service.slug}#service`),
        path: `/services/${service.slug}`,
        name: service.seoTitle,
        headline: service.title,
        description: service.metaDescription,
        breadcrumb: absoluteUrl(`/services/${service.slug}#breadcrumb`),
        mainEntity: absoluteUrl(`/services/${service.slug}#service`),
        keywords: `${service.title}, VSC, VirtualifyMe, ${service.group.toLowerCase()} services, ${service.industries.join(", ")}`
      }),
      serviceNode(service),
      {
        "@id": absoluteUrl(`/services/${service.slug}#breadcrumb`),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` }
          ])
        )
      }
    ]
  };
}

export function industriesHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/industries#industry-set"),
        path: "/industries",
        type: "CollectionPage",
        name: "Industries VSC Serves | VirtualifyMe",
        headline: "Industry software support for teams with real operating pressure.",
        description:
          "VSC helps news media, retail, education, logistics, fintech, healthcare, real estate, and public-service teams build better software.",
        breadcrumb: absoluteUrl("/industries#breadcrumb"),
        mainEntity: industries.map((industry) => absoluteUrl(`/industries/${industry.slug}#industry`)),
        keywords:
          "news media software, retail software, education software, logistics software, fintech software, healthcare software, real estate software, public services software"
      }),
      {
        "@type": "DefinedTermSet",
        "@id": absoluteUrl("/industries#industry-set"),
        name: "Industries VSC serves",
        description:
          "Industries where VSC plans, builds, modernizes, stabilizes, automates, and improves software systems.",
        hasDefinedTerm: industries.map((industry) => ({ "@id": absoluteUrl(`/industries/${industry.slug}#industry`) }))
      },
      ...industries.map(industryNode),
      {
        "@id": absoluteUrl("/industries#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" }
          ])
        )
      }
    ]
  };
}

export function industryPageSchema(industry: Industry) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl(`/industries/${industry.slug}#industry`),
        path: `/industries/${industry.slug}`,
        name: industry.seoTitle,
        headline: industry.title,
        description: industry.metaDescription,
        breadcrumb: absoluteUrl(`/industries/${industry.slug}#breadcrumb`),
        mainEntity: [
          absoluteUrl(`/industries/${industry.slug}#industry`),
          ...industry.relevantServices.map((slug) => absoluteUrl(`/services/${slug}#service`))
        ],
        keywords: `${industry.title}, software services, VSC, VirtualifyMe, ${industry.priorities.join(", ")}`
      }),
      industryNode(industry),
      ...industry.relevantServices
        .map((slug) => services.find((service) => service.slug === slug))
        .filter((service): service is Service => Boolean(service))
        .map(serviceNode),
      {
        "@id": absoluteUrl(`/industries/${industry.slug}#breadcrumb`),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.title, path: `/industries/${industry.slug}` }
          ])
        )
      }
    ]
  };
}

export function productsHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/products#product-directions"),
        path: "/products",
        type: "CollectionPage",
        name: "VSC Products and Product Directions | VirtualifyMe",
        headline: "VSC products and product directions.",
        description:
          "Explore VSC products and product directions including Tassenger and future workflow, training, travel, parking, and dashboard platforms.",
        breadcrumb: absoluteUrl("/products#breadcrumb"),
        mainEntity: products.map((product) =>
          product.slug === "tassenger"
            ? absoluteUrl("/tassenger#software")
            : absoluteUrl(`/products/${product.slug}#product-direction`)
        ),
        keywords: "VSC products, Tassenger, product directions, MVP ideas, workflow products, dashboard products"
      }),
      {
        "@type": "Collection",
        "@id": absoluteUrl("/products#product-directions"),
        name: "VSC Products and Product Directions",
        creator: {
          "@id": absoluteUrl("/#organization")
        },
        hasPart: products.map((product) => ({
          "@id":
            product.slug === "tassenger"
              ? absoluteUrl("/tassenger#software")
              : absoluteUrl(`/products/${product.slug}#product-direction`)
        }))
      },
      ...products.map(productNode),
      {
        "@id": absoluteUrl("/products#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" }
          ])
        )
      }
    ]
  };
}

export function productPageSchema(product: Product) {
  const productId =
    product.slug === "tassenger" ? absoluteUrl("/tassenger#software") : absoluteUrl(`/products/${product.slug}#product-direction`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: productId,
        path: product.slug === "tassenger" ? "/tassenger" : `/products/${product.slug}`,
        name: product.seoTitle,
        headline: product.title,
        description: product.metaDescription,
        breadcrumb: absoluteUrl(`/products/${product.slug}#breadcrumb`),
        mainEntity: productId,
        keywords: `${product.title}, VSC product direction, VirtualifyMe, ${product.bullets.join(", ")}`
      }),
      productNode(product),
      {
        "@id": absoluteUrl(`/products/${product.slug}#breadcrumb`),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.title, path: product.slug === "tassenger" ? "/tassenger" : `/products/${product.slug}` }
          ])
        )
      }
    ]
  };
}

export function workHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/work#collection"),
        path: "/work",
        type: "CollectionPage",
        name: "Work | VSC Products and Client Work",
        headline: "VSC work across owned products and public client service.",
        description: "VSC work includes Tassenger as an owned product and Free Malaysia Today as a public stabilization case study.",
        breadcrumb: absoluteUrl("/work#breadcrumb"),
        mainEntity: [absoluteUrl("/tassenger#software"), absoluteUrl("/work/free-malaysia-today#case-study")],
        keywords: "VSC work, Tassenger, Free Malaysia Today, platform stabilization, software product"
      }),
      {
        "@type": "Collection",
        "@id": absoluteUrl("/work#collection"),
        name: "VSC work",
        hasPart: [
          { "@id": absoluteUrl("/tassenger#software") },
          { "@id": absoluteUrl("/work/free-malaysia-today#case-study") }
        ]
      },
      graphNode(tassengerProductSchema()),
      graphNode(caseStudySchema()),
      {
        "@id": absoluteUrl("/work#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" }
          ])
        )
      }
    ]
  };
}

export function fmtCaseStudyPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/work/free-malaysia-today#case-study"),
        path: "/work/free-malaysia-today",
        name: "Free Malaysia Today Case Study | VSC Stabilization Work",
        headline: "Free Malaysia Today platform stabilization case study.",
        description:
          "VSC stabilized FMT across cache, CDN, WordPress, APIs, mobile behavior, and high-traffic reader experience.",
        breadcrumb: absoluteUrl("/work/free-malaysia-today#breadcrumb"),
        mainEntity: absoluteUrl("/work/free-malaysia-today#case-study"),
        keywords: "Free Malaysia Today, FMT, news platform stabilization, WordPress, CDN, cache, API, mobile behavior"
      }),
      graphNode(caseStudySchema()),
      {
        "@id": absoluteUrl("/work/free-malaysia-today#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "Free Malaysia Today", path: "/work/free-malaysia-today" }
          ])
        )
      }
    ]
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/#organization"),
        path: "/about",
        type: "AboutPage",
        name: "About VSC VirtualifyMe",
        headline: "A software company from India building products and digital systems for serious trust.",
        description:
          "VirtualifyMe is Virtualify Software Consultancy Pvt. Ltd., a software company from Harda, Madhya Pradesh.",
        breadcrumb: absoluteUrl("/about#breadcrumb"),
        mainEntity: absoluteUrl("/#organization"),
        keywords: "VirtualifyMe, VSC, Virtualify Software Consultancy Pvt. Ltd., software company India"
      }),
      {
        "@id": absoluteUrl("/about#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
          ])
        )
      }
    ]
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/#organization"),
        path: "/contact",
        type: "ContactPage",
        name: "Contact VSC VirtualifyMe",
        headline: "Contact VSC for software development, Tassenger setup, modernization, and product work.",
        description:
          "Contact VirtualifyMe by WhatsApp or email for software development, Tassenger setup, modernization, and product work.",
        breadcrumb: absoluteUrl("/contact#breadcrumb"),
        mainEntity: absoluteUrl("/#organization"),
        keywords: "contact VSC, contact VirtualifyMe, software development inquiry, Tassenger setup"
      }),
      {
        "@type": "ContactPoint",
        "@id": absoluteUrl("/contact#primary-contact"),
        contactType: "sales and project inquiries",
        email: site.email,
        telephone: site.phone,
        url: site.whatsapp,
        availableLanguage: ["en", "hi"],
        areaServed: ["IN", "MY"]
      },
      {
        "@id": absoluteUrl("/contact#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" }
          ])
        )
      }
    ]
  };
}

export function tassengerAdminPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl("/tassenger#software"),
        path: "/tassenger/admin",
        name: "Tassenger WebApp Login | Organization Setup",
        headline: "Tassenger WebApp login for organization setup.",
        description:
          "Tassenger WebApp entry for organization setup, people, roles, permissions, groups, policies, reports, and official workspace administration.",
        breadcrumb: absoluteUrl("/tassenger/admin#breadcrumb"),
        mainEntity: absoluteUrl("/tassenger#software"),
        keywords: "Tassenger WebApp login, Tassenger admin, organization setup, roles permissions, groups, departments, VSC"
      }),
      graphNode(tassengerProductSchema()),
      {
        "@id": absoluteUrl("/tassenger/admin#breadcrumb"),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tassenger", path: "/tassenger" },
            { name: "Admin", path: "/tassenger/admin" }
          ])
        )
      }
    ]
  };
}

export function legalPageSchema(page: (typeof legalPages)[number]) {
  const path = `/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({
        id: absoluteUrl(`${path}#policy`),
        path,
        name: page.title,
        headline: page.title,
        description: page.description,
        breadcrumb: absoluteUrl(`${path}#breadcrumb`),
        mainEntity: absoluteUrl(`${path}#policy`),
        keywords: `${page.title}, VSC, VirtualifyMe, legal`
      }),
      {
        "@type": "CreativeWork",
        "@id": absoluteUrl(`${path}#policy`),
        name: page.title,
        description: page.description,
        publisher: {
          "@id": absoluteUrl("/#organization")
        },
        url: absoluteUrl(path)
      },
      {
        "@id": absoluteUrl(`${path}#breadcrumb`),
        ...graphNode(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path }
          ])
        )
      }
    ]
  };
}
