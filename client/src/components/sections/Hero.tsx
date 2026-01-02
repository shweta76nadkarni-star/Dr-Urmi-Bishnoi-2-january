import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@assets/hero_bg_leaves.jpg";
import { Link } from "wouter";
import { memo } from "react";

const Hero = memo(function Hero() {
  const handleGetStarted = () => {
    window.open("https://wa.me/+917014086770", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="container relative z-20 px-4 sm:px-6 text-center text-white py-8 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg font-heading"
            data-testid="heading-hero"
          >
            Best Psychologist in <span className="text-secondary">Jaipur</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> </span>
            <span className="italic font-serif text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              Inner Peace Journey
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed px-2">
            Begin your healing with the best psychological counseling in Jaipur.
            Dr. Urmil Bishnoi provides expert therapy for anxiety, depression,
            and mental wellness.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Link href="/book-appointment">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all min-h-[48px]"
                data-testid="button-hero-book"
              >
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+917014086770" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full min-h-[48px]"
                data-testid="button-hero-call"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
