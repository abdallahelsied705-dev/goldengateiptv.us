import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IptvUkGuide from "./components/IptvUkGuide";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Channels from "./components/Channels";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import OfferBanner from "./components/OfferBanner";
import SocialProof from "./components/SocialProof";
import FinalCTA from "./components/FinalCTA";
import { homeFaqs } from "./lib/faqs";
import { SITE_URL } from "./lib/site";

const BASE_URL = SITE_URL;

const TITLE = "IPTV USA 2026 — 50,000+ Live Channels & 4K Subscription";
const DESCRIPTION =
  "A US IPTV subscription with 50,000+ live channels and 200,000+ movies & series in up to 4K, streamed over your internet. Works on Firestick, Smart TV, Android & iPhone. Plans from $9.99, free 24-hour trial.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: BASE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: BASE_URL },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const plans = [
  { name: "IPTV USA 1 Month Plan", slug: "1-month-iptv-usa", price: "9.99" },
  { name: "IPTV USA 3 Month Plan", slug: "3-month-iptv-usa", price: "25" },
  { name: "IPTV USA 6 Month Plan", slug: "6-month-iptv-usa", price: "39.99" },
  { name: "IPTV USA 12 Month Plan", slug: "12-month-iptv-usa", price: "69.99" },
  { name: "IPTV USA 24 Month Plan", slug: "24-month-iptv-usa", price: "119" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "IPTV USA",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png`, width: 512, height: 512 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "goldengateiptv@gmail.com",
        telephone: "+212707711512",
        availableLanguage: "English",
        areaServed: "GB",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "IPTV USA",
      inLanguage: "en-US",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#product` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#product`,
      name: "IPTV USA Subscription",
      description:
        "A US IPTV subscription delivering 50,000+ live channels and 200,000+ movies and series on demand in up to 4K, with 7-day catch-up, a full EPG and WhatsApp support around the clock.",
      image: `${BASE_URL}/og-image.png`,
      brand: { "@type": "Brand", name: "IPTV USA" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "9.99",
        highPrice: "119",
        offerCount: plans.length,
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          url: `${BASE_URL}/product/${p.slug}`,
          seller: { "@id": `${BASE_URL}/#organization` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <OfferBanner />
      <Navbar withBanner />
      <main>
        <Hero />
        <IptvUkGuide />
        <Features />
        <Pricing />
        <Devices />
        <Setup />
        <Channels />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}
