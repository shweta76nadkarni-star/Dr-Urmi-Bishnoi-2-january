import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding High-Functioning Anxiety",
    excerpt: "Learn to recognize the subtle signs of high-functioning anxiety and discover effective coping strategies.",
    date: "October 15, 2023",
    readTime: "5 min read",
    category: "Anxiety",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Science Behind Hypnotherapy",
    excerpt: "Demystifying the practice of hypnotherapy and exploring how it accesses the subconscious to promote healing.",
    date: "September 28, 2023",
    readTime: "7 min read",
    category: "Hypnotherapy",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Rebuilding Trust in Relationships",
    excerpt: "Practical steps for couples to heal from conflict and rebuild a stronger foundation of trust and intimacy.",
    date: "September 10, 2023",
    readTime: "6 min read",
    category: "Relationships",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Mindfulness Techniques for Daily Stress",
    excerpt: "Simple, actionable mindfulness exercises you can practice anywhere to instantly reduce stress levels.",
    date: "August 22, 2023",
    readTime: "4 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Recognizing Signs of Depression in Teens",
    excerpt: "A guide for parents to understand the early warning signs of depression in adolescents and how to help.",
    date: "August 05, 2023",
    readTime: "8 min read",
    category: "Child Psychology",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Navigating PTSD Triggers safely",
    excerpt: "Strategies for managing PTSD triggers and grounding yourself when past trauma resurfaces.",
    date: "July 18, 2023",
    readTime: "6 min read",
    category: "Trauma",
    image: "https://images.unsplash.com/photo-1527137342181-191eee16f952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "The Importance of Self-Care",
    excerpt: "Why self-care is not selfish: Understanding the vital role of self-preservation in mental health.",
    date: "July 01, 2023",
    readTime: "5 min read",
    category: "Self Care",
    image: "https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Latest <span className="text-primary italic font-serif">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore articles on mental wellness, therapy techniques, and personal growth to support your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 text-primary hover:bg-white text-xs font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 mt-auto">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-semibold group/btn">
                    Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
