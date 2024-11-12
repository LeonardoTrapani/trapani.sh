import "~~/styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clx } from "~~/utils";
import { Navbar } from "~~/app/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import { CSPostHogProvider } from "~~/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://leotrapani.com"),
  title: {
    default: "Leonardo Trapani",
    template: "%s | Leonardo Trapani",
  },
  description:
    "software developer and entrepreneur. i build exciting projects and engage in creative entrepreneurial endeavours. i turn mine and your ideas into reality, with the latest technologies in the software development space",
  openGraph: {
    title: "Leonardo Trapani",
    description: "Developer, Entrepreneur, Teenager",
    url: "https://leotrapani.com",
    siteName: "Leonardo Trapani",
    locale: "en_US",
    type: "website",
    images: ["https://leotrapani.com/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: "index, follow",
  },
  applicationName: "Leonardo Trapani",
  creator: "Leonardo Trapani",
  keywords: [
    "Leonardo Trapani",
    "developer",
    "entrepreneur",
    "blog",
    "portfolio",
    "full stack",
  ],
  twitter: {
    title: "Leonardo Trapani",
    card: "summary_large_image",
    creator: "@leonardotrapani",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://leotrapani.com/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={clx(
          "bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
          <CSPostHogProvider>
            <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
              <Navbar />
              {children}
              <Analytics />
            </main>
          </CSPostHogProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
