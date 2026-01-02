import { memo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import img1 from "@assets/stock_images/urmi_one.avif";
import img2 from "@assets/stock_images/urmi_two.avif";
import img3 from "@assets/stock_images/urmi_three.avif";
import img4 from "@assets/stock_images/urmi_four.avif";
import img5 from "@assets/stock_images/urmi_five.avif";
import img6 from "@assets/stock_images/urmi_six.avif";
import img7 from "@assets/stock_images/urmi_seven.avif";
import img8 from "@assets/stock_images/urmi_eight.avif";
import img9 from "@assets/stock_images/urmi_nine.avif";
import img10 from "@assets/stock_images/urmi_ten.avif";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const GalleryImage = memo(function GalleryImage({ 
  src, 
  index 
}: { 
  src: string; 
  index: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="border-none shadow-sm overflow-hidden rounded-xl">
      <CardContent className="p-0 aspect-square relative">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}
        <img
          src={src}
          alt={`Dr. Urmil Bishnoi Gallery ${index + 1}`}
          width={300}
          height={300}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </CardContent>
    </Card>
  );
});

const Gallery = memo(function Gallery() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100" data-testid="section-gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
            A Glimpse of{" "}
            <span className="text-primary italic font-serif">
              Dr. Urmil Bishnoi
            </span>
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
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <GalleryImage src={image} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary -left-12 hidden md:flex" />
            <CarouselNext className="bg-white border-gray-200 text-gray-700 hover:bg-primary hover:text-white hover:border-primary -right-12 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
});

export default Gallery;
