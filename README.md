# GAZEBO — Premium Fashion E-Commerce Storefront

An elevated, modern, Indian fashion e-commerce storefront designed for **GAZEBO** (Gazibo®), inspired by the shopping architecture and visual polish of [The Souled Store](https://www.thesouledstore.com/).

---

## 1. Brand Identity & Heritage

- **Brand**: GAZEBO (Gazibo®)
- **Tagline**: Pune's Iconic Fashion Landmark • Estd. 1979
- **Heritage Location**: M.G. Road, Camp, Pune, Maharashtra, India
- **Departments**: Men's, Women's, Kids' Garments & Accessories
- **Verified Social**: [@gazibo_clothing](https://www.instagram.com/gazibo_clothing/)
- **Brand Aesthetic**: Minimalist contemporary streetwear meets timeless tailoring, high-contrast typography, and rich Gazibo Heritage Orange (`#EE5824`).

> **Note on Logo**: The official Gazibo logo was extracted directly from the verified brand profile screenshot. Proportions, typography, and original orange badge styling are preserved.

---

## 2. Key Shopping Experience Features

### A. Navigation & Header
- **Announcement Bar**: Slim, minimalist top strip highlighting the M.G. Road Pune flagship and brand heritage.
- **Gender Segmentation Bar**: Top switcher tabs (`MEN` | `WOMEN` | `KIDS` | `HERITAGE 1979`) inspired by The Souled Store's signature layout.
- **Brand Identity**: Prominent authentic Gazibo circular logo badge paired with bold uppercase wordmark `GAZEBO • ESTD. 1979`.
- **Navigation Bar**: Direct category filters with subtle animated underline hover transitions.
- **Action Icons**: Instant live search modal, wishlist drawer with badge count, and shopping bag with live badge counter.

### B. Hero Banner Carousel
- Full-bleed cinematic fashion banner with auto-slide timer (5.5s), pause on hover, previous/next controls, and touch swipe gesture support for mobile.
- Features editorial slides with bold typography, refined supporting copy, and direct category CTAs.

### C. Shop by Category
- High-impact category rail showcasing 7 departments:
  1. *Oversized & Classic Tees* (240+ GSM)
  2. *Resort & Linen Shirts* (French Flax)
  3. *Cargos & Relaxed Trousers* (Utility Ripstop)
  4. *Textured & Knitted Polos* (Waffle Knit)
  5. *Co-ord Matching Sets* (Two-piece Outfits)
  6. *Overshirts & Jackets* (Heavyweight Twill)
  7. *Garments & Accessories* (Caps, Belts, Totes)

### D. Featured Collection & Interactive Product Grid
- **Category Filter Tabs**: One-click switching between categories with instant re-render.
- **Sort Controls**: Sort by *Featured Edit*, *Price: Low to High*, *Price: High to Low*, or *Newest*.
- **Product Cards**:
  - 3:4 fashion portrait aspect ratio.
  - Secondary image hover flip (instant preview of back/alternate pose).
  - Floating badge pills (`BESTSELLER`, `NEW SEASON`, `HERITAGE 1979`, `TRENDING`).
  - Interactive Wishlist heart button with pulse animation and persistent `localStorage` sync.
  - Hover action strip with `Quick View` and `+ Quick Add`.
  - Color swatches with tooltips.
  - Mini quick-size strip (`S`, `M`, `L`, `XL`, `XXL`).
  - Indian Rupee (`₹`) pricing with strikethrough MRP and discount percentage badge.

### E. E-Commerce Micro-Interactions
- **Slide-out Cart Drawer**:
  - Live Free Express Shipping progress meter.
  - Item cards with image thumbnail, title, selected size, color, and price.
  - Quantity adjusters (`+` / `−`) and remove action.
  - Demo coupon engine (try code **`GAZEBO10`** for an instant 10% discount).
  - Order summary (Subtotal, Savings, Delivery, Estimated Total).
  - Clear empty-cart state.
- **Wishlist Drawer**:
  - Saved favorites view with instant "Move to Bag" button.
- **Live Search Modal**:
  - Real-time search across product titles, categories, fabrics, and colors as you type.
  - Popular search tags (`Heavyweight Tees`, `French Linen`, `Cargos`, `Co-ord`, `Heritage 1979`).
- **Product Quick View Modal**:
  - Multi-image gallery with thumbnail switcher.
  - Detailed fabric, fit, and care specifications.
  - Interactive color swatch selector and size picker.
  - Built-in **Size Guide** modal with Chest, Length, Shoulder, and Waist measurements.
- **Mobile Bottom Navigation Bar**:
  - Fixed bottom bar on mobile screens (`Home`, `Categories`, `Search`, `Wishlist`, `Bag`) for an authentic mobile app experience.

---

## 3. Project Structure

```
gazebo-ecommerce/
├── index.html                   # Master semantic storefront markup
├── server.py                    # Zero-dependency local dev server (port 8080)
├── README.md                    # Documentation & customization guide
├── assets/
│   └── images/
│       ├── gazebo-logo.png      # Clean extracted circular brand emblem (transparent PNG)
│       └── favicon.png          # Generated brand favicon (64x64)
├── css/
│   ├── main.css                 # Design tokens, variables, resets, typography, buttons
│   ├── components.css           # Header, hero, category rail, product cards, modals, drawers
│   └── responsive.css           # Mobile app bottom bar, drawers, tablet & phone layouts
└── js/
    ├── products-data.js         # Decoupled catalog data (easily replaceable)
    ├── cart.js                  # Cart & Wishlist state manager (localStorage sync, promo codes)
    ├── search.js                # Instant debounced search modal
    └── app.js                   # Hero slider, category filters, quick view, size guide, toasts
```

---

## 4. How to Run Locally

### Option 1: Using the Included Python Server (Recommended)
```bash
cd /Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce
python3 server.py
```
Then open your browser at **`http://localhost:8080`**.

### Option 2: Direct File Open
You can directly open `index.html` in Safari, Google Chrome, or any modern web browser:
```bash
open /Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/index.html
```

---

## 5. Easy Product Catalog Replacement

To update the catalog with Gazebo's actual inventory when provided, simply edit [`js/products-data.js`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/js/products-data.js).

Example structure:
```javascript
{
  id: "gz-custom-01",
  name: "Your Actual Product Name",
  subtitle: "Fit / Style Description",
  category: "topwear", // or "shirts", "bottomwear", "coords", "outerwear", "accessories"
  price: 1499,
  originalPrice: 2199,
  badge: "NEW ARRIVAL",
  fabric: "100% Cotton",
  colors: [
    { name: "Black", hex: "#111111", inStock: true }
  ],
  sizes: ["S", "M", "L", "XL"],
  primaryImage: "path/to/image.jpg",
  secondaryImage: "path/to/back-image.jpg",
  description: "Product description...",
  details: ["Detail 1", "Detail 2"]
}
```
No HTML or CSS modifications are necessary to update or add products.
