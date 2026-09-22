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
    <div className="mb-10 grid min-w-0 gap-5 sm:mb-12 sm:gap-6 md:grid-cols-[160px_minmax(0,1fr)]">
      <div className="min-w-0 font-mono text-[10px] tracking-[0.18em] text-white/40 sm:text-xs sm:tracking-[0.2em]">
        {number} / {eyebrow}
      </div>

      <div className="min-w-0">
        <h2 className="max-w-3xl break-words text-3xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-4xl md:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 max-w-2xl break-words text-[15px] leading-7 text-white/55 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}