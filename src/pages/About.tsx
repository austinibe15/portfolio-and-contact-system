import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        {/* INTRO */}
        <section className="border-b border-white/10 px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 sm:text-xs">
              02 / ABOUT
            </p>

            <h1 className="mt-6 max-w-5xl break-words text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Software engineering
              <br />
              <span className="text-white/35">
                with a practical perspective.
              </span>
            </h1>
          </div>
        </section>

        {/* PROFILE */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
              PROFILE
            </p>

            <div className="min-w-0">
              <p className="max-w-4xl break-words text-xl font-medium leading-tight sm:text-2xl lg:text-3xl">
                Ezenwa Augustine Ibe is a full-stack software engineer building
                applications across web, backend, mobile, and AI-enabled
                systems.
              </p>

              <div className="mt-7 max-w-3xl space-y-5 text-[15px] leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8">
                <p>
                  My work focuses on turning real-world requirements into
                  functional digital systems—from healthcare and education
                  platforms to AI-assisted applications and digital
                  infrastructure.
                </p>

                <p>
                  I work across the application stack, connecting frontend
                  experiences with APIs, backend services, databases,
                  integrations, and deployment workflows.
                </p>

                <p>
                  My background in logistics and operational environments also
                  influences how I approach software. I pay attention to
                  workflows, constraints, reliability, and the practical
                  outcome of the system being built.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
              EXPERIENCE
            </p>

            <div className="mt-8 space-y-0 sm:mt-10">
              {/* Freelance / Independent Development */}
              <div className="grid min-w-0 gap-5 border-t border-white/10 py-8 sm:gap-6 sm:py-9 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="min-w-0">
                  <p className="font-mono text-xs text-white/35">
                    2023 — PRESENT
                  </p>

                  <p className="mt-2 text-sm text-white/50">
                    Independent Development
                  </p>
                </div>

                <div className="min-w-0">
                  <h2 className="break-words text-xl font-medium sm:text-2xl">
                    Full-Stack Software Development
                  </h2>

                  <p className="mt-4 max-w-3xl break-words text-sm leading-7 text-white/45">
                    Building full-stack applications, AI-enabled prototypes,
                    mobile platforms, APIs, and research-oriented software
                    systems while developing engineering depth across the
                    modern application stack.
                  </p>
                </div>
              </div>

              {/* Maritime / Logistics */}
              <div className="grid min-w-0 gap-5 border-t border-white/10 py-8 sm:gap-6 sm:py-9 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="min-w-0">
                  <p className="font-mono text-xs text-white/35">
                    2021 — 2023
                  </p>

                  <p className="mt-2 break-words text-sm text-white/50">
                    CMA-CGM / Joatelim Logistics
                  </p>
                </div>

                <div className="min-w-0">
                  <h2 className="break-words text-xl font-medium sm:text-2xl">
                    Terminal Yard Operations
                  </h2>

                  <p className="mt-4 max-w-3xl break-words text-sm leading-7 text-white/45">
                    Experience working with container tracking, operational
                    coordination, logistics workflows, and data-driven
                    processes. This practical background informs my interest
                    in building software around operational problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & PROFESSIONAL DEVELOPMENT */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
              EDUCATION
            </p>

            <div className="min-w-0">
              {/* EDUCATION */}
              <div className="space-y-0">
                {/* NYCAR */}
                <div className="grid min-w-0 gap-3 border-t border-white/10 py-7 md:grid-cols-[120px_minmax(0,1fr)]">
                  <p className="font-mono text-xs text-white/30">2026</p>

                  <div className="min-w-0">
                    <h2 className="break-words text-xl font-medium sm:text-2xl">
                      Postgraduate Diploma
                    </h2>

                    <p className="mt-2 max-w-2xl break-words text-sm leading-6 text-white/50">
                      Advanced Engineering Management & Software Engineering
                      Management
                    </p>

                    <p className="mt-1 break-words text-xs text-white/30">
                      New York Center for Advance Research (NYCAR)
                    </p>
                  </div>
                </div>

                {/* PLP */}
                <div className="grid min-w-0 gap-3 border-t border-white/10 py-7 md:grid-cols-[120px_minmax(0,1fr)]">
                  <p className="font-mono text-xs text-white/30">2024</p>

                  <div className="min-w-0">
                    <h2 className="break-words text-xl font-medium sm:text-2xl">
                      Software Engineering & Web Development
                    </h2>

                    <p className="mt-1 break-words text-xs text-white/30">
                      Power Learn Project (PLP)
                    </p>
                  </div>
                </div>

                {/* B.Tech */}
                <div className="grid min-w-0 gap-3 border-t border-white/10 py-7 md:grid-cols-[120px_minmax(0,1fr)]">
                  <p className="font-mono text-xs text-white/30">
                    1998 — 2004
                  </p>

                  <div className="min-w-0">
                    <h2 className="break-words text-xl font-medium sm:text-2xl">
                      B.Tech in Computer Science (Software Engineering)
                    </h2>

                    <p className="mt-1 break-words text-xs text-white/30">
                      Ladoke Akintola University of Technology (LAUTECH)
                    </p>
                  </div>
                </div>
              </div>

              {/* CERTIFICATIONS & PROFESSIONAL DEVELOPMENT */}
              <div className="mt-12 sm:mt-14">
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 sm:text-xs">
                  CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
                </p>

                <div className="mt-5 space-y-0">
                  {/* Project Management */}
                  <div className="grid min-w-0 gap-3 border-t border-white/10 py-6 md:grid-cols-[120px_minmax(0,1fr)]">
                    <p className="font-mono text-xs text-white/30">2024</p>

                    <div className="min-w-0">
                      <h3 className="break-words text-base font-medium">
                        Fundamentals of Project Management
                      </h3>

                      <p className="mt-1 break-words text-xs text-white/30">
                        DEXA / Open University UK / TeamGantt
                      </p>
                    </div>
                  </div>

                  {/* NIIT Networking */}
                  <div className="grid min-w-0 gap-3 border-t border-white/10 py-6 md:grid-cols-[120px_minmax(0,1fr)]">
                    <p className="font-mono text-xs text-white/30">2013</p>

                    <div className="min-w-0">
                      <h3 className="break-words text-base font-medium">
                        Protocols & Networking Standards
                      </h3>

                      <p className="mt-1 break-words text-xs text-white/30">
                        NIIT
                      </p>
                    </div>
                  </div>

                  {/* NIIT PC Support */}
                  <div className="grid min-w-0 gap-3 border-t border-white/10 py-6 md:grid-cols-[120px_minmax(0,1fr)]">
                    <p className="font-mono text-xs text-white/30">2013</p>

                    <div className="min-w-0">
                      <h3 className="break-words text-base font-medium">
                        PC Support & Maintenance
                      </h3>

                      <p className="mt-1 break-words text-xs text-white/30">
                        NIIT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 sm:text-xs">
              NEXT
            </p>

            <h2 className="mt-5 max-w-4xl break-words text-2xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Interested in the systems I build?
            </h2>

            <Link
              to="/work"
              className="mt-8 inline-flex max-w-full items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              Explore my work
              <ArrowUpRight size={16} className="shrink-0" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}