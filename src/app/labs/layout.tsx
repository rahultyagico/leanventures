import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeanVentures Labs — Custom Development for Founders",
  description:
    "Elite custom development services. AI agents, bespoke internal tools, complex integrations, and full-stack builds for founders who need more than off-the-shelf solutions.",
};

export default function LabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
