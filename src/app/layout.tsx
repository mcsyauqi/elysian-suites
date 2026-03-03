import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Elysian Suites | Luxury Serviced Apartments in Jakarta",
  description:
    "Fully furnished luxury suites in Jakarta's prime locations. Studio, One-Bedroom & Penthouse apartments with world-class amenities. Move in tomorrow.",
  keywords:
    "luxury apartments Jakarta, serviced apartments, furnished suites, SCBD apartments, premium living Jakarta",
  openGraph: {
    title: "Elysian Suites | Live Above the Ordinary",
    description:
      "Fully furnished luxury suites in Jakarta's prime locations. Move in tomorrow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
