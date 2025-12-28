import LampHero from "@/components/LampHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CanvasProjects from "@/components/CanvasProjects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LampHero />
      <About />
      <Skills />
      <Services />
      <CanvasProjects />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
