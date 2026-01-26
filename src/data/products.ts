export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  color: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  inStock: boolean;
}

export const categories = [
  "All",
  "Standard Pipes",
  "Premium Pipes",
  "Custom Pipes",
  "Colored Pipes",
];

export const sizes = ["All", "Small", "Medium", "Large", "Extra Large"];

export const colors = [
  "All",
  "Transparent",
  "Golden",
  "Silver",
  "Multi-Color",
  "Custom",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Crystal Clear Acrylic Pipe",
    category: "Standard Pipes",
    size: "Medium",
    color: "Transparent",
    price: "₹150/kg",
    description:
      "High-quality transparent acrylic bangle pipe with excellent clarity and durability. Perfect for traditional bangle making.",
    image: "/placeholder.svg",
    features: [
      "Premium quality material",
      "High transparency",
      "Scratch resistant",
      "Easy to work with",
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Golden Shimmer Pipe",
    category: "Premium Pipes",
    size: "Large",
    color: "Golden",
    price: "₹220/kg",
    description:
      "Luxurious golden acrylic pipe with shimmer effect. Ideal for premium bangle collections and festive wear.",
    image: "/placeholder.svg",
    features: [
      "Metallic shimmer finish",
      "Festive collection ready",
      "Long-lasting color",
      "Premium grade",
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Silver Frost Pipe",
    category: "Premium Pipes",
    size: "Medium",
    color: "Silver",
    price: "₹200/kg",
    description:
      "Elegant silver-toned acrylic pipe with frost finish. Creates stunning modern bangles with a contemporary look.",
    image: "/placeholder.svg",
    features: [
      "Frost finish effect",
      "Modern aesthetic",
      "Durable construction",
      "Consistent quality",
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "Rainbow Multi-Color Pipe",
    category: "Colored Pipes",
    size: "Small",
    color: "Multi-Color",
    price: "₹180/kg",
    description:
      "Vibrant multi-color acrylic pipe with rainbow gradient. Perfect for trendy and colorful bangle designs.",
    image: "/placeholder.svg",
    features: [
      "Gradient color pattern",
      "Trendy design",
      "UV resistant",
      "Fade proof",
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Custom Designer Pipe",
    category: "Custom Pipes",
    size: "Extra Large",
    color: "Custom",
    price: "₹250/kg",
    description:
      "Fully customizable acrylic pipe for unique bangle designs. Available in any color or pattern on order.",
    image: "/placeholder.svg",
    features: [
      "Fully customizable",
      "Bulk order discounts",
      "Any color available",
      "Pattern options",
    ],
    inStock: true,
  },
  {
    id: "6",
    name: "Classic Transparent Pipe",
    category: "Standard Pipes",
    size: "Large",
    color: "Transparent",
    price: "₹140/kg",
    description:
      "Budget-friendly transparent acrylic pipe without compromising on quality. Great for everyday bangle production.",
    image: "/placeholder.svg",
    features: [
      "Affordable pricing",
      "Good clarity",
      "Reliable quality",
      "Bulk friendly",
    ],
    inStock: true,
  },
  {
    id: "7",
    name: "Royal Gold Pipe",
    category: "Premium Pipes",
    size: "Medium",
    color: "Golden",
    price: "₹240/kg",
    description:
      "Premium royal gold acrylic pipe with deep golden hue. Perfect for bridal and wedding collections.",
    image: "/placeholder.svg",
    features: [
      "Deep golden color",
      "Bridal collection ready",
      "Superior finish",
      "Export quality",
    ],
    inStock: false,
  },
  {
    id: "8",
    name: "Neon Glow Pipe",
    category: "Colored Pipes",
    size: "Small",
    color: "Multi-Color",
    price: "₹190/kg",
    description:
      "Bright neon-colored acrylic pipe that glows under UV light. Perfect for party and fashion bangles.",
    image: "/placeholder.svg",
    features: [
      "UV reactive",
      "Bright neon colors",
      "Party collection",
      "Youth fashion",
    ],
    inStock: true,
  },
];
