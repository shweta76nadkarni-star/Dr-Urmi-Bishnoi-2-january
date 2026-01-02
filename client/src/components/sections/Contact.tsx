import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().optional(),
});

const Contact = memo(function Contact() {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Request Sent",
      description:
        "Thank you! Redirecting to WhatsApp to confirm your appointment.",
    });

    const message = `*New Appointment Request*\n\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Service:* ${values.service}\n*Message:* ${values.message || "N/A"}`;
    const whatsappUrl = `https://wa.me/+918042756155?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    form.reset();
  }

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white" data-testid="section-contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 font-heading">
              Contact &{" "}
              <span className="text-primary italic font-serif">
                Appointments
              </span>
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              Take the first step towards healing. Reach out to schedule a
              consultation or ask any questions.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full text-primary shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                    Clinic Address
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Plot No.125, Sukhija Vihar, Kanak Vrindavan, Maharana Pratap
                    Road, Vaishali Nagar, Jaipur – 302021
                  </p>
                </div>
              </div>

              <a href="tel:+918042756155" className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-primary transition-colors">Phone</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+91 8042756155</p>
                </div>
              </a>

              <a href="mailto:urmi.29.bishnoi@gmail.com" className="flex items-start gap-3 sm:gap-4 group">
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-primary transition-colors">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base break-all">urmi.29.bishnoi@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
              Book an Appointment
            </h3>
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
                      <FormLabel className="text-sm">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-white min-h-[48px]"
                          data-testid="input-contact-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            {...field}
                            className="bg-white min-h-[48px]"
                            data-testid="input-contact-email"
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
                        <FormLabel className="text-sm">Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+91 9876543210"
                            {...field}
                            className="bg-white min-h-[48px]"
                            data-testid="input-contact-phone"
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
                      <FormLabel className="text-sm">Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white min-h-[48px]" data-testid="select-contact-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
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
                      <FormLabel className="text-sm">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          {...field}
                          className="bg-white min-h-[100px]"
                          data-testid="textarea-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base sm:text-lg rounded-lg mt-2 cursor-pointer min-h-[52px]"
                  data-testid="button-contact-submit"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> Confirm Booking
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
