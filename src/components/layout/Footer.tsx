import { personalInfo } from "@/lib/resume-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-8 md:px-12">
      <div className="container-max flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js &middot; React &middot; Framer Motion
        </p>
      </div>
    </footer>
  );
}
