import { useRoute } from "wouter";
import { blogPosts } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const id = params?.id ? parseInt(params.id) : null;
  const post = blogPosts.find((p) => p.id === id);

  if (!match || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 container mx-auto px-4 md:px-6 flex flex-col justify-end pb-12 md:pb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link href="/blog">
                <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white mb-6 bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
                </Button>
              </Link>
              <Badge className="bg-primary hover:bg-primary/90 text-white mb-4 text-sm font-semibold tracking-wider uppercase border-none">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <article className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900"
            >
              {post.content ? (
                post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('###')) {
                     return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('###', '').trim()}</h3>
                  }
                  if (paragraph.trim().startsWith('-')) {
                     return <li key={index} className="ml-4 mb-2">{paragraph.replace('-', '').trim()}</li>
                  }
                   if (paragraph.trim().startsWith('1.')) {
                     return <li key={index} className="ml-4 mb-2 list-decimal">{paragraph.replace(/^\d+\./, '').trim()}</li>
                  }
                   if (paragraph.trim().startsWith('2.') || paragraph.trim().startsWith('3.') || paragraph.trim().startsWith('4.') || paragraph.trim().startsWith('5.')) {
                     return <li key={index} className="ml-4 mb-2 list-decimal">{paragraph.replace(/^\d+\./, '').trim()}</li>
                  }
                  
                  return paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : null;
                })
              ) : (
                <p>{post.excerpt}</p>
              )}
            </motion.div>
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600 font-medium">Category:</span>
                <span className="text-primary font-semibold">{post.category}</span>
              </div>
              <div className="flex gap-2">
                {/* Social Share Buttons could go here */}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
