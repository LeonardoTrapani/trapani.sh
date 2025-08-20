import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://trapani.sh"),
  title: {
    default: "Leonardo Trapani",
    template: "%s | Leonardo Trapani",
  },
  description: "19, developer, dreamer and entrepreneur.",
  openGraph: {
    title: "Leonardo Trapani",
    description: "19, developer, dreamer and entrepreneur.",
    url: "https://trapani.sh",
    siteName: "Leonardo Trapani",
    locale: "en_US",
    type: "website",
    images: ["https://trapani.sh/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Leonardo Trapani",
    card: "summary_large_image",
    creator: "@trapani",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
