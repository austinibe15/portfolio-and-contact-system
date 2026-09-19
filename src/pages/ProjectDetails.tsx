import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Footer from "../components/Footer";
import TechBadge from "../components/TechBadge";
import { projects } from "../data/projects";

interface CaseStudy {
  overview: string;
  problem: string;
  approach: string;
  engineering: string[];
  outcome: string;
  status: string;
}

const caseStudies: Record<string, CaseStudy> = {
  bati: {
    overview:
      "BATI (Barbados AI Trust Infrastructure) is a research-oriented prototype exploring how digital identity, credential verification, AI-assisted risk intelligence, governance, and accountability can work together within a trustworthy digital infrastructure.",

    problem:
      "AI-enabled digital systems can surface risk signals without providing sufficient context around identity, verification, accountability, or how those signals should be reviewed by human decision-makers.",

    approach:
      "BATI approaches the problem as a layered digital trust system. The architecture connects identity and credentials with verification, trust intelligence, risk assessment, governance, compliance, and audit-oriented accountability.",

    engineering: [
      "Digital identity and credential-oriented workflows",
      "Credential verification and trust evaluation",
      "AI-assisted risk intelligence",
      "Explainability and human oversight",
      "Governance and compliance workflows",
      "Audit and accountability concepts",
      "Privacy-oriented system design",
    ],

    outcome:
      "The prototype demonstrates a research direction for connecting identity, trust intelligence, risk assessment, and accountability into a coherent digital governance architecture.",

    status: "Research prototype",
  },

  "neurocare-ai": {
    overview:
      "NeuroCare AI is an AI-assisted healthcare prototype designed around the capture, analysis, and visualization of neurological health events. It combines voice and text interaction with severity analysis, emergency workflows, analytics, and blockchain-ready event records.",

    problem:
      "Health events can be difficult to capture consistently, especially when users need to record an event quickly. A useful digital system needs to reduce friction while providing structured information that can support later review.",

    approach:
      "The application combines voice and text input with AI-assisted analysis. Recorded events can be evaluated for severity, displayed through an analytics interface, and connected to emergency-oriented workflows. The system also explores blockchain-ready event records.",

    engineering: [
      "Voice and text event logging",
      "AI-assisted severity analysis",
      "Web Speech API integration",
      "Emergency workflow simulation",
      "GPS-based emergency workflow",
      "Analytics and chart visualization",
      "Node.js and Express backend",
      "Blockchain-ready health event records",
    ],

    outcome:
      "The project demonstrates how AI, voice interaction, analytics, and emerging trust technologies can be combined into a healthcare-oriented digital experience while keeping the prototype scope explicit.",

    status: "AI-assisted healthcare prototype",
  },

  "grove-medics": {
    overview:
      "Grove Medics is a healthcare platform designed around medical laboratory and healthcare service workflows. The project combines a mobile application experience with backend services, authentication, data management, payments, notifications, and healthcare-oriented workflows.",

    problem:
      "Healthcare service providers need digital systems that make it easier for users to discover services, interact with a platform, manage information, and move through healthcare-related workflows from a mobile-first experience.",

    approach:
      "The platform uses a mobile application architecture connected to backend services and supporting infrastructure. The project brings together authentication, database operations, notifications, payment-related integrations, and healthcare service presentation.",

    engineering: [
      "React Native mobile development",
      "Expo application development",
      "Node.js and Express backend services",
      "MongoDB and Mongoose data management",
      "Firebase authentication and realtime functionality",
      "Payment integration",
      "Push notification integration",
      "Healthcare service workflows",
    ],

    outcome:
      "Grove Medics demonstrates the ability to connect a mobile client with backend services and multiple third-party integrations around a real-world healthcare product concept.",

    status: "Healthcare platform project",
  },

  "parent-teacher": {
    overview:
      "Parent–Teacher Communication is a full-stack communication platform designed to provide structured interaction between parents and teachers through messaging, announcements, profiles, and related communication workflows.",

    problem:
      "Communication between schools, teachers, and parents can become fragmented when different channels are used for announcements, individual communication, and information sharing.",

    approach:
      "The project uses a React frontend with a Django and Django REST Framework backend. The architecture separates the user interface from backend API functionality and provides structured workflows for communication and user information.",

    engineering: [
      "React frontend development",
      "Django backend development",
      "Django REST Framework APIs",
      "Structured messaging workflows",
      "Announcements",
      "User profiles",
      "Frontend/backend integration",
      "Relational data management",
    ],

    outcome:
      "The platform demonstrates conventional full-stack application architecture and provides evidence of working across both frontend and backend layers of a business-oriented application.",

    status: "Full-stack application project",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find(
    (item) => item.slug === slug
  );

  /*
   * ---------------------------------------------------------
   * INVALID PROJECT
   * ---------------------------------------------------------
   */

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b0b0b] text-white">
        <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">

          <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
            404 / PROJECT NOT FOUND
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            This project does not exist.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
            The project you're looking for could not be found in the
            portfolio project registry.
          </p>

          <div className="mt-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-white/40 hover:bg-white/[0.03]"
            >
              <ArrowLeft size={16} />
              Back to work
            </Link>
          </div>

        </main>

        <Footer />
      </div>
    );
  }

  const study = caseStudies[project.slug];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      <main>

        {/* =========================================================
            PROJECT HERO
        ========================================================= */}

        <section className="border-b border-white/10 px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">

          <div className="mx-auto max-w-7xl">

            {/* Back navigation */}

            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-white/35 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              ALL WORK
            </Link>


            {/* Hero content */}

            <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[1fr_280px]">

              <div>

                {/* Project category */}

                <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                  {project.number} / {project.category}
                </p>


                {/* Project title */}

                <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>


                {/* Project subtitle */}

                <p className="mt-4 text-lg text-white/40 sm:text-xl">
                  {project.subtitle}
                </p>


                {/* Project description */}

                <p className="mt-6 max-w-3xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                  {project.description}
                </p>


                {/* =====================================================
                    PROJECT ACTIONS
                ===================================================== */}

                <div className="mt-7 flex flex-wrap gap-3">

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
                    >
                      Live demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-white/40 hover:bg-white/[0.03]"
                    >
                      View source
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                </div>

              </div>


              {/* =====================================================
                  PROJECT META
              ===================================================== */}

              <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">

                {/* Status */}

                <div>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                    STATUS
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {study?.status ?? "Project"}
                  </p>
                </div>


                {/* Technology */}

                <div className="mt-7">

                  <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                    TECHNOLOGY
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <TechBadge
                        key={technology}
                        name={technology}
                      />
                    ))}

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </section>


        {/* =========================================================
            CASE STUDY
        ========================================================= */}

        <section className="px-6 py-16 sm:py-20 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16">

              {/* Section marker */}

              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-white/30 lg:sticky lg:top-10">
                  CASE STUDY
                </p>
              </div>


              {/* Case-study content */}

              <div className="max-w-4xl">

                {/* =====================================================
                    OVERVIEW
                ===================================================== */}

                <div className="border-b border-white/10 pb-14">

                  <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                    01 / OVERVIEW
                  </p>

                  <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                    What I built
                  </h2>

                  <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                    {study?.overview ?? project.description}
                  </p>

                </div>


                {/* =====================================================
                    PROBLEM
                ===================================================== */}

                {study?.problem && (
                  <div className="border-b border-white/10 py-14">

                    <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                      02 / PROBLEM
                    </p>

                    <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                      The problem
                    </h2>

                    <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                      {study.problem}
                    </p>

                  </div>
                )}


                {/* =====================================================
                    APPROACH
                ===================================================== */}

                {study?.approach && (
                  <div className="border-b border-white/10 py-14">

                    <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                      03 / APPROACH
                    </p>

                    <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                      Engineering approach
                    </h2>

                    <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                      {study.approach}
                    </p>

                  </div>
                )}


                {/* =====================================================
                    ENGINEERING
                ===================================================== */}

                {study?.engineering?.length > 0 && (
                  <div className="border-b border-white/10 py-14">

                    <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                      04 / ENGINEERING
                    </p>

                    <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                      Engineering highlights
                    </h2>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">

                      {study.engineering.map(
                        (item, index) => (
                          <div
                            key={item}
                            className="border border-white/10 p-5 transition-colors duration-300 hover:border-white/20"
                          >

                            <span className="font-mono text-[10px] text-white/25">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="mt-3 text-sm leading-6 text-white/55">
                              {item}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                  </div>
                )}


                {/* =====================================================
                    OUTCOME
                ===================================================== */}

                {study?.outcome && (
                  <div className="border-b border-white/10 py-14">

                    <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                      05 / OUTCOME
                    </p>

                    <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                      What the project demonstrates
                    </h2>

                    <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                      {study.outcome}
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            TECHNOLOGY STACK
        ========================================================= */}

        <section className="border-y border-white/10 px-6 py-14 lg:px-10 lg:py-16">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">

              <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                TECHNOLOGY STACK
              </p>

              <div className="flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <TechBadge
                    key={technology}
                    name={technology}
                  />
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            PROJECT LINKS
        ========================================================= */}

        <section className="px-6 py-16 sm:py-20 lg:px-10 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                EXPLORE THE PROJECT
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                See the implementation.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                Explore the deployed application or inspect the source
                code and implementation details on GitHub.
              </p>


              {/* Links */}

              <div className="mt-7 flex flex-wrap gap-3">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
                  >
                    Open live demo
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-white/40 hover:bg-white/[0.03]"
                  >
                    View source
                    <ArrowUpRight size={16} />
                  </a>
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FOOTER NAVIGATION / CONTACT
        ========================================================= */}

        <section className="border-t border-white/10 px-6 py-12 lg:px-10">

          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-white/35 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              BACK TO ALL WORK
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </section>

      </main>


      {/* =========================================================
          GLOBAL FOOTER
      ========================================================= */}

      <Footer />

    </div>
  );
}