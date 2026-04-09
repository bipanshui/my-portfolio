"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type BadgeVariant = "default" | "secondary" | "success" | "warning" | "destructive" | "outline" | "cyan" | "primary" | "green" | "yellow";

const skillCategories: { title: string; skills: string[]; color: BadgeVariant }[] = [
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes (learning)", "AWS", "Terraform", "Ansible", "GitHub Actions", "Linux"],
    color: "primary",
  },
  {
    title: "Languages",
    skills: ["Python", "Bash", "YAML", "HCL"],
    color: "cyan",
  },
  {
    title: "Backend",
    skills: ["REST APIs", "PostgreSQL", "Redis (basic)"],
    color: "green",
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Nginx", "CI/CD Pipelines"],
    color: "yellow",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Toolbox</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies I use to build reliable, automated systems
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default"
                  >
                    <Badge
                      variant={category.color}
                      className="px-3 py-1.5 text-sm cursor-default hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}