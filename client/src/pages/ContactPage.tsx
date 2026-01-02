import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useEffect } from "react";
import { Link } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().optional(),
});

const faqs = [
  {
    question: "What should I expect during my first session?",
    answer:
      "Your first session is a confidential consultation where Dr. Urmil will listen to your concerns, understand your history, and assess your needs. Together, you'll discuss treatment options and develop a personalized plan. The session typically lasts 60-90 minutes.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies depending on your specific concerns and goals. Some issues can be addressed in 4-8 sessions, while others may require longer-term therapy. Dr. Urmil will provide an estimate after your initial assessment.",
  },
  {
    question: "Is therapy confidential?",
    answer:
      "Yes, absolutely. All sessions and information shared are strictly confidential. Dr. Urmil adheres to professional ethical guidelines that protect your privacy. Information is only shared with your explicit consent or in rare cases where safety is a concern.",
  },
  {
    question: "Do you offer online/video consultations?",
    answer:
      "Yes, we offer secure video consultations for clients who prefer remote sessions or cannot visit the clinic in person. Online sessions are just as effective as in-person therapy for most conditions.",
  },
  {
    question: "What are your fees?",
    answer:
      "Fees vary depending on the type and duration of the session. Please contact us directly for current pricing information. We believe mental health care should be accessible and can discuss options during your initial consultation.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through WhatsApp, by calling our clinic, or by filling out the contact form on this page. We'll respond within 24 hours to confirm your appointment time.",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    document.title =
      "Contact Best Psychologist in Jaipur | Dr. Urmil Bishnoi Clinic";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Contact Dr. Urmil Bishnoi, the best psychologist in Jaipur. Visit our clinic in Vaishali Nagar for expert counseling & therapy. Call +91 8042756155 to book your appointment.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Contact Dr. Urmil Bishnoi, the best psychologist in Jaipur. Visit our clinic in Vaishali Nagar for expert counseling & therapy. Call +91 8042756155 to book your appointment.";
      document.head.appendChild(meta);
    }
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `Hello Dr. Urmil, my name is ${values.name}. I would like to book an appointment for ${values.service}. Phone: ${values.phone}. Email: ${values.email}. ${values.message ? `Message: ${values.message}` : ""}`;
    const whatsappUrl = `https://wa.me/+917014086770?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Request Sent",
      description:
        "Thank you! Redirecting to WhatsApp to confirm your appointment.",
    });
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block"
              >
                Get In Touch
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 font-heading"
                data-testid="heading-contact"
              >
                Contact{" "}
                <span className="text-primary italic font-serif">
                  Dr. Urmil Bishnoi
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg"
              >
                Reach out to schedule your appointment or ask any questions.
                We're here to support your journey toward mental wellness.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full border-none shadow-md hover:shadow-lg transition-shadow"
                  data-testid="card-address"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Clinic Address
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Plot No.125, Sukhija Vihar, Kanak Vrindavan, Maharana
                      Pratap Road, Vaishali Nagar, Jaipur – 302021
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card
                  className="h-full border-none shadow-md hover:shadow-lg transition-shadow"
                  data-testid="card-phone"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+917014086770"
                      className="text-primary font-semibold hover:underline"
                    >
                      +917014086770
                    </a>
                    <p className="text-gray-500 text-xs mt-1">
                      Call or WhatsApp
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card
                  className="h-full border-none shadow-md hover:shadow-lg transition-shadow"
                  data-testid="card-email"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:urmi.29.bishnoi@gmail.com"
                      className="text-primary font-semibold hover:underline text-sm"
                    >
                      urmi.29.bishnoi@gmail.com
                    </a>
                    <p className="text-gray-500 text-xs mt-1">
                      We respond within 24 hours
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card
                  className="h-full border-none shadow-md hover:shadow-lg transition-shadow"
                  data-testid="card-hours"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Clinic Hours
                    </h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Mon-Fri: 10AM - 7PM</p>
                      <p>Saturday: 10AM - 5PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-heading">
                  Send Us a{" "}
                  <span className="text-primary italic font-serif">
                    Message
                  </span>
                </h2>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="bg-white"
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="your@email.com"
                                  {...field}
                                  className="bg-white"
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+91 9876543210"
                                  {...field}
                                  className="bg-white"
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger
                                  className="bg-white"
                                  data-testid="select-service"
                                >
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service, index) => (
                                  <SelectItem key={index} value={service.title}>
                                    {service.title}
                                  </SelectItem>
                                ))}
                                <SelectItem value="General Consultation">
                                  General Consultation
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your concerns or questions..."
                                {...field}
                                className="bg-white min-h-[120px]"
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-lg mt-2"
                        data-testid="button-submit-contact"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" /> Send via
                        WhatsApp
                      </Button>
                    </form>
                  </Form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-heading">
                  Find Our{" "}
                  <span className="text-primary italic font-serif">Clinic</span>
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg mb-8 h-[300px] md:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8989091851454!2d75.72731491504828!3d26.92244998313194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f3ffffffff%3A0x2f2f2f2f2f2f2f2f!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Urmil Bishnoi Clinic Location - Vaishali Nagar, Jaipur"
                    data-testid="map-iframe"
                  />
                </div>

                <Card className="border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Directions</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        Located in Vaishali Nagar, one of Jaipur's prominent
                        residential areas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        Near Maharana Pratap Road, easily accessible from all
                        parts of the city
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        Ample parking available near the clinic
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                Frequently Asked{" "}
                <span className="text-primary italic font-serif">
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg shadow-sm border-none px-6"
                    data-testid={`faq-item-${index}`}
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Ready to Take the First Step?
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Book your confidential consultation with Dr. Urmil Bishnoi today
                and begin your journey toward better mental health.
              </p>
              <Link href="/book-appointment">
                <Button
                  className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
                  data-testid="button-book-appointment"
                >
                  Book Your Appointment
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
