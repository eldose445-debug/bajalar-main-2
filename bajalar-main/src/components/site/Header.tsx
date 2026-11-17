import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n, LANGS } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export const NAV_IDS = ["services", "about", "projects", "contacts"] as const;

export function LangSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div role="group" aria-label={t.langLabel} className={cn("relative flex rounded-full border border-border bg-card/60 p-1 text-xs font-semibold", className)}>
      <span
        aria-hidden
        className={cn(
          "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gold transition-transform duration-500 ease-out",
          lang === "ru" ? "translate-x-full" : "translate-x-0",
        )}
      />
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "relative z-10 w-10 rounded-full py-1.5 tracking-wider transition-colors duration-300",
            lang === l ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l === "kk" ? "KZ" : "RU"}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[id]}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher className="hidden sm:flex" />
          <Button asChild variant="gold" className="hidden h-10 px-6 md:inline-flex">
            <a href="#contacts">{t.nav.cta}</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex h-[calc(100svh-5rem)] flex-col gap-2 px-5 pb-10 pt-6 sm:px-8">
          {NAV_IDS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-border py-5 font-display text-3xl"
            >
              <span className="font-sans text-xs text-primary">0{i + 1}</span>
              {t.nav[id]}
            </a>
          ))}
          <div className="mt-8 flex items-center justify-between gap-4">
            <LangSwitcher />
            <Button asChild variant="gold" size="lg">
              <a href="#contacts" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
