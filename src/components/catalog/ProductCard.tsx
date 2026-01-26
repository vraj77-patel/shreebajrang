import { motion } from "framer-motion";
import { Eye, Package, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onViewDetails, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-border bg-card hover:shadow-elegant transition-all duration-300 h-full">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <Button
              variant="gold"
              size="sm"
              onClick={() => onViewDetails(product)}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          </div>
          <div className="absolute top-3 left-3">
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
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-card/90 text-foreground">
              {product.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="font-heading text-lg font-semibold text-foreground line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Package className="w-4 h-4" />
              {product.size}
            </div>
            <span className="font-heading text-xl font-bold text-primary">
              {product.price}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="text-xs">
              {product.color}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
