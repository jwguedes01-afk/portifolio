import { useMemo, useState } from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { projects } from "../data/content";
import { PILLAR_ICONS, pillarLabels, pillarStyles } from "../data/pillarStyles";
import type { PillarId, Project } from "../types";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const FILTERS: { id: PillarId | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "logistica", label: "Logística" },
  { id: "dados", label: "Dados" },
  { id: "dev", label: "Desenvolvimento" },
];

function ProjectCover({ project }: { project: Project }) {
  const cover = project.screenshots.find((s) => s.src);
  if (cover?.src) {
    return (
      <img
        src={cover.src}
        alt={cover.alt}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
    );
  }
  const Icon = PILLAR_ICONS[project.pillars[0]];
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
      <div aria-hidden="true" className="grid-pattern absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20 blur-2xl"
      />
      <div className="relative flex flex-col items-center gap-3">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
          <Icon size={26} className="text-accent-400" aria-hidden="true" />
        </span>
        <span className="text-lg font-bold tracking-tight text-white">
          {project.name}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<PillarId | "todos">("todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "todos"
        ? projects
        : projects.filter((p) => p.pillars.includes(filter)),
    [filter],
  );

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="section-y bg-slate-50 dark:bg-navy-900/30"
    >
      <div className="container-x">
        <SectionHeader
          id="projetos-heading"
          index="02"
          eyebrow="Projetos"
          title="Sistemas construídos para processos reais"
          description="Ferramentas próprias que substituem controles manuais e dão visibilidade à operação."
        />

        <div
          role="group"
          aria-label="Filtrar projetos por área"
          className="mt-10 flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  active
                    ? "bg-navy-900 dark:bg-accent-500 text-white dark:text-navy-950 border-navy-900 dark:border-accent-500"
                    : "border-slate-300 dark:border-navy-700 text-navy-600 dark:text-navy-300 hover:bg-white dark:hover:bg-navy-800/60"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 80} className="h-full">
              <article className="group surface flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`Abrir detalhes de ${project.name}`}
                  className="block cursor-pointer"
                >
                  <ProjectCover project={project} />
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.pillars.map((p) => (
                      <span
                        key={p}
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${pillarStyles[p].badge}`}
                      >
                        {pillarLabels[p]}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 inline-flex items-center gap-1 self-start text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    <BadgeCheck size={13} aria-hidden="true" />
                    {project.status}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-navy-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm font-medium text-navy-500 dark:text-navy-400">
                    {project.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="mt-6 inline-flex items-center gap-1 self-start text-sm font-semibold text-accent-600 dark:text-accent-400"
                  >
                    Ver detalhes
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
