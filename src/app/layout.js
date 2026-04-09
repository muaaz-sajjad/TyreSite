'use client'
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://mobiluxetyres.co.uk"),
  title: "Mobiluxe Tyres — Premium 24/7 Mobile Tyre Fitting | London & Surrounding Areas",
  description:
    "Premium mobile tyre fitting service across London & surrounding counties. 24/7 emergency callouts, 30-minute response, professional fitting at your location. Call now for same-day service.",
  keywords:
    "mobile tyre fitting, tyre repair, tyre replacement, 24/7 tyre service, London, emergency tyre, mobile mechanic",
  openGraph: {
    title: "Mobiluxe Tyres — Premium 24/7 Mobile Tyre Fitting",
    description:
      "Premium mobile tyre fitting service across London & surrounding counties. 24/7 emergency callouts with 30-minute response time.",
    url: "https://mobiluxetyres.co.uk",
    siteName: "Mobiluxe Tyres",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobiluxe Tyres — Premium 24/7 Mobile Tyre Fitting",
    description:
      "24/7 mobile tyre fitting & repair across London. Fast, professional, at your doorstep.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
	<Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5DZRTW6Z');`,
        }}
      />
      <body className={`${outfit.variable} ${inter.variable}`}>
	{/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DZRTW6Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
