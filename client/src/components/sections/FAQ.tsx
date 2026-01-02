import { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I expect in my first session?",
    answer: "In your first session, we will discuss your current concerns, personal history, and goals for therapy. It's a safe, non-judgmental space to see if we are a good fit."
  },
  {
    question: "How long does each therapy session last?",
    answer: "Standard individual sessions last between 45 to 60 minutes. Couples counseling sessions may be longer, typically around 90 minutes."
  },
  {
    question: "Is everything I say confidential?",
    answer: "Yes, client confidentiality is paramount. Information shared during sessions is strictly private, with exceptions only in cases of immediate harm to self or others."
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, I offer secure online video consultations for clients who prefer to receive therapy from the comfort of their own homes."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies for each individual depending on their unique needs and goals. We will discuss a treatment plan during your initial sessions."
  }
];

const FAQ = memo(function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50" data-testid="section-faq">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Frequently Asked <span className="text-primary italic font-serif">Questions</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b-gray-100 last:border-0"
                data-testid={`faq-${index}`}
              >
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-primary hover:no-underline py-4 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

export default FAQ;
