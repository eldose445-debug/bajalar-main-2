import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative overflow-hidden bg-card py-24 sm:py-32">
      <div className="gold-line absolute inset-x-0 top-0" />
      <div aria-hidden className="absolute top-1/2 -left-40 size-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
          <Reveal delay={150}>
            <p className="mt-8 text-lg leading-relaxed text-foreground/90">{t.about.p1}</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.about.p2}</p>
          </Reveal>
          <Reveal delay={250} className="mt-12 flex items-center gap-6">
            <span className="font-display text-7xl font-semibold text-gold sm:text-8xl">2B</span>
            <span className="h-16 w-px bg-border" />
            <span className="max-w-[14rem] text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</span>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{t.about.processTitle}</p>
          </Reveal>
          <ol className="relative space-y-4">
            {t.about.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120}>
                <div className="group flex gap-6 rounded-2xl border border-border bg-background/50 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-background">
                  <span className="font-display text-4xl text-primary/60 transition-colors group-hover:text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
