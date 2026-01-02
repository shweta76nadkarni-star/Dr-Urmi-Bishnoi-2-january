import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import urmiPic from "@assets/urmi_pic_1764666975212.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useEffect } from "react";

export default function AboutPage() {
  const qualifications = [
    " Ph.D & M.Phil in Psychology  ",
    " Empathetic, Supportive & Non-judgmental",
    " Holistic, Client-Centered & Result-Oriented",
    " Extensive background in clinical psychology",
  ];
  useEffect(() => {
    document.title = "About Dr. Urmil Bishnoi | Top Psychologist in Jaipur";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet Dr. Urmil Bishnoi, a top psychologist in Jaipur with 22+ years of experience. Expert in clinical psychology, healing anxiety, and mental wellness counseling.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Meet Dr. Urmil Bishnoi, a top psychologist in Jaipur with 22+ years of experience. Expert in clinical psychology, healing anxiety, and mental wellness counseling.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
        <section id="about" className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 rotate-0 translate-y-4 translate-x-4 w-50" />
                <img
                  src={urmiPic}
                  alt="Dr. Urmil Bishnoi - Psychologist in Jaipur"
                  className="rounded-2xl shadow-xl w-full max-w-xl h-auto object-contain bg-white"
                />
                <div className="absolute bottom-8 right-4 lg:-right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block border border-gray-100">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full text-primary font-bold text-xl">
                      22+
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      Years of Experience
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Dedicated to your mental wellness in Jaipur.
                  </p>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                  About Dr. Urmil
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading">
                  Best Counselor in <span className="text-primary italic font-serif">Jaipur</span>
                </h1>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Transform Your Mental Health with Expert Guidance</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Dr. Urmil Bishnoi is a top-rated psychologist in Jaipur helping individuals find balance. With a compassionate, client-centered approach near Vaishali Nagar, she creates a safe space for emotional healing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {qualifications.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 mb-8 italic border-l-4 border-primary pl-4">
                  "My goal is to empower you to overcome challenges and live a
                  fulfilling life through understanding and tailored therapeutic
                  strategies."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
