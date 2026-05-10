import type { Metadata } from "next";
import { About } from "@/components/about";

export const metadata: Metadata = {
  title: "About | Bipanshu Kumar",
  description: "Background, goals, and devops-focused story for Bipanshu Kumar.",
};

export default function AboutPage() {
  return (
    <section className="pt-24 pb-16">
      <About />
    </section>
  );
}
