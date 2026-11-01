import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Code, ExternalLink, Maximize2, X } from "lucide-react";
import Lightbox, { type LightboxImage } from "./Lightbox";
import type { Project } from "../types";
import { pillarLabels, pillarStyles } from "../data/pillarStyles";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState<LightboxImage | null>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-navy-900 shadow-xl animate-fade-up">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 px-6 py-5">
          <div>
            <h3
              id="project-modal-title"
              className="text-xl font-bold text-navy-900 dark:text-white"
            >
              {project.name}
            </h3>
            <p className="text-sm text-navy-500 dark:text-navy-300">
              {project.tagline}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do projeto"
            className="p-2 rounded-md text-navy-500 dark:text-navy-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="flex flex-wrap gap-2">
            {project.pillars.map((p) => (
              <span
                key={p}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${pillarStyles[p].badge}`}
              >
                {pillarLabels[p]}
              </span>
            ))}
          </div>

          <p className="mt-5 text-navy-600 dark:text-navy-200 leading-relaxed">
            {project.longDescription ?? project.description}
          </p>

          {project.highlights && (
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-400">
                Destaques técnicos
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-sm leading-relaxed text-navy-600 dark:text-navy-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-400">
              Stack
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-800 text-navy-700 dark:text-navy-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            <BadgeCheck size={14} aria-hidden="true" />
            {project.status}
          </p>

          {project.screenshots.some((s) => s.src) && (
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-400">
                Screenshots
              </h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {project.screenshots
                  .filter((shot) => shot.src)
                  .map((shot) => (
                    <figure key={shot.alt}>
                    <button
                      type="button"
                      onClick={() =>
                        setZoom({ src: shot.src as string, alt: shot.alt })
                      }
                      aria-label={`Ampliar: ${shot.alt}`}
                      className="group/img relative block cursor-zoom-in overflow-hidden rounded-lg border border-slate-200 dark:border-navy-700"
                    >
                      <img
                        src={shot.src as string}
                        alt={shot.alt}
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform group-hover/img:scale-[1.02]"
                      />
                      <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md bg-navy-950/80 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover/img:opacity-100 group-focus-visible/img:opacity-100">
                        <Maximize2 size={12} aria-hidden="true" />
                        Ampliar
                      </span>
                    </button>
                    {shot.caption && (
                      <figcaption className="mt-1.5 text-xs font-medium text-navy-500 dark:text-navy-400">
                        {shot.caption}
                      </figcaption>
                    )}
                    </figure>
                  ))}
              </div>
            </div>
          )}

          {(project.demoUrl || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 dark:text-accent-400 hover:underline"
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  Ver demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 dark:text-navy-300 hover:underline"
                >
                  <Code size={15} aria-hidden="true" />
                  Repositório
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {zoom && <Lightbox image={zoom} onClose={() => setZoom(null)} />}
    </div>
  );
}
