import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.rasyatek.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rasyatek Mühendislik | Elektrik Taahhüt ve Mühendislik Çözümleri",
    template: "%s | Rasyatek Mühendislik",
  },
  description:
    "Rasyatek Mühendislik Yatırım Ltd. Şti. — Elektrik taahhüt, projelendirme, yüksek gerilim işletme, bakım-onarım ve akıllı otomasyon çözümleri. İstanbul merkezli mühendislik firması.",
  keywords: [
    "Rasyatek",
    "Rasyatek Mühendislik",
    "Rasyatek Mühendislik Yatırım",
    "elektrik taahhüt",
    "elektrik projelendirme",
    "yüksek gerilim işletme",
    "elektrik mühendislik",
    "harmonik filtre",
    "SVG kompanzasyon",
    "akıllı ev otomasyon",
    "alçak gerilim panoları",
    "İstanbul elektrik firması",
  ],
  authors: [{ name: "Rasyatek Mühendislik Yatırım Ltd. Şti.", url: SITE_URL }],
  creator: "Rasyatek Mühendislik",
  publisher: "Rasyatek Mühendislik Yatırım Ltd. Şti.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "tr-TR": `${SITE_URL}/tr`,
      "en-US": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Rasyatek Mühendislik",
    title: "Rasyatek Mühendislik | Elektrik Taahhüt ve Mühendislik Çözümleri",
    description:
      "Rasyatek Mühendislik Yatırım Ltd. Şti. — Elektrik taahhüt, projelendirme, yüksek gerilim işletme ve otomasyon çözümleri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rasyatek Mühendislik",
      },
    ],
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
  verification: {
    // Google Search Console doğrulama kodunuzu buraya ekleyin:
    // google: "xxxxxxxxxxxxxxxxxxxx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rasyatek Mühendislik Yatırım Ltd. Şti.",
              alternateName: ["Rasyatek", "Rasyatek Mühendislik"],
              url: SITE_URL,
              logo: `${SITE_URL}/rasyatek-logo.png`,
              description:
                "Elektrik taahhüt, projelendirme, yüksek gerilim işletme, bakım-onarım ve akıllı otomasyon çözümleri sunan mühendislik firması.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "TR",
                addressRegion: "İstanbul",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Turkish", "English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/rasyatek",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
