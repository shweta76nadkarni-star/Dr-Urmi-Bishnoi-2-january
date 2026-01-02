import { memo } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    text: "Dr. Urmil's guidance has been transformative. Her calm demeanor and insightful approach helped me navigate through my anxiety with confidence.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    text: "I was skeptical about therapy, but Dr. Bishnoi changed my perspective. The hypnotherapy sessions were incredibly effective for my stress management.",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    role: "Teacher",
    text: "A truly compassionate professional. She creates a safe space where I felt heard and understood. Highly recommend her services to anyone seeking peace.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Architect",
    text: "I found clarity and direction through my sessions. The practical strategies provided have helped me balance my work and personal life beautifully.",
    rating: 5,
  },
];

const TestimonialCard = memo(function TestimonialCard({ 
  item, 
  index 
}: { 
  item: typeof testimonials[0]; 
  index: number;
}) {
  return (
    <Card className="h-full border-none shadow-sm bg-white relative overflow-visible" data-testid={`testimonial-${index}`}>
      <div className="absolute -top-0 left-6 sm:left-8 bg-primary text-white p-2 rounded-full shadow-md">
        <Quote className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
      </div>
      <CardContent className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 flex flex-col h-full justify-between">
        <div>
          <div className="flex mb-3 sm:mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <p className="text-gray-600 italic mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            "{item.text}"
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 mt-auto">
          <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm sm:text-base">
              {item.name[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">
              {item.name}
            </h4>
            <p className="text-xs text-gray-500">{item.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

const Testimonials = memo(function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-primary/5" data-testid="section-testimonials">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            What Our{" "}
            <span className="text-primary italic font-serif">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <TestimonialCard item={item} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6 sm:hidden">
              <CarouselPrevious className="static translate-y-0 bg-white border-primary text-primary hover:bg-primary hover:text-white min-w-[44px] min-h-[44px]" />
              <CarouselNext className="static translate-y-0 bg-white border-primary text-primary hover:bg-primary hover:text-white min-w-[44px] min-h-[44px]" />
            </div>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden sm:flex -right-12 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
