/**
 * Gazebo E-Commerce Catalog Data Configuration (Snitch-Style Architecture)
 * Estd. 1979 • M.G. Road, Pune
 */

const GAZEBO_CONFIG = {
  brand: {
    name: "GAZEBO",
    registeredName: "Gazebo®",
    subName: "GARMENTS & ACCESSORIES",
    estd: "1979",
    location: "M.G. Road, Camp, Pune 411001, India",
    instagramHandle: "gazibo_clothing",
    instagramUrl: "https://www.instagram.com/gazibo_clothing/",
    tagline: "Pune's Iconic Fashion Landmark • Estd. 1979",
    currency: "₹",
    phone: "+91 20 2613 0000",
    whatsapp: "912026130000",
    hours: "Open Daily: 10:30 AM - 9:30 PM",
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
      id: "tshirts-polos",
      title: "T-Shirts & Polos",
      subTitle: "Heavyweight 240+ GSM",
      itemCount: "42 Styles",
      image: "assets/images/categories/cat-tshirts-polos.jpg",
      tag: "POPULAR"
    },
    {
      id: "jeans-flares",
      title: "Jeans & Flares",
      subTitle: "Straight & Wide-Leg",
      itemCount: "28 Styles",
      image: "assets/images/categories/cat-jeans-flares.jpg",
      tag: "TRENDING"
    },
    {
      id: "cargos-trousers",
      title: "Cargos & Relaxed Trousers",
      subTitle: "Tailored Utility Fits",
      itemCount: "34 Styles",
      image: "assets/images/categories/cat-cargos-trousers.jpg",
      tag: "SIGNATURE"
    },
    {
      id: "linen-overshirts",
      title: "Linen & Overshirts",
      subTitle: "Breathable Natural Weaves",
      itemCount: "19 Styles",
      image: "assets/images/categories/cat-linen-overshirts.jpg",
      tag: "SUMMER EDIT"
    },
    {
      id: "womens-coords",
      title: "Women's Co-ords",
      subTitle: "Effortless Matching Sets",
      itemCount: "16 Styles",
      image: "assets/images/categories/cat-womens-coords.jpg",
      tag: "NEW DROP"
    },
    {
      id: "womens-tops-pants",
      title: "Women's Tops & Pants",
      subTitle: "Cropped Knits & Trousers",
      itemCount: "22 Styles",
      image: "assets/images/categories/cat-womens-tops-pants.jpg",
      tag: "ESSENTIAL"
    },
    {
      id: "kids-sets",
      title: "Kids' Sets",
      subTitle: "Everyday Casual Sets",
      itemCount: "18 Styles",
      image: "assets/images/categories/cat-kids-sets.jpg",
      tag: "FAMILY WEAR"
    }
  ],

  products: [
    {
      id: "gz-01",
      name: "Heavyweight Boxy Drop-Shoulder Tee",
      subtitle: "240 GSM Dense Combed Cotton",
      category: "tshirts-polos",
      gender: ["women", "unisex", "men"],
      price: 1299,
      originalPrice: 1999,
      badge: "BESTSELLER",
      fabric: "240 GSM 100% Combed Cotton",
      colors: [
        { name: "Vintage Ecru", hex: "#E9E5DD", inStock: true },
        { name: "Concrete Grey", hex: "#7E8287", inStock: true },
        { name: "Washed Black", hex: "#1F1F1F", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL"],
      primaryImage: "assets/images/products/gz-01-primary.jpg",
      secondaryImage: "assets/images/products/gz-01-secondary.jpg",
      gallery: [
        "assets/images/products/gz-01-primary.jpg",
        "assets/images/products/gz-01-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "A contemporary drop-shoulder boxy silhouette engineered with ultra-dense 240 GSM combed cotton. Retains crisp structural drape wash after wash.",
      modelInfo: "Model is 6'1" (185 cm) wearing size Large (Relaxed Fit)",
      washCare: "Machine wash cold with similar colors. Bio-washed pre-shrunk fabric. Turn inside out when ironing.",
      details: [
        "240 GSM heavy combed cotton",
        "Pre-shrunk, bio-washed fabric",
        "Reinforced twin-needle ribbed neckline",
        "Drop shoulder boxy streetwear cut"
      ]
    },
    {
      id: "gz-02",
      name: "Camp Collar Resort Overshirt",
      subtitle: "Relaxed Textured Layering Piece",
      category: "linen-overshirts",
      gender: ["men", "unisex"],
      price: 1899,
      originalPrice: 2699,
      badge: "NEW EDIT",
      fabric: "100% Pure Slub Cotton-Linen",
      colors: [
        { name: "Pure White", hex: "#FFFFFF", inStock: true },
        { name: "Natural Ecru", hex: "#E3DDD2", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL"],
      primaryImage: "assets/images/products/gz-02-primary.jpg",
      secondaryImage: "assets/images/products/gz-02-secondary.jpg",
      gallery: [
        "assets/images/products/gz-02-primary.jpg",
        "assets/images/products/gz-02-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Airy resort silhouette with open camp collar and front patch pockets. Crafted for effortless layering over tees and tanks.",
      modelInfo: "Model is 6'0" (183 cm) wearing size Medium",
      washCare: "Hand or machine wash gentle. Do not tumble dry. Steam iron while slightly damp for crisp slub texture.",
      details: [
        "100% natural breathable weave",
        "Front zip and utility pockets",
        "Straight hemline with side vents",
        "Pre-washed for soft drape"
      ]
    },
    {
      id: "gz-03",
      name: "High-Waist Straight Denim Jeans",
      subtitle: "Vintage Wash Heritage Denim",
      category: "jeans-flares",
      gender: ["women", "unisex"],
      price: 2499,
      originalPrice: 3499,
      badge: "TRENDING",
      fabric: "13.5oz Rigid Cotton Denim",
      colors: [
        { name: "Vintage Indigo", hex: "#3B536E", inStock: true },
        { name: "Washed Black", hex: "#222222", inStock: true }
      ],
      sizes: ["28", "30", "32", "34"],
      primaryImage: "assets/images/products/gz-03-primary.jpg",
      secondaryImage: "assets/images/products/gz-03-secondary.jpg",
      gallery: [
        "assets/images/products/gz-03-primary.jpg",
        "assets/images/products/gz-03-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "High-rise straight cut with subtle flare at the hem. Crafted from authentic 13.5oz ring-spun cotton denim with vintage whiskering.",
      modelInfo: "Model is 5'9" (175 cm) wearing waist size 28",
      washCare: "Machine wash cold inside out. Wash separately during first few washes to preserve authentic indigo patina.",
      details: [
        "100% ring-spun cotton denim",
        "Classic five-pocket styling",
        "Subtle hand-whiskering & fading",
        "Sturdy copper rivets and shank"
      ]
    },
    {
      id: "gz-04",
      name: "Pleated Relaxed Tailored Trouser",
      subtitle: "Fluid Architecture Silhouette",
      category: "cargos-trousers",
      gender: ["men", "women"],
      price: 2299,
      originalPrice: 3299,
      badge: "SIGNATURE",
      fabric: "Tencel Cotton Twill",
      colors: [
        { name: "Deep Navy", hex: "#1C2833", inStock: true },
        { name: "Obsidian Black", hex: "#111111", inStock: true }
      ],
      sizes: ["30", "32", "34", "36"],
      primaryImage: "assets/images/products/gz-04-primary.jpg",
      secondaryImage: "assets/images/products/gz-04-secondary.jpg",
      gallery: [
        "assets/images/products/gz-04-primary.jpg",
        "assets/images/products/gz-04-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Double front pleats with a relaxed thigh tapering to a clean architectural break at the hem.",
      modelInfo: "Model is 6'2" (188 cm) wearing size 32 (Relaxed Cut)",
      washCare: "Dry clean recommended or machine wash cold gentle cycle. Warm iron.",
      details: [
        "Fluid drape Tencel blend",
        "Double front tailored pleats",
        "Concealed hook-and-bar closure",
        "Deep slant hand pockets"
      ]
    },
    {
      id: "gz-05",
      name: "Linen Camp Shirt Co-ord Set",
      subtitle: "Two-Piece Matching Set",
      category: "womens-coords",
      gender: ["women"],
      price: 3299,
      originalPrice: 4699,
      badge: "BESTSELLER",
      fabric: "100% European Flax Linen",
      colors: [
        { name: "Oatmeal Beige", hex: "#DDD6C8", inStock: true },
        { name: "Terracotta Sand", hex: "#C47B5D", inStock: true }
      ],
      sizes: ["XS", "S", "M", "L"],
      primaryImage: "assets/images/products/gz-05-primary.jpg",
      secondaryImage: "assets/images/products/gz-05-secondary.jpg",
      gallery: [
        "assets/images/products/gz-05-primary.jpg",
        "assets/images/products/gz-05-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Effortless two-piece co-ord set featuring a boxy short-sleeve camp shirt and matching pleated high-rise trousers.",
      modelInfo: "Model is 5'8" (173 cm) wearing size Small",
      washCare: "Gentle wash cold with mild detergent. Hang dry in shade. Iron damp.",
      details: [
        "Includes both shirt & trouser",
        "100% breathable pure linen",
        "Mother-of-pearl finish buttons",
        "Elasticated rear trouser waistband"
      ]
    },
    {
      id: "gz-06",
      name: "Drop-Shoulder Fleece Hoodie",
      subtitle: "380 GSM Heavy French Terry",
      category: "tshirts-polos",
      gender: ["men", "unisex"],
      price: 1999,
      originalPrice: 2999,
      badge: "POPULAR",
      fabric: "380 GSM Brushed French Terry",
      colors: [
        { name: "Sage Green", hex: "#8F9D8C", inStock: true },
        { name: "Oat Heather", hex: "#D8CFC4", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL"],
      primaryImage: "assets/images/products/gz-06-primary.jpg",
      secondaryImage: "assets/images/products/gz-06-secondary.jpg",
      gallery: [
        "assets/images/products/gz-06-primary.jpg",
        "assets/images/products/gz-06-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Dense 380 GSM French terry hoodie engineered with double-layered hood and relaxed drop-shoulder silhouette.",
      modelInfo: "Model is 6'1" (185 cm) wearing size Large",
      washCare: "Machine wash cold inside out. Do not tumble dry.",
      details: [
        "380 GSM heavy brushed fleece",
        "Seamless crossover neckline hood",
        "Hidden kangaroo pouch pocket",
        "Heavy ribbed cuffs and waistband"
      ]
    },
    {
      id: "gz-07",
      name: "Cable Knit Cropped Sweater",
      subtitle: "Chunky Textured Knitwear",
      category: "womens-tops-pants",
      gender: ["women"],
      price: 1699,
      originalPrice: 2499,
      badge: "NEW DROP",
      fabric: "100% Combed Cotton Knit",
      colors: [
        { name: "Vintage Cream", hex: "#F3EDE2", inStock: true },
        { name: "Camel", hex: "#A87A51", inStock: true }
      ],
      sizes: ["XS", "S", "M", "L"],
      primaryImage: "assets/images/products/gz-07-primary.jpg",
      secondaryImage: "assets/images/products/gz-07-secondary.jpg",
      gallery: [
        "assets/images/products/gz-07-primary.jpg",
        "assets/images/products/gz-07-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Artisanal cable knit pattern with a modern cropped hemline and relaxed balloon sleeves.",
      modelInfo: "Model is 5'7" (170 cm) wearing size Small",
      washCare: "Flat dry only. Hand wash cold with wool-friendly detergent. Never hang knitwear.",
      details: [
        "Breathable 100% cotton knit",
        "Classic cable-stitch structure",
        "Ribbed crewneck and waistband",
        "Cropped above hip silhouette"
      ]
    },
    {
      id: "gz-08",
      name: "Distressed Oversized Denim Jacket",
      subtitle: "Archival Heritage Wash",
      category: "womens-tops-pants",
      gender: ["women", "unisex"],
      price: 2899,
      originalPrice: 4199,
      badge: "FLAGSHIP",
      fabric: "14oz Heavyweight Cotton Denim",
      colors: [
        { name: "Vintage Acid Wash", hex: "#5C6B73", inStock: true }
      ],
      sizes: ["S", "M", "L", "XL"],
      primaryImage: "assets/images/products/gz-08-primary.jpg",
      secondaryImage: "assets/images/products/gz-08-secondary.jpg",
      gallery: [
        "assets/images/products/gz-08-primary.jpg",
        "assets/images/products/gz-08-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Statement trucker silhouette with authentic artisanal abrasion, dual flap chest pockets, and relaxed dropped shoulders.",
      modelInfo: "Model is 5'9" (175 cm) wearing size Medium (Oversized)",
      washCare: "Machine wash cold inside out. Hang dry to maintain distressed fiber detailing.",
      details: [
        "14oz heavyweight denim",
        "Vintage enzyme stone wash",
        "Subtle collar and hem abrasion",
        "Branded antique brass hardware"
      ]
    },
    {
      id: "gz-09",
      name: "Wool-Blend Varsity Bomber Jacket",
      subtitle: "Contrast Ribbed Letterman Cut",
      category: "linen-overshirts",
      gender: ["men"],
      price: 3499,
      originalPrice: 4999,
      badge: "LIMITED EDIT",
      fabric: "Wool & Cashmere Blend",
      colors: [
        { name: "Cream & Navy", hex: "#EAE7DF", inStock: true }
      ],
      sizes: ["M", "L", "XL"],
      primaryImage: "assets/images/products/gz-09-primary.jpg",
      secondaryImage: "assets/images/products/gz-09-secondary.jpg",
      gallery: [
        "assets/images/products/gz-09-primary.jpg",
        "assets/images/products/gz-09-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Clean heritage-inspired varsity jacket with tonal snap buttons, contrast navy ribbed collar, and double-welt leatherette hand pockets.",
      modelInfo: "Model is 6'2" (188 cm) wearing size Large",
      washCare: "Dry clean only. Store on shaped wooden hanger.",
      details: [
        "Heavyweight wool-rich body",
        "Quilted satin thermal interior lining",
        "Dual interior security pockets",
        "Athletic striped ribbed trim"
      ]
    },
    {
      id: "gz-10",
      name: "Kids' Fleece Casual Streetwear Set",
      subtitle: "Comfortable Two-Piece Tracksuit",
      category: "kids-sets",
      gender: ["kids", "unisex"],
      price: 1499,
      originalPrice: 2199,
      badge: "KIDS FAVORITE",
      fabric: "100% Organic Cotton Fleece",
      colors: [
        { name: "Sage & Heather", hex: "#8F9D8C", inStock: true }
      ],
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      primaryImage: "assets/images/products/gz-10-primary.jpg",
      secondaryImage: "assets/images/products/gz-10-secondary.jpg",
      gallery: [
        "assets/images/products/gz-10-primary.jpg",
        "assets/images/products/gz-10-secondary.jpg",
        "assets/images/store/store-01.jpg",
        "assets/images/store/store-02.jpg"
      ],
      description: "Super-soft organic fleece set built for everyday active movement. Includes relaxed pullover hoodie and elasticated joggers.",
      modelInfo: "Junior model wearing size 6-7Y",
      washCare: "Machine wash warm with mild detergent. Durable tumble dry low.",
      details: [
        "Includes matching hoodie and joggers",
        "GOTS certified organic cotton",
        "Soft-brushed interior",
        "Reinforced knee and seam stitching"
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
window.getProductById = (id) => {
  if (window.GAZEBO_PRODUCTS) {
    const found = window.GAZEBO_PRODUCTS.find(p => p.id === id);
    if (found) {
      if (!found.primaryImage && found.images) {
        found.primaryImage = found.images.primary;
      }
      return found;
    }
  }
  return GAZEBO_CONFIG && GAZEBO_CONFIG.products ? GAZEBO_CONFIG.products.find(p => p.id === id) : null;
};


/* Global Products Catalog Database (products.json) */
window.GAZEBO_PRODUCTS = [
  {
    "id": "gz-m-t-01",
    "name": "Gazebo Acid Wash Geometric Graphic Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 899,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Washed Charcoal",
        "hex": "#3A3A3C"
      },
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/gazebo-acid-wash-geometric-tee.jpg",
      "secondary": "assets/products/men/t-shirts/gazebo-acid-wash-geometric-tee.jpg"
    },
    "tags": [
      "Graphic Print",
      "Relaxed Fit",
      "Heavyweight",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/t-shirts/gazebo-acid-wash-geometric-tee.jpg",
    "description": "Heavyweight 240 GSM combed cotton t-shirt with a vintage acid-washed charcoal finish and bold geometric monochromatic front print. Cut in a modern relaxed streetwear drape.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 84
  },
  {
    "id": "gz-m-t-02",
    "name": "Gazebo Coastal Sun Graphic Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 749,
    "mrp": 1299,
    "badge": "New",
    "colors": [
      {
        "name": "Slate Blue",
        "hex": "#4A6B82"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/gazebo-coastal-sun-graphic-tee.jpg",
      "secondary": "assets/products/men/t-shirts/gazebo-coastal-sun-graphic-tee.jpg"
    },
    "tags": [
      "Graphic Print",
      "Regular Fit",
      "New In",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/t-shirts/gazebo-coastal-sun-graphic-tee.jpg",
    "description": "Clean slate-blue pure cotton crewneck t-shirt featuring artisanal coastal sun, wave, and botanical foliage graphic illustration.",
    "category": "men",
    "isBestseller": false,
    "isNew": true,
    "rating": 4.8,
    "reviewsCount": 39
  },
  {
    "id": "gz-m-t-03",
    "name": "Gazebo Embroidered Pique Polo Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 999,
    "mrp": 1699,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#1E4A38"
      },
      {
        "name": "Khaki Sand",
        "hex": "#D8C8B0"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/gazebo-embroidered-pique-polo-tee.jpg",
      "secondary": "assets/products/men/t-shirts/gazebo-embroidered-pique-polo-tee.jpg"
    },
    "tags": [
      "Embroidery",
      "Regular Fit",
      "Heavyweight",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/t-shirts/gazebo-embroidered-pique-polo-tee.jpg",
    "description": "Tailored short-sleeve polo t-shirt in rich emerald green pique cotton with fine geometric gold thread embroidery at the chest.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 62
  },
  {
    "id": "gz-m-t-04",
    "name": "Gazebo Sunset Ridge Graphic Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 699,
    "mrp": 1199,
    "badge": "New",
    "colors": [
      {
        "name": "Ecru Off White",
        "hex": "#F3EFE6"
      },
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/gazebo-sunset-ridge-graphic-tee.jpg",
      "secondary": "assets/products/men/t-shirts/gazebo-sunset-ridge-graphic-tee.jpg"
    },
    "tags": [
      "Graphic Print",
      "Relaxed Fit",
      "New In",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/t-shirts/gazebo-sunset-ridge-graphic-tee.jpg",
    "description": "Soft organic cotton jersey t-shirt in natural ecru with a multi-tone sunset mountain horizon chest screen-print.",
    "category": "men",
    "isBestseller": false,
    "isNew": true,
    "rating": 4.7,
    "reviewsCount": 27
  },
  {
    "id": "gz-m-t-05",
    "name": "Gazebo Botanical Leaf Knit Polo Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 1099,
    "mrp": 1799,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Cream",
        "hex": "#F7F3E9"
      },
      {
        "name": "Navy Blue",
        "hex": "#1B2838"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/gazebo-botanical-leaf-knit-polo-tee.jpg",
      "secondary": "assets/products/men/t-shirts/gazebo-botanical-leaf-knit-polo-tee.jpg"
    },
    "tags": [
      "Printed",
      "Regular Fit",
      "Heavyweight",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/t-shirts/gazebo-botanical-leaf-knit-polo-tee.jpg",
    "description": "Premium fine-gauge knit polo t-shirt in warm cream featuring elegant botanical line-art leaf motifs and a structured collar.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 51
  },
  {
    "id": "gz-m-ot-01",
    "name": "Gazebo Baroque Crest Oversized Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy",
        "hex": "#6B2D38"
      },
      {
        "name": "Washed Charcoal",
        "hex": "#2C2C2E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/gazebo-baroque-crest-oversized-tee.jpg",
      "secondary": "assets/products/men/oversized-tees/gazebo-baroque-crest-oversized-tee.jpg"
    },
    "tags": [
      "Oversized",
      "Heavyweight",
      "Graphic Print",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/oversized-tees/gazebo-baroque-crest-oversized-tee.jpg",
    "description": "Heavyweight 240 GSM dense cotton oversized t-shirt in rich vintage burgundy with an ornate antique baroque crest graphic emblem across the chest.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "gz-m-ot-02",
    "name": "Gazebo Abstract Fluid Oversized Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 899,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Washed Black",
        "hex": "#2B2C2F"
      },
      {
        "name": "Ecru Cream",
        "hex": "#E9E3D3"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/gazebo-abstract-fluid-oversized-tee.jpg",
      "secondary": "assets/products/men/oversized-tees/gazebo-abstract-fluid-oversized-tee.jpg"
    },
    "tags": [
      "Oversized",
      "Heavyweight",
      "Graphic Print",
      "Relaxed Fit",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/oversized-tees/gazebo-abstract-fluid-oversized-tee.jpg",
    "description": "Drop-shoulder vintage washed black oversized tee featuring an organic fluid abstract calligraphic artwork on premium combed cotton.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 65
  },
  {
    "id": "gz-m-ot-03",
    "name": "Gazebo Sage Mineral Oversized Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 799,
    "mrp": 1299,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Off White",
        "hex": "#F2EFE9"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/gazebo-sage-mineral-oversized-tee.jpg",
      "secondary": "assets/products/men/oversized-tees/gazebo-sage-mineral-oversized-tee.jpg"
    },
    "tags": [
      "Oversized",
      "Heavyweight",
      "Minimalist",
      "Relaxed Fit",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/oversized-tees/gazebo-sage-mineral-oversized-tee.jpg",
    "description": "Clean mineral-washed sage green boxy tee crafted from ultra-soft heavyweight jersey with subtle geometric architectural line art at the chest.",
    "category": "men",
    "isBestseller": false,
    "isNew": true,
    "rating": 4.8,
    "reviewsCount": 42
  },
  {
    "id": "gz-m-ot-04",
    "name": "Gazebo Alpine Horizon Oversized Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 849,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Cream Ecru",
        "hex": "#F5EFE6"
      },
      {
        "name": "Earth Brown",
        "hex": "#4A3728"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/gazebo-alpine-horizon-oversized-tee.jpg",
      "secondary": "assets/products/men/oversized-tees/gazebo-alpine-horizon-oversized-tee.jpg"
    },
    "tags": [
      "Oversized",
      "Heavyweight",
      "Graphic Print",
      "Relaxed Fit",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/oversized-tees/gazebo-alpine-horizon-oversized-tee.jpg",
    "description": "Relaxed street-fit ecru t-shirt screen-printed with a retro mountain sunrise landscape graphic in warm earthy brown and terracotta tones.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 38
  },
  {
    "id": "gz-m-ot-05",
    "name": "Gazebo Ocean Swell Oversized Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 1099,
    "mrp": 1799,
    "badge": null,
    "colors": [
      {
        "name": "Slate Blue",
        "hex": "#5C7D99"
      },
      {
        "name": "Onyx Black",
        "hex": "#1B1C1E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/gazebo-ocean-swell-oversized-tee.jpg",
      "secondary": "assets/products/men/oversized-tees/gazebo-ocean-swell-oversized-tee.jpg"
    },
    "tags": [
      "Oversized",
      "Heavyweight",
      "Graphic Print",
      "Relaxed Fit",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/oversized-tees/gazebo-ocean-swell-oversized-tee.jpg",
    "description": "Heavyweight premium cotton jersey in muted slate blue, displaying an artistic rolling ocean swell wave woodblock-inspired chest print.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 54
  },
  {
    "id": "gz-m-p-01",
    "name": "Gazebo Burgundy Tipped Pique Polo Tee",
    "section": "men",
    "subCategory": "polos",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy",
        "hex": "#722F37"
      },
      {
        "name": "Off White",
        "hex": "#F1EBE1"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/gazebo-burgundy-tipped-pique-polo-tee.jpg",
      "secondary": "assets/products/men/polos/gazebo-burgundy-tipped-pique-polo-tee.jpg"
    },
    "tags": [
      "Polo",
      "Pique Cotton",
      "Tipped Collar",
      "Embroidery",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/polos/gazebo-burgundy-tipped-pique-polo-tee.jpg",
    "description": "Rich burgundy combed pique cotton polo tee tailored with contrast cream tipping along the collar and cuffs, finished with fine chest embroidery.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 68
  },
  {
    "id": "gz-m-p-02",
    "name": "Gazebo Emerald Twin-Tipped Polo Tee",
    "section": "men",
    "subCategory": "polos",
    "price": 1099,
    "mrp": 1799,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Emerald Green",
        "hex": "#1E593E"
      },
      {
        "name": "Off White",
        "hex": "#EDEAE1"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/gazebo-emerald-twin-tipped-polo-tee.jpg",
      "secondary": "assets/products/men/polos/gazebo-emerald-twin-tipped-polo-tee.jpg"
    },
    "tags": [
      "Polo",
      "Pique Cotton",
      "Tipped Collar",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/polos/gazebo-emerald-twin-tipped-polo-tee.jpg",
    "description": "Premium emerald green pique polo shirt featuring dual contrast white stripe tipping on the spread rib collar and tailored short sleeves.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 79
  },
  {
    "id": "gz-m-p-03",
    "name": "Gazebo Navy Crest Pique Polo Tee",
    "section": "men",
    "subCategory": "polos",
    "price": 899,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Deep Navy",
        "hex": "#1D3354"
      },
      {
        "name": "Sand Khaki",
        "hex": "#D9C5A3"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/gazebo-navy-crest-pique-polo-tee.jpg",
      "secondary": "assets/products/men/polos/gazebo-navy-crest-pique-polo-tee.jpg"
    },
    "tags": [
      "Polo",
      "Pique Cotton",
      "Embroidery",
      "Dark Shades",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/polos/gazebo-navy-crest-pique-polo-tee.jpg",
    "description": "Classic midnight navy polo shirt crafted from breathable cotton pique with an embroidered minimalist crest insignia at the chest.",
    "category": "men",
    "isBestseller": false,
    "isNew": true,
    "rating": 4.8,
    "reviewsCount": 46
  },
  {
    "id": "gz-m-p-04",
    "name": "Gazebo Botanical Print Resort Polo Tee",
    "section": "men",
    "subCategory": "polos",
    "price": 1199,
    "mrp": 1899,
    "badge": null,
    "colors": [
      {
        "name": "Warm Cream",
        "hex": "#F6F3EB"
      },
      {
        "name": "Navy Blue",
        "hex": "#1C2A44"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/gazebo-botanical-print-resort-polo-tee.jpg",
      "secondary": "assets/products/men/polos/gazebo-botanical-print-resort-polo-tee.jpg"
    },
    "tags": [
      "Polo",
      "Printed",
      "Resort Collar",
      "Neutral Tones",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/polos/gazebo-botanical-print-resort-polo-tee.jpg",
    "description": "Breezy resort-style polo in warm cream with an all-over navy botanical leaf illustration on soft mercerized cotton jersey.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 35
  },
  {
    "id": "gz-m-p-05",
    "name": "Gazebo Steel Blue Textured Polo Tee",
    "section": "men",
    "subCategory": "polos",
    "price": 849,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Steel Blue",
        "hex": "#557A95"
      },
      {
        "name": "Charcoal Grey",
        "hex": "#3A3E45"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/gazebo-steel-blue-textured-polo-tee.jpg",
      "secondary": "assets/products/men/polos/gazebo-steel-blue-textured-polo-tee.jpg"
    },
    "tags": [
      "Polo",
      "Textured Knit",
      "Micro Waffle",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/polos/gazebo-steel-blue-textured-polo-tee.jpg",
    "description": "Micro-textured waffle knit polo shirt in sophisticated steel blue, featuring a clean placket and structured self-fabric collar.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 52
  },
  {
    "id": "gz-m-h-01",
    "name": "Gazebo Burgundy Heavyweight Zip-Up Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy",
        "hex": "#6D1A2C"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/gazebo-burgundy-heavyweight-zip-up-hoodie.jpg",
      "secondary": "assets/products/men/hoodies/gazebo-burgundy-heavyweight-zip-up-hoodie.jpg"
    },
    "tags": [
      "Hoodie",
      "Zip-Up",
      "Heavyweight Fleece",
      "Relaxed Fit",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/hoodies/gazebo-burgundy-heavyweight-zip-up-hoodie.jpg",
    "description": "Premium heavyweight fleece zip-up hoodie in deep burgundy, featuring a split kangaroo pocket, silver-finish zipper, and relaxed dropped shoulders.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 84
  },
  {
    "id": "gz-m-h-02",
    "name": "Gazebo Noir Brushstroke Graphic Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 1399,
    "mrp": 2299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Washed Black",
        "hex": "#1E1E20"
      },
      {
        "name": "Ivory Cream",
        "hex": "#F1EEE6"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/gazebo-noir-brushstroke-graphic-hoodie.jpg",
      "secondary": "assets/products/men/hoodies/gazebo-noir-brushstroke-graphic-hoodie.jpg"
    },
    "tags": [
      "Hoodie",
      "Pullover",
      "Graphic",
      "Heavyweight Fleece",
      "Relaxed Fit",
      "Bestseller",
      "Dark Shades",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/hoodies/gazebo-noir-brushstroke-graphic-hoodie.jpg",
    "description": "Heavyweight washed black pullover hoodie showcasing an expressive ivory brushstroke calligraphy artwork across the chest with a cozy fleece lining.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 92
  },
  {
    "id": "gz-m-h-03",
    "name": "Gazebo Sunset Mountain Graphic Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 999,
    "mrp": 1699,
    "badge": null,
    "colors": [
      {
        "name": "Warm Cream",
        "hex": "#F5EFEB"
      },
      {
        "name": "Rust Terracotta",
        "hex": "#A0522D"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/gazebo-sunset-mountain-graphic-hoodie.jpg",
      "secondary": "assets/products/men/hoodies/gazebo-sunset-mountain-graphic-hoodie.jpg"
    },
    "tags": [
      "Hoodie",
      "Pullover",
      "Graphic",
      "Heavyweight Fleece",
      "Neutral Tones",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/hoodies/gazebo-sunset-mountain-graphic-hoodie.jpg",
    "description": "Artisan pullover hoodie crafted from warm cream fleece, featuring a detailed alpine mountain and setting sun graphic printed in earthy rust tones.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 61
  },
  {
    "id": "gz-m-h-04",
    "name": "Gazebo Forest Green Minimalist Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 1499,
    "mrp": 2499,
    "badge": null,
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#1E4D38"
      },
      {
        "name": "Ecru White",
        "hex": "#F0EDE4"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/gazebo-forest-green-minimalist-hoodie.jpg",
      "secondary": "assets/products/men/hoodies/gazebo-forest-green-minimalist-hoodie.jpg"
    },
    "tags": [
      "Hoodie",
      "Pullover",
      "Minimalist",
      "Heavyweight Fleece",
      "Relaxed Fit",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/hoodies/gazebo-forest-green-minimalist-hoodie.jpg",
    "description": "Clean, elevated pullover hoodie in rich forest green 420 GSM brushed fleece with subtle tonal geometric embroidery on the chest and a roomy kangaroo pouch.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 47
  },
  {
    "id": "gz-m-h-05",
    "name": "Gazebo Ocean Wave Graphic Oversized Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 1699,
    "mrp": 2799,
    "badge": null,
    "colors": [
      {
        "name": "Slate Blue",
        "hex": "#607B8B"
      },
      {
        "name": "Deep Navy",
        "hex": "#1D2E42"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/gazebo-ocean-wave-graphic-oversized-hoodie.jpg",
      "secondary": "assets/products/men/hoodies/gazebo-ocean-wave-graphic-oversized-hoodie.jpg"
    },
    "tags": [
      "Hoodie",
      "Pullover",
      "Graphic",
      "Heavyweight Fleece",
      "Relaxed Fit"
    ],
    "primaryImage": "assets/products/men/hoodies/gazebo-ocean-wave-graphic-oversized-hoodie.jpg",
    "description": "Streetwear statement hoodie in slate blue featuring high-definition Great Wave artwork across the chest, dropped shoulders, and ultra-plush fleece interior.",
    "category": "men",
    "isBestseller": false,
    "isNew": true,
    "rating": 4.9,
    "reviewsCount": 54
  },
  {
    "id": "gz-m-sw-01",
    "name": "Gazebo Abstract Geometric Crew Neck Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 1199,
    "mrp": 1999,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Washed Black",
        "hex": "#1B1B1D"
      },
      {
        "name": "Ivory Cream",
        "hex": "#F2EFE9"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/gazebo-abstract-geometric-crew-neck-sweatshirt.jpg",
      "secondary": "assets/products/men/sweatshirts/gazebo-abstract-geometric-crew-neck-sweatshirt.jpg"
    },
    "tags": [
      "Sweatshirt",
      "Crew Neck",
      "Graphic",
      "Heavyweight Fleece",
      "Relaxed Fit",
      "Bestseller",
      "Dark Shades",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/sweatshirts/gazebo-abstract-geometric-crew-neck-sweatshirt.jpg",
    "description": "Heavyweight washed black fleece sweatshirt featuring an ivory abstract geometric cutout motif, finished with a ribbed crew neckline and relaxed dropped shoulders.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "gz-m-sw-02",
    "name": "Gazebo Sunset Mountain Graphic Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 899,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Warm Cream",
        "hex": "#F6F0E7"
      },
      {
        "name": "Terracotta Rust",
        "hex": "#A85138"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/gazebo-sunset-mountain-graphic-sweatshirt.jpg",
      "secondary": "assets/products/men/sweatshirts/gazebo-sunset-mountain-graphic-sweatshirt.jpg"
    },
    "tags": [
      "Sweatshirt",
      "Crew Neck",
      "Graphic",
      "V-Stitch",
      "Neutral Tones",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/sweatshirts/gazebo-sunset-mountain-graphic-sweatshirt.jpg",
    "description": "Vintage-inspired warm cream sweatshirt tailored with a classic triangular collar V-stitch and scenic alpine sunset ridge print on premium brushed loopback cotton.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 86
  },
  {
    "id": "gz-m-sw-03",
    "name": "Gazebo Forest Green Minimalist Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 1299,
    "mrp": 2199,
    "badge": null,
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#1E4D38"
      },
      {
        "name": "Ecru White",
        "hex": "#EFEBE1"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/gazebo-forest-green-minimalist-sweatshirt.jpg",
      "secondary": "assets/products/men/sweatshirts/gazebo-forest-green-minimalist-sweatshirt.jpg"
    },
    "tags": [
      "Sweatshirt",
      "Crew Neck",
      "Minimalist",
      "Embroidered",
      "Relaxed Fit",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/sweatshirts/gazebo-forest-green-minimalist-sweatshirt.jpg",
    "description": "Understated luxury crewneck sweatshirt in rich forest green 400 GSM loopback cotton, accented by tonal geometric chest embroidery and ribbed trims.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 42
  },
  {
    "id": "gz-m-sw-04",
    "name": "Gazebo Baroque Crest Heavyweight Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 1599,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Deep Burgundy",
        "hex": "#681B2B"
      },
      {
        "name": "Antique Gold",
        "hex": "#D4AF37"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/gazebo-baroque-crest-heavyweight-sweatshirt.jpg",
      "secondary": "assets/products/men/sweatshirts/gazebo-baroque-crest-heavyweight-sweatshirt.jpg"
    },
    "tags": [
      "Sweatshirt",
      "Crew Neck",
      "Heavyweight Fleece",
      "Baroque Crest",
      "Embroidered",
      "Relaxed Fit"
    ],
    "primaryImage": "assets/products/men/sweatshirts/gazebo-baroque-crest-heavyweight-sweatshirt.jpg",
    "description": "Opulent deep burgundy heavyweight sweatshirt showcasing an elaborate antique gold baroque crest emblem across the chest in ultra-soft 450 GSM fleece.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 57
  },
  {
    "id": "gz-m-s-01",
    "name": "Gazebo Classic Oxford Button-Down Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Off White",
        "hex": "#F3EFE6"
      },
      {
        "name": "Charcoal Grey",
        "hex": "#3A3E45"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/gazebo-classic-oxford-cotton-shirt.jpg",
      "secondary": "assets/products/men/shirts/gazebo-classic-oxford-cotton-shirt.jpg"
    },
    "tags": [
      "Shirt",
      "Button-Down",
      "Oxford Cotton",
      "Single Pocket",
      "Bestseller",
      "Neutral Tones",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/shirts/gazebo-classic-oxford-cotton-shirt.jpg",
    "description": "Timeless off-white Oxford cotton full-sleeve shirt crafted with a button-down collar, front chest pocket, and curved hem for an effortless smart-casual drape.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 74
  },
  {
    "id": "gz-m-s-02",
    "name": "Gazebo Forest Green Tailored Cotton Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#1E4D38"
      },
      {
        "name": "Sand Beige",
        "hex": "#D9C5A3"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/gazebo-forest-green-tailored-shirt.jpg",
      "secondary": "assets/products/men/shirts/gazebo-forest-green-tailored-shirt.jpg"
    },
    "tags": [
      "Shirt",
      "Full Sleeve",
      "Spread Collar",
      "Tailored Fit",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/shirts/gazebo-forest-green-tailored-shirt.jpg",
    "description": "Refined full-sleeve shirt in rich forest green premium poplin cotton, featuring a structured spread collar, tonal buttons, and sleek single patch pocket.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 81
  },
  {
    "id": "gz-m-s-03",
    "name": "Gazebo Crimson Navy Plaid Flannel Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 1599,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Crimson Red",
        "hex": "#6E1E2B"
      },
      {
        "name": "Deep Navy",
        "hex": "#1D2E42"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/gazebo-crimson-navy-plaid-flannel-shirt.jpg",
      "secondary": "assets/products/men/shirts/gazebo-crimson-navy-plaid-flannel-shirt.jpg"
    },
    "tags": [
      "Shirt",
      "Plaid",
      "Check",
      "Flannel",
      "Full Sleeve",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/shirts/gazebo-crimson-navy-plaid-flannel-shirt.jpg",
    "description": "Classic heritage flannel shirt in rich crimson and navy gingham check, woven from brushed cotton yarns with a soft hand-feel and durable tailored seams.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 63
  },
  {
    "id": "gz-m-ls-01",
    "name": "Gazebo Sky Blue Resort Linen Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Off White",
        "hex": "#F0EDE4"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/gazebo-sky-blue-resort-linen-shirt.jpg",
      "secondary": "assets/products/men/linen-shirts/gazebo-sky-blue-resort-linen-shirt.jpg"
    },
    "tags": [
      "Linen Shirt",
      "Resort",
      "Full Sleeve",
      "Pure Linen",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/linen-shirts/gazebo-sky-blue-resort-linen-shirt.jpg",
    "description": "Breezy resort-style long sleeve linen shirt crafted from 100% natural breathable European flax linen in a crisp sky blue tone.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "gz-m-ls-02",
    "name": "Gazebo Sand Beige Relaxed Linen Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sand Beige",
        "hex": "#D8C7A5"
      },
      {
        "name": "Warm Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/gazebo-sand-beige-relaxed-linen-shirt.jpg",
      "secondary": "assets/products/men/linen-shirts/gazebo-sand-beige-relaxed-linen-shirt.jpg"
    },
    "tags": [
      "Linen Shirt",
      "Relaxed Fit",
      "Full Sleeve",
      "Pure Linen",
      "Neutral Tones",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/linen-shirts/gazebo-sand-beige-relaxed-linen-shirt.jpg",
    "description": "Understated sand beige relaxed linen button-up shirt featuring a soft spread collar and relaxed fit for laid-back refined layering.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 65
  },
  {
    "id": "gz-m-ls-03",
    "name": "Gazebo Olive Sage Casual Linen Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1499,
    "mrp": 2499,
    "badge": null,
    "colors": [
      {
        "name": "Olive Sage",
        "hex": "#8A9A7B"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/gazebo-olive-sage-casual-linen-shirt.jpg",
      "secondary": "assets/products/men/linen-shirts/gazebo-olive-sage-casual-linen-shirt.jpg"
    },
    "tags": [
      "Linen Shirt",
      "Casual",
      "Full Sleeve",
      "Pure Linen",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/linen-shirts/gazebo-olive-sage-casual-linen-shirt.jpg",
    "description": "Versatile earth-toned olive sage linen shirt tailored with a structured collar, clean French placket, and garment-washed finish.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 52
  },
  {
    "id": "gz-m-ls-04",
    "name": "Gazebo Charcoal Slate Tailored Linen Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1699,
    "mrp": 2799,
    "badge": null,
    "colors": [
      {
        "name": "Charcoal Slate",
        "hex": "#4A4D52"
      },
      {
        "name": "Stone Grey",
        "hex": "#8E9298"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/gazebo-charcoal-slate-tailored-linen-shirt.jpg",
      "secondary": "assets/products/men/linen-shirts/gazebo-charcoal-slate-tailored-linen-shirt.jpg"
    },
    "tags": [
      "Linen Shirt",
      "Tailored Fit",
      "Full Sleeve",
      "Pure Linen",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/linen-shirts/gazebo-charcoal-slate-tailored-linen-shirt.jpg",
    "description": "Sophisticated deep charcoal slate tailored linen shirt made from premium slub linen yarns with a rich textured weave.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 44
  },
  {
    "id": "gz-m-j-01",
    "name": "Gazebo Light Wash Slim Straight Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Light Wash Blue",
        "hex": "#7BA4D0"
      },
      {
        "name": "Faded Indigo",
        "hex": "#4B739B"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/gazebo-light-wash-slim-straight-jeans.jpg",
      "secondary": "assets/products/men/jeans/gazebo-light-wash-slim-straight-jeans.jpg"
    },
    "tags": [
      "Jeans",
      "Light Wash",
      "Slim Straight",
      "Denim",
      "Straight Fit",
      "Slim Fit",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/jeans/gazebo-light-wash-slim-straight-jeans.jpg",
    "description": "Classic five-pocket slim straight jeans cut from premium comfort-stretch denim featuring a light vintage stone wash and subtle fading.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 86
  },
  {
    "id": "gz-m-j-02",
    "name": "Gazebo Vintage Wash Regular Fit Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Vintage Blue",
        "hex": "#3B6E9F"
      },
      {
        "name": "Deep Indigo",
        "hex": "#1F3C5E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/gazebo-vintage-wash-regular-fit-jeans.jpg",
      "secondary": "assets/products/men/jeans/gazebo-vintage-wash-regular-fit-jeans.jpg"
    },
    "tags": [
      "Jeans",
      "Vintage Wash",
      "Regular Fit",
      "Denim",
      "Whiskered",
      "Straight Fit",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/jeans/gazebo-vintage-wash-regular-fit-jeans.jpg",
    "description": "Timeless regular fit jeans in a medium vintage wash with handcrafted thigh whiskering and contrast copper stitching.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 73
  },
  {
    "id": "gz-m-j-03",
    "name": "Gazebo Jet Black Slim Fit Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 1499,
    "mrp": 2499,
    "badge": null,
    "colors": [
      {
        "name": "Jet Black",
        "hex": "#1F1F1F"
      },
      {
        "name": "Charcoal",
        "hex": "#383838"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/gazebo-jet-black-slim-fit-jeans.jpg",
      "secondary": "assets/products/men/jeans/gazebo-jet-black-slim-fit-jeans.jpg"
    },
    "tags": [
      "Jeans",
      "Black Denim",
      "Slim Fit",
      "Clean Wash",
      "Dark Shades",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/jeans/gazebo-jet-black-slim-fit-jeans.jpg",
    "description": "Sleek all-black denim crafted with stay-black dye technology, tailored in a modern slim silhouette with tonal matte black hardware.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 61
  },
  {
    "id": "gz-m-j-04",
    "name": "Gazebo Mineral Washed Charcoal Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 1699,
    "mrp": 2799,
    "badge": null,
    "colors": [
      {
        "name": "Charcoal Grey",
        "hex": "#4F4F54"
      },
      {
        "name": "Slate Wash",
        "hex": "#727278"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/gazebo-mineral-washed-charcoal-jeans.jpg",
      "secondary": "assets/products/men/jeans/gazebo-mineral-washed-charcoal-jeans.jpg"
    },
    "tags": [
      "Jeans",
      "Charcoal",
      "Mineral Wash",
      "Straight Fit",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/jeans/gazebo-mineral-washed-charcoal-jeans.jpg",
    "description": "Contemporary straight leg jeans featuring an authentic acid mineral wash in a smoky charcoal tone with soft brushed cotton hand-feel.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 54
  },
  {
    "id": "gz-m-c-01",
    "name": "Gazebo Jet Black Utility Cargo",
    "section": "men",
    "subCategory": "cargos",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Jet Black",
        "hex": "#1B1B1B"
      },
      {
        "name": "Charcoal",
        "hex": "#333333"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/gazebo-jet-black-utility-cargo.jpg",
      "secondary": "assets/products/men/cargos/gazebo-jet-black-utility-cargo.jpg"
    },
    "tags": [
      "Cargo",
      "Cargo Utility",
      "Jet Black",
      "Relaxed Fit",
      "Straight Fit",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/cargos/gazebo-jet-black-utility-cargo.jpg",
    "description": "Modern tactical utility cargo pants crafted from durable cotton twill featuring dual side bellow flap pockets and a relaxed straight cut.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 82
  },
  {
    "id": "gz-m-c-02",
    "name": "Gazebo Military Olive Utility Cargo",
    "section": "men",
    "subCategory": "cargos",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Olive Green",
        "hex": "#606A4F"
      },
      {
        "name": "Khaki Green",
        "hex": "#748062"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/gazebo-military-olive-utility-cargo.jpg",
      "secondary": "assets/products/men/cargos/gazebo-military-olive-utility-cargo.jpg"
    },
    "tags": [
      "Cargo",
      "Cargo Utility",
      "Military Olive",
      "Relaxed Fit",
      "Earth Tones",
      "Bestseller",
      "Under ₹1,499"
    ],
    "primaryImage": "assets/products/men/cargos/gazebo-military-olive-utility-cargo.jpg",
    "description": "Heritage military-inspired cargo pants in authentic army olive green, tailored with heavy-duty pocket flaps and reinforced knee articulation.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 68
  },
  {
    "id": "gz-m-c-03",
    "name": "Gazebo Sand Khaki Relaxed Cargo",
    "section": "men",
    "subCategory": "cargos",
    "price": 1699,
    "mrp": 2799,
    "badge": null,
    "colors": [
      {
        "name": "Sand Khaki",
        "hex": "#CBB99E"
      },
      {
        "name": "Desert Beige",
        "hex": "#B5A285"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/gazebo-sand-khaki-relaxed-cargo.jpg",
      "secondary": "assets/products/men/cargos/gazebo-sand-khaki-relaxed-cargo.jpg"
    },
    "tags": [
      "Cargo",
      "Cargo Utility",
      "Sand Khaki",
      "Relaxed Fit",
      "Neutral Tones"
    ],
    "primaryImage": "assets/products/men/cargos/gazebo-sand-khaki-relaxed-cargo.jpg",
    "description": "Versatile desert sand khaki utility cargo trousers woven from breathable stretch cotton with spacious flap cargo compartments.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 51
  },
  {
    "id": "gz-m-tr-01",
    "name": "Gazebo Tailored Khaki Formal Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Classic Khaki",
        "hex": "#C9B596"
      },
      {
        "name": "Sand Dune",
        "hex": "#DDD1BE"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/gazebo-tailored-khaki-formal-trousers.jpg",
      "secondary": "assets/products/men/trousers/gazebo-tailored-khaki-formal-trousers.jpg"
    },
    "tags": [
      "Trousers",
      "Tailored",
      "Formal",
      "Khaki",
      "Slim Fit",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499",
      "Neutral Tones"
    ],
    "primaryImage": "assets/products/men/trousers/gazebo-tailored-khaki-formal-trousers.jpg",
    "description": "Sharp tailored flat-front formal trousers in classic khaki cotton-blend with a crisp pressed crease and comfortable mid-rise fit.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 79
  },
  {
    "id": "gz-m-tr-02",
    "name": "Gazebo Charcoal Slate Formal Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Charcoal Slate",
        "hex": "#404245"
      },
      {
        "name": "Heather Grey",
        "hex": "#5C6066"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/gazebo-charcoal-slate-formal-trousers.jpg",
      "secondary": "assets/products/men/trousers/gazebo-charcoal-slate-formal-trousers.jpg"
    },
    "tags": [
      "Trousers",
      "Tailored",
      "Formal",
      "Charcoal Slate",
      "Tapered Fit",
      "Bestseller",
      "Under ₹1,499",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/trousers/gazebo-charcoal-slate-formal-trousers.jpg",
    "description": "Refined charcoal slate dress trousers woven from premium wrinkle-resistant suiting fabric, featuring slant side pockets and tapered hem.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 64
  },
  {
    "id": "gz-m-tr-03",
    "name": "Gazebo Midnight Black Slim Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 1699,
    "mrp": 2799,
    "badge": null,
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#18191A"
      },
      {
        "name": "Onyx",
        "hex": "#0D0D0E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/gazebo-midnight-black-slim-trousers.jpg",
      "secondary": "assets/products/men/trousers/gazebo-midnight-black-slim-trousers.jpg"
    },
    "tags": [
      "Trousers",
      "Tailored",
      "Formal",
      "Midnight Black",
      "Slim Fit",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/trousers/gazebo-midnight-black-slim-trousers.jpg",
    "description": "Modern slim-fit formal trousers in deep midnight black with clean tailored drape, concealed hook closure, and elegant rear welt pockets.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 48
  },
  {
    "id": "gz-m-jk-01",
    "name": "Gazebo Slate Quilted Puffer Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 1499,
    "mrp": 2499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Slate Grey",
        "hex": "#5C6068"
      },
      {
        "name": "Charcoal",
        "hex": "#3A3C42"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/gazebo-slate-quilted-puffer-jacket.jpg",
      "secondary": "assets/products/men/jackets/gazebo-slate-quilted-puffer-jacket.jpg"
    },
    "tags": [
      "Jackets",
      "Puffer",
      "Quilted",
      "Slate Grey",
      "Zip-Up",
      "Bestseller",
      "Under ₹1,499",
      "Dark Shades",
      "Outerwear"
    ],
    "primaryImage": "assets/products/men/jackets/gazebo-slate-quilted-puffer-jacket.jpg",
    "description": "Lightweight quilted puffer jacket in slate grey featuring a stand collar, smooth zip-front closure, and heat-retaining insulation.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 84
  },
  {
    "id": "gz-m-jk-02",
    "name": "Gazebo Midnight Black Bomber Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 1999,
    "mrp": 3299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#1A1A1C"
      },
      {
        "name": "Jet Black",
        "hex": "#0F0F10"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/gazebo-midnight-black-bomber-jacket.jpg",
      "secondary": "assets/products/men/jackets/gazebo-midnight-black-bomber-jacket.jpg"
    },
    "tags": [
      "Jackets",
      "Bomber",
      "Midnight Black",
      "Zip-Up",
      "Bestseller",
      "Dark Shades",
      "Minimalist",
      "Outerwear"
    ],
    "primaryImage": "assets/products/men/jackets/gazebo-midnight-black-bomber-jacket.jpg",
    "description": "Minimalist urban bomber jacket in midnight black with ribbed baseball collar, elasticated cuffs, and side zip pockets.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 92
  },
  {
    "id": "gz-m-jk-03",
    "name": "Gazebo Sand Suede Harrington Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 2499,
    "mrp": 3999,
    "badge": null,
    "colors": [
      {
        "name": "Sand Beige",
        "hex": "#CBB79F"
      },
      {
        "name": "Camel Tan",
        "hex": "#B69E81"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/gazebo-sand-suede-harrington-jacket.jpg",
      "secondary": "assets/products/men/jackets/gazebo-sand-suede-harrington-jacket.jpg"
    },
    "tags": [
      "Jackets",
      "Harrington",
      "Suede",
      "Sand Beige",
      "Zip-Up",
      "Neutral Tones",
      "Tailored",
      "Outerwear"
    ],
    "primaryImage": "assets/products/men/jackets/gazebo-sand-suede-harrington-jacket.jpg",
    "description": "Premium faux suede Harrington jacket in warm sand beige featuring a spread collar, silver zip closure, and tailored welt pockets.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 56
  },
  {
    "id": "gz-m-swtr-01",
    "name": "Gazebo Burgundy Relaxed Crew Neck Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 999,
    "mrp": 1599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy",
        "hex": "#5B1D28"
      },
      {
        "name": "Wine Red",
        "hex": "#722533"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/gazebo-burgundy-relaxed-crew-neck-sweater.jpg",
      "secondary": "assets/products/men/sweaters/gazebo-burgundy-relaxed-crew-neck-sweater.jpg"
    },
    "tags": [
      "Sweaters",
      "Crew Neck",
      "Burgundy",
      "Relaxed Fit",
      "Knit",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/sweaters/gazebo-burgundy-relaxed-crew-neck-sweater.jpg",
    "description": "Relaxed-fit crew neck sweater knitted from soft combed cotton blend in rich burgundy wine, featuring ribbed collar, cuffs, and hem.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 76
  },
  {
    "id": "gz-m-swtr-02",
    "name": "Gazebo Cable Knit Forest Green Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 1299,
    "mrp": 2199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#1E3B2B"
      },
      {
        "name": "Pine Green",
        "hex": "#142B1F"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/gazebo-cable-knit-forest-green-sweater.jpg",
      "secondary": "assets/products/men/sweaters/gazebo-cable-knit-forest-green-sweater.jpg"
    },
    "tags": [
      "Sweaters",
      "Cable Knit",
      "Crew Neck",
      "Forest Green",
      "Textured",
      "Bestseller",
      "Under ₹1,499",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/sweaters/gazebo-cable-knit-forest-green-sweater.jpg",
    "description": "Classic heavy cable knit sweater in rich forest green with intricate vertical cable patterns and insulating ribbed trims.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 88
  },
  {
    "id": "gz-m-swtr-03",
    "name": "Gazebo Midnight Navy V-Neck Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 1699,
    "mrp": 2799,
    "badge": null,
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#18233C"
      },
      {
        "name": "Deep Indigo",
        "hex": "#111A2E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/gazebo-midnight-navy-v-neck-sweater.jpg",
      "secondary": "assets/products/men/sweaters/gazebo-midnight-navy-v-neck-sweater.jpg"
    },
    "tags": [
      "Sweaters",
      "V-Neck",
      "Midnight Navy",
      "Fine Knit",
      "Tailored",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/sweaters/gazebo-midnight-navy-v-neck-sweater.jpg",
    "description": "Sophisticated fine-gauge V-neck sweater in deep midnight navy, crafted for elegant layering over shirts and tees.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 52
  },
  {
    "id": "gz-m-shrt-01",
    "name": "Gazebo Olive Utility Cargo Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 899,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Olive Green",
        "hex": "#626D4D"
      },
      {
        "name": "Army Green",
        "hex": "#4F593E"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/gazebo-olive-utility-cargo-shorts.jpg",
      "secondary": "assets/products/men/shorts/gazebo-olive-utility-cargo-shorts.jpg"
    },
    "tags": [
      "Shorts",
      "Cargo Utility",
      "Olive Green",
      "Cotton Twill",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499",
      "Relaxed Fit"
    ],
    "primaryImage": "assets/products/men/shorts/gazebo-olive-utility-cargo-shorts.jpg",
    "description": "Durable cotton twill utility cargo shorts in earthy olive green, equipped with deep flap pockets, sturdy belt loops, and relaxed summer silhouette.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 82
  },
  {
    "id": "gz-m-shrt-02",
    "name": "Gazebo Midnight Black Drawstring Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 699,
    "mrp": 1199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#1A1A1C"
      },
      {
        "name": "Pitch Black",
        "hex": "#101011"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/gazebo-midnight-black-drawstring-shorts.jpg",
      "secondary": "assets/products/men/shorts/gazebo-midnight-black-drawstring-shorts.jpg"
    },
    "tags": [
      "Shorts",
      "Drawstring",
      "Midnight Black",
      "Relaxed Fit",
      "Bestseller",
      "Under ₹999",
      "Under ₹1,499",
      "Dark Shades"
    ],
    "primaryImage": "assets/products/men/shorts/gazebo-midnight-black-drawstring-shorts.jpg",
    "description": "Essential relaxed drawstring shorts in deep midnight black, featuring an elastic waistband with adjustable cords and breathable cotton weave.",
    "category": "men",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 94
  },
  {
    "id": "gz-m-shrt-03",
    "name": "Gazebo Tailored Khaki Chino Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 1099,
    "mrp": 1799,
    "badge": null,
    "colors": [
      {
        "name": "Tailored Khaki",
        "hex": "#CBB89D"
      },
      {
        "name": "Sand Dune",
        "hex": "#DFD3BF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/gazebo-tailored-khaki-chino-shorts.jpg",
      "secondary": "assets/products/men/shorts/gazebo-tailored-khaki-chino-shorts.jpg"
    },
    "tags": [
      "Shorts",
      "Chino",
      "Tailored",
      "Khaki",
      "Under ₹1,499",
      "Neutral Tones"
    ],
    "primaryImage": "assets/products/men/shorts/gazebo-tailored-khaki-chino-shorts.jpg",
    "description": "Smart tailored chino shorts in classic khaki cotton blend, cut with clean flat front, slanted side pockets, and neat button closure.",
    "category": "men",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 58
  },
  {
    "id": "gz-w-co-01",
    "name": "Gazebo Sage Green Linen Co-ord Set",
    "section": "women",
    "subCategory": "co-ords",
    "category": "womens",
    "gender": ["women"],
    "price": 1299,
    "mrp": 2099,
    "originalPrice": 2099,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8FA89B"
      },
      {
        "name": "Mint Slate",
        "hex": "#7B9487"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/gazebo-sage-green-linen-coord-set.jpg",
      "secondary": "assets/products/women/co-ords/gazebo-sage-green-linen-coord-set.jpg"
    },
    "tags": [
      "Co-ords",
      "Co-ord Set",
      "Linen Blend",
      "Matching Sets",
      "Relaxed Fit",
      "Sage Green",
      "Bestseller",
      "Under ₹1,499",
      "Neutral Tones"
    ],
    "primaryImage": "assets/products/women/co-ords/gazebo-sage-green-linen-coord-set.jpg",
    "secondaryImage": "assets/products/women/co-ords/gazebo-sage-green-linen-coord-set.jpg",
    "description": "Relaxed European linen button-down shirt paired with tailored straight-leg trousers in earthy sage green.",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.9,
    "reviewsCount": 86
  },
  {
    "id": "gz-w-co-02",
    "name": "Gazebo Oatmeal Beige Linen Co-ord Set",
    "section": "women",
    "subCategory": "co-ords",
    "category": "womens",
    "gender": ["women"],
    "price": 1499,
    "mrp": 2499,
    "originalPrice": 2499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Oatmeal Beige",
        "hex": "#D9CFBE"
      },
      {
        "name": "Sand Dune",
        "hex": "#C8BDA9"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/gazebo-oatmeal-beige-linen-coord-set.jpg",
      "secondary": "assets/products/women/co-ords/gazebo-oatmeal-beige-linen-coord-set.jpg"
    },
    "tags": [
      "Co-ords",
      "Co-ord Set",
      "Linen Blend",
      "Matching Sets",
      "Relaxed Fit",
      "Oatmeal Beige",
      "Bestseller",
      "Under ₹1,499",
      "Neutral Tones"
    ],
    "primaryImage": "assets/products/women/co-ords/gazebo-oatmeal-beige-linen-coord-set.jpg",
    "secondaryImage": "assets/products/women/co-ords/gazebo-oatmeal-beige-linen-coord-set.jpg",
    "description": "Breezy natural flax linen shirt and matching straight trousers in warm oatmeal beige for effortless resort elegance.",
    "isBestseller": true,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 78
  },
  {
    "id": "gz-w-co-03",
    "name": "Gazebo Midnight Black Tailored Co-ord Set",
    "section": "women",
    "subCategory": "co-ords",
    "category": "womens",
    "gender": ["women"],
    "price": 1699,
    "mrp": 2699,
    "originalPrice": 2699,
    "badge": null,
    "colors": [
      {
        "name": "Midnight Black",
        "hex": "#18181A"
      },
      {
        "name": "Charcoal Black",
        "hex": "#28282B"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/gazebo-midnight-black-tailored-coord-set.jpg",
      "secondary": "assets/products/women/co-ords/gazebo-midnight-black-tailored-coord-set.jpg"
    },
    "tags": [
      "Co-ords",
      "Co-ord Set",
      "Matching Sets",
      "Tailored",
      "Minimalist",
      "Midnight Black",
      "Dark Shades",
      "Crepe"
    ],
    "primaryImage": "assets/products/women/co-ords/gazebo-midnight-black-tailored-coord-set.jpg",
    "secondaryImage": "assets/products/women/co-ords/gazebo-midnight-black-tailored-coord-set.jpg",
    "description": "Chic minimalist short-sleeve top with center seam detailing and pleated front trousers in deep midnight black.",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.7,
    "reviewsCount": 64
  },
  {
    "id": "gz-w-co-04",
    "name": "Gazebo Sky Blue Resort Linen Co-ord Set",
    "section": "women",
    "subCategory": "co-ords",
    "category": "womens",
    "gender": ["women"],
    "price": 999,
    "mrp": 1599,
    "originalPrice": 1599,
    "badge": null,
    "colors": [
      {
        "name": "Sky Blue",
        "hex": "#9DC0E2"
      },
      {
        "name": "Powder Blue",
        "hex": "#B8D4EF"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/gazebo-sky-blue-resort-coord-set.jpg",
      "secondary": "assets/products/women/co-ords/gazebo-sky-blue-resort-coord-set.jpg"
    },
    "tags": [
      "Co-ords",
      "Co-ord Set",
      "Resort Shirt",
      "Matching Sets",
      "Shorts",
      "Sky Blue",
      "Under ₹999",
      "Under ₹1,499",
      "Relaxed Fit"
    ],
    "primaryImage": "assets/products/women/co-ords/gazebo-sky-blue-resort-coord-set.jpg",
    "secondaryImage": "assets/products/women/co-ords/gazebo-sky-blue-resort-coord-set.jpg",
    "description": "Airy short-sleeve collared resort shirt paired with matching high-waisted shorts in refreshing pastel sky blue.",
    "isBestseller": false,
    "isNew": false,
    "rating": 4.8,
    "reviewsCount": 92
  }
];
