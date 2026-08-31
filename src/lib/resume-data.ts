export const personalInfo = {
  name: "Vikas Narayan Mishra",
  title: "Senior Software Engineer",
  location: "Gurugram, India",
  phone: "+91 89793 17496",
  email: "mishra.vikasomu@gmail.com",
  linkedin: "https://linkedin.com/in/vikasomu",
  summary:
    "Software Engineer with 5 years of experience architecting and building scalable, high-traffic web applications using React, Next.js, TypeScript, and Node.js. Proven track record designing microservices, async data pipelines, and secure, compliant systems serving 100K+ users, with strong focus on system design, performance, and DevSecOps.",
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "React Hooks",
      "Tailwind CSS",
      "Styled Components",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Web Accessibility",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Async/Job-Based Processing",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Azure (Blob Storage, Graph API)",
      "AWS (S3, SES)",
    ],
  },
  {
    title: "State & Performance",
    skills: [
      "Redux",
      "React Query (TanStack Query)",
      "Context API",
      "SSR",
      "SSG",
      "Code Splitting",
      "Lazy Loading",
      "Lighthouse Optimization",
    ],
  },
  {
    title: "Security & DevOps",
    skills: [
      "Keycloak",
      "HashiCorp Vault",
      "OpenTelemetry",
      "OWASP ZAP",
      "SonarQube",
      "Trivy",
      "Docker",
      "Git",
      "CI/CD",
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      "Jest",
      "React Testing Library",
      "GitHub",
      "GitLab",
      "Vercel",
      "Netlify",
      "Claude Code",
      "Cursor",
    ],
  },
];

export const experiences = [
  {
    company: "Jasper Colin",
    role: "Senior Software Engineer",
    location: "Gurgaon, India",
    period: "Mar 2025 – Present",
    highlights: [
      "Architected and led end-to-end development of an AI-enabled market research CRM with role-based dashboards for clients, sales, and admins, scaling to 100K+ active users.",
      "Designed database ERDs and REST microservices; built async upload APIs on Azure Blob Storage that ingest 500K+ records per batch via job-ID based status polling, improving upload reliability and throughput by 40%.",
      "Built AI-powered RFQ and client onboarding workflows converting uploaded documents into structured forms with 90% extraction accuracy, cutting manual data entry effort by 60%.",
      "Owned the RFQ lifecycle end-to-end — creation, bid management, approvals, project initiation, tracking, and invoicing — reducing average turnaround time by 35%.",
      "Implemented region-specific, privacy-aware data pipelines routing PII to geographically distributed databases across 5+ regions for regulatory compliance.",
      "Integrated Keycloak for centralized authentication/RBAC, HashiCorp Vault for secrets management, and OpenTelemetry for distributed tracing across microservices.",
      "Strengthened NFR/security posture using OWASP ZAP, SonarQube, and Trivy, reducing critical vulnerabilities by 50%.",
      "Integrated Microsoft Graph API for Teams call/calendar scheduling and Azure-based mail service for automated notifications.",
      "Awarded the High Flyer Award for outstanding performance and technical contribution.",
    ],
  },
  {
    company: "Svelte Tech Technology",
    role: "Software Engineer",
    location: "Gurgaon, India",
    period: "Feb 2022 – Feb 2025",
    highlights: [
      "Led development of multilingual, multi-role government platforms (incl. a voter management system) using React, Next.js, and TypeScript, with secure record creation, update, and data export modules.",
      "Converted UI/UX designs into reusable, scalable frontend components; integrated REST APIs with caching for a collaborative mailing platform with chat-style threads and annotations.",
      "Collaborated with product, design, and backend teams to deliver robust, production-ready solutions, ensuring responsiveness, performance, and cross-browser compatibility.",
      "Recognized as Employee of the Year for outstanding performance and contribution.",
    ],
  },
  {
    company: "Alight City",
    role: "Software Engineer",
    location: "Indore, India",
    period: "Jun 2021 – Feb 2022",
    highlights: [
      "Developed and maintained web interfaces using React and JavaScript; collaborated with product managers and designers to refine requirements.",
      "Improved frontend performance and resolved UI issues across production applications.",
    ],
  },
];

export const projects = [
  {
    title: "Pro CRM",
    subtitle: "AI-Enabled Market Research CRM Platform",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Azure Blob Storage",
      "SendGrid",
      "AI",
    ],
    description:
      "Enterprise CRM supporting end-to-end market research workflows with role-based dashboards for clients, sales, and administrators.",
    highlights: [
      "Built AI-powered RFQ and client onboarding workflows that convert uploaded documents into structured forms, reducing manual data entry.",
      "Designed the complete RFQ lifecycle: creation, bid management, approvals, project initiation, tracking, and invoicing.",
      "Implemented region-specific data management with privacy-aware architecture across geographically distributed databases.",
    ],
  },
  {
    title: "Voter Management System",
    subtitle: "Government Platform",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    description:
      "Multilingual platform with multiple user roles and secure voter creation, update, and data export modules.",
    highlights: [],
  },
  {
    title: "Mailbox",
    subtitle: "Advanced Mailing & Collaboration System",
    tech: ["React.js", "Redux", "REST APIs"],
    description:
      "Collaborative mailing platform with chat-like threads, annotations, and custom folders.",
    highlights: [
      "Integrated REST APIs with caching for performant, real-time collaboration features.",
    ],
  },
  {
    title: "Gaura Life",
    subtitle: "Online IVF Platform",
    tech: ["React.js", "JavaScript"],
    description:
      "Healthcare platform with onboarding, consultation, and workflow modules along with logistics and inventory dashboards.",
    highlights: [],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech), Computer Science Engineering",
  institution: "Gurukula Kangri University, Haridwar, India",
  period: "Aug 2017 – Aug 2021",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
