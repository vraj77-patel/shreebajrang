import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CircleDot, Ruler, Palette, Package } from "lucide-react";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      title: "Standard Acrylic Pipes",
      description: "High-quality standard pipes for everyday bangle manufacturing needs",
      features: ["Multiple diameter options", "Crystal clear finish", "Durable material"],
      icon: CircleDot,
    },
    {
      title: "Custom Size Pipes",
      description: "Tailored pipe dimensions to match your specific requirements",
      features: ["Custom diameters", "Variable lengths", "Bulk availability"],
      icon: Ruler,
    },
    {
      title: "Colored Acrylic Pipes",
      description: "Vibrant colored pipes for designer bangle production",
      features: ["Wide color range", "Consistent coloring", "UV resistant"],
      icon: Palette,
    },
    {
      title: "Wholesale Packages",
      description: "Bulk orders with special pricing for manufacturers",
      features: ["Competitive rates", "Fast delivery", "Quality assured"],
      icon: Package,
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-semibold tracking-wider uppercase text-sm">Our Products</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Premium <span className="text-gradient-gold">Acrylic Bangles Pipes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We manufacture a wide range of acrylic pipes designed specifically for 
            the bangle industry. Each product is crafted with precision and care.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-gold rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  <product.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
