import type { Metadata } from "next";
import { Projects } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects | Bipanshu Kumar",
  description: "Selected systems, automation work, and portfolio projects.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-24 pb-16">
      <Projects />
    </section>
  );
}
