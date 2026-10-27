/**
 * Gazebo E-Commerce Catalog Data Configuration
 * 
 * NOTE: This data structure is decoupled from UI components.
 * Real product catalog, pricing, categories, and inventory can be directly injected
 * or connected to an API/backend without altering the storefront layout.
 */

const GAZEBO_CONFIG = {
  brand: {
    name: "GAZEBO",
    registeredName: "Gazebo®",
    subName: "GARMENTS & ACCESSORIES",
    estd: "1979",
    location: "M.G. Road, Pune, India",
    instagramHandle: "gazibo_clothing",
    instagramUrl: "https://www.instagram.com/gazibo_clothing/",
    tagline: "Pune's Iconic Fashion Landmark • Estd. 1979",
    currency: "₹",
    isCatalogPreview: true,
    announcement: "GAZEBO FLAGSHIP • M.G. ROAD, PUNE • ESTD. 1979 • EXPLORE THE NEW EDIT"
  },
  
  genderTabs: [
    { id: "men", label: "MEN", active: true },
    { id: "women", label: "WOMEN", active: false },
    { id: "kids", label: "KIDS", active: false },
    { id: "heritage", label: "HERITAGE 1979", badge: "LEGACY", active: false }
  ],

  categories: [
    {
      id: "topwear",
      title: "Oversized & Classic Tees",
      subTitle: "Heavyweight 240+ GSM",
      itemCount: "42 Styles",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=70&auto=format,compress&fm=webp",
      tag: "POPULAR"
    },
    {
      id: "shirts",
      title: "Resort & Linen Shirts",
      subTitle: "Breathable Natural Weaves",
      itemCount: "28 Styles",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=70&auto=format,compress&fm=webp",
      tag: "SUMMER EDIT"
    },
    {
      id: "bottomwear",
      title: "Cargos & Relaxed Trousers",
      subTitle: "Functional Utility Fits",
      itemCount: "34 Styles",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=70&auto=format,compress&fm=webp",
      tag: "TRENDING"
    },
    {
      id: "polos",
      title: "Textured & Knitted Polos",
      subTitle: "Waffle & Ribbed Textures",
      itemCount: "19 Styles",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=70&auto=format,compress&fm=webp",
      tag: "ESSENTIAL"
    },
    {
      id: "coords",
      title: "Co-ord Matching Sets",
      subTitle: "Effortless Everyday Outfits",
      itemCount: "16 Styles",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=70&auto=format,compress&fm=webp",
      tag: "NEW DROP"
    },
    {
      id: "outerwear",
      title: "Overshirts & Jackets",
      subTitle: "Structured Layering",
      itemCount: "22 Styles",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=70&auto=format,compress&fm=webp",
      tag: "AUTUMN"
    },
    {
      id: "accessories",
      title: "Garments & Accessories",
      subTitle: "Caps, Belts & Canvas Totes",
      itemCount: "31 Styles",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=70&auto=format,compress&fm=webp",
      tag: "SIGNATURE"
    }
  ],

  products: [
    {
      id: "gz-01",
      name: "Heavyweight Boxy Tee",
      subtitle: "Relaxed Drop-Shoulder Fit",
      category: "topwear",
      gender: ["men", "unisex"],
      price: 1299,
      originalPrice: 1999,
      badge: "BESTSELLER",
      fabric: "240 GSM 100% Combed Cotton",
      colors: [
        { name: "Concrete Grey", hex: "#7E8287", inStock: true },
        { name: "Washed Black", hex: "#1F1F1F", inStock: true },
        { name: "Vintage Ecru", hex: "#E9E5DD", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      primaryImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=70&auto=format,compress&fm=webp",
      description: "A contemporary boxy silhouette engineered with ultra-dense 240 GSM combed cotton. Retains crisp structural drape wash after wash.",
      details: [
        "100% long-staple combed cotton",
        "Pre-shrunk, bio-washed fabric",
        "Reinforced twin-needle ribbed neckline",
        "Crafted for daily elevated streetwear"
      ]
    },
    {
      id: "gz-02",
      name: "Camp Collar French Linen Shirt",
      subtitle: "Relaxed Resort Silhouette",
      category: "topwear",
      gender: ["men"],
      price: 1899,
      originalPrice: 2699,
      badge: "NEW SEASON",
      fabric: "100% Pure French Linen",
      colors: [
        { name: "Natural Ecru", hex: "#E3DDD2", inStock: true },
        { name: "Aegean Slate", hex: "#5C6B73", inStock: true },
        { name: "Terracotta Sand", hex: "#C47B5D", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL"],
      primaryImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=70&auto=format,compress&fm=webp",
      description: "Crafted from airy, breathable French flax linen with an open camp collar. Delivers natural drape and relaxed sophistication.",
      details: [
        "100% natural European flax linen",
        "Mother-of-pearl finish buttons",
        "Clean straight hem with subtle side vents",
        "Naturally thermoregulating fabric"
      ]
    },
    {
      id: "gz-03",
      name: "Parachute Utility Cargo Pant",
      subtitle: "Wide-Leg Tactical Silhouette",
      category: "bottomwear",
      gender: ["men", "unisex"],
      price: 2299,
      originalPrice: 3499,
      badge: "TRENDING",
      fabric: "Micro-Ripstop Cotton Twill",
      colors: [
        { name: "Military Olive", hex: "#4B5320", inStock: true },
        { name: "Pitch Black", hex: "#111111", inStock: true },
        { name: "Desert Tan", hex: "#D2B48C", inStock: true }
      ],
      sizes: ["30", "32", "34", "36"],
      primaryImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&q=70&auto=format,compress&fm=webp",
      description: "Engineered with durable micro-ripstop twill, 6 tactical ergonomic cargo pockets, and adjustable bungee toggles at the hem.",
      details: [
        "High-density ripstop cotton blend",
        "Articulated knee darts for unrestricted movement",
        "Deep bellows cargo pockets with hidden snaps",
        "Elasticated waistband with drawstring"
      ]
    },
    {
      id: "gz-04",
      name: "Waffle Knit Textured Polo",
      subtitle: "Custom Collar Knitwear",
      category: "topwear",
      gender: ["men"],
      price: 1599,
      originalPrice: 2299,
      badge: "PREMIUM",
      fabric: "280 GSM Waffle Cotton",
      colors: [
        { name: "Charcoal Heather", hex: "#3A3D40", inStock: true },
        { name: "Vintage Cream", hex: "#F3EDE2", inStock: true },
        { name: "Deep Navy", hex: "#1C2833", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      primaryImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=70&auto=format,compress&fm=webp",
      description: "A rich tactile waffle texture providing substantial structure and breathable comfort. Finished with a seamless open placket.",
      details: [
        "Heavyweight 280 GSM combed cotton knit",
        "Seamless knit collar that never curls",
        "Relaxed tailored hemline",
        "Subtle ribbed cuffs"
      ]
    },
    {
      id: "gz-05",
      name: "Pleated Relaxed Trouser",
      subtitle: "Fluid Tailored Silhouette",
      category: "bottomwear",
      gender: ["men", "women"],
      price: 2499,
      originalPrice: 3599,
      badge: "FLAGSHIP",
      fabric: "Tencel Cotton Twill",
      colors: [
        { name: "Sandstone Beige", hex: "#C9BFB2", inStock: true },
        { name: "Obsidian Black", hex: "#1A1A1A", inStock: true }
      ],
      sizes: ["30", "32", "34", "36"],
      primaryImage: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&q=70&auto=format,compress&fm=webp",
      description: "A modern interpretation of 1970s tailoring. Double front pleats with a relaxed thigh taper down to a clean break.",
      details: [
        "Breathable Tencel-cotton drape",
        "Classic double front pleats",
        "Internal waistband gripper",
        "Concealed hook-and-bar closure"
      ]
    },
    {
      id: "gz-06",
      name: "Brushed Cotton Overshirt",
      subtitle: "Heavyweight Layering Essential",
      category: "outerwear",
      gender: ["men", "unisex"],
      price: 2899,
      originalPrice: 4199,
      badge: "LIMITED EDIT",
      fabric: "340 GSM Brushed Cotton",
      colors: [
        { name: "Tobacco Brown", hex: "#734A26", inStock: true },
        { name: "Dark Moss", hex: "#3B4D3C", inStock: true }
      ],
      sizes: ["M", "L", "XL", "XXL"],
      primaryImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&q=70&auto=format,compress&fm=webp",
      description: "Designed for effortless seasonal transitions. Features dual chest patch pockets, matte horn buttons, and a peach-soft brushed finish.",
      details: [
        "340 GSM heavy twill with peach finish",
        "Oversized fit built for easy layering",
        "Dual utility chest pockets",
        "Heavy-gauge topstitching"
      ]
    },
    {
      id: "gz-07",
      name: "Monochrome Minimal Co-ord",
      subtitle: "Matching Camp Shirt & Short",
      category: "coords",
      gender: ["men", "unisex"],
      price: 3299,
      originalPrice: 4699,
      badge: "COMPLETE SET",
      fabric: "Tencel-Linen Blend",
      colors: [
        { name: "Ink Black", hex: "#141414", inStock: true },
        { name: "Pebble Dune", hex: "#D8CFC4", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL"],
      primaryImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=70&auto=format,compress&fm=webp",
      description: "A coordinated two-piece outfit featuring a boxy short-sleeve shirt and matching relaxed drawstring shorts.",
      details: [
        "Includes both top and bottom",
        "Ultra-soft fluid hand-feel",
        "Elasticated shorts with drawstring and rear pocket",
        "Perfect for casual weekend leisure"
      ]
    },
    {
      id: "gz-08",
      name: "Vintage Mineral Wash Heavy Tee",
      subtitle: "Heritage 1979 Archival Wash",
      category: "topwear",
      gender: ["men", "unisex"],
      price: 1399,
      originalPrice: 1999,
      badge: "HERITAGE 1979",
      fabric: "260 GSM Heavyweight Jersey",
      colors: [
        { name: "Washed Navy", hex: "#2C3E50", inStock: true },
        { name: "Faded Onyx", hex: "#2E2E2E", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      primaryImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=70&auto=format,compress&fm=webp",
      description: "Individually garment-dyed and mineral washed for an authentic lived-in vintage patina with Gazebo's signature heritage heft.",
      details: [
        "260 GSM combed cotton jersey",
        "Unique artisanal mineral wash on each piece",
        "Durable flatlock construction",
        "Comfortable relaxed silhouette"
      ]
    },
    {
      id: "gz-09",
      name: "Minimalist Harrington Jacket",
      subtitle: "Water-Resistant City Outerwear",
      category: "outerwear",
      gender: ["men"],
      price: 3499,
      originalPrice: 4999,
      badge: "STATEMENT",
      fabric: "High-Density Cotton Poly Twill",
      colors: [
        { name: "Slate Grey", hex: "#4A525A", inStock: true },
        { name: "Classic Navy", hex: "#1B2A4A", inStock: true }
      ],
      sizes: ["M", "L", "XL"],
      primaryImage: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=70&auto=format,compress&fm=webp",
      description: "A clean modern silhouette featuring a stand collar with horn buttons, two-way YKK front zipper, and internal storm flaps.",
      details: [
        "Water-repellent matte outer shell",
        "Two-way metal zipper closure",
        "Dual slant hand pockets with snap flaps",
        "Breathable cotton lining"
      ]
    },
    {
      id: "gz-10",
      name: "Structured 6-Panel Cap",
      subtitle: "Heritage Garments & Accessories",
      category: "accessories",
      gender: ["men", "women", "unisex"],
      price: 899,
      originalPrice: 1299,
      badge: "ACCESSORY",
      fabric: "Heavy Cotton Twill",
      colors: [
        { name: "Forest Green", hex: "#2D4B39", inStock: true },
        { name: "Dark Walnut", hex: "#4A3B32", inStock: true },
        { name: "Pitch Black", hex: "#1A1A1A", inStock: true }
      ],
      sizes: ["One Size (Adjustable)"],
      primaryImage: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=70&auto=format,compress&fm=webp",
      description: "Structured crown with pre-curved visor, embroidered eyelets, and an antique brass buckle adjustment strap.",
      details: [
        "100% cotton chino twill",
        "Subtle tonal Gazebo insignia embroidery",
        "Custom antique brass tri-glide buckle",
        "Moisture-wicking internal sweatband"
      ]
    },
    {
      id: "gz-11",
      name: "16oz Heavyweight Canvas Tote",
      subtitle: "Everyday Durable Carryall",
      category: "accessories",
      gender: ["unisex"],
      price: 1199,
      originalPrice: 1699,
      badge: "ICONIC",
      fabric: "16oz Raw Organic Cotton Duck",
      colors: [
        { name: "Raw Ecru", hex: "#ECE5D8", inStock: true },
        { name: "Washed Black", hex: "#222222", inStock: true }
      ],
      sizes: ["Standard (22L)"],
      primaryImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=70&auto=format,compress&fm=webp",
      description: "Built to last decades. Heavy 16oz duck canvas with reinforced box-stitched handles, key lanyard, and interior zip compartment.",
      details: [
        "16oz organic unbleached canvas",
        "Interior zippered security pocket",
        "Wide reinforced shoulder straps",
        "Screen-printed Gazebo Estd. 1979 archival mark"
      ]
    },
    {
      id: "gz-12",
      name: "Pure Linen Drawstring Short",
      subtitle: "Casual Summer Tailoring",
      category: "bottomwear",
      gender: ["men"],
      price: 1699,
      originalPrice: 2399,
      badge: "SEASONAL",
      fabric: "100% Slub Linen",
      colors: [
        { name: "Oat Oatmeal", hex: "#DDD6C8", inStock: true },
        { name: "Olive Tint", hex: "#556B2F", inStock: true }
      ],
      sizes: ["30", "32", "34", "36"],
      primaryImage: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=70&auto=format,compress&fm=webp",
      secondaryImage: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=70&auto=format,compress&fm=webp",
      description: "Relaxed mid-thigh length cut from textured slub linen. Finished with an internal drawcord and deep slash side pockets.",
      details: [
        "100% breathable slub linen",
        "Elasticated waist with tubular cotton drawcord",
        "Rear patch pocket with horn button",
        "Soft-washed for effortless comfort"
      ]
    }
  ]
};

// Global accessor functions
window.GAZEBO_CONFIG = GAZEBO_CONFIG;
window.getProductsByCategory = (cat) => {
  if (!cat || cat === 'all') return GAZEBO_CONFIG.products;
  return GAZEBO_CONFIG.products.filter(p => p.category === cat);
};
window.getProductById = (id) => GAZEBO_CONFIG.products.find(p => p.id === id);
