"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/resume-data";

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading
        label="Experience"
        title="Professional journey"
        subtitle="5 years of building production systems across enterprise CRM, government platforms, and web applications."
      />

      <div className="relative space-y-8">
        <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:block" />

        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:pl-12"
          >
            <div className="absolute top-6 left-0 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-card md:flex">
              <Briefcase size={16} className="text-accent" />
            </div>

            <div className="glow-border rounded-2xl bg-card p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="mt-1 text-lg text-accent">{exp.company}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>

              <div className="mb-5 flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} />
                {exp.location}
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + i * 0.04 }}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
