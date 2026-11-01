import { skills } from "../data/content";
import { PILLAR_ICONS, pillarLabels, pillarStyles } from "../data/pillarStyles";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="section-y">
      <div className="container-x">
        <SectionHeader
          id="stack-heading"
          index="04"
          eyebrow="Competências"
          title="Ferramentas e tecnologias"
          description="Organizadas pelas mesmas três áreas em que atuo."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = PILLAR_ICONS[group.pillar];
            const style = pillarStyles[group.pillar];
            return (
              <Reveal key={group.pillar} delay={i * 90} className="h-full">
                <div className="surface h-full p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${style.badge}`}
                    >
                      <Icon size={20} className={style.icon} aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-navy-900 dark:text-white">
                      {pillarLabels[group.pillar]}
                    </h3>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-100 dark:bg-navy-800 text-navy-700 dark:text-navy-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
