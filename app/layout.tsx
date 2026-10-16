import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { BRAND } from "@/lib/content";

export const viewport: Viewport = {
  themeColor: "#1B243A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.domain),
  title: {
    default: `${BRAND.name} | Luxury Wedding Planning & Coordination in UAE`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Bespoke luxury wedding planning and coordination studio based in the United Arab Emirates. Guided by the meaning of Vesper — the evening star. Designing refined celebrations across Dubai, Abu Dhabi, and all seven Emirates.",
  keywords: [
    "UAE wedding planner",
    "luxury wedding planning Dubai",
    "Abu Dhabi wedding coordination",
    "destination wedding UAE",
    "wedding stage design UAE",
    "kosha design",
    "bridal luxe prep",
    "vesper wedding company"
  ],
  authors: [{ name: BRAND.contactPerson }],
  creator: BRAND.name,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: BRAND.domain,
    title: `${BRAND.name} | Luxury Wedding Planning & Design in UAE`,
    description: "Your story. Our care. A beautiful evening to remember. Bespoke wedding planning, design, and Luxe Prep across the United Arab Emirates.",
    siteName: BRAND.name,
    images: [
      {
        url: "/images/hero/vesper-blue-hour-reception.jpg",
        width: 1920,
        height: 1080,
        alt: "Vesper Wedding Company - Luxury Wedding Reception in UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | Luxury Wedding Planning in UAE`,
    description: "Your story. Our care. A beautiful evening to remember.",
    images: ["/images/hero/vesper-blue-hour-reception.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WeddingService",
    "name": BRAND.name,
    "alternateName": BRAND.shortName,
    "url": BRAND.domain,
    "telephone": BRAND.phone,
    "email": BRAND.emailClientSupplied,
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "description": "Bespoke wedding planning and coordination studio based in the United Arab Emirates.",
    "slogan": BRAND.tagline,
    "knowsAbout": [
      "Wedding Planning",
      "Event Styling",
      "Stage Design",
      "Floral Decoration",
      "Cultural Celebrations",
      "Bridal Luxe Prep",
      "Groom Luxe Prep"
    ]
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
