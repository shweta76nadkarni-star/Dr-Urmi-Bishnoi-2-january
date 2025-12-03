import { motion } from "framer-motion";
import { Brain, HeartHandshake, Briefcase, Activity, UserPlus, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const services = [
  {
    title: "Hypnotherapy",
    description: "Access the subconscious mind to foster positive change and overcome deep-seated issues.",
    icon: Sparkles,
  },
  {
    title: "Anxiety Disorder",
    description: "Effective strategies to manage and reduce anxiety, restoring calm and control to your life.",
    icon: Activity,
  },
  {
    title: "Depression Therapy",
    description: "Compassionate support and evidence-based techniques to navigate through depression.",
    icon: Brain,
  },
  {
    title: "Suicidal Ideation",
    description: "Urgent, care-focused intervention to manage crisis and build hope for the future.",
    icon: HeartHandshake,
  },
  {
    title: "PTSD Treatment",
    description: "Specialized trauma therapy to heal from past experiences and reclaim your peace.",
    icon: UserPlus,
  },
  {
    title: "Career Counseling",
    description: "Guidance to align your career path with your personal strengths and life goals.",
    icon: Briefcase,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block"
              >
                Our Services
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading"
              >
                Therapies & <span className="text-primary italic font-serif">Treatments</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600"
              >
                Comprehensive psychological services tailored to your unique needs, helping you achieve mental wellness and personal growth.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 group overflow-hidden bg-white">
                    <div className="h-2 bg-primary w-0 group-hover:w-full transition-all duration-500" />
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
