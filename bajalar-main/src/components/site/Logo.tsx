import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="2BAJA"
      className={cn("group inline-flex items-center gap-2.5 font-display text-2xl font-semibold tracking-[0.18em]", className)}
    >
      <span aria-hidden className="size-2 rotate-45 bg-gold transition-transform duration-500 group-hover:rotate-[225deg]" />
      <span>
        <span className="text-gold">2</span>BAJA
      </span>
    </a>
  );
}
