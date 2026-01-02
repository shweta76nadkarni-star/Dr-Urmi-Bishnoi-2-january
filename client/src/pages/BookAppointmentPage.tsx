import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Phone, MessageCircle, CheckCircle2, Shield, Heart, Users } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { services } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  sessionType: z.string().min(1, { message: "Please select session type." }),
  message: z.string().optional(),
});

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

const benefits = [
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your privacy is our priority. All sessions are strictly confidential."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Non-judgmental, empathetic support in a safe environment."
  },
  {
    icon: Users,
    title: "Personalized Treatment",
    description: "Therapy tailored to your unique needs and goals."
  },
  {
    icon: CheckCircle2,
    title: "Evidence-Based",
    description: "Proven therapeutic techniques for lasting results."
  },
];

export default function BookAppointmentPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      sessionType: "",
      message: "",
    },
  });

  useEffect(() => {
    document.title = "Book Appointment | Dr. Urmil Bishnoi - Best Psychologist in Jaipur";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book your confidential therapy appointment with Dr. Urmil Bishnoi, Jaipur's leading psychologist. Online and in-person sessions available. Call +91 8042756155.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Book your confidential therapy appointment with Dr. Urmil Bishnoi, Jaipur's leading psychologist. Online and in-person sessions available. Call +91 8042756155.";
      document.head.appendChild(meta);
    }
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `Hello Dr. Urmil,

I would like to book an appointment.

Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email}
Service: ${values.service}
Session Type: ${values.sessionType}
${values.preferredDate ? `Preferred Date: ${values.preferredDate}` : ""}
${values.preferredTime ? `Preferred Time: ${values.preferredTime}` : ""}
${values.message ? `Additional Message: ${values.message}` : ""}

Please confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/+918042756155?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Booking Request Sent!",
      description: "Redirecting to WhatsApp to confirm your appointment with Dr. Urmil Bishnoi.",
    });
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block"
              >
                Book Your Session
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 font-heading"
                data-testid="heading-book-appointment"
              >
                Schedule Your <span className="text-primary italic font-serif">Consultation</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg"
              >
                Take the first step toward better mental health. Book a confidential consultation with Dr. Urmil Bishnoi, one of Jaipur's most trusted psychologists.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-sm bg-white text-center" data-testid={`benefit-${index}`}>
                    <CardContent className="p-4">
                      <benefit.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{benefit.title}</h3>
                      <p className="text-gray-500 text-xs">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-heading">
                  Fill in Your <span className="text-primary italic font-serif">Details</span>
                </h2>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} data-testid="input-name" />
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
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 9876543210" {...field} data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="your@email.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Required *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-service">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {services.map((service, index) => (
                                      <SelectItem key={index} value={service.title}>
                                        {service.title}
                                      </SelectItem>
                                    ))}
                                    <SelectItem value="Initial Consultation">Initial Consultation</SelectItem>
                                    <SelectItem value="Follow-up Session">Follow-up Session</SelectItem>
                                    <SelectItem value="Not Sure - Need Guidance">Not Sure - Need Guidance</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="sessionType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Session Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-session-type">
                                      <SelectValue placeholder="Select session type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="In-Person (Clinic Visit)">In-Person (Clinic Visit)</SelectItem>
                                    <SelectItem value="Online (Video Call)">Online (Video Call)</SelectItem>
                                    <SelectItem value="Phone Consultation">Phone Consultation</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="preferredDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Date (Optional)</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} data-testid="input-date" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="preferredTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Time (Optional)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-time">
                                      <SelectValue placeholder="Select preferred time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map((time) => (
                                      <SelectItem key={time} value={time}>
                                        {time}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Information (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Briefly describe your concerns or any specific requirements..."
                                  {...field}
                                  className="min-h-[120px]"
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-lg" data-testid="button-submit-booking">
                          <MessageCircle className="mr-2 h-5 w-5" /> Book via WhatsApp
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-heading">
                  Quick <span className="text-primary italic font-serif">Contact</span>
                </h2>

                <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-primary/80 text-white mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Prefer to Call?</h3>
                    <p className="text-primary-foreground/90 mb-4 text-sm">
                      For immediate assistance or to book your appointment directly, call or WhatsApp us.
                    </p>
                    <a href="tel:+918042756155">
                      <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold" data-testid="button-call">
                        <Phone className="mr-2 h-5 w-5" /> +91 8042756155
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <h3 className="font-bold text-gray-900">Clinic Hours</h3>
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
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-primary" />
                      <h3 className="font-bold text-gray-900">What to Expect</h3>
                    </div>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Confirmation within 24 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Initial session: 60-90 minutes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Completely confidential
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Personalized treatment plan
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Your Healing Journey Starts Here
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Taking the first step toward mental wellness is an act of courage. Dr. Urmil Bishnoi is here to support you every step of the way.
              </p>
              <p className="text-primary font-semibold text-lg">
                "The greatest step towards a life of simplicity is to learn to let go." - Steve Maraboli
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
