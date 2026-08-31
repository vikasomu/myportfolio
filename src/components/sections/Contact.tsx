"use client";

import { motion } from "framer-motion";
import { Link2, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/resume-data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/vikasomu",
    href: personalInfo.linkedin,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="bg-card/30">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        subtitle="Open to discussing new opportunities, collaborations, or challenging engineering problems."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glow-border flex h-full flex-col items-center rounded-2xl bg-card p-6 text-center transition-shadow hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Icon size={22} className="text-accent" />
              </div>
              <p className="mb-1 text-xs tracking-wider text-muted uppercase">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </motion.div>
          );

          return item.href ? (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex rounded-full bg-gradient-to-r from-accent to-indigo-500 px-10 py-4 text-sm font-medium text-white transition-all hover:shadow-xl hover:shadow-accent/30"
        >
          Send an Email
        </a>
      </motion.div>
    </AnimatedSection>
  );
}
