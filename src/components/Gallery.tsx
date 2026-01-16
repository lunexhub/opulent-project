import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Import all gallery images
import headboardSage from "@/assets/gallery/headboard-sage.jpg";
import salonChairs from "@/assets/gallery/salon-chairs.jpg";
import tanSofa from "@/assets/gallery/tan-sofa.jpg";
import whiteBed from "@/assets/gallery/white-bed.jpg";
import greyLounge from "@/assets/gallery/grey-lounge.jpg";
import tuftedHeadboard from "@/assets/gallery/tufted-headboard.jpg";
import coronaOutdoor from "@/assets/gallery/corona-outdoor.jpg";
import reupholsterySofas from "@/assets/gallery/reupholstery-sofas.jpg";
import bmwChairs from "@/assets/gallery/bmw-chairs.jpg";
import greyBoothSeating from "@/assets/gallery/grey-booth-seating.jpg";
import ornateArmchair from "@/assets/gallery/ornate-armchair.jpg";

const galleryItems = [
  { src: headboardSage, title: "Custom Headboard", category: "Bedroom" },
  { src: salonChairs, title: "Salon Chairs", category: "Commercial" },
  { src: tanSofa, title: "Tan L-Shaped Sofa", category: "Living Room" },
  { src: whiteBed, title: "Tufted Bed Frame", category: "Bedroom" },
  { src: greyLounge, title: "Grey Modular Lounge", category: "Living Room" },
  { src: tuftedHeadboard, title: "Wingback Headboard", category: "Bedroom" },
  { src: coronaOutdoor, title: "Branded Outdoor Set", category: "Commercial" },
  { src: reupholsterySofas, title: "Re-Upholstery Work", category: "Restoration" },
  { src: bmwChairs, title: "BMW Office Chairs", category: "Commercial" },
  { src: greyBoothSeating, title: "Custom Booth Seating", category: "Commercial" },
  { src: ornateArmchair, title: "Ornate Armchair", category: "Living Room" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background overflow-hidden w-full max-w-full">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-widest mb-3 sm:mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-6 break-words hyphens-auto">
            Project Gallery
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0 break-words">
            Browse through our portfolio of custom furniture, upholstery work, and commercial projects. 
            Every piece showcases our commitment to quality craftsmanship.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4 w-full"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-card hover:shadow-elegant-lg transition-all duration-500 w-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  style={{ maxWidth: '100%', display: 'block', width: '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-medium text-sage-light uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg md:text-xl text-white font-medium break-words">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/80 hover:text-white transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[95vh] sm:max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
