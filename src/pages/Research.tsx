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
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        {/* HEADER */}
        <section className="border-b border-white/10 px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.22em] text-white/40">
              04 / RESEARCH
            </p>

            <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl">
              From Identity
              <br />
              <span className="text-white/35">
                to Accountability.
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/50 md:text-xl">
              Exploring privacy-preserving digital infrastructure for
              AI-assisted trust, compliance, governance, and accountability.
            </p>
          </div>
        </section>

        {/* RESEARCH OVERVIEW */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs tracking-[0.2em] text-white/35">
              PROJECT
            </p>

            <div>
              <p className="text-3xl font-medium leading-tight md:text-5xl">
                Barbados AI Trust Infrastructure
              </p>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/50">
                A research prototype exploring how digital identity,
                credentials, verification, AI-assisted risk intelligence,
                privacy engineering, governance, and accountability can be
                connected within a trustworthy digital infrastructure.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/50">
                The research is framed around the principle that an AI-generated
                risk signal should support informed human decision-making rather
                than automatically determine wrongdoing or guilt.
              </p>
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="01"
              eyebrow="RESEARCH THEMES"
              title="Trust requires more than a model."
              description="The research considers identity, privacy, AI, governance and accountability as interconnected components of a digital trust infrastructure."
            />

            <div className="mt-12 flex flex-wrap gap-2">
              {themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] tracking-wide text-white/45"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="02"
              eyebrow="SYSTEM MODEL"
              title="Identity → Trust → Accountability."
            />

            <div className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="border-b border-r border-white/10 p-7"
                >
                  <span className="font-mono text-xs text-white/25">
                    {number}
                  </span>

                  <h3 className="mt-7 text-xl font-medium">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLE */}
        <section className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.2em] text-white/35">
              RESEARCH PRINCIPLE
            </p>

            <blockquote className="mt-8 max-w-5xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              AI risk is not the same thing as wrongdoing.
            </blockquote>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/50">
              The system therefore emphasizes explainability, human oversight,
              privacy, governance, and auditable decision-making rather than
              treating automated risk scores as final judgments.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-4xl text-4xl font-medium md:text-6xl">
              Research is part of how I think about engineering.
            </h2>

            <a
              href="https://github.com/austinibe15/Barbados-AI-Trust-Infrastructure.git"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-white/40"
            >
              View BATI on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}