import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, RotateCcw, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SearchBar from "@/components/catalog/SearchBar";
import FilterSelect from "@/components/catalog/FilterSelect";
import ProductCard from "@/components/catalog/ProductCard";
import ProductModal from "@/components/catalog/ProductModal";
import { Button } from "@/components/ui/button";
import { products, categories, sizes, colors, Product } from "@/data/products";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSize =
        selectedSize === "All" || product.size === selectedSize;
      const matchesColor =
        selectedColor === "All" || product.color === selectedColor;

      return matchesSearch && matchesCategory && matchesSize && matchesColor;
    });
  }, [searchQuery, selectedCategory, selectedSize, selectedColor]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedSize("All");
    setSelectedColor("All");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "All" ||
    selectedSize !== "All" ||
    selectedColor !== "All";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Product Catalog
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Explore Our <span className="text-gradient-gold">Collection</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Browse our complete range of premium acrylic bangle pipes.
                Filter by category, size, or color to find the perfect product
                for your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Products Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* Search and Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
                {hasActiveFilters && (
                  <Button variant="ghost" onClick={resetFilters}>
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <motion.aside
                initial={false}
                animate={{
                  height: showFilters ? "auto" : 0,
                  opacity: showFilters ? 1 : 0,
                }}
                className={`lg:w-64 lg:!h-auto lg:!opacity-100 overflow-hidden ${
                  !showFilters ? "lg:block hidden" : ""
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-6 space-y-6 sticky top-24">
                  <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    Filters
                  </h3>
                  <FilterSelect
                    label="Category"
                    options={categories}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                  />
                  <FilterSelect
                    label="Size"
                    options={sizes}
                    value={selectedSize}
                    onChange={setSelectedSize}
                  />
                  <FilterSelect
                    label="Color"
                    options={colors}
                    value={selectedColor}
                    onChange={setSelectedColor}
                  />
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      onClick={resetFilters}
                      className="w-full"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset All Filters
                    </Button>
                  )}
                </div>
              </motion.aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">
                      {filteredProducts.length}
                    </span>{" "}
                    products
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={setSelectedProduct}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      No Products Found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters or search query
                    </p>
                    <Button variant="gold" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Catalog;
