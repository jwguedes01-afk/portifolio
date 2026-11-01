import { useState } from "react";
import { BarChart3, ExternalLink, Maximize2 } from "lucide-react";
import { dashboards, personal } from "../data/content";
import Lightbox, { type LightboxImage } from "./Lightbox";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const KPIS = ["OTIF", "Lead time", "Custo/kg", "Custo/cubado", "Frota", "Estoque"];

export default function PowerBI() {
  const [zoom, setZoom] = useState<LightboxImage | null>(null);

  return (
    <section
      id="powerbi"
      aria-labelledby="powerbi-heading"
      className="section-y bg-slate-50 dark:bg-navy-900/30"
    >
      <div className="container-x">
        <SectionHeader
          id="powerbi-heading"
          index="03"
          eyebrow="Power BI"
          title="Painéis da operação logística"
          description="Dashboards e relatórios gerenciais que transformam a operação logística em indicadores claros."
        />

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {KPIS.map((k) => (
            <span
              key={k}
              className="rounded-full border border-slate-300 dark:border-navy-700 px-3 py-1 text-xs font-semibold text-navy-600 dark:text-navy-300"
            >
              {k}
            </span>
          ))}
        </Reveal>

        {dashboards.length > 0 ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {dashboards.map((d, i) => (
              <Reveal key={d.id} delay={i * 90} className="h-full">
                <article className="surface flex h-full flex-col overflow-hidden">
                  {d.embedUrl ? (
                    <iframe
                      title={d.title}
                      src={d.embedUrl}
                      loading="lazy"
                      allowFullScreen
                      className="aspect-video w-full border-0 bg-navy-900"
                    />
                  ) : d.image ? (
                    <button
                      type="button"
                      onClick={() => setZoom({ src: d.image!, alt: d.title })}
                      aria-label={`Ampliar ${d.title}`}
                      className="group/img relative block"
                    >
                      <img
                        src={d.image}
                        alt={d.title}
                        loading="lazy"
                        className="aspect-video w-full object-cover"
                      />
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-navy-950/80 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover/img:opacity-100 group-focus-visible/img:opacity-100">
                        <Maximize2 size={13} aria-hidden="true" />
                        Ampliar
                      </span>
                    </button>
                  ) : null}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                      {d.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {d.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10">
            <div className="surface flex flex-col items-center gap-4 px-6 py-14 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
                <BarChart3 size={26} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                Dashboards em publicação
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-navy-500 dark:text-navy-300">
                Os relatórios em Power BI serão exibidos aqui. Fale comigo para
                ver exemplos do trabalho com indicadores logísticos.
              </p>
              {personal.powerBiUrl && (
                <a
                  href={personal.powerBiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-accent-400 transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Abrir no Power BI
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>

      {zoom && <Lightbox image={zoom} onClose={() => setZoom(null)} />}
    </section>
  );
}
