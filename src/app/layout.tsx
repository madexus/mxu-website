import type { Metadata } from "next";
import "./globals.css";
import "./cookie-consent.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "madeXus — Culture. Women. Sports.",
  description:
    "madeXus is the cultural intelligence agency that connects brands authentically with women's fandoms — through strategy, media, creators, and activations. We are the insiders.",
  keywords: [
    "women's sports marketing",
    "women's sports agency",
    "culture agency",
    "fandom marketing",
    "fandom marketing agency",
    "women's sports",
    "women's fandoms",
    "creator network",
    "creator ad network",
    "brand strategy",
    "cultural intelligence",
    "women in sports",
    "sports culture marketing",
    "women's sports sponsorship",
    "brand activations women's sports",
    "media planning women's sports",
    "women raise the game",
    "WRTG",
    "madeXus",
    "madexus",
    "independent creative agency",
    "woman-owned agency",
    "multicultural marketing agency",
    "Los Angeles creative agency",
  ],
  metadataBase: new URL("https://madexus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "madeXus — Culture. Women. Sports.",
    description:
      "The cultural intelligence agency that connects brands authentically with women's fandoms. Strategy, media, creators, and activations.",
    url: "https://madexus.com",
    type: "website",
    locale: "en_US",
    siteName: "madeXus",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "madeXus — Culture. Women. Sports. The cultural intelligence agency.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "madeXus — Culture. Women. Sports.",
    description:
      "The cultural intelligence agency that connects brands authentically with women's fandoms.",
    images: ["/images/og-image.jpg"],
    creator: "@madexus",
    site: "@madexus",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

// JSON-LD Structured Data for SEO + AI/LLM discoverability
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://madexus.com/#organization",
      name: "madeXus",
      alternateName: ["Made X Us", "MXU"],
      url: "https://madexus.com",
      logo: {
        "@type": "ImageObject",
        url: "https://madexus.com/madexus-logo.svg",
      },
      description:
        "madeXus is a culture-first creative agency specializing in connecting brands authentically with women's fandoms across sports, entertainment, and culture. We are the insiders.",
      foundingDate: "2018",
      foundingLocation: {
        "@type": "Place",
        name: "Los Angeles, California",
      },
      areaServed: "United States",
      sameAs: [
        "https://www.linkedin.com/company/madexus",
        "https://www.instagram.com/madexus",
        "https://womenraisethegame.com",
      ],
      knowsAbout: [
        "Women's sports marketing",
        "Fandom marketing",
        "Cultural intelligence",
        "Creator networks",
        "Brand activations",
        "Women's sports sponsorship",
        "Media planning and buying",
        "Sports culture marketing",
        "Brand strategy for women's audiences",
        "Multicultural marketing",
        "Creator ad networks",
        "Women Raise the Game",
      ],
      slogan: "Culture. Women. Sports.",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 7,
        maxValue: 10,
      },
      founder: {
        "@type": "Person",
        name: "Tish Galindo",
        jobTitle: "CEO & Founder",
      },
      employee: [
        {
          "@type": "Person",
          name: "Tish Galindo",
          jobTitle: "CEO & Founder",
        },
        {
          "@type": "Person",
          name: "Tamala Barksdale",
          jobTitle: "Chief Strategy Officer",
        },
        {
          "@type": "Person",
          name: "Christopher Roberts",
          jobTitle: "Managing Director",
        },
        {
          "@type": "Person",
          name: "Yvette Villanueva",
          jobTitle: "Senior Director of Growth & Partnerships",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Media Planning & Buying",
              description:
                "Strategic media planning and buying that reaches women where they actually engage. Data-driven, culturally intelligent, fandom-first.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fandom Marketing Consultation & Campaign",
              description:
                "Strategic consultation and full campaign execution for brands ready to tap into women's fandoms. From insight to activation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Creators & Proprietary Creator Ad Network",
              description:
                "A curated network of women-led creators who drive authentic brand conversations across sports, lifestyle, and culture.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Women Raise the Game",
              description:
                "A proprietary media platform, community, and cultural engine demonstrating how brands become part of women's sports culture.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Culture, Women, Sport — Briefs & RFPs",
              description:
                "Full-service brief development and RFP response for brands investing in the women's sports and culture space.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://madexus.com/#website",
      url: "https://madexus.com",
      name: "madeXus",
      publisher: { "@id": "https://madexus.com/#organization" },
      description:
        "madeXus is the cultural intelligence agency that connects brands authentically with women's fandoms.",
    },
    {
      "@type": "WebPage",
      "@id": "https://madexus.com/#webpage",
      url: "https://madexus.com",
      name: "madeXus — Culture. Women. Sports.",
      isPartOf: { "@id": "https://madexus.com/#website" },
      about: { "@id": "https://madexus.com/#organization" },
      description:
        "madeXus is a culture-first creative agency built on a simple belief: brands win when they participate in culture alongside the people who shape it. We specialize at the intersection of women, sports, and the fandoms driving the biggest cultural shift in a generation.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://madexus.com/images/og-image.jpg",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data — SEO + AI/LLM discoverability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
