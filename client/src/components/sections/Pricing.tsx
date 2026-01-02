import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "wouter";

const plans = [
  {
    title: "Individual Therapy",
    price: "₹1500",
    period: "/session",
    features: [
      "Personalized consultation",
      "45-60 minute session",
      "Anxiety & Depression focus",
      "Confidential environment",
      "Online or In-person",
    ],
  },
  {
    title: "Couples Counseling",
    price: "₹2500",
    period: "/session",
    featured: true,
    features: [
      "Relationship dynamics",
      "Conflict resolution",
      "Communication skills",
      "90 minute session",
      "Joint exercises",
    ],
  },
  {
    title: "Career Counseling",
    price: "₹2000",
    period: "/session",
    features: [
      "Aptitude testing",
      "Career path planning",
      "Stress management",
      "Goal setting",
      "Follow-up support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white relative overflow-hidden" data-testid="section-pricing">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/30 rounded-tr-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            Pricing Plans
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Affordable{" "}
            <span className="text-primary italic font-serif">Mental Care</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base px-4">
            Transparent pricing for professional psychological services. Choose
            the plan that fits your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.featured ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card
                className={`h-full border transition-all duration-300 hover:shadow-xl ${plan.featured ? "border-primary shadow-lg lg:scale-105 z-10 relative" : "border-gray-100 shadow-sm hover:-translate-y-1"}`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.featured && (
                  <div className="bg-primary text-white text-xs font-bold uppercase text-center py-1.5 absolute top-0 left-0 w-full rounded-t-lg">
                    Recommended
                  </div>
                )}
                <CardHeader
                  className={`${plan.featured ? "pt-10" : "pt-6"} text-center pb-2 px-4 sm:px-6`}
                >
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    {plan.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-4 sm:px-6 pb-6">
                  <Link href="/book-appointment" className="w-full">
                    <Button
                      className={`w-full rounded-full min-h-[48px] ${plan.featured ? "bg-primary hover:bg-primary/90" : "bg-white border-2 border-primary text-primary hover:bg-primary/5"}`}
                      data-testid={`button-book-${index}`}
                    >
                      Book Appointment
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
