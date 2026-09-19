interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-[160px_1fr]">
      <div className="font-mono text-xs tracking-[0.2em] text-white/40">
        {number} / {eyebrow}
      </div>

      <div>
        <h2 className="max-w-3xl text-4xl font-medium tracking-tight text-white md:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}