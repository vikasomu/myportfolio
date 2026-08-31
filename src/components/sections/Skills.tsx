"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/resume-data";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-card/30">
      <SectionHeading
        label="Skills"
        title="Technical expertise"
        subtitle="Technologies and tools I use to build scalable, secure, and performant applications."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            whileHover={{ y: -4 }}
            className="glow-border rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5"
          >
            <h3 className="mb-4 font-mono text-sm tracking-wider text-accent uppercase">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.05 + skillIndex * 0.03 }}
                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent/30 hover:bg-accent/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
