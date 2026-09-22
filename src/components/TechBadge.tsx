interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex max-w-full min-w-0 break-words rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] leading-4 tracking-wide text-white/45 transition-colors hover:border-white/25 hover:text-white/70">
      {name}
    </span>
  );
}