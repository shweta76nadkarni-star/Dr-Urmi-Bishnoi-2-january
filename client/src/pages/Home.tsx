import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Best Psychologist in Jaipur | Dr. Urmil Bishnoi Therapy";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Looking for the best psychologist in Jaipur? Dr. Urmil Bishnoi offers expert counseling for anxiety, depression & hypnotherapy. Book your session today!");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Looking for the best psychologist in Jaipur? Dr. Urmil Bishnoi offers expert counseling for anxiety, depression & hypnotherapy. Book your session today!";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
