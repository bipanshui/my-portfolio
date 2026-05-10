import type { Metadata } from "next";
import { Skills } from "@/components/skills";

export const metadata: Metadata = {
  title: "Skills | Bipanshu Kumar",
  description: "A curated view of the tools, platforms, and practices I use.",
};

export default function SkillsPage() {
  return (
    <section className="pt-24 pb-16">
      <Skills />
    </section>
  );
}
