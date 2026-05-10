import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bipanshu Kumar | DevOps Engineer",
  description: "A focused DevOps portfolio with dedicated pages for about, skills, projects, and contact.",
};

const routes = [
  {
    href: "/about",
    title: "About",
    description: "Who I am, what I build, and what I’m aiming for.",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "A closer look at the systems and work samples.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Open Gmail, social links, and direct contact options.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {route.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Open Contact</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
