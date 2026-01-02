import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
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
import { useEffect } from "react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

type BlogPost = typeof blogPosts[0];

function SocialShare({ post }: { post: BlogPost }) {
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform: string) => {
    let url = "";
    const postUrl = `https://www.drurmilbishnoi.in/blog/${(post as any).slug}`;
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${postUrl}`)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(postUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}`;
        break;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="flex gap-2 mt-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-green-600 hover:bg-green-50"
              onClick={() => handleShare("whatsapp")}
              data-testid={`button-share-whatsapp-${post.id}`}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on WhatsApp</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-blue-400 hover:bg-blue-50"
              onClick={() => handleShare("twitter")}
              data-testid={`button-share-twitter-${post.id}`}
            >
              <Twitter className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Twitter</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-blue-600 hover:bg-blue-50"
              onClick={() => handleShare("facebook")}
              data-testid={`button-share-facebook-${post.id}`}
            >
              <Facebook className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Facebook</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-blue-700 hover:bg-blue-50"
              onClick={() => handleShare("linkedin")}
              data-testid={`button-share-linkedin-${post.id}`}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on LinkedIn</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
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
        <Link href={`/blog/${(post as any).slug}`}>
          <Button
            variant="ghost"
            className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-semibold group/btn"
            data-testid={`button-read-article-${post.id}`}
          >
            Read Article{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
        <SocialShare post={post} />
      </CardFooter>
    </Card>
  );
}

export default function BlogPage() {
  const mainPosts = blogPosts.slice(0, 3);
  const sliderPosts = blogPosts.slice(3);

  useEffect(() => {
    document.title = "Mental Health Blog & Wellness Insights | Dr. Urmil Bishnoi Jaipur";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Stay informed with the latest insights on mental wellness, anxiety relief, depression therapy, and PTSD treatment from Jaipur's best psychologist, Dr. Urmil Bishnoi.");
  }, []);

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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
                Mental Health{" "}
                <span className="text-primary italic font-serif">Insights</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert articles on anxiety treatment, depression therapy, PTSD recovery, 
                hypnotherapy, and mental wellness from Dr. Urmil Bishnoi, Jaipur's leading psychologist.
              </p>
            </div>

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

            {sliderPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center font-heading">
                  More Articles
                </h2>
                <div className="max-w-5xl mx-auto px-4 relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {sliderPosts.map((post) => (
                        <CarouselItem
                          key={post.id}
                          className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                        >
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
