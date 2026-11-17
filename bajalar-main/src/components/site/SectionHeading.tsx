import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary")}>
        <span className="h-px w-8 bg-primary/60" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-primary/60" />}
      </p>
      <h2 className="font-display text-4xl font-medium leading-tight text-balance sm:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
