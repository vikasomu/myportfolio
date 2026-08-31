"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/resume-data";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-card/30">
      <SectionHeading
        label="Projects"
        title="Featured work"
        subtitle="Enterprise platforms and applications built across market research, government, healthcare, and collaboration domains."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`glow-border group relative overflow-hidden rounded-2xl bg-card p-6 md:p-8 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-all group-hover:bg-accent/20" />

            <div className="relative">
              <div className="mb-2 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                </div>
                <ExternalLink
                  size={18}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </div>

              <p className="mb-5 leading-relaxed text-muted">{project.description}</p>

              {project.highlights.length > 0 && (
                <ul className="mb-5 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted"
                    >
                      <span className="text-accent">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
