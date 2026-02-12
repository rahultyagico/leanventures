import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeanWorkflows.ai — Technical Services for Non-Technical Founders",
  description:
    "We build the automations and systems you need to scale — n8n workflows, Airtable backends, and custom integrations so you can focus on growing your business.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
