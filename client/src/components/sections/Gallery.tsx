import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import img1 from "@assets/stock_images/therapy_clinic_inter_8b043e20.jpg";
import img2 from "@assets/stock_images/therapy_clinic_inter_ccfcb5bf.jpg";
import img3 from "@assets/stock_images/therapy_clinic_inter_778cf6c0.jpg";
import img4 from "@assets/stock_images/therapy_clinic_inter_be952702.jpg";
import img5 from "@assets/stock_images/therapy_clinic_inter_67adc1f3.jpg";
import img6 from "@assets/stock_images/therapy_clinic_inter_0b19fbd0.jpg";
import img7 from "@assets/stock_images/therapy_clinic_inter_720b7ab9.jpg";
import img8 from "@assets/stock_images/therapy_clinic_inter_d9cb26e8.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
           <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Clinic
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
            A Glimpse of <span className="text-primary italic font-serif">MindThera</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-none shadow-sm overflow-hidden rounded-xl">
                      <CardContent className="p-0 aspect-square">
                        <img 
                          src={image} 
                          alt={`Clinic Gallery ${index + 1}`} 
                          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary -left-12" />
            <CarouselNext className="bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
