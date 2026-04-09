import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import GTMScript from "@/components/GTMScript"; // import client component

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
      <body className={`${outfit.variable} ${inter.variable}`}>
	<GTMScript />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
