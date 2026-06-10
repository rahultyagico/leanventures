import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self Hosting Infrastructure — Own Your Stack | Create Workflow",
  description:
    "We set up and manage your self-hosted AI infrastructure — open-source models, private databases, and full-stack deployments on your own servers. Your data, your control.",
};

export default function SelfHostingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
