import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import urmiPic from "@assets/urmi_pic_1764666975212.jpg";
import { Link } from "wouter";

export default function About() {
  const qualifications = [
    "Ph.D & M.Phil in Psychology",
    "Empathetic, Supportive & Non-judgmental",
    "Holistic, Client-Centered & Result-Oriented",
    "Extensive background in clinical psychology",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white overflow-hidden" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 rotate-0 translate-y-4 translate-x-4 w-50 hidden sm:block" />
            <img
              src={urmiPic}
              alt="Dr. Urmil Bishnoi - Best Psychologist in Jaipur"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-xl h-auto object-contain bg-white"
              data-testid="img-about-dr-urmil"
              loading="lazy"
            />
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 lg:-right-8 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-[200px] sm:max-w-xs hidden sm:block border border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="bg-primary/10 p-2 rounded-full text-primary font-bold text-lg sm:text-xl">
                  22+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800">
                  Years of Experience
                </div>
              </div>
              <p className="text-xs text-gray-500 hidden sm:block">
                Dedicated to your mental wellness and personal growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 font-heading">
              Top-Rated Clinical <span className="text-primary italic font-serif">Psychologist in Jaipur</span>
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
              Dr. Urmil Bishnoi is a distinguished psychologist in Jaipur dedicated to helping individuals find balance and peace. With over 22 years of experience in clinical psychology near Vaishali Nagar, she offers a safe, non-judgmental environment for healing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {qualifications.map((item, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`qualification-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-6 sm:mb-8 italic border-l-4 border-primary pl-4 text-sm sm:text-base">
              "My goal is to empower you to overcome challenges and live a
              fulfilling life through understanding and tailored therapeutic
              strategies."
            </p>

            <Link href="/about">
              <Button
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-6 sm:px-8 min-h-[48px]"
                data-testid="button-more-about"
              >
                More About Dr. Urmil Bishnoi
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
