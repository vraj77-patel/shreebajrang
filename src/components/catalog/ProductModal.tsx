import { motion, AnimatePresence } from "framer-motion";
import { X, Package, Phone, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name}. Please share more details.`
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-elegant"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-square md:aspect-auto md:h-full bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant={product.inStock ? "default" : "destructive"}
                  className={product.inStock ? "bg-green-600" : ""}
                >
                  {product.inStock ? (
                    <>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      In Stock
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3 h-3 mr-1" />
                      Out of Stock
                    </>
                  )}
                </Badge>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {product.name}
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Package className="w-5 h-5" />
                  <span>Size: {product.size}</span>
                </div>
                <Badge variant="outline">{product.color}</Badge>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-heading text-3xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="gold" size="lg" className="flex-1" asChild>
                    <a
                      href={`https://wa.me/918690599990?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4" />
                      Enquire on WhatsApp
                    </a>
                  </Button>
                  <Button variant="dark" size="lg" className="flex-1" asChild>
                    <a href="#contact">
                      <Phone className="w-4 h-4" />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
