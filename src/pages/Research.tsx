
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";

const themes = [
  "Digital Identity",
  "Decentralized Identity",
  "Verifiable Credentials",
  "Privacy Engineering",
  "Zero-Knowledge Proofs",
  "AI Risk Intelligence",
  "Trust Infrastructure",
  "Governance",
  "Compliance",
  "Accountability",
];

export default function Research() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="border-b border-white/10 px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-40">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 sm:text-xs sm:tracking-[0.22em]">
              04 / RESEARCH
            </p>

            <h1 className="mt-5 max-w-5xl break-words text-3xl font-medium leading-[1.02] tracking-[-0.035em] sm:mt-7 sm:text-5xl md:text-7xl lg:text-8xl">
              From Identity
              <br />
              <span className="text-white/35">
                to Accountability.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl break-words text-[15px] leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              Exploring privacy-preserving digital infrastructure for
              AI-assisted trust, compliance, governance, and accountability.
            </p>
          </div>
        </section>

        {/* RESEARCH OVERVIEW */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto grid min-w-0 max-w-7xl gap-8 sm:gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
              PROJECT
            </p>

            <div className="min-w-0">
              <p className="break-words text-2xl font-medium leading-tight sm:text-3xl md:text-5xl">
                Barbados AI Trust Infrastructure
              </p>

              <p className="mt-6 max-w-3xl break-words text-[15px] leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8">
                A research prototype exploring how digital identity,
                credentials, verification, AI-assisted risk intelligence,
                privacy engineering, governance, and accountability can be
                connected within a trustworthy digital infrastructure.
              </p>

              <p className="mt-5 max-w-3xl break-words text-[15px] leading-7 text-white/50 sm:mt-6 sm:text-base sm:leading-8">
                The research is framed around the principle that an
                AI-generated risk signal should support informed human
                decision-making rather than automatically determine wrongdoing
                or guilt.
              </p>
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto min-w-0 max-w-7xl">
            <SectionHeading
              number="01"
              eyebrow="RESEARCH THEMES"
              title="Trust requires more than a model."
              description="The research considers identity, privacy, AI, governance and accountability as interconnected components of a digital trust infrastructure."
            />

            <div className="mt-8 flex min-w-0 flex-wrap gap-2 sm:mt-10">
              {themes.map((theme) => (
                <span
                  key={theme}
                  className="max-w-full break-words rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] leading-4 tracking-wide text-white/45 sm:px-4 sm:py-2 sm:text-[10px]"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto min-w-0 max-w-7xl">
            <SectionHeading
              number="02"
              eyebrow="SYSTEM MODEL"
              title="Identity → Trust → Accountability."
            />

            <div className="mt-8 grid min-w-0 border-l border-t border-white/10 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Identity",
                  "Establish digital identity and associated attributes.",
                ],
                [
                  "02",
                  "Credentials",
                  "Represent claims and qualifications through verifiable credentials.",
                ],
                [
                  "03",
                  "Trust Intelligence",
                  "Analyze activity and identify potential risk signals.",
                ],
                [
                  "04",
                  "Accountability",
                  "Connect decisions and actions to auditable institutional processes.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="min-w-0 border-b border-r border-white/10 p-5 sm:p-7 lg:p-8"
                >
                  <span className="font-mono text-[10px] text-white/25 sm:text-xs">
                    {number}
                  </span>

                  <h3 className="mt-5 break-words text-lg font-medium sm:mt-7 sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-3 break-words text-[13px] leading-6 text-white/45 sm:mt-4 sm:text-sm sm:leading-7">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLE */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 sm:text-xs">
              RESEARCH PRINCIPLE
            </p>

            <blockquote className="mt-6 max-w-5xl break-words text-3xl font-medium leading-tight tracking-tight sm:mt-8 sm:text-4xl md:text-6xl">
              AI risk is not the same thing as wrongdoing.
            </blockquote>

            <p className="mt-6 max-w-3xl break-words text-[15px] leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8">
              The system therefore emphasizes explainability, human oversight,
              privacy, governance, and auditable decision-making rather than
              treating automated risk scores as final judgments.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto min-w-0 max-w-7xl">
            <h2 className="max-w-4xl break-words text-3xl font-medium leading-tight sm:text-4xl md:text-6xl">
              Research is part of how I think about engineering.
            </h2>

            <a
              href="https://github.com/austinibe15/Barbados-AI-Trust-Infrastructure"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex max-w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-white/40 sm:mt-10 sm:px-6 sm:py-3"
            >
              <span className="min-w-0 break-words">
                View BATI on GitHub
              </span>
              <ArrowUpRight size={16} className="shrink-0" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

