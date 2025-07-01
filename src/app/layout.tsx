import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "BrewTk - IT Services Agency | Web Applications, Cloud & DevOps, AI Services",
    template: "%s | BrewTk"
  },
  description: "BrewTk provides comprehensive IT services for small businesses, SMEs, and enterprises. Specializing in web applications, cloud & DevOps, AI services, UI/UX design, and QA testing. Transform your business with cutting-edge technology solutions.",
  keywords: [
    "IT services",
    "web development",
    "cloud services",
    "DevOps",
    "AI services",
    "machine learning",
    "UI/UX design",
    "QA testing",
    "small business IT",
    "enterprise solutions",
    "digital transformation",
    "software development",
    "AWS",
    "Azure",
    "React",
    "Node.js",
    "Python",
    "San Francisco IT company"
  ],
  authors: [{ name: "BrewTk", url: "https://brewtk.com" }],
  creator: "BrewTk",
  publisher: "BrewTk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brewtk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brewtk.com',
    siteName: 'BrewTk',
    title: 'BrewTk - IT Services Agency | Web Applications, Cloud & DevOps, AI Services',
    description: 'Transform your business with BrewTk\'s comprehensive IT services. Specializing in web applications, cloud & DevOps, AI services, UI/UX design, and QA testing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrewTk - IT Services Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brewtk',
    creator: '@brewtk',
    title: 'BrewTk - IT Services Agency | Web Applications, Cloud & DevOps, AI Services',
    description: 'Transform your business with BrewTk\'s comprehensive IT services. Specializing in web applications, cloud & DevOps, AI services, UI/UX design, and QA testing.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#7c3aed" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="theme-color" content="#7c3aed" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BrewTk",
              "url": "https://brewtk.com",
              "logo": "https://brewtk.com/logo.png",
              "description": "BrewTk provides comprehensive IT services for small businesses, SMEs, and enterprises. Specializing in web applications, cloud & DevOps, AI services, UI/UX design, and QA testing.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@brewtk.com"
              },
              "sameAs": [
                "https://linkedin.com/company/brewtk",
                "https://twitter.com/brewtk",
                "https://github.com/brewtk"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 37.7749,
                  "longitude": -122.4194
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Applications",
                      "description": "Custom web applications built with modern technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud & DevOps",
                      "description": "Scalable cloud infrastructure and DevOps practices"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Services",
                      "description": "Intelligent solutions powered by machine learning"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
