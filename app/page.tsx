import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Freelance } from "@/components/freelance";
import { Extras } from "@/components/extras";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { BackToTop } from "@/components/back-to-top";
import { Konami } from "@/components/konami";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Konami />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Freelance />
      <Extras />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
