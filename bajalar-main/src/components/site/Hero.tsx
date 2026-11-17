import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import heroImage from "@/assets/hero-gold.jpg";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] animate-glow" />

      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1600}
        height={1200}
        className="pointer-events-none absolute top-1/2 right-[-30%] w-[150%] max-w-none -translate-y-1/2 opacity-40 animate-float-slow [mask-image:radial-gradient(closest-side,black_55%,transparent)] sm:right-[-20%] sm:w-[110%] lg:right-[-12%] lg:w-[68%] lg:opacity-90"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p
            key={`eb-${t.hero.eyebrow}`}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-card/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur animate-in fade-in slide-in-from-bottom-2 duration-700"
          >
            <span className="size-1.5 rounded-full bg-primary animate-glow" />
            {t.hero.eyebrow}
          </p>
          <h1
            key={`h-${t.hero.title}`}
            className="font-display text-5xl font-medium leading-[1.02] text-balance sm:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            {t.hero.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gold italic">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </h1>
          <p
            key={`s-${t.hero.subtitle}`}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            {t.hero.subtitle}
          </p>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href="#services">
                {t.hero.primary}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <a href="#contacts">{t.hero.secondary}</a>
            </Button>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {t.hero.chips.map((chip) => (
              <li key={chip} className="flex items-center gap-2.5">
                <span className="size-1 rotate-45 bg-primary" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        {t.hero.scroll}
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
