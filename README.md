# GAZEBO — Client-Ready E-Commerce Pitch Storefront

An elevated, client-ready pitch version of the **GAZEBO** e-commerce storefront. Designed for the iconic family clothing brand established in 1979 on M.G. Road, Pune.

---

## 1. Brand & Presentation Standards

- **Brand Name**: GAZEBO (Gazebo®)
- **Tagline**: Men, Women & Kids Clothing in Pune | Since 1979
- **Heritage**: Established 1979, M.G. Road, Camp, Pune, Maharashtra, India
- **Departments**: Men, Women (Girls) and Kids
- **Official Instagram**: [@gazibo_clothing](https://www.instagram.com/gazibo_clothing/)
- **Placeholder Domain**: `https://www.gazebo-ecommerce.vercel.app`
- **Product Placeholders**: Neutral image boxes, `"Product Name"`, `"₹ 0.00"` (zero fabricated products, zero external copyrighted content).
- **Primary Colorway**: Gazebo Orange (`#EE5824`), Midnight Black (`#0E0E0E`), Warm Cream (`#FBFBFA`), and Neutral Grey (`#E5E5DE`).

---

## 2. Header Architecture (Decongested Layout)

- **Three-Zone Flexbox**:
  - **Zone 1 (Left)**: Authentic brand logo (`images/logo.png`) + `GAZEBO` bold wordmark + `ESTD. 1979 • PUNE` subtitle.
  - **Zone 2 (Center)**: Desktop navigation links (`Men`, `Women`, `Kids`, `New Arrivals`, `Best Sellers`, `Heritage`, `Contact`). Separated from the wordmark by at least **40px**, strictly single line (`white-space: nowrap`), vertically aligned.
  - **Zone 3 (Right)**: Grouped action icons (Search, Account, Wishlist, Cart) with **20px** gaps and clear separation from nav.
- **Responsive Collapse (< 1200px)**: The desktop navigation cleanly collapses into a modern hamburger menu drawer below 1200px, preventing wrapping or congestion on laptops and tablets.
- **Top Bar**: Minimalist announcement with Pune flagship information; prototype labels removed.

---

## 3. Site Map & Included Pages

| Page File | Page Purpose | Canonical URL |
| :--- | :--- | :--- |
| [`index.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/index.html) | Homepage (Hero, Trust Strip, Category Tiles, Product Rows, Story, Testimonials, Instagram, Newsletter) | `https://www.gazebo-ecommerce.vercel.app/` |
| [`men.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/men.html) | Men's Category Page (Banner, Breadcrumbs, Size Filters, Sort, Product Grid) | `https://www.gazebo-ecommerce.vercel.app/men.html` |
| [`women.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/women.html) | Women & Girls Category Page (Banner, Breadcrumbs, Size Filters, Sort, Product Grid) | `https://www.gazebo-ecommerce.vercel.app/women.html` |
| [`kids.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/kids.html) | Kids' Category Page (Banner, Breadcrumbs, Age/Size Filters, Sort, Product Grid) | `https://www.gazebo-ecommerce.vercel.app/kids.html` |
| [`product.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/product.html) | Product Page Template (Gallery, Size Selector, Size Guide Modal, Color Swatches, Quantity, Tabs, Related) | `https://www.gazebo-ecommerce.vercel.app/product.html` |
| [`cart.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/cart.html) | Dedicated Shopping Bag Page (Interactive Table, Stepper, Promo Code, Subtotal) | `https://www.gazebo-ecommerce.vercel.app/cart.html` |
| [`checkout.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/checkout.html) | Checkout Page (Contact, Shipping Address, Delivery Options, Payment UI, Order Summary) | `https://www.gazebo-ecommerce.vercel.app/checkout.html` |
| [`about.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/about.html) | Heritage & Story Page (Estd. 1979 on M.G. Road, Pune, Four Decades of Quality) | `https://www.gazebo-ecommerce.vercel.app/about.html` |
| [`contact.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/contact.html) | Contact & Store Locator (Store address, timings, phone, email, contact form) | `https://www.gazebo-ecommerce.vercel.app/contact.html` |
| [`faq.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/faq.html) | Frequently Asked Questions (Orders, Sizing, Pune Store, Returns) | `https://www.gazebo-ecommerce.vercel.app/faq.html` |
| [`shipping-returns.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/shipping-returns.html) | Shipping & Returns Policy (Pan-India delivery, Pune dispatch, 7-day exchange) | `https://www.gazebo-ecommerce.vercel.app/shipping-returns.html` |
| [`privacy.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/privacy.html) | Privacy Policy (Data protection, SSL encryption, RBI compliance) | `https://www.gazebo-ecommerce.vercel.app/privacy.html` |
| [`terms.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/terms.html) | Terms of Service (Store conditions, intellectual property, Pune jurisdiction) | `https://www.gazebo-ecommerce.vercel.app/terms.html` |
| [`404.html`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/404.html) | Custom 404 Page (Helpful navigation and catalog search trigger) | `https://www.gazebo-ecommerce.vercel.app/404.html` |

---

## 4. How to Preview Locally

### Option A: Using the Included Python Server (Recommended)
```bash
cd /Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce
python3 server.py
```
Open your browser at `http://localhost:8080`.

### Option B: Direct Browser Open
You can open any file directly in Google Chrome, Safari, or Microsoft Edge:
```bash
open /Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/index.html
```

---

## 5. How to Add Real Products

All product catalog data is decoupled from the UI and centralized in [`js/data.js`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/js/data.js).

To replace placeholder items with authentic Gazebo inventory, open `js/data.js` and edit or append to the `GAZEBO_PRODUCTS` array:

```javascript
{
  id: "gz-men-101",
  name: "Authentic Product Title",
  category: "men", // "men", "women", or "kids"
  categoryLabel: "Men",
  price: 1499.00,
  priceDisplay: "₹ 1,499.00",
  comparePriceDisplay: "₹ 2,199.00",
  badge: "New Arrival",
  image: "images/your-product-image.webp", // or .jpg/.png
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Navy Blue", hex: "#1C2833" },
    { name: "Oatmeal", hex: "#EAE5D9" }
  ],
  sku: "GZ-MEN-101",
  description: "Detailed description of the garment, yarn count, fabric blend and fit."
}
```
All category pages, the homepage New Arrivals/Best Sellers, search modal, cart drawer, and quick-view modals will automatically update.

---

## 6. How to Launch & Change Domain

1. **Robots Indexing Meta Tag**:
   On all HTML pages, **Line 6** currently contains:
   ```html
   <meta name="robots" content="noindex, nofollow" />
   ```
   At live commercial launch, change this single line to:
   ```html
   <meta name="robots" content="index, follow" />
   ```
2. **Domain Placeholder Replacement**:
   - In [`js/data.js`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/js/data.js): Update `domain: "https://www.gazebo-ecommerce.vercel.app"` to your live URL.
   - In [`robots.txt`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/robots.txt): Change `Disallow: /` to `Allow: /` and update the sitemap URL.
   - In [`sitemap.xml`](file:///Users/akash/.gemini/antigravity/scratch/gazebo-ecommerce/sitemap.xml): Replace `https://www.gazebo-ecommerce.vercel.app` with your live domain.
