"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/resume-data";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100K+", label: "Active Users Served" },
  { value: "4", label: "Major Projects" },
  { value: "2", label: "Awards Received" },
];

export default function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeading
        label="About"
        title="Building systems that scale"
        subtitle="From frontend interfaces to backend microservices — focused on performance, security, and user impact."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted">
            {personalInfo.summary}
          </p>
          <p className="leading-relaxed text-muted">
            Currently serving as {personalInfo.title} at Jasper Colin, where I architect
            AI-enabled platforms serving 100K+ users. Previously at Svelte Tech Technology,
            I led development of multilingual government platforms and was recognized as
            Employee of the Year.
          </p>

          <div className="flex flex-wrap gap-3">
            {["High Flyer Award", "Employee of the Year"].map((award) => (
              <span
                key={award}
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300"
              >
                <Award size={14} />
                {award}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glow-border rounded-2xl bg-card p-6"
            >
              <p className="gradient-text text-3xl font-bold md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
