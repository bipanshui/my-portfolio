"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["DevOps Engineer", "Cloud Enthusiast", "Automation Builder"];

const terminalLines = [
  { text: "$ docker build -t myapp .", delay: 0 },
  { text: "Sending build context to Docker daemon  2.5MB", delay: 800 },
  { text: "Step 1/5 : FROM node:20-alpine", delay: 1200 },
  { text: "Step 5/5 : CMD [\"node\", \"server.js\"]", delay: 1800 },
  { text: "Successfully built abc123", delay: 2400 },
  { text: "Successfully tagged myapp:latest", delay: 3000 },
  { text: "", delay: 3500 },
  { text: "$ terraform apply", delay: 4000 },
  { text: "Terraform used the following providers:", delay: 4600 },
  { text: "  aws: hashicorp/aws:4.0.0", delay: 5000 },
  { text: "Apply complete! Resources: 2 added, 0 changed, 0 destroyed.", delay: 5600 },
  { text: "", delay: 6200 },
  { text: "$ echo \"Let's build something.\"", delay: 6800 },
  { text: "Let's build something.", delay: 7400 },
];

export function Hero() {
  const [currentRole, setCurrentRole] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [visibleLines, setVisibleLines] = React.useState<number[]>([]);

  React.useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  React.useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < roles[currentRole].length) {
        setDisplayedText(roles[currentRole].slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [currentRole]);

  React.useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    terminalLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I&apos;m Bipanshu
            </motion.p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Building Systems
              <br />
              <span className="text-primary">That Scale.</span>
            </h1>
          </div>

          <div className="h-8">
            <p className="text-xl text-muted-foreground">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-muted-foreground mt-2">
              I automate, deploy, and obsess over infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollToSection("#projects")}>
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              <ArrowDown className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur-2xl" />
          <div className="relative bg-zinc-900 dark:bg-zinc-950 rounded-xl border border-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-zinc-950/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-1 min-h-[280px]">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: visibleLines.includes(index) ? 1 : 0,
                    x: visibleLines.includes(index) ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                  className={
                    line.text.startsWith("$")
                      ? "text-cyan-400"
                      : line.text.includes("✓") || line.text.includes("Successfully")
                      ? "text-green-400"
                      : line.text.startsWith("Step")
                      ? "text-yellow-400"
                      : "text-muted-foreground"
                  }
                >
                  {line.text || "\u00A0"}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}