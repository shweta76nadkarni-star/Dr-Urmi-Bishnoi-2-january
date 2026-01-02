import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Heart, Users, BookOpen, Target, Clock, Shield } from "lucide-react";
import urmiPic from "@assets/urmi_pic_1764666975212.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useEffect } from "react";
import { Link } from "wouter";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Dr. Urmil Bishnoi | Top Psychologist in Jaipur";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Meet Dr. Urmil Bishnoi, a top psychologist in Jaipur with 22+ years of experience. Expert in clinical psychology, healing anxiety, depression, PTSD, and mental wellness counseling.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Meet Dr. Urmil Bishnoi, a top psychologist in Jaipur with 22+ years of experience. Expert in clinical psychology, healing anxiety, depression, PTSD, and mental wellness counseling.";
      document.head.appendChild(meta);
    }
  }, []);

  const qualifications = [
    "Ph.D in Psychology",
    "M.Phil in Clinical Psychology",
    "Licensed Clinical Psychologist",
    "Certified Hypnotherapist",
  ];

  const expertise = [
    "Anxiety & Panic Disorders",
    "Depression & Mood Disorders",
    "PTSD & Trauma Recovery",
    "Clinical Hypnotherapy",
    "Career Counseling",
    "Relationship Issues",
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every client receives empathetic, non-judgmental support in a safe and welcoming environment."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy is paramount. All sessions and information are kept strictly confidential."
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Treatment approaches are grounded in the latest psychological research and proven techniques."
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Therapy is tailored to your unique needs, goals, and personal circumstances."
    },
  ];

  const stats = [
    { number: "22+", label: "Years Experience" },
    { number: "5000+", label: "Clients Helped" },
    { number: "98%", label: "Success Rate" },
    { number: "6", label: "Specializations" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  alt="Dr. Urmil Bishnoi - Best Psychologist in Jaipur"
                  className="rounded-2xl shadow-xl w-full max-w-xl h-auto object-contain bg-white"
                  data-testid="img-dr-urmil"
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

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                  About Dr. Urmil Bishnoi
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading" data-testid="heading-about">
                  Best Psychologist & Counselor in <span className="text-primary italic font-serif">Jaipur</span>
                </h1>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Transform Your Mental Health with Expert Guidance</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Dr. Urmil Bishnoi is a renowned clinical psychologist based in Jaipur with over 22 years of dedicated experience in mental health care. Her compassionate, client-centered approach has helped thousands of individuals overcome anxiety, depression, trauma, and various life challenges.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With advanced qualifications including a Ph.D and M.Phil in Psychology, Dr. Bishnoi combines scientific expertise with deep empathy. Her clinic near Vaishali Nagar provides a safe, welcoming environment where clients can explore their concerns without judgment and work toward meaningful, lasting change.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {qualifications.map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`qualification-${index}`}>
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 mb-8 italic border-l-4 border-primary pl-4">
                  "My goal is to empower you to overcome challenges and live a fulfilling life through understanding, compassion, and tailored therapeutic strategies."
                </p>

                <Link href="/book-appointment">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold" data-testid="button-book-consultation">
                    Book a Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                My Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
                Committed to Your <span className="text-primary italic font-serif">Mental Wellness</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                I believe that everyone deserves access to quality mental health care. My mission is to provide compassionate, evidence-based psychological services that empower individuals to overcome challenges, heal from trauma, and build fulfilling lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white" data-testid={`value-card-${index}`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Therapeutic Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading">
                  How I <span className="text-primary italic font-serif">Help</span> You Heal
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  My therapeutic approach integrates multiple evidence-based modalities to create a personalized treatment plan for each client. I believe in treating the whole person, not just symptoms.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cognitive Behavioral Therapy (CBT)</h4>
                      <p className="text-gray-600 text-sm">Identifying and changing negative thought patterns that affect emotions and behaviors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Clinical Hypnotherapy</h4>
                      <p className="text-gray-600 text-sm">Accessing the subconscious mind to address deep-rooted issues and promote healing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Mindfulness-Based Therapy</h4>
                      <p className="text-gray-600 text-sm">Teaching present-moment awareness to reduce stress and improve emotional regulation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Person-Centered Therapy</h4>
                      <p className="text-gray-600 text-sm">Creating a supportive environment where you feel heard, understood, and empowered.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm" data-testid={`expertise-${index}`}>
                        <Award className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-white rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <h4 className="font-bold text-gray-900">Clinic Hours</h4>
                    </div>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">10:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">By Appointment</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Ready to Start Your <span className="text-primary italic font-serif">Healing Journey</span>?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Take the first step toward better mental health. Schedule a confidential consultation with Dr. Urmil Bishnoi today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-appointment">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold" data-testid="button-schedule-appointment">
                    Schedule Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-6 text-lg font-semibold" data-testid="button-view-services">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
