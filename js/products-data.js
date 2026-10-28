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
window.getProductById = (id) => GAZEBO_CONFIG.products.find(p => p.id === id);
