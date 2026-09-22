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
    <article className="group min-w-0 border-b border-white/10 py-7 sm:py-8 md:py-10">
      <div className="grid min-w-0 gap-5 md:grid-cols-[60px_minmax(0,1fr)_auto] md:items-start md:gap-6">
        {/* NUMBER */}
        <span className="font-mono text-[10px] text-white/25">
          {project.number}
        </span>

        {/* CONTENT */}
        <div className="min-w-0">
          <p className="font-mono text-[9px] tracking-[0.18em] text-white/35">
            {project.category}
          </p>

          <Link
            to={`/work/${project.slug}`}
            className="block min-w-0"
          >
            <h3 className="mt-2 break-words text-2xl font-medium tracking-tight transition-colors group-hover:text-white/75 sm:text-[1.65rem] md:text-3xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-1 break-words text-xs text-white/40">
            {project.subtitle}
          </p>

          <p className="mt-4 max-w-2xl break-words text-[13px] leading-6 text-white/45">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-5 flex min-w-0 flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechBadge
                key={technology}
                name={technology}
              />
            ))}
          </div>

          {/* PROJECT LINKS */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
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
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition duration-300 hover:border-white/30 hover:text-white md:flex"
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}