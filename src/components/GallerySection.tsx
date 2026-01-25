import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.jpg";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      title: "Colored Acrylic Pipes",
      description: "Premium quality transparent colored pipes",
    },
    {
      src: gallery2,
      title: "Glitter Finish Pipes",
      description: "Beautiful glitter finish acrylic pipes",
    },
    {
      src: gallery1,
      title: "Multi-Color Range",
      description: "Wide variety of vibrant colors available",
    },
    {
      src: gallery2,
      title: "Designer Collection",
      description: "Special designer patterns for premium bangles",
    },
  ];

  return (
    <>
      <section id="gallery" className="py-20 lg:py-32 bg-card relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="container mx-auto px-4" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">Gallery</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Our <span className="text-gradient-gold">Product Showcase</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our range of premium acrylic bangles pipes crafted with precision and care.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-background border border-border cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="absolute top-4 right-4 p-2 bg-gold/90 rounded-full">
                    <ZoomIn className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/80">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
