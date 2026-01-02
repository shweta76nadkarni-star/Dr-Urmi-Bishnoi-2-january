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
    <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white flex flex-col" data-testid={`card-blog-${post.id}`}>
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
          <Badge className="bg-white/90 text-primary hover:bg-white text-xs font-bold uppercase tracking-wider shadow-sm">
            {post.category}
          </Badge>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardHeader className="pb-2 px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-500 mb-2 sm:mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3 sm:pb-4 flex-grow px-4 sm:px-6">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="pt-0 mt-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <Link href={`/blog/${post.slug}`}>
          <Button
            variant="ghost"
            className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-semibold group/btn cursor-pointer text-sm"
            data-testid={`button-read-blog-${post.id}`}
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
  const sliderPosts = blogPosts.slice(0, 10);

  return (
    <section id="blog" className="py-16 sm:py-20 bg-white" data-testid="section-blog">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            Our Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            Latest{" "}
            <span className="text-primary italic font-serif">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Explore articles on mental wellness, therapy techniques, and
            personal growth to support your journey.
          </p>
        </div>

        {sliderPosts.length > 0 && (
          <div className="max-w-7xl mx-auto relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {sliderPosts.map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <BlogCard post={post} />
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
        )}

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 sm:px-8 min-h-[48px]"
              data-testid="button-view-all-blogs"
            >
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
