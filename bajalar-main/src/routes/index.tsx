import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "2BAJA — Цифрлық және AI агенттігі | Сайт әзірлеу, AI автоматтандыру";
const DESCRIPTION =
  "2BAJA — бизнесіңізді жаңа деңгейге көтеретін цифрлық шешімдер: сайт әзірлеу, AI автоматтандыру, онлайн сауда. Разработка сайтов и AI-автоматизация в Казахстане.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "kk_KZ" },
      { property: "og:locale:alternate", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
