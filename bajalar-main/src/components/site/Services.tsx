import { ArrowUpRight, Bot, Layers, MonitorSmartphone, ShoppingBag, type LucideIcon } from "lucide-react";
import { useI18n, type ServiceKey } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES: { key: ServiceKey; icon: LucideIcon }[] = [
  { key: "web", icon: MonitorSmartphone },
  { key: "ai", icon: Bot },
  { key: "shop", icon: ShoppingBag },
  { key: "digital", icon: Layers },
];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ key, icon: Icon }, i) => (
            <Reveal key={key} delay={i * 100} className="h-full">
              <article className="gold-border-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card-premium p-7 shadow-card transition-all duration-500 hover:-translate-y-2">
                <div aria-hidden className="absolute -top-20 -right-20 size-48 rounded-full bg-primary/0 blur-3xl transition-colors duration-700 group-hover:bg-primary/20" />
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-xl border border-primary/30 bg-background/60 text-primary transition-all duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-lg text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold">{t.services.items[key].title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.services.items[key].text}</p>
                <a
                  href="#contacts"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3"
                >
                  {t.services.more}
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
