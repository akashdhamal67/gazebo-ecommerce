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
    "id": "gz-m-t-sh-01",
    "name": "Textured Flat Knit Polo T-Shirt",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 699,
    "mrp": 1099,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/t-shirts/textured-flat-knit-polo-t-shirt-1.webp",
      "secondary": "assets/products/men/t-shirts/textured-flat-knit-polo-t-shirt-2.webp"
    },
    "tags": [
      "Oversized",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-t-sh-02",
    "name": "Bio-Washed Combed Cotton Crew Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 899,
    "mrp": 1399,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/t-shirts/bio-washed-combed-cotton-crew-tee-1.webp",
      "secondary": "assets/products/men/t-shirts/bio-washed-combed-cotton-crew-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Slim Fit"
    ]
  },
  {
    "id": "gz-m-t-sh-03",
    "name": "Ribbed Collar Minimalist T-Shirt",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/ribbed-collar-minimalist-t-shirt-1.webp",
      "secondary": "assets/products/men/t-shirts/ribbed-collar-minimalist-t-shirt-2.webp"
    },
    "tags": [
      "Oversized",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-m-t-sh-04",
    "name": "Double-Mercerized Solid Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/double-mercerized-solid-tee-1.webp",
      "secondary": "assets/products/men/t-shirts/double-mercerized-solid-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Stripes"
    ]
  },
  {
    "id": "gz-m-t-sh-05",
    "name": "Waffle Knit Casual Henley Tee",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/waffle-knit-casual-henley-tee-1.webp",
      "secondary": "assets/products/men/t-shirts/waffle-knit-casual-henley-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-m-t-sh-06",
    "name": "Slub Yarn Everyday Crew T-Shirt",
    "section": "men",
    "subCategory": "t-shirts",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/t-shirts/slub-yarn-everyday-crew-t-shirt-1.webp",
      "secondary": "assets/products/men/t-shirts/slub-yarn-everyday-crew-t-shirt-2.webp"
    },
    "tags": [
      "Oversized",
      "Blue"
    ]
  },
  {
    "id": "gz-m-over-01",
    "name": "Heavyweight 280 GSM Boxy Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 999,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/oversized-tees/heavyweight-280-gsm-boxy-tee-1.webp",
      "secondary": "assets/products/men/oversized-tees/heavyweight-280-gsm-boxy-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-m-over-02",
    "name": "Acid Washed Drop-Shoulder Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 1299,
    "mrp": 1999,
    "badge": "New",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/acid-washed-drop-shoulder-tee-1.webp",
      "secondary": "assets/products/men/oversized-tees/acid-washed-drop-shoulder-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Textured"
    ]
  },
  {
    "id": "gz-m-over-03",
    "name": "Distressed Hem Streetwear Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/distressed-hem-streetwear-tee-1.webp",
      "secondary": "assets/products/men/oversized-tees/distressed-hem-streetwear-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-m-over-04",
    "name": "Vintage Typography Oversized Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/vintage-typography-oversized-tee-1.webp",
      "secondary": "assets/products/men/oversized-tees/vintage-typography-oversized-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Green"
    ]
  },
  {
    "id": "gz-m-over-05",
    "name": "Raw Edge Architectural Drop Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/oversized-tees/raw-edge-architectural-drop-tee-1.webp",
      "secondary": "assets/products/men/oversized-tees/raw-edge-architectural-drop-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-m-over-06",
    "name": "Dense Waffle Boxy Silhouette Tee",
    "section": "men",
    "subCategory": "oversized-tees",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/oversized-tees/dense-waffle-boxy-silhouette-tee-1.webp",
      "secondary": "assets/products/men/oversized-tees/dense-waffle-boxy-silhouette-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-m-polo-01",
    "name": "Structured Flat Knit Stripes Polo",
    "section": "men",
    "subCategory": "polos",
    "price": 1499,
    "mrp": 2299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/structured-flat-knit-stripes-polo-1.webp",
      "secondary": "assets/products/men/polos/structured-flat-knit-stripes-polo-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Slim Fit"
    ]
  },
  {
    "id": "gz-m-polo-02",
    "name": "French Ribbed Zip Collar Polo",
    "section": "men",
    "subCategory": "polos",
    "price": 1699,
    "mrp": 2599,
    "badge": "New",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/french-ribbed-zip-collar-polo-1.webp",
      "secondary": "assets/products/men/polos/french-ribbed-zip-collar-polo-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-polo-03",
    "name": "Pure Pima Cotton Classic Polo",
    "section": "men",
    "subCategory": "polos",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/pure-pima-cotton-classic-polo-1.webp",
      "secondary": "assets/products/men/polos/pure-pima-cotton-classic-polo-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Stripes"
    ]
  },
  {
    "id": "gz-m-polo-04",
    "name": "Contrast Tipped Collar Polo",
    "section": "men",
    "subCategory": "polos",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/polos/contrast-tipped-collar-polo-1.webp",
      "secondary": "assets/products/men/polos/contrast-tipped-collar-polo-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-polo-05",
    "name": "Open-Collar Resort Knit Polo",
    "section": "men",
    "subCategory": "polos",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/polos/open-collar-resort-knit-polo-1.webp",
      "secondary": "assets/products/men/polos/open-collar-resort-knit-polo-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Green"
    ]
  },
  {
    "id": "gz-m-polo-06",
    "name": "Textured Geometric Weave Polo",
    "section": "men",
    "subCategory": "polos",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/polos/textured-geometric-weave-polo-1.webp",
      "secondary": "assets/products/men/polos/textured-geometric-weave-polo-2.webp"
    },
    "tags": [
      "Regular Fit",
      "White"
    ]
  },
  {
    "id": "gz-m-hood-01",
    "name": "Brushed Fleece Heavyweight Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 1899,
    "mrp": 2899,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/brushed-fleece-heavyweight-hoodie-1.webp",
      "secondary": "assets/products/men/hoodies/brushed-fleece-heavyweight-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-hood-02",
    "name": "French Terry Washed Boxy Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 2199,
    "mrp": 3299,
    "badge": "New",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/french-terry-washed-boxy-hoodie-1.webp",
      "secondary": "assets/products/men/hoodies/french-terry-washed-boxy-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-m-hood-03",
    "name": "Raglan Sleeve Oversized Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/raglan-sleeve-oversized-hoodie-1.webp",
      "secondary": "assets/products/men/hoodies/raglan-sleeve-oversized-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-m-hood-04",
    "name": "Garment Dyed Raw Seam Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/hoodies/garment-dyed-raw-seam-hoodie-1.webp",
      "secondary": "assets/products/men/hoodies/garment-dyed-raw-seam-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Green"
    ]
  },
  {
    "id": "gz-m-hood-05",
    "name": "Thermal Lined Streetwear Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/hoodies/thermal-lined-streetwear-hoodie-1.webp",
      "secondary": "assets/products/men/hoodies/thermal-lined-streetwear-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Blue"
    ]
  },
  {
    "id": "gz-m-hood-06",
    "name": "Minimalist Minimal-Stitch Hoodie",
    "section": "men",
    "subCategory": "hoodies",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/hoodies/minimalist-minimal-stitch-hoodie-1.webp",
      "secondary": "assets/products/men/hoodies/minimalist-minimal-stitch-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-swea-01",
    "name": "Relaxed Drop-Shoulder Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 2499,
    "mrp": 3799,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/relaxed-drop-shoulder-sweatshirt-1.webp",
      "secondary": "assets/products/men/sweatshirts/relaxed-drop-shoulder-sweatshirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-swea-02",
    "name": "Dense Loopback Cotton Crewneck",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 2799,
    "mrp": 4199,
    "badge": "New",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/dense-loopback-cotton-crewneck-1.webp",
      "secondary": "assets/products/men/sweatshirts/dense-loopback-cotton-crewneck-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-swea-03",
    "name": "Pigment Washed Casual Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/sweatshirts/pigment-washed-casual-sweatshirt-1.webp",
      "secondary": "assets/products/men/sweatshirts/pigment-washed-casual-sweatshirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-swea-04",
    "name": "Ribbed Hem Heritage Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/sweatshirts/ribbed-hem-heritage-sweatshirt-1.webp",
      "secondary": "assets/products/men/sweatshirts/ribbed-hem-heritage-sweatshirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "White"
    ]
  },
  {
    "id": "gz-m-swea-05",
    "name": "Oversized Diagonal French Terry Crew",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/oversized-diagonal-french-terry-crew-1.webp",
      "secondary": "assets/products/men/sweatshirts/oversized-diagonal-french-terry-crew-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-swea-06",
    "name": "Washed Charcoal Minimal Sweatshirt",
    "section": "men",
    "subCategory": "sweatshirts",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweatshirts/washed-charcoal-minimal-sweatshirt-1.webp",
      "secondary": "assets/products/men/sweatshirts/washed-charcoal-minimal-sweatshirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-shir-01",
    "name": "Poplin Spread Collar Formal Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 2999,
    "mrp": 4499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/poplin-spread-collar-formal-shirt-1.webp",
      "secondary": "assets/products/men/shirts/poplin-spread-collar-formal-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Slim Fit"
    ]
  },
  {
    "id": "gz-m-shir-02",
    "name": "Textured Oxford Cotton Button-Down",
    "section": "men",
    "subCategory": "shirts",
    "price": 699,
    "mrp": 1099,
    "badge": "New",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/shirts/textured-oxford-cotton-button-down-1.webp",
      "secondary": "assets/products/men/shirts/textured-oxford-cotton-button-down-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Stripes"
    ]
  },
  {
    "id": "gz-m-shir-03",
    "name": "Cuban Camp Collar Casual Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/shirts/cuban-camp-collar-casual-shirt-1.webp",
      "secondary": "assets/products/men/shirts/cuban-camp-collar-casual-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-shir-04",
    "name": "Fine Corduroy Overshirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/fine-corduroy-overshirt-1.webp",
      "secondary": "assets/products/men/shirts/fine-corduroy-overshirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "White"
    ]
  },
  {
    "id": "gz-m-shir-05",
    "name": "Tailored Flannel Plaid Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/tailored-flannel-plaid-shirt-1.webp",
      "secondary": "assets/products/men/shirts/tailored-flannel-plaid-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-shir-06",
    "name": "Minimalist Mandarin Collar Shirt",
    "section": "men",
    "subCategory": "shirts",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shirts/minimalist-mandarin-collar-shirt-1.webp",
      "secondary": "assets/products/men/shirts/minimalist-mandarin-collar-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-line-01",
    "name": "Pure French Linen Camp Collar Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 899,
    "mrp": 1399,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/linen-shirts/pure-french-linen-camp-collar-shirt-1.webp",
      "secondary": "assets/products/men/linen-shirts/pure-french-linen-camp-collar-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-line-02",
    "name": "Relaxed Breezy Linen Overshirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 999,
    "mrp": 1499,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/linen-shirts/relaxed-breezy-linen-overshirt-1.webp",
      "secondary": "assets/products/men/linen-shirts/relaxed-breezy-linen-overshirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-line-03",
    "name": "Textured Slub Linen Button-Down",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/textured-slub-linen-button-down-1.webp",
      "secondary": "assets/products/men/linen-shirts/textured-slub-linen-button-down-2.webp"
    },
    "tags": [
      "Regular Fit",
      "White"
    ]
  },
  {
    "id": "gz-m-line-04",
    "name": "Mandarin Band Collar Linen Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/mandarin-band-collar-linen-shirt-1.webp",
      "secondary": "assets/products/men/linen-shirts/mandarin-band-collar-linen-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Green"
    ]
  },
  {
    "id": "gz-m-line-05",
    "name": "Garment-Washed Pure Linen Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/garment-washed-pure-linen-shirt-1.webp",
      "secondary": "assets/products/men/linen-shirts/garment-washed-pure-linen-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-line-06",
    "name": "Striped Coastal Linen Casual Shirt",
    "section": "men",
    "subCategory": "linen-shirts",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/linen-shirts/striped-coastal-linen-casual-shirt-1.webp",
      "secondary": "assets/products/men/linen-shirts/striped-coastal-linen-casual-shirt-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-jean-01",
    "name": "Straight-Leg Selvedge Indigo Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 1299,
    "mrp": 1999,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/jeans/straight-leg-selvedge-indigo-jeans-1.webp",
      "secondary": "assets/products/men/jeans/straight-leg-selvedge-indigo-jeans-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Slim Fit"
    ]
  },
  {
    "id": "gz-m-jean-02",
    "name": "Flared Retro Light-Wash Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 1499,
    "mrp": 2299,
    "badge": "New",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/flared-retro-light-wash-jeans-1.webp",
      "secondary": "assets/products/men/jeans/flared-retro-light-wash-jeans-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-jean-03",
    "name": "Washed Baggy Relaxed Denim",
    "section": "men",
    "subCategory": "jeans",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/washed-baggy-relaxed-denim-1.webp",
      "secondary": "assets/products/men/jeans/washed-baggy-relaxed-denim-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-jean-04",
    "name": "Vintage Faded Black Denim",
    "section": "men",
    "subCategory": "jeans",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/vintage-faded-black-denim-1.webp",
      "secondary": "assets/products/men/jeans/vintage-faded-black-denim-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-jean-05",
    "name": "Clean Tapered Raw Denim Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jeans/clean-tapered-raw-denim-jeans-1.webp",
      "secondary": "assets/products/men/jeans/clean-tapered-raw-denim-jeans-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Slim Fit"
    ]
  },
  {
    "id": "gz-m-jean-06",
    "name": "Carpenter Seam Relaxed Jeans",
    "section": "men",
    "subCategory": "jeans",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/jeans/carpenter-seam-relaxed-jeans-1.webp",
      "secondary": "assets/products/men/jeans/carpenter-seam-relaxed-jeans-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-carg-01",
    "name": "Tactical Multi-Pocket Cargo Pants",
    "section": "men",
    "subCategory": "cargos",
    "price": 1699,
    "mrp": 2599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/tactical-multi-pocket-cargo-pants-1.webp",
      "secondary": "assets/products/men/cargos/tactical-multi-pocket-cargo-pants-2.webp"
    },
    "tags": [
      "Oversized",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-carg-02",
    "name": "Relaxed Drawstring Cotton Cargos",
    "section": "men",
    "subCategory": "cargos",
    "price": 1899,
    "mrp": 2899,
    "badge": "New",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/relaxed-drawstring-cotton-cargos-1.webp",
      "secondary": "assets/products/men/cargos/relaxed-drawstring-cotton-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "Green"
    ]
  },
  {
    "id": "gz-m-carg-03",
    "name": "Pleated Wide-Leg Utilitarian Cargos",
    "section": "men",
    "subCategory": "cargos",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/pleated-wide-leg-utilitarian-cargos-1.webp",
      "secondary": "assets/products/men/cargos/pleated-wide-leg-utilitarian-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-m-carg-04",
    "name": "Heavy Twill Parachute Cargo Pants",
    "section": "men",
    "subCategory": "cargos",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/cargos/heavy-twill-parachute-cargo-pants-1.webp",
      "secondary": "assets/products/men/cargos/heavy-twill-parachute-cargo-pants-2.webp"
    },
    "tags": [
      "Oversized",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-carg-05",
    "name": "Tapered Cuff Modular Cargos",
    "section": "men",
    "subCategory": "cargos",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/cargos/tapered-cuff-modular-cargos-1.webp",
      "secondary": "assets/products/men/cargos/tapered-cuff-modular-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "Green"
    ]
  },
  {
    "id": "gz-m-carg-06",
    "name": "Washed Olive Ripstop Cargo Trousers",
    "section": "men",
    "subCategory": "cargos",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/cargos/washed-olive-ripstop-cargo-trousers-1.webp",
      "secondary": "assets/products/men/cargos/washed-olive-ripstop-cargo-trousers-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-m-trou-01",
    "name": "Pleated Relaxed Tailored Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 2199,
    "mrp": 3299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/pleated-relaxed-tailored-trousers-1.webp",
      "secondary": "assets/products/men/trousers/pleated-relaxed-tailored-trousers-2.webp"
    },
    "tags": [
      "Slim Fit",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-trou-02",
    "name": "Clean Minimalist Ankle Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 2499,
    "mrp": 3799,
    "badge": "New",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/clean-minimalist-ankle-trousers-1.webp",
      "secondary": "assets/products/men/trousers/clean-minimalist-ankle-trousers-2.webp"
    },
    "tags": [
      "Slim Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-trou-03",
    "name": "Fluid Viscose Blend Drape Pants",
    "section": "men",
    "subCategory": "trousers",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/fluid-viscose-blend-drape-pants-1.webp",
      "secondary": "assets/products/men/trousers/fluid-viscose-blend-drape-pants-2.webp"
    },
    "tags": [
      "Slim Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-trou-04",
    "name": "Structured Wool-Touch Straight Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/trousers/structured-wool-touch-straight-trousers-1.webp",
      "secondary": "assets/products/men/trousers/structured-wool-touch-straight-trousers-2.webp"
    },
    "tags": [
      "Slim Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-trou-05",
    "name": "Elasticated Waist Formal Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/trousers/elasticated-waist-formal-trousers-1.webp",
      "secondary": "assets/products/men/trousers/elasticated-waist-formal-trousers-2.webp"
    },
    "tags": [
      "Slim Fit",
      "Regular Fit"
    ]
  },
  {
    "id": "gz-m-trou-06",
    "name": "Herringbone Weave Classic Trousers",
    "section": "men",
    "subCategory": "trousers",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/trousers/herringbone-weave-classic-trousers-1.webp",
      "secondary": "assets/products/men/trousers/herringbone-weave-classic-trousers-2.webp"
    },
    "tags": [
      "Slim Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-jack-01",
    "name": "Varsity Bomber Wool-Blend Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 2799,
    "mrp": 4199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/varsity-bomber-wool-blend-jacket-1.webp",
      "secondary": "assets/products/men/jackets/varsity-bomber-wool-blend-jacket-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-jack-02",
    "name": "Heavy Trucker Washed Denim Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 2999,
    "mrp": 4499,
    "badge": "New",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/heavy-trucker-washed-denim-jacket-1.webp",
      "secondary": "assets/products/men/jackets/heavy-trucker-washed-denim-jacket-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-jack-03",
    "name": "Harrington Minimalist Zip Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/jackets/harrington-minimalist-zip-jacket-1.webp",
      "secondary": "assets/products/men/jackets/harrington-minimalist-zip-jacket-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Green"
    ]
  },
  {
    "id": "gz-m-jack-04",
    "name": "Quilted Overshirt Utility Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/jackets/quilted-overshirt-utility-jacket-1.webp",
      "secondary": "assets/products/men/jackets/quilted-overshirt-utility-jacket-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-jack-05",
    "name": "Boxy Twill Worker Overshirt Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/boxy-twill-worker-overshirt-jacket-1.webp",
      "secondary": "assets/products/men/jackets/boxy-twill-worker-overshirt-jacket-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-jack-06",
    "name": "Padded Shell Minimalist Jacket",
    "section": "men",
    "subCategory": "jackets",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/jackets/padded-shell-minimalist-jacket-1.webp",
      "secondary": "assets/products/men/jackets/padded-shell-minimalist-jacket-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-swea-01",
    "name": "Ribbed Fishermans Wool Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 699,
    "mrp": 1099,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/ribbed-fishermans-wool-sweater-1.webp",
      "secondary": "assets/products/men/sweaters/ribbed-fishermans-wool-sweater-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-swea-02",
    "name": "Chunky Cable Knit Crew Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 899,
    "mrp": 1399,
    "badge": "New",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/sweaters/chunky-cable-knit-crew-sweater-1.webp",
      "secondary": "assets/products/men/sweaters/chunky-cable-knit-crew-sweater-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Stripes"
    ]
  },
  {
    "id": "gz-m-swea-03",
    "name": "Fine Merino Blend Minimal Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/sweaters/fine-merino-blend-minimal-sweater-1.webp",
      "secondary": "assets/products/men/sweaters/fine-merino-blend-minimal-sweater-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-swea-04",
    "name": "Textured Waffle Stitch Knit Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/textured-waffle-stitch-knit-sweater-1.webp",
      "secondary": "assets/products/men/sweaters/textured-waffle-stitch-knit-sweater-2.webp"
    },
    "tags": [
      "Regular Fit",
      "White"
    ]
  },
  {
    "id": "gz-m-swea-05",
    "name": "Brushed Mohair-Touch Stripe Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/brushed-mohair-touch-stripe-sweater-1.webp",
      "secondary": "assets/products/men/sweaters/brushed-mohair-touch-stripe-sweater-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Green"
    ]
  },
  {
    "id": "gz-m-swea-06",
    "name": "Relaxed Drop-Shoulder Knit Sweater",
    "section": "men",
    "subCategory": "sweaters",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/sweaters/relaxed-drop-shoulder-knit-sweater-1.webp",
      "secondary": "assets/products/men/sweaters/relaxed-drop-shoulder-knit-sweater-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Textured"
    ]
  },
  {
    "id": "gz-m-shor-01",
    "name": "Heavy French Terry Lounge Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 999,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/men/shorts/heavy-french-terry-lounge-shorts-1.webp",
      "secondary": "assets/products/men/shorts/heavy-french-terry-lounge-shorts-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-shor-02",
    "name": "Tailored Linen Drawstring Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 1299,
    "mrp": 1999,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/men/shorts/tailored-linen-drawstring-shorts-1.webp",
      "secondary": "assets/products/men/shorts/tailored-linen-drawstring-shorts-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-m-shor-03",
    "name": "Utility Cargo Pocket Cotton Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/utility-cargo-pocket-cotton-shorts-1.webp",
      "secondary": "assets/products/men/shorts/utility-cargo-pocket-cotton-shorts-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Green"
    ]
  },
  {
    "id": "gz-m-shor-04",
    "name": "Pleated Relaxed Everyday Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/pleated-relaxed-everyday-shorts-1.webp",
      "secondary": "assets/products/men/shorts/pleated-relaxed-everyday-shorts-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Blue"
    ]
  },
  {
    "id": "gz-m-shor-05",
    "name": "Washed Denim Raw-Cut Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/washed-denim-raw-cut-shorts-1.webp",
      "secondary": "assets/products/men/shorts/washed-denim-raw-cut-shorts-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Oversized"
    ]
  },
  {
    "id": "gz-m-shor-06",
    "name": "Breezy Seersucker Resort Shorts",
    "section": "men",
    "subCategory": "shorts",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/men/shorts/breezy-seersucker-resort-shorts-1.webp",
      "secondary": "assets/products/men/shorts/breezy-seersucker-resort-shorts-2.webp"
    },
    "tags": [
      "Regular Fit",
      "Black"
    ]
  },
  {
    "id": "gz-w-co-o-01",
    "name": "Pure Linen Camp Shirt & Trouser Set",
    "section": "women",
    "subCategory": "co-ords",
    "price": 699,
    "mrp": 1099,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/co-ords/pure-linen-camp-shirt-trouser-set-1.webp",
      "secondary": "assets/products/women/co-ords/pure-linen-camp-shirt-trouser-set-2.webp"
    },
    "tags": [
      "Linen",
      "Printed"
    ]
  },
  {
    "id": "gz-w-co-o-02",
    "name": "Ribbed Knit Crop Top & Flared Pant Set",
    "section": "women",
    "subCategory": "co-ords",
    "price": 899,
    "mrp": 1399,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/co-ords/ribbed-knit-crop-top-flared-pant-set-1.webp",
      "secondary": "assets/products/women/co-ords/ribbed-knit-crop-top-flared-pant-set-2.webp"
    },
    "tags": [
      "Linen",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-co-o-03",
    "name": "Textured Cotton Blazer & Short Set",
    "section": "women",
    "subCategory": "co-ords",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/textured-cotton-blazer-short-set-1.webp",
      "secondary": "assets/products/women/co-ords/textured-cotton-blazer-short-set-2.webp"
    },
    "tags": [
      "Linen",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-co-o-04",
    "name": "Fluid Printed Resort Co-ord Set",
    "section": "women",
    "subCategory": "co-ords",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/fluid-printed-resort-co-ord-set-1.webp",
      "secondary": "assets/products/women/co-ords/fluid-printed-resort-co-ord-set-2.webp"
    },
    "tags": [
      "Linen",
      "White"
    ]
  },
  {
    "id": "gz-w-co-o-05",
    "name": "Oversized Poplin Shirt & Short Set",
    "section": "women",
    "subCategory": "co-ords",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/oversized-poplin-shirt-short-set-1.webp",
      "secondary": "assets/products/women/co-ords/oversized-poplin-shirt-short-set-2.webp"
    },
    "tags": [
      "Linen",
      "Black"
    ]
  },
  {
    "id": "gz-w-co-o-06",
    "name": "Monochrome Tailored Vest & Trouser Set",
    "section": "women",
    "subCategory": "co-ords",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/co-ords/monochrome-tailored-vest-trouser-set-1.webp",
      "secondary": "assets/products/women/co-ords/monochrome-tailored-vest-trouser-set-2.webp"
    },
    "tags": [
      "Linen",
      "Printed"
    ]
  },
  {
    "id": "gz-w-tops-01",
    "name": "Ribbed Square Neck Fitted Crop Top",
    "section": "women",
    "subCategory": "tops",
    "price": 999,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/tops/ribbed-square-neck-fitted-crop-top-1.webp",
      "secondary": "assets/products/women/tops/ribbed-square-neck-fitted-crop-top-2.webp"
    },
    "tags": [
      "Cropped",
      "Printed"
    ]
  },
  {
    "id": "gz-w-tops-02",
    "name": "Asymmetrical Drape Halter Top",
    "section": "women",
    "subCategory": "tops",
    "price": 1299,
    "mrp": 1999,
    "badge": "New",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/tops/asymmetrical-drape-halter-top-1.webp",
      "secondary": "assets/products/women/tops/asymmetrical-drape-halter-top-2.webp"
    },
    "tags": [
      "Cropped",
      "Floral"
    ]
  },
  {
    "id": "gz-w-tops-03",
    "name": "Textured Knit Sleeveless Tank Top",
    "section": "women",
    "subCategory": "tops",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/tops/textured-knit-sleeveless-tank-top-1.webp",
      "secondary": "assets/products/women/tops/textured-knit-sleeveless-tank-top-2.webp"
    },
    "tags": [
      "Cropped",
      "White"
    ]
  },
  {
    "id": "gz-w-tops-04",
    "name": "Sculpted Sweetheart Neckline Top",
    "section": "women",
    "subCategory": "tops",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/tops/sculpted-sweetheart-neckline-top-1.webp",
      "secondary": "assets/products/women/tops/sculpted-sweetheart-neckline-top-2.webp"
    },
    "tags": [
      "Cropped",
      "Black"
    ]
  },
  {
    "id": "gz-w-tops-05",
    "name": "Gathered Linen Cap Sleeve Top",
    "section": "women",
    "subCategory": "tops",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/tops/gathered-linen-cap-sleeve-top-1.webp",
      "secondary": "assets/products/women/tops/gathered-linen-cap-sleeve-top-2.webp"
    },
    "tags": [
      "Cropped",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-tops-06",
    "name": "Button-Front Minimal Ribbed Top",
    "section": "women",
    "subCategory": "tops",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/tops/button-front-minimal-ribbed-top-1.webp",
      "secondary": "assets/products/women/tops/button-front-minimal-ribbed-top-2.webp"
    },
    "tags": [
      "Cropped",
      "Printed"
    ]
  },
  {
    "id": "gz-w-over-01",
    "name": "Heavyweight Boxy Graphic Tee",
    "section": "women",
    "subCategory": "oversized-tees",
    "price": 1499,
    "mrp": 2299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/oversized-tees/heavyweight-boxy-graphic-tee-1.webp",
      "secondary": "assets/products/women/oversized-tees/heavyweight-boxy-graphic-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Printed"
    ]
  },
  {
    "id": "gz-w-over-02",
    "name": "Vintage Mineral Washed Drop Tee",
    "section": "women",
    "subCategory": "oversized-tees",
    "price": 1699,
    "mrp": 2599,
    "badge": "New",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/oversized-tees/vintage-mineral-washed-drop-tee-1.webp",
      "secondary": "assets/products/women/oversized-tees/vintage-mineral-washed-drop-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-over-03",
    "name": "Botanical Floral Oversized T-Shirt",
    "section": "women",
    "subCategory": "oversized-tees",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/oversized-tees/botanical-floral-oversized-t-shirt-1.webp",
      "secondary": "assets/products/women/oversized-tees/botanical-floral-oversized-t-shirt-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-over-04",
    "name": "Distressed Raw Edge Boyfriend Tee",
    "section": "women",
    "subCategory": "oversized-tees",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/oversized-tees/distressed-raw-edge-boyfriend-tee-1.webp",
      "secondary": "assets/products/women/oversized-tees/distressed-raw-edge-boyfriend-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-over-05",
    "name": "Dense Cotton Minimal Typo Tee",
    "section": "women",
    "subCategory": "oversized-tees",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/oversized-tees/dense-cotton-minimal-typo-tee-1.webp",
      "secondary": "assets/products/women/oversized-tees/dense-cotton-minimal-typo-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Printed"
    ]
  },
  {
    "id": "gz-w-over-06",
    "name": "Acid Washed Slouched Silhouette Tee",
    "section": "women",
    "subCategory": "oversized-tees",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/oversized-tees/acid-washed-slouched-silhouette-tee-1.webp",
      "secondary": "assets/products/women/oversized-tees/acid-washed-slouched-silhouette-tee-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-hood-01",
    "name": "Cropped French Terry Streetwear Hoodie",
    "section": "women",
    "subCategory": "hoodies",
    "price": 1899,
    "mrp": 2899,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/hoodies/cropped-french-terry-streetwear-hoodie-1.webp",
      "secondary": "assets/products/women/hoodies/cropped-french-terry-streetwear-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Cropped"
    ]
  },
  {
    "id": "gz-w-hood-02",
    "name": "Slouched Drop-Shoulder Pastel Hoodie",
    "section": "women",
    "subCategory": "hoodies",
    "price": 2199,
    "mrp": 3299,
    "badge": "New",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/hoodies/slouched-drop-shoulder-pastel-hoodie-1.webp",
      "secondary": "assets/products/women/hoodies/slouched-drop-shoulder-pastel-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-hood-03",
    "name": "Brushed Fleece Relaxed Fit Hoodie",
    "section": "women",
    "subCategory": "hoodies",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/hoodies/brushed-fleece-relaxed-fit-hoodie-1.webp",
      "secondary": "assets/products/women/hoodies/brushed-fleece-relaxed-fit-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-hood-04",
    "name": "Drawstring Hem Boxy Crop Hoodie",
    "section": "women",
    "subCategory": "hoodies",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/hoodies/drawstring-hem-boxy-crop-hoodie-1.webp",
      "secondary": "assets/products/women/hoodies/drawstring-hem-boxy-crop-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-hood-05",
    "name": "Acid Washed Charcoal Cotton Hoodie",
    "section": "women",
    "subCategory": "hoodies",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/hoodies/acid-washed-charcoal-cotton-hoodie-1.webp",
      "secondary": "assets/products/women/hoodies/acid-washed-charcoal-cotton-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Cropped"
    ]
  },
  {
    "id": "gz-w-hood-06",
    "name": "Zip-Up Oversized Minimalist Hoodie",
    "section": "women",
    "subCategory": "hoodies",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/hoodies/zip-up-oversized-minimalist-hoodie-1.webp",
      "secondary": "assets/products/women/hoodies/zip-up-oversized-minimalist-hoodie-2.webp"
    },
    "tags": [
      "Oversized",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-swea-01",
    "name": "Relaxed Slouch Crewneck Sweatshirt",
    "section": "women",
    "subCategory": "sweatshirts",
    "price": 2499,
    "mrp": 3799,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/sweatshirts/relaxed-slouch-crewneck-sweatshirt-1.webp",
      "secondary": "assets/products/women/sweatshirts/relaxed-slouch-crewneck-sweatshirt-2.webp"
    },
    "tags": [
      "Oversized",
      "Cropped"
    ]
  },
  {
    "id": "gz-w-swea-02",
    "name": "Cropped Raw-Hem Cotton Pullover",
    "section": "women",
    "subCategory": "sweatshirts",
    "price": 2799,
    "mrp": 4199,
    "badge": "New",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/sweatshirts/cropped-raw-hem-cotton-pullover-1.webp",
      "secondary": "assets/products/women/sweatshirts/cropped-raw-hem-cotton-pullover-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-swea-03",
    "name": "Vintage Collegiate Print Sweatshirt",
    "section": "women",
    "subCategory": "sweatshirts",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/sweatshirts/vintage-collegiate-print-sweatshirt-1.webp",
      "secondary": "assets/products/women/sweatshirts/vintage-collegiate-print-sweatshirt-2.webp"
    },
    "tags": [
      "Oversized",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-swea-04",
    "name": "French Terry Dropped Shoulder Crew",
    "section": "women",
    "subCategory": "sweatshirts",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/sweatshirts/french-terry-dropped-shoulder-crew-1.webp",
      "secondary": "assets/products/women/sweatshirts/french-terry-dropped-shoulder-crew-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-swea-05",
    "name": "Washed Olive Everyday Sweatshirt",
    "section": "women",
    "subCategory": "sweatshirts",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/sweatshirts/washed-olive-everyday-sweatshirt-1.webp",
      "secondary": "assets/products/women/sweatshirts/washed-olive-everyday-sweatshirt-2.webp"
    },
    "tags": [
      "Oversized",
      "Cropped"
    ]
  },
  {
    "id": "gz-w-swea-06",
    "name": "Soft Brushed Minimalist Sweatshirt",
    "section": "women",
    "subCategory": "sweatshirts",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/sweatshirts/soft-brushed-minimalist-sweatshirt-1.webp",
      "secondary": "assets/products/women/sweatshirts/soft-brushed-minimalist-sweatshirt-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-shir-01",
    "name": "Oversized Crisp Poplin Boyfriend Shirt",
    "section": "women",
    "subCategory": "shirts",
    "price": 2999,
    "mrp": 4499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/shirts/oversized-crisp-poplin-boyfriend-shirt-1.webp",
      "secondary": "assets/products/women/shirts/oversized-crisp-poplin-boyfriend-shirt-2.webp"
    },
    "tags": [
      "Linen",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-shir-02",
    "name": "Textured Cotton Camp Collar Shirt",
    "section": "women",
    "subCategory": "shirts",
    "price": 699,
    "mrp": 1099,
    "badge": "New",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/shirts/textured-cotton-camp-collar-shirt-1.webp",
      "secondary": "assets/products/women/shirts/textured-cotton-camp-collar-shirt-2.webp"
    },
    "tags": [
      "Linen",
      "Printed"
    ]
  },
  {
    "id": "gz-w-shir-03",
    "name": "Striped Relaxed Tailored Shirt",
    "section": "women",
    "subCategory": "shirts",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/shirts/striped-relaxed-tailored-shirt-1.webp",
      "secondary": "assets/products/women/shirts/striped-relaxed-tailored-shirt-2.webp"
    },
    "tags": [
      "Linen",
      "White"
    ]
  },
  {
    "id": "gz-w-shir-04",
    "name": "Breezy Viscose Fluid Drape Shirt",
    "section": "women",
    "subCategory": "shirts",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/shirts/breezy-viscose-fluid-drape-shirt-1.webp",
      "secondary": "assets/products/women/shirts/breezy-viscose-fluid-drape-shirt-2.webp"
    },
    "tags": [
      "Linen",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-shir-05",
    "name": "Tie-Front Cropped Linen Shirt",
    "section": "women",
    "subCategory": "shirts",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/shirts/tie-front-cropped-linen-shirt-1.webp",
      "secondary": "assets/products/women/shirts/tie-front-cropped-linen-shirt-2.webp"
    },
    "tags": [
      "Linen",
      "Black"
    ]
  },
  {
    "id": "gz-w-shir-06",
    "name": "Pleated Back Modern Minimal Shirt",
    "section": "women",
    "subCategory": "shirts",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/shirts/pleated-back-modern-minimal-shirt-1.webp",
      "secondary": "assets/products/women/shirts/pleated-back-modern-minimal-shirt-2.webp"
    },
    "tags": [
      "Linen",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-dres-01",
    "name": "Tiered Cotton Midi Day Dress",
    "section": "women",
    "subCategory": "dresses",
    "price": 899,
    "mrp": 1399,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/dresses/tiered-cotton-midi-day-dress-1.webp",
      "secondary": "assets/products/women/dresses/tiered-cotton-midi-day-dress-2.webp"
    },
    "tags": [
      "Floral",
      "Printed"
    ]
  },
  {
    "id": "gz-w-dres-02",
    "name": "Fluted Hem Linen Sundress",
    "section": "women",
    "subCategory": "dresses",
    "price": 999,
    "mrp": 1499,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/dresses/fluted-hem-linen-sundress-1.webp",
      "secondary": "assets/products/women/dresses/fluted-hem-linen-sundress-2.webp"
    },
    "tags": [
      "Floral",
      "Linen"
    ]
  },
  {
    "id": "gz-w-dres-03",
    "name": "Ribbed Knit Bodycon Midi Dress",
    "section": "women",
    "subCategory": "dresses",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/dresses/ribbed-knit-bodycon-midi-dress-1.webp",
      "secondary": "assets/products/women/dresses/ribbed-knit-bodycon-midi-dress-2.webp"
    },
    "tags": [
      "Floral",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-dres-04",
    "name": "Puff Sleeve Floral Cottage Dress",
    "section": "women",
    "subCategory": "dresses",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/dresses/puff-sleeve-floral-cottage-dress-1.webp",
      "secondary": "assets/products/women/dresses/puff-sleeve-floral-cottage-dress-2.webp"
    },
    "tags": [
      "Floral",
      "White"
    ]
  },
  {
    "id": "gz-w-dres-05",
    "name": "Pleated Belted Shirt Dress",
    "section": "women",
    "subCategory": "dresses",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/dresses/pleated-belted-shirt-dress-1.webp",
      "secondary": "assets/products/women/dresses/pleated-belted-shirt-dress-2.webp"
    },
    "tags": [
      "Floral",
      "Black"
    ]
  },
  {
    "id": "gz-w-dres-06",
    "name": "Minimalist Straight-Cut Slip Dress",
    "section": "women",
    "subCategory": "dresses",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/dresses/minimalist-straight-cut-slip-dress-1.webp",
      "secondary": "assets/products/women/dresses/minimalist-straight-cut-slip-dress-2.webp"
    },
    "tags": [
      "Floral",
      "Printed"
    ]
  },
  {
    "id": "gz-w-jean-01",
    "name": "High-Waist Wide-Leg Flared Jeans",
    "section": "women",
    "subCategory": "jeans",
    "price": 1299,
    "mrp": 1999,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/jeans/high-waist-wide-leg-flared-jeans-1.webp",
      "secondary": "assets/products/women/jeans/high-waist-wide-leg-flared-jeans-2.webp"
    },
    "tags": [
      "Oversized",
      "Cropped"
    ]
  },
  {
    "id": "gz-w-jean-02",
    "name": "Vintage Relaxed Straight-Leg Denim",
    "section": "women",
    "subCategory": "jeans",
    "price": 1499,
    "mrp": 2299,
    "badge": "New",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jeans/vintage-relaxed-straight-leg-denim-1.webp",
      "secondary": "assets/products/women/jeans/vintage-relaxed-straight-leg-denim-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-jean-03",
    "name": "Curved Balloon Leg Washed Jeans",
    "section": "women",
    "subCategory": "jeans",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jeans/curved-balloon-leg-washed-jeans-1.webp",
      "secondary": "assets/products/women/jeans/curved-balloon-leg-washed-jeans-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-jean-04",
    "name": "90s Baggy Slouched Denim Pants",
    "section": "women",
    "subCategory": "jeans",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jeans/90s-baggy-slouched-denim-pants-1.webp",
      "secondary": "assets/products/women/jeans/90s-baggy-slouched-denim-pants-2.webp"
    },
    "tags": [
      "Oversized",
      "Cropped"
    ]
  },
  {
    "id": "gz-w-jean-05",
    "name": "Raw Hem Ankle Flare Jeans",
    "section": "women",
    "subCategory": "jeans",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jeans/raw-hem-ankle-flare-jeans-1.webp",
      "secondary": "assets/products/women/jeans/raw-hem-ankle-flare-jeans-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-jean-06",
    "name": "Faded Charcoal High-Rise Jeans",
    "section": "women",
    "subCategory": "jeans",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/jeans/faded-charcoal-high-rise-jeans-1.webp",
      "secondary": "assets/products/women/jeans/faded-charcoal-high-rise-jeans-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-wide-01",
    "name": "Pleated Tailored Wide-Leg Trousers",
    "section": "women",
    "subCategory": "wide-leg-pants",
    "price": 1699,
    "mrp": 2599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/wide-leg-pants/pleated-tailored-wide-leg-trousers-1.webp",
      "secondary": "assets/products/women/wide-leg-pants/pleated-tailored-wide-leg-trousers-2.webp"
    },
    "tags": [
      "Linen",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-wide-02",
    "name": "Pure Linen High-Waist Palazzos",
    "section": "women",
    "subCategory": "wide-leg-pants",
    "price": 1899,
    "mrp": 2899,
    "badge": "New",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/wide-leg-pants/pure-linen-high-waist-palazzos-1.webp",
      "secondary": "assets/products/women/wide-leg-pants/pure-linen-high-waist-palazzos-2.webp"
    },
    "tags": [
      "Linen",
      "White"
    ]
  },
  {
    "id": "gz-w-wide-03",
    "name": "Drawstring Viscose Flowy Trousers",
    "section": "women",
    "subCategory": "wide-leg-pants",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/wide-leg-pants/drawstring-viscose-flowy-trousers-1.webp",
      "secondary": "assets/products/women/wide-leg-pants/drawstring-viscose-flowy-trousers-2.webp"
    },
    "tags": [
      "Linen",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-wide-04",
    "name": "Fluid Modal Clean Cut Wide Pants",
    "section": "women",
    "subCategory": "wide-leg-pants",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/wide-leg-pants/fluid-modal-clean-cut-wide-pants-1.webp",
      "secondary": "assets/products/women/wide-leg-pants/fluid-modal-clean-cut-wide-pants-2.webp"
    },
    "tags": [
      "Linen",
      "Black"
    ]
  },
  {
    "id": "gz-w-wide-05",
    "name": "Structured Wool-Touch Wide-Legs",
    "section": "women",
    "subCategory": "wide-leg-pants",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/wide-leg-pants/structured-wool-touch-wide-legs-1.webp",
      "secondary": "assets/products/women/wide-leg-pants/structured-wool-touch-wide-legs-2.webp"
    },
    "tags": [
      "Linen",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-wide-06",
    "name": "Striped Coastal Relaxed Pants",
    "section": "women",
    "subCategory": "wide-leg-pants",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/wide-leg-pants/striped-coastal-relaxed-pants-1.webp",
      "secondary": "assets/products/women/wide-leg-pants/striped-coastal-relaxed-pants-2.webp"
    },
    "tags": [
      "Linen",
      "White"
    ]
  },
  {
    "id": "gz-w-carg-01",
    "name": "Low-Rise Baggy Parachute Cargos",
    "section": "women",
    "subCategory": "cargos",
    "price": 2199,
    "mrp": 3299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/cargos/low-rise-baggy-parachute-cargos-1.webp",
      "secondary": "assets/products/women/cargos/low-rise-baggy-parachute-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-carg-02",
    "name": "High-Waist Tailored Utility Cargos",
    "section": "women",
    "subCategory": "cargos",
    "price": 2499,
    "mrp": 3799,
    "badge": "New",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/cargos/high-waist-tailored-utility-cargos-1.webp",
      "secondary": "assets/products/women/cargos/high-waist-tailored-utility-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-carg-03",
    "name": "Satin Finish Wide-Leg Cargo Pants",
    "section": "women",
    "subCategory": "cargos",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/cargos/satin-finish-wide-leg-cargo-pants-1.webp",
      "secondary": "assets/products/women/cargos/satin-finish-wide-leg-cargo-pants-2.webp"
    },
    "tags": [
      "Oversized",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-carg-04",
    "name": "Drawstring Hem Multi-Pocket Cargos",
    "section": "women",
    "subCategory": "cargos",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/cargos/drawstring-hem-multi-pocket-cargos-1.webp",
      "secondary": "assets/products/women/cargos/drawstring-hem-multi-pocket-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "Black"
    ]
  },
  {
    "id": "gz-w-carg-05",
    "name": "Washed Cotton Casual Street Cargos",
    "section": "women",
    "subCategory": "cargos",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/cargos/washed-cotton-casual-street-cargos-1.webp",
      "secondary": "assets/products/women/cargos/washed-cotton-casual-street-cargos-2.webp"
    },
    "tags": [
      "Oversized",
      "White"
    ]
  },
  {
    "id": "gz-w-carg-06",
    "name": "Twill Cargo Trousers with D-Ring",
    "section": "women",
    "subCategory": "cargos",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/cargos/twill-cargo-trousers-with-d-ring-1.webp",
      "secondary": "assets/products/women/cargos/twill-cargo-trousers-with-d-ring-2.webp"
    },
    "tags": [
      "Oversized",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-jack-01",
    "name": "Cropped Denim Trucker Jacket",
    "section": "women",
    "subCategory": "jackets",
    "price": 2799,
    "mrp": 4199,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jackets/cropped-denim-trucker-jacket-1.webp",
      "secondary": "assets/products/women/jackets/cropped-denim-trucker-jacket-2.webp"
    },
    "tags": [
      "Cropped",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-jack-02",
    "name": "Oversized Tailored Casual Blazer",
    "section": "women",
    "subCategory": "jackets",
    "price": 2999,
    "mrp": 4499,
    "badge": "New",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jackets/oversized-tailored-casual-blazer-1.webp",
      "secondary": "assets/products/women/jackets/oversized-tailored-casual-blazer-2.webp"
    },
    "tags": [
      "Cropped",
      "Black"
    ]
  },
  {
    "id": "gz-w-jack-03",
    "name": "Boxy Faux-Leather Moto Jacket",
    "section": "women",
    "subCategory": "jackets",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/jackets/boxy-faux-leather-moto-jacket-1.webp",
      "secondary": "assets/products/women/jackets/boxy-faux-leather-moto-jacket-2.webp"
    },
    "tags": [
      "Cropped",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-jack-04",
    "name": "Quilted Lightweight Utility Jacket",
    "section": "women",
    "subCategory": "jackets",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/jackets/quilted-lightweight-utility-jacket-1.webp",
      "secondary": "assets/products/women/jackets/quilted-lightweight-utility-jacket-2.webp"
    },
    "tags": [
      "Cropped",
      "Oversized"
    ]
  },
  {
    "id": "gz-w-jack-05",
    "name": "Relaxed Bomber Zip-Up Jacket",
    "section": "women",
    "subCategory": "jackets",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jackets/relaxed-bomber-zip-up-jacket-1.webp",
      "secondary": "assets/products/women/jackets/relaxed-bomber-zip-up-jacket-2.webp"
    },
    "tags": [
      "Cropped",
      "Black"
    ]
  },
  {
    "id": "gz-w-jack-06",
    "name": "Heavy Twill Shacket with Flap Pockets",
    "section": "women",
    "subCategory": "jackets",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/jackets/heavy-twill-shacket-with-flap-pockets-1.webp",
      "secondary": "assets/products/women/jackets/heavy-twill-shacket-with-flap-pockets-2.webp"
    },
    "tags": [
      "Cropped",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-skir-01",
    "name": "A-Line Denim Front-Slit Midi Skirt",
    "section": "women",
    "subCategory": "skirts",
    "price": 699,
    "mrp": 1099,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/skirts/a-line-denim-front-slit-midi-skirt-1.webp",
      "secondary": "assets/products/women/skirts/a-line-denim-front-slit-midi-skirt-2.webp"
    },
    "tags": [
      "Floral",
      "Printed"
    ]
  },
  {
    "id": "gz-w-skir-02",
    "name": "Pleated Flowy Floral Maxi Skirt",
    "section": "women",
    "subCategory": "skirts",
    "price": 899,
    "mrp": 1399,
    "badge": "New",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
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
      "primary": "assets/products/women/skirts/pleated-flowy-floral-maxi-skirt-1.webp",
      "secondary": "assets/products/women/skirts/pleated-flowy-floral-maxi-skirt-2.webp"
    },
    "tags": [
      "Floral",
      "Black"
    ]
  },
  {
    "id": "gz-w-skir-03",
    "name": "Bias Cut Satin Slip Midi Skirt",
    "section": "women",
    "subCategory": "skirts",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
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
      "primary": "assets/products/women/skirts/bias-cut-satin-slip-midi-skirt-1.webp",
      "secondary": "assets/products/women/skirts/bias-cut-satin-slip-midi-skirt-2.webp"
    },
    "tags": [
      "Floral",
      "White"
    ]
  },
  {
    "id": "gz-w-skir-04",
    "name": "Cargo Utility Drawstring Skirt",
    "section": "women",
    "subCategory": "skirts",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/skirts/cargo-utility-drawstring-skirt-1.webp",
      "secondary": "assets/products/women/skirts/cargo-utility-drawstring-skirt-2.webp"
    },
    "tags": [
      "Floral",
      "Pastel"
    ]
  },
  {
    "id": "gz-w-skir-05",
    "name": "Textured Ribbed Knit Column Skirt",
    "section": "women",
    "subCategory": "skirts",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/skirts/textured-ribbed-knit-column-skirt-1.webp",
      "secondary": "assets/products/women/skirts/textured-ribbed-knit-column-skirt-2.webp"
    },
    "tags": [
      "Floral",
      "Printed"
    ]
  },
  {
    "id": "gz-w-skir-06",
    "name": "Tiered Cotton Tiered Day Skirt",
    "section": "women",
    "subCategory": "skirts",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": {
      "primary": "assets/products/women/skirts/tiered-cotton-tiered-day-skirt-1.webp",
      "secondary": "assets/products/women/skirts/tiered-cotton-tiered-day-skirt-2.webp"
    },
    "tags": [
      "Floral",
      "Black"
    ]
  },
  {
    "id": "gz-k-boys-01",
    "name": "Boys Colorblock Graphic T-Shirt",
    "section": "kids",
    "subCategory": "boys",
    "price": 699,
    "mrp": 1099,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/boys/boys-colorblock-graphic-t-shirt-1.webp",
      "secondary": "assets/products/kids/boys/boys-colorblock-graphic-t-shirt-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-boys-02",
    "name": "Boys French Terry Cargo Joggers",
    "section": "kids",
    "subCategory": "boys",
    "price": 899,
    "mrp": 1399,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/boys/boys-french-terry-cargo-joggers-1.webp",
      "secondary": "assets/products/kids/boys/boys-french-terry-cargo-joggers-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-boys-03",
    "name": "Boys Plaid Flannel Hooded Shirt",
    "section": "kids",
    "subCategory": "boys",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/boys/boys-plaid-flannel-hooded-shirt-1.webp",
      "secondary": "assets/products/kids/boys/boys-plaid-flannel-hooded-shirt-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-boys-04",
    "name": "Boys Washed Denim Stretch Jeans",
    "section": "kids",
    "subCategory": "boys",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/boys/boys-washed-denim-stretch-jeans-1.webp",
      "secondary": "assets/products/kids/boys/boys-washed-denim-stretch-jeans-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-boys-05",
    "name": "Boys Varsity Letterman Jacket",
    "section": "kids",
    "subCategory": "boys",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/boys/boys-varsity-letterman-jacket-1.webp",
      "secondary": "assets/products/kids/boys/boys-varsity-letterman-jacket-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-boys-06",
    "name": "Boys Striped Pocket Casual Polo",
    "section": "kids",
    "subCategory": "boys",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/boys/boys-striped-pocket-casual-polo-1.webp",
      "secondary": "assets/products/kids/boys/boys-striped-pocket-casual-polo-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-girl-01",
    "name": "Girls Floral Cotton Tiered Dress",
    "section": "kids",
    "subCategory": "girls",
    "price": 999,
    "mrp": 1499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/girls/girls-floral-cotton-tiered-dress-1.webp",
      "secondary": "assets/products/kids/girls/girls-floral-cotton-tiered-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-girl-02",
    "name": "Girls Ruffle Sleeve Ribbed Top",
    "section": "kids",
    "subCategory": "girls",
    "price": 1299,
    "mrp": 1999,
    "badge": "New",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/girls/girls-ruffle-sleeve-ribbed-top-1.webp",
      "secondary": "assets/products/kids/girls/girls-ruffle-sleeve-ribbed-top-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-girl-03",
    "name": "Girls Pastel Embroidered Sweatshirt",
    "section": "kids",
    "subCategory": "girls",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/girls/girls-pastel-embroidered-sweatshirt-1.webp",
      "secondary": "assets/products/kids/girls/girls-pastel-embroidered-sweatshirt-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-girl-04",
    "name": "Girls Wide-Leg Denim Paperbag Jeans",
    "section": "kids",
    "subCategory": "girls",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/girls/girls-wide-leg-denim-paperbag-jeans-1.webp",
      "secondary": "assets/products/kids/girls/girls-wide-leg-denim-paperbag-jeans-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-girl-05",
    "name": "Girls Corduroy Pinafore Dress",
    "section": "kids",
    "subCategory": "girls",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/girls/girls-corduroy-pinafore-dress-1.webp",
      "secondary": "assets/products/kids/girls/girls-corduroy-pinafore-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-girl-06",
    "name": "Girls Soft Knit Cardigan Sweater",
    "section": "kids",
    "subCategory": "girls",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/girls/girls-soft-knit-cardigan-sweater-1.webp",
      "secondary": "assets/products/kids/girls/girls-soft-knit-cardigan-sweater-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-t-sh-01",
    "name": "Kids Dinosaur Graphic Cotton Tee",
    "section": "kids",
    "subCategory": "t-shirts",
    "price": 1499,
    "mrp": 2299,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/t-shirts/kids-dinosaur-graphic-cotton-tee-1.webp",
      "secondary": "assets/products/kids/t-shirts/kids-dinosaur-graphic-cotton-tee-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-t-sh-02",
    "name": "Kids Pocket Striped Everyday Tee",
    "section": "kids",
    "subCategory": "t-shirts",
    "price": 1699,
    "mrp": 2599,
    "badge": "New",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/t-shirts/kids-pocket-striped-everyday-tee-1.webp",
      "secondary": "assets/products/kids/t-shirts/kids-pocket-striped-everyday-tee-2.webp"
    },
    "tags": [
      "Cotton",
      "Oversized"
    ]
  },
  {
    "id": "gz-k-t-sh-03",
    "name": "Kids Sun & Waves Typography Tee",
    "section": "kids",
    "subCategory": "t-shirts",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/t-shirts/kids-sun-waves-typography-tee-1.webp",
      "secondary": "assets/products/kids/t-shirts/kids-sun-waves-typography-tee-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-t-sh-04",
    "name": "Kids Bio-Washed Solid Pastel Tee",
    "section": "kids",
    "subCategory": "t-shirts",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/t-shirts/kids-bio-washed-solid-pastel-tee-1.webp",
      "secondary": "assets/products/kids/t-shirts/kids-bio-washed-solid-pastel-tee-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-t-sh-05",
    "name": "Kids Skate Culture Drop-Shoulder Tee",
    "section": "kids",
    "subCategory": "t-shirts",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/t-shirts/kids-skate-culture-drop-shoulder-tee-1.webp",
      "secondary": "assets/products/kids/t-shirts/kids-skate-culture-drop-shoulder-tee-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-t-sh-06",
    "name": "Kids Organic Cotton Crew T-Shirt",
    "section": "kids",
    "subCategory": "t-shirts",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/t-shirts/kids-organic-cotton-crew-t-shirt-1.webp",
      "secondary": "assets/products/kids/t-shirts/kids-organic-cotton-crew-t-shirt-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-hood-01",
    "name": "Kids Kangaroo Pocket Fleece Hoodie",
    "section": "kids",
    "subCategory": "hoodies",
    "price": 1899,
    "mrp": 2899,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/hoodies/kids-kangaroo-pocket-fleece-hoodie-1.webp",
      "secondary": "assets/products/kids/hoodies/kids-kangaroo-pocket-fleece-hoodie-2.webp"
    },
    "tags": [
      "Cotton",
      "Oversized"
    ]
  },
  {
    "id": "gz-k-hood-02",
    "name": "Kids Colorblock Pullover Hoodie",
    "section": "kids",
    "subCategory": "hoodies",
    "price": 2199,
    "mrp": 3299,
    "badge": "New",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/hoodies/kids-colorblock-pullover-hoodie-1.webp",
      "secondary": "assets/products/kids/hoodies/kids-colorblock-pullover-hoodie-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-hood-03",
    "name": "Kids Animal Ear Hooded Sweatshirt",
    "section": "kids",
    "subCategory": "hoodies",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/hoodies/kids-animal-ear-hooded-sweatshirt-1.webp",
      "secondary": "assets/products/kids/hoodies/kids-animal-ear-hooded-sweatshirt-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-hood-04",
    "name": "Kids Slouched French Terry Hoodie",
    "section": "kids",
    "subCategory": "hoodies",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/hoodies/kids-slouched-french-terry-hoodie-1.webp",
      "secondary": "assets/products/kids/hoodies/kids-slouched-french-terry-hoodie-2.webp"
    },
    "tags": [
      "Cotton",
      "Oversized"
    ]
  },
  {
    "id": "gz-k-hood-05",
    "name": "Kids Zip-Up Hooded Track Jacket",
    "section": "kids",
    "subCategory": "hoodies",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/hoodies/kids-zip-up-hooded-track-jacket-1.webp",
      "secondary": "assets/products/kids/hoodies/kids-zip-up-hooded-track-jacket-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-hood-06",
    "name": "Kids Mountain Trail Printed Hoodie",
    "section": "kids",
    "subCategory": "hoodies",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/hoodies/kids-mountain-trail-printed-hoodie-1.webp",
      "secondary": "assets/products/kids/hoodies/kids-mountain-trail-printed-hoodie-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-sets-01",
    "name": "Kids Two-Piece Waffle Lounge Set",
    "section": "kids",
    "subCategory": "sets",
    "price": 2499,
    "mrp": 3799,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/sets/kids-two-piece-waffle-lounge-set-1.webp",
      "secondary": "assets/products/kids/sets/kids-two-piece-waffle-lounge-set-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-sets-02",
    "name": "Kids Cotton Tee & Cargo Short Set",
    "section": "kids",
    "subCategory": "sets",
    "price": 2799,
    "mrp": 4199,
    "badge": "New",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/sets/kids-cotton-tee-cargo-short-set-1.webp",
      "secondary": "assets/products/kids/sets/kids-cotton-tee-cargo-short-set-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-sets-03",
    "name": "Kids Fleece Sweatshirt & Jogger Set",
    "section": "kids",
    "subCategory": "sets",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/sets/kids-fleece-sweatshirt-jogger-set-1.webp",
      "secondary": "assets/products/kids/sets/kids-fleece-sweatshirt-jogger-set-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-sets-04",
    "name": "Kids Denim Shirt & Chino Pants Set",
    "section": "kids",
    "subCategory": "sets",
    "price": 699,
    "mrp": 1099,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/sets/kids-denim-shirt-chino-pants-set-1.webp",
      "secondary": "assets/products/kids/sets/kids-denim-shirt-chino-pants-set-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-sets-05",
    "name": "Kids Terry Zip Hoodie & Short Set",
    "section": "kids",
    "subCategory": "sets",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/sets/kids-terry-zip-hoodie-short-set-1.webp",
      "secondary": "assets/products/kids/sets/kids-terry-zip-hoodie-short-set-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-sets-06",
    "name": "Kids Coordinated Weekend Tracksuit",
    "section": "kids",
    "subCategory": "sets",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/sets/kids-coordinated-weekend-tracksuit-1.webp",
      "secondary": "assets/products/kids/sets/kids-coordinated-weekend-tracksuit-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-jean-01",
    "name": "Kids Elastic Waist Comfort Jeans",
    "section": "kids",
    "subCategory": "jeans",
    "price": 2999,
    "mrp": 4499,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jeans/kids-elastic-waist-comfort-jeans-1.webp",
      "secondary": "assets/products/kids/jeans/kids-elastic-waist-comfort-jeans-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jean-02",
    "name": "Kids Relaxed Fit Light-Wash Denim",
    "section": "kids",
    "subCategory": "jeans",
    "price": 699,
    "mrp": 1099,
    "badge": "New",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jeans/kids-relaxed-fit-light-wash-denim-1.webp",
      "secondary": "assets/products/kids/jeans/kids-relaxed-fit-light-wash-denim-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-jean-03",
    "name": "Kids Distressed Vintage Denim Pants",
    "section": "kids",
    "subCategory": "jeans",
    "price": 899,
    "mrp": 1399,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jeans/kids-distressed-vintage-denim-pants-1.webp",
      "secondary": "assets/products/kids/jeans/kids-distressed-vintage-denim-pants-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jean-04",
    "name": "Kids Cargo Pocket Stretch Jeans",
    "section": "kids",
    "subCategory": "jeans",
    "price": 999,
    "mrp": 1499,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jeans/kids-cargo-pocket-stretch-jeans-1.webp",
      "secondary": "assets/products/kids/jeans/kids-cargo-pocket-stretch-jeans-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-jean-05",
    "name": "Kids Paperbag Waist Denim Trousers",
    "section": "kids",
    "subCategory": "jeans",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jeans/kids-paperbag-waist-denim-trousers-1.webp",
      "secondary": "assets/products/kids/jeans/kids-paperbag-waist-denim-trousers-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jean-06",
    "name": "Kids Classic Straight Blue Jeans",
    "section": "kids",
    "subCategory": "jeans",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jeans/kids-classic-straight-blue-jeans-1.webp",
      "secondary": "assets/products/kids/jeans/kids-classic-straight-blue-jeans-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-carg-01",
    "name": "Kids Heavy Twill Multi-Pocket Cargos",
    "section": "kids",
    "subCategory": "cargos",
    "price": 899,
    "mrp": 1399,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/cargos/kids-heavy-twill-multi-pocket-cargos-1.webp",
      "secondary": "assets/products/kids/cargos/kids-heavy-twill-multi-pocket-cargos-2.webp"
    },
    "tags": [
      "Cotton",
      "Oversized"
    ]
  },
  {
    "id": "gz-k-carg-02",
    "name": "Kids Drawstring Cuffed Cargo Joggers",
    "section": "kids",
    "subCategory": "cargos",
    "price": 999,
    "mrp": 1499,
    "badge": "New",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/cargos/kids-drawstring-cuffed-cargo-joggers-1.webp",
      "secondary": "assets/products/kids/cargos/kids-drawstring-cuffed-cargo-joggers-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-carg-03",
    "name": "Kids Ripstop Utility Adventure Pants",
    "section": "kids",
    "subCategory": "cargos",
    "price": 1299,
    "mrp": 1999,
    "badge": null,
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/cargos/kids-ripstop-utility-adventure-pants-1.webp",
      "secondary": "assets/products/kids/cargos/kids-ripstop-utility-adventure-pants-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-carg-04",
    "name": "Kids Soft French Terry Cargo Pants",
    "section": "kids",
    "subCategory": "cargos",
    "price": 1499,
    "mrp": 2299,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/cargos/kids-soft-french-terry-cargo-pants-1.webp",
      "secondary": "assets/products/kids/cargos/kids-soft-french-terry-cargo-pants-2.webp"
    },
    "tags": [
      "Cotton",
      "Oversized"
    ]
  },
  {
    "id": "gz-k-carg-05",
    "name": "Kids Parachute Relaxed Cargo Trousers",
    "section": "kids",
    "subCategory": "cargos",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/cargos/kids-parachute-relaxed-cargo-trousers-1.webp",
      "secondary": "assets/products/kids/cargos/kids-parachute-relaxed-cargo-trousers-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-carg-06",
    "name": "Kids Elasticated Outdoor Cargo Pants",
    "section": "kids",
    "subCategory": "cargos",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/cargos/kids-elasticated-outdoor-cargo-pants-1.webp",
      "secondary": "assets/products/kids/cargos/kids-elasticated-outdoor-cargo-pants-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-dres-01",
    "name": "Kids Puff Sleeve Smocked Floral Dress",
    "section": "kids",
    "subCategory": "dresses",
    "price": 1299,
    "mrp": 1999,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/dresses/kids-puff-sleeve-smocked-floral-dress-1.webp",
      "secondary": "assets/products/kids/dresses/kids-puff-sleeve-smocked-floral-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-dres-02",
    "name": "Kids Tiered Cotton Gingham Dress",
    "section": "kids",
    "subCategory": "dresses",
    "price": 1499,
    "mrp": 2299,
    "badge": "New",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/dresses/kids-tiered-cotton-gingham-dress-1.webp",
      "secondary": "assets/products/kids/dresses/kids-tiered-cotton-gingham-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-dres-03",
    "name": "Kids Broderie Anglaise White Dress",
    "section": "kids",
    "subCategory": "dresses",
    "price": 1699,
    "mrp": 2599,
    "badge": null,
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/dresses/kids-broderie-anglaise-white-dress-1.webp",
      "secondary": "assets/products/kids/dresses/kids-broderie-anglaise-white-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-dres-04",
    "name": "Kids Long-Sleeve Ribbed Skater Dress",
    "section": "kids",
    "subCategory": "dresses",
    "price": 1899,
    "mrp": 2899,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/dresses/kids-long-sleeve-ribbed-skater-dress-1.webp",
      "secondary": "assets/products/kids/dresses/kids-long-sleeve-ribbed-skater-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Graphic Print"
    ]
  },
  {
    "id": "gz-k-dres-05",
    "name": "Kids Striped Sailor Collar Sundress",
    "section": "kids",
    "subCategory": "dresses",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/dresses/kids-striped-sailor-collar-sundress-1.webp",
      "secondary": "assets/products/kids/dresses/kids-striped-sailor-collar-sundress-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 2-4"
    ]
  },
  {
    "id": "gz-k-dres-06",
    "name": "Kids Party Tulle Ruffle Dress",
    "section": "kids",
    "subCategory": "dresses",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/dresses/kids-party-tulle-ruffle-dress-1.webp",
      "secondary": "assets/products/kids/dresses/kids-party-tulle-ruffle-dress-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jack-01",
    "name": "Kids Denim Trucker Jacket with Hood",
    "section": "kids",
    "subCategory": "jackets",
    "price": 1699,
    "mrp": 2599,
    "badge": "Bestseller",
    "colors": [
      {
        "name": "Indigo Blue",
        "hex": "#2C4365"
      },
      {
        "name": "Washed Sky",
        "hex": "#7F9EBE"
      },
      {
        "name": "Midnight",
        "hex": "#121A28"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jackets/kids-denim-trucker-jacket-with-hood-1.webp",
      "secondary": "assets/products/kids/jackets/kids-denim-trucker-jacket-with-hood-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jack-02",
    "name": "Kids Padded Quilted Puffer Jacket",
    "section": "kids",
    "subCategory": "jackets",
    "price": 1899,
    "mrp": 2899,
    "badge": "New",
    "colors": [
      {
        "name": "Desert Sand",
        "hex": "#D1C7B7"
      },
      {
        "name": "Warm Taupe",
        "hex": "#9B8B79"
      },
      {
        "name": "Espresso",
        "hex": "#3E3127"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jackets/kids-padded-quilted-puffer-jacket-1.webp",
      "secondary": "assets/products/kids/jackets/kids-padded-quilted-puffer-jacket-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-jack-03",
    "name": "Kids Varsity Letterman Baseball Jacket",
    "section": "kids",
    "subCategory": "jackets",
    "price": 2199,
    "mrp": 3299,
    "badge": null,
    "colors": [
      {
        "name": "Lilac Mist",
        "hex": "#B5A7C4"
      },
      {
        "name": "Blush Rose",
        "hex": "#E0B7B7"
      },
      {
        "name": "Clean White",
        "hex": "#FFFFFF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jackets/kids-varsity-letterman-baseball-jacket-1.webp",
      "secondary": "assets/products/kids/jackets/kids-varsity-letterman-baseball-jacket-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jack-04",
    "name": "Kids Lightweight Windbreaker Zip Jacket",
    "section": "kids",
    "subCategory": "jackets",
    "price": 2499,
    "mrp": 3799,
    "badge": null,
    "colors": [
      {
        "name": "Burgundy Red",
        "hex": "#6A242B"
      },
      {
        "name": "Oatmeal Melange",
        "hex": "#E5E1D8"
      },
      {
        "name": "Pitch Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jackets/kids-lightweight-windbreaker-zip-jacket-1.webp",
      "secondary": "assets/products/kids/jackets/kids-lightweight-windbreaker-zip-jacket-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  },
  {
    "id": "gz-k-jack-05",
    "name": "Kids Corduroy Sherpa Collar Jacket",
    "section": "kids",
    "subCategory": "jackets",
    "price": 2799,
    "mrp": 4199,
    "badge": null,
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#1A1A1A"
      },
      {
        "name": "Slate Grey",
        "hex": "#707070"
      },
      {
        "name": "Off White",
        "hex": "#ECE8DF"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jackets/kids-corduroy-sherpa-collar-jacket-1.webp",
      "secondary": "assets/products/kids/jackets/kids-corduroy-sherpa-collar-jacket-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 5-8"
    ]
  },
  {
    "id": "gz-k-jack-06",
    "name": "Kids Fleece Lined Utility Parka",
    "section": "kids",
    "subCategory": "jackets",
    "price": 2999,
    "mrp": 4499,
    "badge": null,
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#8A9A86"
      },
      {
        "name": "Forest Teal",
        "hex": "#2A6B72"
      },
      {
        "name": "Vintage Cream",
        "hex": "#F4EFE6"
      }
    ],
    "sizes": [
      "Ages 2-4",
      "Ages 5-8",
      "Ages 9-12"
    ],
    "images": {
      "primary": "assets/products/kids/jackets/kids-fleece-lined-utility-parka-1.webp",
      "secondary": "assets/products/kids/jackets/kids-fleece-lined-utility-parka-2.webp"
    },
    "tags": [
      "Cotton",
      "Ages 9-12"
    ]
  }
];
