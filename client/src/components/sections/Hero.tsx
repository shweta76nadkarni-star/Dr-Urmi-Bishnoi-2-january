import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/hero_bg_leaves.jpg";

export default function Hero() {
  const handleGetStarted = () => {
    window.open("https://wa.me/918042756155", "_blank");
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <span className="inline-block mb-4 text-lg md:text-xl font-medium tracking-wide text-white/90 font-heading">
            Welcome to MindThera
          </span> */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg font-heading">
            Best Psychologist in <span className="text-secondary">Jaipur</span> <br />
            <span className="italic font-serif text-secondary">
              Inner Peace Journey
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            Begin your healing with the best psychological counseling in Jaipur. Dr. Urmil Bishnoi provides expert therapy near you for anxiety, depression, and mental wellness in Vaishali Nagar.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={handleGetStarted}
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
