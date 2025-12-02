import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    text: "Dr. Urmil's guidance has been transformative. Her calm demeanor and insightful approach helped me navigate through my anxiety with confidence.",
    rating: 5
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    text: "I was skeptical about therapy, but Dr. Bishnoi changed my perspective. The hypnotherapy sessions were incredibly effective for my stress management.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    role: "Teacher",
    text: "A truly compassionate professional. She creates a safe space where I felt heard and understood. Highly recommend her services to anyone seeking peace.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            What Our <span className="text-primary italic font-serif">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-sm bg-white relative overflow-visible">
                <div className="absolute -top-4 left-8 bg-primary text-white p-2 rounded-full shadow-md">
                  <Quote className="h-5 w-5 fill-current" />
                </div>
                <CardContent className="pt-10 pb-8 px-6">
                  <div className="flex mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {item.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
