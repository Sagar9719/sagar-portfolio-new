import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Android Developer",
    "iOS Developer",
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "WebRTC",
    "LiveKit",
    "MediaSoup",
    "Freelance Developer",
    "Noida",
    "India",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressCountry: "IN",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Android Development",
    "iOS Development",
    "Kotlin",
    "Jetpack Compose",
    "WebRTC",
    "Live Streaming",
    "Node.js",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
