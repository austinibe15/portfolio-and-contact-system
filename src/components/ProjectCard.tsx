import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group border-b border-white/10 py-8 md:py-10">
      <div className="grid gap-6 md:grid-cols-[60px_1fr_auto] md:items-start">
        {/* NUMBER */}
        <span className="font-mono text-[10px] text-white/25">
          {project.number}
        </span>

        {/* CONTENT */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.18em] text-white/35">
            {project.category}
          </p>

          <Link
            to={`/work/${project.slug}`}
            className="block"
          >
            <h3 className="mt-2 text-2xl font-medium tracking-tight transition-colors group-hover:text-white/75 md:text-3xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-1 text-xs text-white/40">
            {project.subtitle}
          </p>

          <p className="mt-4 max-w-2xl text-[13px] leading-6 text-white/45">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechBadge
                key={technology}
                name={technology}
              />
            ))}
          </div>

          {/* PROJECT LINKS */}
          <div className="mt-5 flex flex-wrap gap-5">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-[11px] text-white/55 transition hover:text-white"
            >
              Case study
              <ArrowUpRight size={13} />
            </Link>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/55 transition hover:text-white"
              >
                Live demo
                <ArrowUpRight size={13} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-white/55 transition hover:text-white"
              >
                GitHub
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>

        {/* ARROW */}
        <Link
          to={`/work/${project.slug}`}
          aria-label={`View ${project.title} case study`}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition duration-300 hover:border-white/30 hover:text-white md:flex"
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}