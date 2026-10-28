/**
 * GAZEBO - Storefront Configuration & Placeholder Catalog Data
 * 
 * TO UPDATE FOR LAUNCH:
 * 1. Change GAZEBO_CONFIG.domain to your live domain (replaces [DOMAIN]).
 * 2. Add real products to the GAZEBO_PRODUCTS array below.
 */

const GAZEBO_CONFIG = {
  brandName: "Gazebo",
  brandLegal: "Gazebo® Garments & Accessories",
  tagline: "Men, Women & Kids Clothing in Pune | Since 1979",
  estd: "1979",
  address: {
    street: "M.G. Road, Camp",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411001",
    country: "India"
  },
  contact: {
    phonePlaceholder: "+91 20 2613 0000",
    emailPlaceholder: "contact@gazebo-ecommerce.vercel.app",
    whatsappPlaceholder: "912026130000",
    openingHours: "Mon - Sun: 10:30 AM - 9:30 PM"
  },
  social: {
    instagramHandle: "gazibo_clothing",
    instagramUrl: "https://www.instagram.com/gazibo_clothing/"
  },
  // PLACEHOLDER DOMAIN: Change this value when launching live
  domain: "https://www.gazebo-ecommerce.vercel.app",
  currency: "₹",
  freeShippingThreshold: 999
};

// Clean Placeholder Catalog (Client-Ready Pitch Standard)
const GAZEBO_PRODUCTS = [
  // Men's Placeholders
  {
    id: "gz-men-01",
    name: "Product Name",
    category: "men",
    categoryLabel: "Men",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "New Arrival",
    image: "images/product-placeholder-1.svg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Neutral Black", hex: "#1A1A1A" },
      { name: "Slate Grey", hex: "#7E8287" },
      { name: "Gazebo Orange", hex: "#EE5824" }
    ],
    sku: "GZ-MEN-001",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-men-02",
    name: "Product Name",
    category: "men",
    categoryLabel: "Men",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Best Seller",
    image: "images/product-placeholder-2.svg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Off White", hex: "#EAE7DF" },
      { name: "Charcoal", hex: "#2E2E2E" }
    ],
    sku: "GZ-MEN-002",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-men-03",
    name: "Product Name",
    category: "men",
    categoryLabel: "Men",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Popular",
    image: "images/product-placeholder-3.svg",
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Olive Green", hex: "#4B5320" },
      { name: "Pitch Black", hex: "#1A1A1A" }
    ],
    sku: "GZ-MEN-003",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-men-04",
    name: "Product Name",
    category: "men",
    categoryLabel: "Men",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Classic",
    image: "images/product-placeholder-4.svg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy Blue", hex: "#1B2A4A" },
      { name: "Sand", hex: "#D2B48C" }
    ],
    sku: "GZ-MEN-004",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },

  // Women's Placeholders
  {
    id: "gz-women-01",
    name: "Product Name",
    category: "women",
    categoryLabel: "Women",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "New Arrival",
    image: "images/product-placeholder-5.svg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Soft Ecru", hex: "#F3EFE6" },
      { name: "Onyx", hex: "#1F1F1F" }
    ],
    sku: "GZ-WOM-001",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-women-02",
    name: "Product Name",
    category: "women",
    categoryLabel: "Women",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Best Seller",
    image: "images/product-placeholder-6.svg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Warm Terracotta", hex: "#C47B5D" },
      { name: "Slate", hex: "#5C6B73" }
    ],
    sku: "GZ-WOM-002",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-women-03",
    name: "Product Name",
    category: "women",
    categoryLabel: "Women",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Trending",
    image: "images/product-placeholder-7.svg",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Vintage Olive", hex: "#606B56" },
      { name: "Cream", hex: "#EDE8DF" }
    ],
    sku: "GZ-WOM-003",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-women-04",
    name: "Product Name",
    category: "women",
    categoryLabel: "Women",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Essential",
    image: "images/product-placeholder-8.svg",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Midnight", hex: "#111111" },
      { name: "Gazebo Coral", hex: "#EE5824" }
    ],
    sku: "GZ-WOM-004",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },

  // Kids' Placeholders
  {
    id: "gz-kids-01",
    name: "Product Name",
    category: "kids",
    categoryLabel: "Kids",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "New Arrival",
    image: "images/product-placeholder-1.svg",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: [
      { name: "Sunshine Yellow", hex: "#F4C430" },
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Gazebo Orange", hex: "#EE5824" }
    ],
    sku: "GZ-KID-001",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-kids-02",
    name: "Product Name",
    category: "kids",
    categoryLabel: "Kids",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Best Seller",
    image: "images/product-placeholder-2.svg",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Navy Heather", hex: "#2C3E50" },
      { name: "Grey Melange", hex: "#A6ACAF" }
    ],
    sku: "GZ-KID-002",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-kids-03",
    name: "Product Name",
    category: "kids",
    categoryLabel: "Kids",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Comfort Fit",
    image: "images/product-placeholder-3.svg",
    sizes: ["6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: [
      { name: "Sage", hex: "#9CAF88" },
      { name: "Natural", hex: "#EAE5D9" }
    ],
    sku: "GZ-KID-003",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  },
  {
    id: "gz-kids-04",
    name: "Product Name",
    category: "kids",
    categoryLabel: "Kids",
    price: 0.00,
    priceDisplay: "₹ 0.00",
    comparePriceDisplay: "₹ 0.00",
    badge: "Everyday",
    image: "images/product-placeholder-4.svg",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Charcoal", hex: "#333333" },
      { name: "Oatmeal", hex: "#DCD7CD" }
    ],
    sku: "GZ-KID-004",
    description: "Neutral garment placeholder. Ready to be populated with Gazebo's authentic collection data, fabric weight, and specifications upon launch."
  }
];

// Helper methods
window.GAZEBO_CONFIG = GAZEBO_CONFIG;
window.GAZEBO_PRODUCTS = GAZEBO_PRODUCTS;

window.getProductsByCategory = function(category) {
  if (!category || category === 'all') return GAZEBO_PRODUCTS;
  return GAZEBO_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

window.getProductById = function(id) {
  return GAZEBO_PRODUCTS.find(p => p.id === id) || GAZEBO_PRODUCTS[0];
};

window.getNewArrivals = function(limit = 4) {
  return GAZEBO_PRODUCTS.filter(p => p.badge === 'New Arrival').slice(0, limit);
};

window.getBestSellers = function(limit = 4) {
  return GAZEBO_PRODUCTS.filter(p => p.badge === 'Best Seller').slice(0, limit);
};
