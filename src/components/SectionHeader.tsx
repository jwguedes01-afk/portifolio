import Reveal from "./Reveal";

interface SectionHeaderProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <Reveal className="max-w-2xl">
      <p className={light ? "eyebrow !text-accent-400" : "eyebrow"}>
        {index} — {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-navy-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-navy-300" : "text-navy-500 dark:text-navy-300"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
