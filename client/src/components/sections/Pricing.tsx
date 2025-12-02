import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

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
      "Online or In-person"
    ]
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
      "Joint exercises"
    ]
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
      "Follow-up support"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full" />
         <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/30 rounded-tr-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Affordable <span className="text-primary italic font-serif">Mental Care</span>
          </h2>
          <p className="text-gray-600">
            Transparent pricing for professional psychological services. Choose the plan that fits your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full border transition-all duration-300 hover:shadow-xl ${plan.featured ? 'border-primary shadow-lg scale-105 z-10 relative' : 'border-gray-100 shadow-sm hover:-translate-y-1'}`}>
                {plan.featured && (
                  <div className="bg-primary text-white text-xs font-bold uppercase text-center py-1.5 absolute top-0 left-0 w-full">
                    Recommended
                  </div>
                )}
                <CardHeader className={`${plan.featured ? 'pt-10' : 'pt-6'} text-center pb-2`}>
                  <CardTitle className="text-xl font-bold text-gray-900">{plan.title}</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-500 ml-1 text-sm">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full rounded-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'}`}
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
