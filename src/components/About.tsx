import { personal, pillars } from "../data/content";
import { PILLAR_ICONS, pillarStyles } from "../data/pillarStyles";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const STATS = [
  { value: "6 anos", label: "em Logística" },
  { value: "3 anos", label: "como desenvolvedor" },
];

const STEPS = [
  { n: "01", title: "Entendo o problema", text: "Vivência prática na operação logística." },
  { n: "02", title: "Analiso o dado", text: "KPIs, dashboards e relatórios gerenciais." },
  { n: "03", title: "Construo a ferramenta", text: "Software próprio para automatizar o manual." },
];

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="section-y">
      <div className="container-x">
        <SectionHeader
          id="sobre-heading"
          index="01"
          eyebrow="Sobre"
          title="Operação, dado e código no mesmo perfil"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-base sm:text-lg text-navy-600 dark:text-navy-200 leading-relaxed">
              {personal.about}
            </p>
            <dl className="mt-8 flex gap-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white">
                    {s.value}
                  </dt>
                  <dd className="text-sm text-navy-500 dark:text-navy-300">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
            <ol className="mt-10 grid gap-4 sm:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="border-t-2 border-accent-500 pt-4">
                  <span className="text-xs font-semibold text-accent-600 dark:text-accent-400">
                    {s.n}
                  </span>
                  <h3 className="mt-1 font-semibold text-navy-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[pillar.id];
              const style = pillarStyles[pillar.id];
              return (
                <Reveal key={pillar.id} delay={i * 90}>
                  <div className="surface flex gap-4 p-5 transition-shadow hover:shadow-md">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.badge}`}
                    >
                      <Icon size={22} className={style.icon} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
