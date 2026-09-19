import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

const capabilities = [
  {
    title: "Frontend",
    description:
      "Interfaces and application experiences built with modern component-based frontend technologies.",
    technologies: "React · JavaScript · TypeScript · HTML · CSS",
  },
  {
    title: "Backend",
    description:
      "APIs, application logic, integrations and backend services designed around real system requirements.",
    technologies: "Node.js · Python · Django · FastAPI · Flask · Java",
  },
  {
    title: "AI / Intelligent Systems",
    description:
      "AI-enabled applications, NLP workflows, intelligent analysis and research-oriented prototypes.",
    technologies: "AI Integration · NLP · Multilingual AI",
  },
  {
    title: "Mobile",
    description:
      "Cross-platform mobile experiences connected to real backend services and application workflows.",
    technologies: "React Native · Expo",
  },
  {
    title: "Data",
    description:
      "Structured application data, persistence, querying and service integration.",
    technologies: "PostgreSQL · MySQL · MongoDB · Firebase",
  },
  {
    title: "Engineering",
    description:
      "Development practices supporting maintainable applications and reliable delivery.",
    technologies: "Git · Docker · REST APIs · Deployment",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem, users, constraints and desired outcome.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Break requirements into clear application, API, data and integration layers.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement, integrate and iterate around measurable system requirements.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test behavior, identify weaknesses and improve reliability and usability.",
  },
];

const researchThemes = [
  "Digital Identity",
  "Privacy Engineering",
  "AI",
  "Trust Infrastructure",
  "Governance",
  "Compliance",
  "Accountability",
];

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white"
    >
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative min-h-screen overflow-hidden border-b border-white/10 px-6 pb-16 pt-32 sm:pt-36 lg:px-10 lg:pb-20 lg:pt-40">
          {/* Background technical rings */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[48%] top-[18%] h-[420px] w-[420px] rounded-full border border-white/[0.035] sm:h-[560px] sm:w-[560px] lg:h-[700px] lg:w-[700px]" />

            <div className="absolute left-[48%] top-[18%] h-[560px] w-[560px] rounded-full border border-white/[0.025] sm:h-[720px] sm:w-[720px] lg:h-[900px] lg:w-[900px]" />

            <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.025]" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl items-center">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
              {/* LEFT: HERO COPY */}
              <div className="relative z-10">
                <p className="mb-6 font-mono text-[10px] tracking-[0.25em] text-white/40 sm:text-xs">
                  FULL-STACK SOFTWARE ENGINEER
                </p>

                <h1 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                  I build
                  <br />
                  <span className="text-white/35">digital systems.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:mt-7 sm:text-lg sm:leading-8">
                  I build software systems that turn complex real-world
                  problems into reliable digital products across AI, web,
                  mobile, and backend engineering.
                </p>

                {/* CTA */}
                <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                  <a
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:bg-white/85"
                  >
                    View selected work
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.03]"
                  >
                    Get in touch
                  </a>
                </div>

                {/* Discipline labels */}
                <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] tracking-[0.18em] text-white/30 sm:mt-12 sm:text-[10px]">
                  <span>AI</span>
                  <span>·</span>
                  <span>WEB</span>
                  <span>·</span>
                  <span>MOBILE</span>
                  <span>·</span>
                  <span>DIGITAL SYSTEMS</span>
                </div>
              </div>

              {/* RIGHT: PROFILE IMAGE */}
              <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[580px]">
                {/* Outer technical ring */}
                <div className="absolute h-[320px] w-[320px] rounded-full border border-white/[0.055] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

                {/* Inner technical ring */}
                <div className="absolute h-[270px] w-[270px] rounded-full border border-white/[0.04] sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]" />

                {/* Small technical marker */}
                <div className="absolute right-[8%] top-[18%] hidden items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-white/25 xl:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  AVAILABLE FOR WORK
                </div>

                {/* Image frame */}
                <div className="relative z-10 h-[360px] w-[270px] overflow-hidden sm:h-[450px] sm:w-[340px] lg:h-[550px] lg:w-[420px]">
                  <div className="absolute inset-x-0 bottom-0 top-[8%] overflow-hidden">
                    <img
                      src="/images/profile.jpg"
                      alt="Ezenwa Augustine Ibe"
                      className="h-full w-full object-cover object-center"
                    />

                    {/* Subtle image fade into background */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent opacity-40" />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/10 via-transparent to-[#0b0b0b]/10" />
                  </div>
                </div>

                {/* Bottom image label */}
                <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.2em] text-white/25">
                  ENGINEER / RESEARCHER / BUILDER
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#work"
            className="absolute bottom-7 left-6 hidden items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-white/25 transition hover:text-white/60 lg:left-10 lg:flex"
          >
            SCROLL TO EXPLORE
            <ArrowDown size={13} />
          </a>
        </section>

        {/* =========================================================
            SELECTED WORK
        ========================================================== */}
        <section
          id="work"
          className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="01"
              eyebrow="SELECTED WORK"
              title="Engineering problems, not just projects."
              description="A selection of systems and prototypes spanning AI, healthcare, mobile applications, full-stack platforms, and digital infrastructure."
            />

            <div className="mt-4">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                  />
                ))}
            </div>

            <div className="mt-8">
              <a
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Explore all engineering work
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENGINEERING
        ========================================================== */}
        <section
          id="engineering"
          className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="02"
              eyebrow="ENGINEERING"
              title="Across the application stack."
              description="My work spans interfaces, APIs, backend systems, data, mobile applications, and AI-enabled software."
            />

            <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="border-b border-r border-white/10 p-6 transition duration-300 hover:bg-white/[0.02] md:p-7"
                >
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {capability.description}
                  </p>

                  <p className="mt-5 font-mono text-[10px] leading-5 tracking-wide text-white/30">
                    {capability.technologies}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/engineering"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                Explore engineering capabilities
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            APPROACH
        ========================================================== */}
        <section className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="03"
              eyebrow="APPROACH"
              title="Understand. Architect. Build. Validate."
            />

            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {approach.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-white/15 pt-5"
                >
                  <span className="font-mono text-xs text-white/30">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            RESEARCH
        ========================================================== */}
        <section
          id="research"
          className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="04"
              eyebrow="RESEARCH"
              title="From Identity to Accountability."
              description="Exploring privacy-preserving digital infrastructure for AI-assisted trust, compliance, governance, and accountability."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {researchThemes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] tracking-wide text-white/45 transition hover:border-white/25 hover:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="/research"
              className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              Explore research
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================== */}
        <section
          id="about"
          className="border-b border-white/10 px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[140px_1fr]">
            <div className="font-mono text-xs tracking-[0.2em] text-white/40">
              05 / ABOUT
            </div>

            <div>
              <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-3xl md:text-4xl">
                I approach software engineering from both a technical and
                practical perspective — building systems around real problems,
                not technology for its own sake.
              </p>

              <a
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                More about me
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT
        ========================================================== */}
        <section
          id="contact"
          className="px-6 py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.2em] text-white/40">
              06 / CONTACT
            </p>

            <h2 className="mt-7 max-w-3xl text-3xl font-medium leading-[1] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Let&apos;s build
              <br />
              <span className="text-white/35">something useful.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              Open to software engineering opportunities, technical
              collaborations, research-driven projects, and challenging
              product problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/85"
              >
                Contact me
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/austinibe15"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition hover:border-white/40"
              >
                GitHub
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[10px] text-white/30 sm:flex-row">
          <span>EZENWA AUGUSTINE IBE</span>

          <span>FULL-STACK SOFTWARE ENGINEER</span>

          <span>© 2026</span>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0b0b]/90 text-white/50 backdrop-blur transition hover:border-white/25 hover:text-white md:flex"
        aria-label="Back to top"
      >
        <ArrowDown size={15} className="rotate-180" />
      </a>
    </div>
  );
}