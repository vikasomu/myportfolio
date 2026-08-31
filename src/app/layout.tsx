import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Narayan Mishra | Senior Software Engineer",
  description:
    "Software Engineer with 5 years of experience building scalable web applications with React, Next.js, TypeScript, and Node.js. Serving 100K+ users across enterprise CRM and government platforms.",
  keywords: [
    "Vikas Narayan Mishra",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Vikas Narayan Mishra" }],
  openGraph: {
    title: "Vikas Narayan Mishra | Senior Software Engineer",
    description:
      "Software Engineer with 5 years of experience building scalable, high-traffic web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
