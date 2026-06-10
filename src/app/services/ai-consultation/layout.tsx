import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Hour AI Consultation — Clarity in 60 Minutes | Create Workflow",
  description:
    "Book a focused one-hour session with an AI expert. Walk away with a clear action plan, model recommendations, and next steps — no fluff, no sales pitch.",
};

export default function AIConsultationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
