import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your AI OS — AI Operating System for Your Business | Create Workflow",
  description:
    "We design and deploy a complete AI operating system for your business — connected agents, knowledge bases, automations, and dashboards that run your operations on autopilot.",
};

export default function AIOperatingSystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
