import TextAnimation from "@/components/ui/staggerText";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        <TextAnimation>{title}</TextAnimation>
      </h2>
    </div>
  );
}
