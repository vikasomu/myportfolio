"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/lib/resume-data";

export default function Education() {
  return (
    <AnimatedSection id="education">
      <SectionHeading label="Education" title="Academic background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glow-border mx-auto max-w-2xl rounded-2xl bg-card p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <GraduationCap size={28} className="text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{education.degree}</h3>
        <p className="mt-2 text-muted">{education.institution}</p>
        <p className="mt-3 font-mono text-sm text-accent">{education.period}</p>
      </motion.div>
    </AnimatedSection>
  );
}
