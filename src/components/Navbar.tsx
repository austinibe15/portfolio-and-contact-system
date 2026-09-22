import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { label: "WORK", path: "/work" },
  { label: "ABOUT", path: "/about" },
  { label: "ENGINEERING", path: "/engineering" },
  { label: "RESEARCH", path: "/research" },
  { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
        {/* BRAND */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="min-w-0 shrink text-[10px] font-medium tracking-[0.1em] text-white transition hover:text-white/60 sm:text-xs sm:tracking-[0.12em] md:text-sm"
        >
          <span className="block truncate">EZENWA AUGUSTINE IBE</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 font-mono text-[10px] tracking-[0.16em] transition ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://github.com/austinibe15"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.12em] text-white/45 transition hover:text-white"
          >
            GitHub
            <ArrowUpRight size={13} />
          </a>

          <a
            href="/resume/resume.pdf"
            className="font-mono text-[10px] tracking-[0.12em] text-white/45 transition hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-white transition hover:border-white/25 sm:h-10 sm:w-10 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-white/10 bg-[#0b0b0b] lg:hidden">
          <nav className="flex flex-col px-4 py-3 sm:px-6 sm:py-5">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 font-mono text-xs tracking-[0.16em] transition sm:py-5 ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-6 pt-5">
              <a
                href="https://github.com/austinibe15"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a
                href="/resume/resume.pdf"
                className="font-mono text-xs tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}