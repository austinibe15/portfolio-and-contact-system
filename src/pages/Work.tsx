import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        {/* INTRO */}
        <section className="border-b border-white/10 px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/40">
              01 / WORK
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Engineering
              <br />
              <span className="text-white/35">
                problems, not just projects.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              A curated collection of software systems, AI-enabled
              applications, mobile platforms, research prototypes, and
              domain-focused engineering work.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="02"
              eyebrow="SELECTED ENGINEERING WORK"
              title="Systems built around real requirements."
              description="Each project demonstrates a different part of the engineering stack—from AI and intelligent systems to mobile applications, backend services, data, and domain-specific software."
            />

            <div className="mt-10">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT CATEGORIES */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="03"
              eyebrow="ENGINEERING DOMAINS"
              title="Different problems require different systems."
            />

            <div className="mt-10 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "AI & Intelligent Systems",
                  description:
                    "AI-assisted applications, NLP workflows, intelligent analysis, and research-oriented prototypes.",
                },
                {
                  title: "Full-Stack Platforms",
                  description:
                    "Complete web applications connecting interfaces, APIs, application logic, databases, and authentication.",
                },
                {
                  title: "Mobile Applications",
                  description:
                    "Cross-platform applications designed around real users, backend services, and operational workflows.",
                },
                {
                  title: "Backend & Data",
                  description:
                    "APIs, persistence, querying, integrations, and application services supporting production-style workflows.",
                },
                {
                  title: "Research Systems",
                  description:
                    "Experimental systems exploring AI, trust infrastructure, privacy, governance, and emerging technologies.",
                },
                {
                  title: "Domain Engineering",
                  description:
                    "Software solutions informed by practical problems in healthcare, logistics, education, and operations.",
                },
              ].map((category) => (
                <div
                  key={category.title}
                  className="border-b border-r border-white/10 p-6 md:p-7"
                >
                  <h3 className="text-base font-medium sm:text-lg">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-white/45">
                    {category.description}
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="mt-6 text-white/25"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GITHUB */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">
              OPEN SOURCE
            </p>

            <h2 className="mt-6 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.025em] sm:text-3xl md:text-4xl">
              More code, experiments and development history live on GitHub.
            </h2>

            <a
              href="https://github.com/austinibe15"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-xs text-white transition hover:border-white/40"
            >
              Visit GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[10px] text-white/30 md:flex-row">
          <span>EZENWA AUGUSTINE IBE</span>
          <span>FULL-STACK SOFTWARE ENGINEER</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}