import { useState, type FormEvent } from "react";
import { ChevronDown, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n, type ServiceKey } from "@/lib/i18n";
import { makeContactSchema, SERVICE_OPTIONS } from "@/lib/contact-schema";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { InstagramIcon, WhatsAppIcon } from "./SocialIcons";

type Field = "name" | "phone" | "service" | "message";
const EMPTY = { name: "", phone: "", service: "", message: "" };

const fieldClass =
  "h-12 rounded-xl border-border bg-background/60 px-4 text-base transition-colors focus-visible:border-primary focus-visible:ring-primary/40";

export function Contact() {
  const { t } = useI18n();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [sending, setSending] = useState(false);

  const update = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = makeContactSchema(t.contact.errors).safeParse(values);
    if (!result.success) {
      const next: Partial<Record<Field, boolean>> = {};
      result.error.issues.forEach((issue) => (next[issue.path[0] as Field] = true));
      setErrors(next);
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setValues(EMPTY);
    toast.success(t.contact.success, { description: t.contact.successDesc });
  };

  const errorText = (field: Field) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs text-destructive" role="alert">
        {t.contact.errors[field]}
      </p>
    ) : null;

  return (
    <section id="contacts" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute -right-40 bottom-0 size-[32rem] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.text} align="left" />
          <Reveal delay={150} className="mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{t.contact.or}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="grid size-12 place-items-center rounded-full bg-gold text-primary-foreground">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href={siteConfig.whatsappUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="grid size-12 place-items-center rounded-full bg-gold text-primary-foreground">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="grid size-12 place-items-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <InstagramIcon className="size-5" />
                </span>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card-premium p-6 shadow-card sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">{t.contact.name}</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t.contact.namePh}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={cn(fieldClass, errors.name && "border-destructive")}
                />
                {errorText("name")}
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block text-sm text-muted-foreground">{t.contact.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={t.contact.phonePh}
                  maxLength={20}
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  className={cn(fieldClass, errors.phone && "border-destructive")}
                />
                {errorText("phone")}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="service" className="mb-2 block text-sm text-muted-foreground">{t.contact.service}</Label>
              <div className="relative">
                <select
                  id="service"
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                  aria-invalid={!!errors.service}
                  className={cn(
                    "h-12 w-full appearance-none rounded-xl border border-border bg-background/60 pr-11 pl-4 text-base outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/40",
                    !values.service && "text-muted-foreground",
                    errors.service && "border-destructive",
                  )}
                >
                  <option value="" disabled>
                    {t.contact.servicePh}
                  </option>
                  {SERVICE_OPTIONS.map((key) => (
                    <option key={key} value={key} className="bg-card text-foreground">
                      {key === "other" ? t.contact.other : t.services.items[key as ServiceKey].title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-primary" />
              </div>
              {errorText("service")}
            </div>

            <div className="mt-6">
              <Label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">{t.contact.message}</Label>
              <Textarea
                id="message"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder={t.contact.messagePh}
                maxLength={1000}
                rows={5}
                aria-invalid={!!errors.message}
                className="min-h-32 rounded-xl border-border bg-background/60 px-4 py-3 text-base focus-visible:border-primary focus-visible:ring-primary/40"
              />
              {errorText("message")}
            </div>

            <Button type="submit" variant="gold" size="xl" disabled={sending} className="mt-8 w-full">
              {sending ? t.contact.sending : t.contact.submit}
              <Send />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
