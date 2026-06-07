import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Workflow — Building Tools and Services for Founders",
  description:
    "Create Workflow is a studio that helps early-stage founders move faster — through hands-on automation services and purpose-built products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script defer data-domain="createworkflow.io" src="https://analytics.createworkflow.io/js/script.file-downloads.outbound-links.pageview-props.revenue.tagged-events.js"></script>
        <script dangerouslySetInnerHTML={{ __html: "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }" }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
