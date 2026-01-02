import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogPosts } from "@/lib/data";

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
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
        <Link href={`/blog/${post.slug}`}>
          <Button
            variant="ghost"
            className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-semibold group/btn cursor-pointer"
          >
            Read Article{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function Blog() {
  const mainPosts = blogPosts.slice(0, 3);
  const sliderPosts = blogPosts.slice(3);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Latest{" "}
            <span className="text-primary italic font-serif">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore articles on mental wellness, therapy techniques, and
            personal growth to support your journey.
          </p>
        </div>

        {/* Main 3 Blog Posts Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        </div> */}

        {/* Slider for Remaining Posts */}
        {sliderPosts.length > 0 && (
          <div className="mt-1">
            <h3 className="text-2xl font-bold mb-1 text-gray-800 text-center font-heading"></h3>
            <div className="max-w-7xl mx-auto px-4 relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {sliderPosts.map((post, index) => (
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
  );
}
