import { describe, expect, it } from "vitest";
import { isValidPhone, makeContactSchema } from "./contact-schema";
import { dictionaries } from "./i18n";

const schema = makeContactSchema(dictionaries.kk.contact.errors);
const valid = { name: "Айгерім", phone: "+7 701 123 45 67", service: "web", message: "" };

describe("contact form rules", () => {
  it("accepts a Kazakhstan phone number", () => {
    expect(isValidPhone("+7 (701) 123-45-67")).toBe(true);
  });
  it("rejects a too-short phone number", () => {
    expect(isValidPhone("12345")).toBe(false);
  });
  it("requires a service to be chosen", () => {
    expect(schema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });
  it("requires a name", () => {
    expect(schema.safeParse({ ...valid, name: " " }).success).toBe(false);
  });
  it("accepts a complete form", () => {
    expect(schema.safeParse(valid).success).toBe(true);
  });
});

describe("languages", () => {
  it("uses the given Kazakh and Russian hero headlines", () => {
    expect(dictionaries.kk.hero.title).toBe("Болашақ бүгіннен басталады.");
    expect(dictionaries.ru.hero.title).toBe("Будущее начинается сегодня.");
  });
});
