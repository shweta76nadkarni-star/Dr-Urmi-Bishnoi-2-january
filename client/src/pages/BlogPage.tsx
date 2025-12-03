import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

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
    url: "https://drurmilbishnoi.com/blog/understanding-anxiety"
  },
  {
    id: 2,
    title: "The Science Behind Hypnotherapy",
    excerpt: "Demystifying the practice of hypnotherapy and exploring how it accesses the subconscious to promote healing.",
    date: "September 28, 2023",
    readTime: "7 min read",
    category: "Hypnotherapy",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop",
    url: "https://drurmilbishnoi.com/blog/hypnotherapy-science"
  },
  {
    id: 3,
    title: "Rebuilding Trust in Relationships",
    excerpt: "Practical steps for couples to heal from conflict and rebuild a stronger foundation of trust and intimacy.",
    date: "September 10, 2023",
    readTime: "6 min read",
    category: "Relationships",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop",
    url: "https://drurmilbishnoi.com/blog/rebuilding-trust"
  },
  {
    id: 4,
    title: "Mindfulness Techniques for Daily Stress",
    excerpt: "Simple, actionable mindfulness exercises you can practice anywhere to instantly reduce stress levels.",
    date: "August 22, 2023",
    readTime: "4 min read",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    url: "https://drurmilbishnoi.com/blog/mindfulness-techniques"
  },
  {
    id: 5,
    title: "Recognizing Signs of Depression in Teens",
    excerpt: "A guide for parents to understand the early warning signs of depression in adolescents and how to help.",
    date: "August 05, 2023",
    readTime: "8 min read",
    category: "Child Psychology",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop",
    url: "https://drurmilbishnoi.com/blog/teen-depression"
  },
  {
    id: 6,
    title: "Navigating PTSD Triggers safely",
    excerpt: "Strategies for managing PTSD triggers and grounding yourself when past trauma resurfaces.",
    date: "July 18, 2023",
    readTime: "6 min read",
    category: "Trauma",
    image: "https://images.unsplash.com/photo-1527137342181-191eee16f952?q=80&w=2070&auto=format&fit=crop",
    url: "https://drurmilbishnoi.com/blog/ptsd-triggers"
  },
  {
    id: 7,
    title: "The Importance of Self-Care",
    excerpt: "Why self-care is not selfish: Understanding the vital role of self-preservation in mental health.",
    date: "July 01, 2023",
    readTime: "5 min read",
    category: "Self Care",
    image: "https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=2070&auto=format&fit=crop",
    url: "https://drurmilbishnoi.com/blog/self-care"
  }
];

function SocialShare({ post }: { post: typeof blogPosts[0] }) {
  const shareText = `Check out this article: ${post.title}`;
  const shareUrl = post.url;

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`;
        break;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="flex gap-2 mt-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
             <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600 hover:bg-green-50" onClick={() => handleShare("whatsapp")}>
               <MessageCircle className="h-4 w-4" />
             </Button>
          </TooltipTrigger>
          <TooltipContent>Share on WhatsApp</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
             <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-400 hover:bg-blue-50" onClick={() => handleShare("twitter")}>
               <Twitter className="h-4 w-4" />
             </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Twitter</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
             <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600 hover:bg-blue-50" onClick={() => handleShare("facebook")}>
               <Facebook className="h-4 w-4" />
             </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Facebook</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
             <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-700 hover:bg-blue-50" onClick={() => handleShare("linkedin")}>
               <Linkedin className="h-4 w-4" />
             </Button>
          </TooltipTrigger>
          <TooltipContent>Share on LinkedIn</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
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
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
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
      <CardFooter className="pt-0 mt-auto flex justify-between items-center border-t pt-4 pb-4 px-6 bg-gray-50/50">
        <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-semibold group/btn">
          Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
        <SocialShare post={post} />
      </CardFooter>
    </Card>
  );
}

export default function BlogPage() {
  const mainPosts = blogPosts.slice(0, 3);
  const sliderPosts = blogPosts.slice(3);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Header />
      <main className="pt-20">
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

            {/* Main 3 Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {mainPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>

            {/* Slider for Remaining Posts */}
            {sliderPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center font-heading">More Articles</h3>
                <div className="max-w-5xl mx-auto px-4 relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {sliderPosts.map((post, index) => (
                        <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                          <div className="p-1 h-full">
                             <BlogCard post={post} />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
                  </Carousel>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
