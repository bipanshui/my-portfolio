"use client";

import * as React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Cloud Tools", value: "3+" },
  { label: "Goal", value: "Ship Real Systems" },
];

const aboutText = `I'm Bipanshu Kumar, a Computer Science student from India, building toward a career in DevOps 
Engineering. I work with tools like Docker, AWS, Terraform, GitHub Actions, 
Ansible, and Python — not just to learn them, but to build things that actually 
run in the real world. Right now I'm developing projects like an attendance 
system and various automation tools that solve real problems. I'm drawn to 
backend systems and infrastructure because I like understanding how things work 
under the hood — how code moves from a local machine to a live server, how 
systems scale, and how failures get caught before users ever see them. My 
approach is simple: build, break, fix, repeat. Over the next year, my goal is 
to be genuinely job-ready — not just resume-ready — by shipping systems that 
are reliable, automated, and built to last.`;

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl blur-2xl opacity-50" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl border-4 border-primary/30 overflow-hidden bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=BK"
                  alt="Bipanshu Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {aboutText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid sm:grid-cols-3 gap-4 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}