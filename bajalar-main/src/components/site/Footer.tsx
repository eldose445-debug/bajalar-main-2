import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { NAV_IDS } from "./Header";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

export function Footer() {
  const { t } = useI18n();
  const socials = [
    { label: "WhatsApp", href: siteConfig.whatsappUrl, Icon: WhatsAppIcon },
    { label: "Instagram", href: siteConfig.instagramUrl, Icon: InstagramIcon },
  ];
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="gold-line absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.footer.menu}</p>
          <ul className="space-y-3">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.footer.social}</p>
          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:border-primary hover:bg-gold hover:text-primary-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © 2026 2BAJA. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
