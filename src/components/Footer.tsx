import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "WORK", path: "/work" },
  { label: "ABOUT", path: "/about" },
  { label: "ENGINEERING", path: "/engineering" },
  { label: "RESEARCH", path: "/research" },
  { label: "CONTACT", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-12">
          {/* Identity */}
          <div className="min-w-0">
            <Link
              to="/"
              className="text-sm font-medium tracking-[0.12em] text-white"
            >
              EZENWA AUGUSTINE IBE
            </Link>

            <p className="mt-4 max-w-sm break-words text-sm leading-7 text-white/35">
              Full-Stack Software Engineer building digital systems across AI,
              web, mobile, backend engineering, and research.
            </p>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/30">
              NAVIGATION
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-mono text-[10px] tracking-[0.14em] text-white/45 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* External links */}
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-7 sm:mt-12 sm:gap-x-6 sm:pt-8">
          <a
            href="https://github.com/austinibe15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.12em] text-white/40 transition hover:text-white"
          >
            GitHub
            <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.linkedin.com/in/ezenwa-augustine-ibe-9378359b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.12em] text-white/40 transition hover:text-white"
          >
            LinkedIn
            <ArrowUpRight size={13} />
          </a>

          <a
            href="mailto:austinibe15@gmail.com"
            className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.12em] text-white/40 transition hover:text-white"
          >
            Email
            <ArrowUpRight size={13} />
          </a>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.12em] text-white/40 transition hover:text-white"
          >
            Resume
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Footer metadata */}
        <div className="mt-8 flex flex-col gap-3 text-[9px] leading-5 text-white/25 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>EZENWA AUGUSTINE IBE</span>

          <span className="break-words">
            FULL-STACK SOFTWARE ENGINEER · AI · WEB · MOBILE
          </span>

          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}