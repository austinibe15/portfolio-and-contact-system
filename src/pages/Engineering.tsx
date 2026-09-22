
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import TechBadge from "../components/TechBadge";

const engineeringAreas = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces and application experiences with component-based architecture and reusable UI patterns.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Designing APIs, application logic, integrations, authentication workflows, and backend services around system requirements.",
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Java",
    ],
  },
  {
    number: "03",
    title: "AI & Intelligent Systems",
    description:
      "Integrating AI into applications for analysis, natural language workflows, intelligent assistance, and research prototypes.",
    technologies: [
      "AI Integration",
      "NLP",
      "Multilingual AI",
      "AI-assisted Analysis",
    ],
  },
  {
    number: "04",
    title: "Mobile Engineering",
    description:
      "Developing cross-platform mobile applications connected to backend services and real application workflows.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
    ],
  },
  {
    number: "05",
    title: "Data & Persistence",
    description:
      "Working with relational and document-oriented databases to support application data, querying, persistence, and service integration.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    number: "06",
    title: "Engineering & Delivery",
    description:
      "Applying version control, APIs, containerization, testing, deployment, and integration practices across software projects.",
    technologies: [
      "Git",
      "Docker",
      "REST APIs",
      "Deployment",
    ],
  },
];

export default function Engineering() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        <section className="border-b border-white/10 px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-40">
          <div className="mx-auto min-w-0 max-w-7xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 sm:text-xs sm:tracking-[0.22em]">
              03 / ENGINEERING
            </p>

            <h1 className="mt-5 max-w-5xl break-words text-3xl font-medium leading-[1.02] tracking-[-0.035em] sm:mt-7 sm:text-5xl md:text-7xl lg:text-8xl">
              Across the
              <br />
              <span className="text-white/35">
                application stack.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl break-words text-[15px] leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              My engineering work spans interfaces, APIs, backend systems,
              databases, mobile applications, AI-enabled software, and
              deployment workflows.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto min-w-0 max-w-7xl">
            <SectionHeading
              number="01"
              eyebrow="CAPABILITIES"
              title="A broad stack, applied to real problems."
              description="I focus on understanding how the parts of a system work together rather than treating technologies as isolated skills."
            />

            <div className="mt-8 grid min-w-0 border-l border-t border-white/10 sm:mt-10 md:grid-cols-2">
              {engineeringAreas.map((area) => (
                <article
                  key={area.number}
                  className="min-w-0 border-b border-r border-white/10 p-5 sm:p-7 md:p-8 lg:p-10"
                >
                  <span className="font-mono text-[10px] text-white/25 sm:text-xs">
                    {area.number}
                  </span>

                  <h2 className="mt-5 break-words text-xl font-medium sm:mt-7 sm:text-2xl">
                    {area.title}
                  </h2>

                  <p className="mt-4 break-words text-[13px] leading-6 text-white/45 sm:mt-5 sm:text-sm sm:leading-7">
                    {area.description}
                  </p>

                  <div className="mt-6 flex min-w-0 flex-wrap gap-2 sm:mt-7">
                    {area.technologies.map((technology) => (
                      <TechBadge
                        key={technology}
                        name={technology}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
          <div className="mx-auto min-w-0 max-w-7xl">
            <SectionHeading
              number="02"
              eyebrow="ENGINEERING MINDSET"
              title="Technology is the means. The system is the outcome."
              description="I approach implementation by considering the problem, users, architecture, data, integrations, constraints, validation, and maintainability together."
            />

            <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 md:grid-cols-4 md:gap-6">
              {[
                ["01", "Problem", "Understand what needs to be solved."],
                ["02", "Architecture", "Define how the system should work."],
                [
                  "03",
                  "Implementation",
                  "Build and integrate the required components.",
                ],
                [
                  "04",
                  "Validation",
                  "Test assumptions and improve the result.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="min-w-0 border-t border-white/15 pt-5"
                >
                  <span className="font-mono text-[10px] text-white/30 sm:text-xs">
                    {number}
                  </span>

                  <h3 className="mt-5 break-words text-lg font-medium sm:mt-6 sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-3 break-words text-[13px] leading-6 text-white/45 sm:text-sm sm:leading-7">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}