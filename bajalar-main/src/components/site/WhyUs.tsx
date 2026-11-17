import { Cpu, Fingerprint, ShieldCheck, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [Cpu, Fingerprint, ShieldCheck, TrendingUp];

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-card py-24 sm:py-32">
      <div className="gold-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-border sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i] ?? Cpu;
            return (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group relative border-border bg-background/40 p-8 transition-colors duration-500 hover:bg-background max-lg:border-b sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 sm:max-lg:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                <Icon className="size-8 text-primary" strokeWidth={1.3} />
                <h3 className="mt-8 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
