import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended Tech Stack for Founders | LeanVentures",
  description:
    "Our curated list of tools and software we use and recommend to every founder. Automation, databases, hosting, design, AI, and payments.",
};

export default function TechStackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
