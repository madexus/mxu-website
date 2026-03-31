import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "madeXus — Culture. Women. Sport.",
  description:
    "madeXus is the cultural intelligence agency that connects brands authentically with women's fandoms — through strategy, media, creators, and activations.",
  keywords: [
    "women's sports marketing",
    "culture agency",
    "fandom marketing",
    "women's sports",
    "creator network",
    "brand strategy",
    "madeXus",
  ],
  openGraph: {
    title: "madeXus — Culture. Women. Sport.",
    description:
      "The cultural intelligence agency that connects brands authentically with women's fandoms.",
    type: "website",
    locale: "en_US",
    siteName: "madeXus",
  },
  twitter: {
    card: "summary_large_image",
    title: "madeXus — Culture. Women. Sport.",
    description:
      "The cultural intelligence agency that connects brands authentically with women's fandoms.",
  },
  icons: {
    icon: "/favicon.svg",
  },
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
