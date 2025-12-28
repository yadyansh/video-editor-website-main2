import LampHero from "@/components/LampHero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Features from "@/components/Features";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import CanvasProjects from "@/components/CanvasProjects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LampHero />
      <Stats />
      <About />
      <Features />
      <Skills />
      <Services />
      <CanvasProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
