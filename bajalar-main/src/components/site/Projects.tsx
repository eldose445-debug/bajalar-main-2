import { ArrowUpRight, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import restaurant from "@/assets/project-restaurant.jpg";
import ai from "@/assets/project-ai.jpg";
import shop from "@/assets/project-shop.jpg";

const IMAGES = [restaurant, ai, shop];

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <Reveal delay={100} className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs text-primary sm:text-sm">
          <Info className="size-4 shrink-0" />
          {t.projects.note}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((p, i) => (
            <Reveal key={i} delay={i * 120} className={i === 0 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <article className="gold-border-hover group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES[i] ?? restaurant}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
                    {t.projects.demo}
                  </span>
                  <span className="absolute top-4 right-4 grid size-10 translate-y-2 place-items-center rounded-full border border-primary/40 bg-background/70 text-primary opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
