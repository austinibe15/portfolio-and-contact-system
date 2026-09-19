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
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <main>
        <section className="border-b border-white/10 px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs tracking-[0.22em] text-white/40">
              03 / ENGINEERING
            </p>

            <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl">
              Across the
              <br />
              <span className="text-white/35">
                application stack.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50">
              My engineering work spans interfaces, APIs, backend systems,
              databases, mobile applications, AI-enabled software, and
              deployment workflows.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="01"
              eyebrow="CAPABILITIES"
              title="A broad stack, applied to real problems."
              description="I focus on understanding how the parts of a system work together rather than treating technologies as isolated skills."
            />

            <div className="mt-12 grid border-l border-t border-white/10 md:grid-cols-2">
              {engineeringAreas.map((area) => (
                <article
                  key={area.number}
                  className="border-b border-r border-white/10 p-8 md:p-10"
                >
                  <span className="font-mono text-xs text-white/25">
                    {area.number}
                  </span>

                  <h2 className="mt-8 text-2xl font-medium">
                    {area.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/45">
                    {area.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
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

        <section className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              number="02"
              eyebrow="ENGINEERING MINDSET"
              title="Technology is the means. The system is the outcome."
              description="I approach implementation by considering the problem, users, architecture, data, integrations, constraints, validation, and maintainability together."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {[
                ["01", "Problem", "Understand what needs to be solved."],
                ["02", "Architecture", "Define how the system should work."],
                ["03", "Implementation", "Build and integrate the required components."],
                ["04", "Validation", "Test assumptions and improve the result."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-t border-white/15 pt-5"
                >
                  <span className="font-mono text-xs text-white/30">
                    {number}
                  </span>

                  <h3 className="mt-6 text-xl font-medium">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
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