import { motion } from "framer-motion";
import { Brain, HeartHandshake, Briefcase, Activity, UserPlus, Sparkles, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useEffect } from "react";
import { Link } from "wouter";

const detailedServices = [
  {
    id: "hypnotherapy",
    title: "Hypnotherapy",
    tagline: "Unlock Your Subconscious Potential",
    icon: Sparkles,
    shortDescription: "Access the subconscious mind to foster positive change and overcome deep-seated issues.",
    fullDescription: "Clinical hypnotherapy is a powerful therapeutic technique that uses guided relaxation and focused attention to achieve a heightened state of awareness. In this deeply relaxed state, we can work directly with your subconscious mind to address issues that may be resistant to traditional talk therapy.",
    benefits: [
      "Overcome phobias and fears",
      "Break unwanted habits (smoking, overeating)",
      "Reduce chronic pain and stress",
      "Improve sleep quality",
      "Boost confidence and self-esteem",
      "Enhance performance (academic, sports, career)"
    ],
    process: [
      "Initial assessment to understand your goals",
      "Personalized hypnotherapy sessions",
      "Teaching self-hypnosis techniques",
      "Follow-up sessions for reinforcement"
    ],
    duration: "45-60 minutes per session",
    sessions: "Typically 4-8 sessions"
  },
  {
    id: "anxiety-disorder",
    title: "Anxiety Disorder Treatment",
    tagline: "Find Calm in the Chaos",
    icon: Activity,
    shortDescription: "Effective strategies to manage and reduce anxiety, restoring calm and control to your life.",
    fullDescription: "Anxiety disorders are among the most common mental health conditions, affecting millions of people. Whether you're dealing with generalized anxiety, panic attacks, social anxiety, or specific phobias, evidence-based treatment can help you regain control and live a fuller life.",
    benefits: [
      "Reduce panic attacks and their intensity",
      "Manage social anxiety effectively",
      "Overcome specific phobias",
      "Improve sleep disrupted by worry",
      "Develop healthy coping mechanisms",
      "Regain confidence in daily activities"
    ],
    process: [
      "Comprehensive anxiety assessment",
      "Cognitive Behavioral Therapy (CBT) sessions",
      "Relaxation and mindfulness training",
      "Exposure therapy when appropriate",
      "Building long-term resilience strategies"
    ],
    duration: "50-60 minutes per session",
    sessions: "8-16 sessions typically"
  },
  {
    id: "depression-therapy",
    title: "Depression Therapy",
    tagline: "Rediscover Hope and Joy",
    icon: Brain,
    shortDescription: "Compassionate support and evidence-based techniques to navigate through depression.",
    fullDescription: "Depression is more than just feeling sad. It's a complex condition that affects your thoughts, feelings, behavior, and physical health. With proper treatment, most people with depression can find relief and return to a fulfilling life. Dr. Urmil Bishnoi provides compassionate, evidence-based depression therapy tailored to your unique situation.",
    benefits: [
      "Lift persistent feelings of sadness",
      "Restore energy and motivation",
      "Improve sleep patterns",
      "Rebuild interest in activities you once enjoyed",
      "Strengthen relationships affected by depression",
      "Develop strategies to prevent relapse"
    ],
    process: [
      "Thorough evaluation of symptoms and history",
      "Personalized treatment plan development",
      "Weekly therapy sessions (CBT, behavioral activation)",
      "Mindfulness and lifestyle modifications",
      "Ongoing progress monitoring and adjustments"
    ],
    duration: "50-60 minutes per session",
    sessions: "12-20 sessions typically"
  },
  {
    id: "suicidal-ideation",
    title: "Suicidal Ideation Support",
    tagline: "There is Hope. You Are Not Alone.",
    icon: HeartHandshake,
    shortDescription: "Urgent, care-focused intervention to manage crisis and build hope for the future.",
    fullDescription: "If you're experiencing thoughts of suicide, please know that help is available and recovery is possible. Dr. Urmil Bishnoi provides compassionate, non-judgmental support for individuals struggling with suicidal thoughts. Crisis intervention combined with ongoing therapy can help you find reasons to live and build a meaningful future.",
    benefits: [
      "Immediate crisis support and safety planning",
      "Understanding the root causes of suicidal thoughts",
      "Building reasons for living and hope",
      "Developing healthy coping strategies",
      "Connecting with support systems",
      "Long-term recovery and prevention"
    ],
    process: [
      "Immediate risk assessment and safety planning",
      "Crisis intervention when needed",
      "Identifying triggers and warning signs",
      "Therapy to address underlying issues",
      "Building a support network",
      "Ongoing monitoring and care"
    ],
    duration: "60-90 minutes for crisis sessions",
    sessions: "Ongoing as needed",
    urgent: true
  },
  {
    id: "ptsd-treatment",
    title: "PTSD Treatment",
    tagline: "Heal from the Past, Embrace the Future",
    icon: UserPlus,
    shortDescription: "Specialized trauma therapy to heal from past experiences and reclaim your peace.",
    fullDescription: "Post-Traumatic Stress Disorder can develop after experiencing or witnessing a traumatic event. Symptoms like flashbacks, nightmares, severe anxiety, and emotional numbing can significantly impact your daily life. Dr. Urmil Bishnoi offers specialized trauma-focused therapy to help you process traumatic memories and reclaim your sense of safety and peace.",
    benefits: [
      "Reduce flashbacks and intrusive memories",
      "Improve sleep and reduce nightmares",
      "Decrease hypervigilance and startle responses",
      "Process traumatic memories safely",
      "Rebuild trust and relationships",
      "Restore sense of safety and control"
    ],
    process: [
      "Comprehensive trauma assessment",
      "Building safety and stabilization skills",
      "Trauma-focused therapy (EMDR-informed approaches)",
      "Processing traumatic memories in a safe environment",
      "Integration and post-traumatic growth",
      "Relapse prevention strategies"
    ],
    duration: "60-90 minutes per session",
    sessions: "12-24 sessions typically"
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    tagline: "Align Your Career with Your Life Purpose",
    icon: Briefcase,
    shortDescription: "Guidance to align your career path with your personal strengths and life goals.",
    fullDescription: "Career decisions significantly impact life satisfaction and mental wellbeing. Whether you're choosing your first career path, considering a change, dealing with workplace stress, or seeking work-life balance, career counseling can help you make informed decisions aligned with your values and strengths.",
    benefits: [
      "Clarity on career direction and goals",
      "Better understanding of your strengths and values",
      "Improved decision-making skills",
      "Strategies for workplace stress management",
      "Enhanced interview and communication skills",
      "Better work-life balance"
    ],
    process: [
      "Career and personality assessments",
      "Exploring interests, values, and strengths",
      "Setting realistic career goals",
      "Developing action plans",
      "Building confidence and interview skills",
      "Ongoing support during transitions"
    ],
    duration: "50-60 minutes per session",
    sessions: "4-8 sessions typically"
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Mental Health Services in Jaipur | Hypnotherapy, Anxiety & Depression Treatment";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Comprehensive psychological services in Jaipur by Dr. Urmil Bishnoi. Expert treatment for anxiety disorders, depression, PTSD, hypnotherapy, and career counseling. Book your consultation today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Comprehensive psychological services in Jaipur by Dr. Urmil Bishnoi. Expert treatment for anxiety disorders, depression, PTSD, hypnotherapy, and career counseling. Book your consultation today.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block"
              >
                Our Services
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 font-heading"
                data-testid="heading-services"
              >
                Comprehensive <span className="text-primary italic font-serif">Mental Health</span> Services in Jaipur
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg"
              >
                Dr. Urmil Bishnoi offers a full range of evidence-based psychological services tailored to your unique needs. From anxiety and depression to trauma recovery and career guidance, find the support you need to thrive.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {detailedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={`#${service.id}`}>
                    <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white cursor-pointer" data-testid={`card-service-${service.id}`}>
                      <div className="h-2 bg-primary w-0 group-hover:w-full transition-all duration-500" />
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                              {service.title}
                            </CardTitle>
                            {service.urgent && (
                              <Badge variant="destructive" className="mt-1 text-xs">Crisis Support Available</Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {detailedServices.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading" data-testid={`heading-${service.id}`}>
                        {service.title}
                      </h2>
                      <p className="text-primary font-medium italic">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2" data-testid={`benefit-${service.id}-${idx}`}>
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/book-appointment">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold" data-testid={`button-book-${service.id}`}>
                      Book {service.title} Session
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={index % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Treatment Process</h3>
                      <div className="space-y-4 mb-8">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-4" data-testid={`process-${service.id}-${idx}`}>
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                              {idx + 1}
                            </div>
                            <p className="text-gray-700 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white rounded-lg p-6 space-y-4">
                        <div className="flex justify-between items-center border-b pb-3">
                          <span className="text-gray-600">Session Duration</span>
                          <span className="font-semibold text-gray-900">{service.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Recommended Sessions</span>
                          <span className="font-semibold text-gray-900">{service.sessions}</span>
                        </div>
                      </div>

                      {service.urgent && (
                        <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg">
                          <div className="flex items-center gap-2 text-red-700 font-semibold mb-2">
                            <Phone className="h-5 w-5" />
                            Crisis Support Available
                          </div>
                          <p className="text-red-600 text-sm">
                            If you're in immediate crisis, please call <a href="tel:+918042756155" className="font-bold underline">+91 8042756155</a> or visit your nearest emergency room.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
                Schedule a free initial consultation where Dr. Urmil Bishnoi will assess your needs and recommend the most appropriate treatment approach for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-appointment">
                  <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold" data-testid="button-free-consultation">
                    Book Free Consultation
                  </Button>
                </Link>
                <a href="tel:+918042756155">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold" data-testid="button-call-now">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Button>
                </a>
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
