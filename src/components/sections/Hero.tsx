"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/lib/resume-data";

const HeroBackground = dynamic(() => import("@/components/three/HeroBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950/20 to-background" />
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16 md:px-12"
    >
      <HeroBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-max relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-4 font-mono text-sm tracking-widest text-accent uppercase"
        >
          {personalInfo.title}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          <br />
          <span className="text-foreground">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {personalInfo.summary.split(".")[0]}.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-10 flex items-center justify-center gap-2 text-sm text-muted"
        >
          <MapPin size={16} className="text-accent" />
          {personalInfo.location}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-indigo-500 px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-white/5"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-muted uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
