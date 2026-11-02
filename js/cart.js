/**
 * Gazebo E-Commerce - Cart & Wishlist State Management
 */

class GazeboStore {
  constructor() {
    this.cartKey = 'gazebo_cart_v1';
    this.wishlistKey = 'gazebo_wishlist_v1';
    this.promoKey = 'gazebo_promo_v1';
    
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.promoCode = localStorage.getItem(this.promoKey) || null;
    this.discountPercentage = (this.promoCode === 'GAZEBO10' || this.promoCode === 'GAZEBO1979') ? 0.10 : 0;
    
    this.initListeners();
    this.updateCounters();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.cartKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
      this.updateCounters();
      this.renderCartDrawer();
      this.renderCartPage();
      this.renderCheckoutSummary();
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem(this.wishlistKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(this.wishlistKey, JSON.stringify(this.wishlist));
      this.updateCounters();
      this.renderWishlistDrawer();
      this.updateWishlistButtons();
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }

  findProduct(productId) {
    if (typeof window.getProductById === 'function') {
      const p = window.getProductById(productId);
      if (p) return p;
    }
    if (Array.isArray(window.GAZEBO_PRODUCTS)) {
      const p = window.GAZEBO_PRODUCTS.find(item => item.id === productId);
      if (p) return p;
    }
    return null;
  }

  addToCart(productId, size, colorName, quantity = 1) {
    const product = this.findProduct(productId);
    const existingInCart = this.cart.find(i => i.productId === productId);

    const prodName = product?.name || existingInCart?.name || 'Garment';
    const prodPrice = Number(product?.price || existingInCart?.price || 999);
    const prodOrigPrice = Number(product?.originalPrice || product?.mrp || existingInCart?.originalPrice || 0);
    const prodImage = (product?.images && (product.images.primary || product.images.secondary))
      || product?.primaryImage
      || existingInCart?.image
      || 'assets/images/favicon.png';
    const prodFabric = product?.fabric || existingInCart?.fabric || '';

    const defaultSize = size || (product?.sizes && product.sizes[0]) || 'M';
    const defaultColor = colorName || (product?.colors && product.colors[0]?.name) || 'Default';
    const cartItemId = `${productId}-${defaultSize}-${defaultColor}`;

    const existingIndex = this.cart.findIndex(item => item.id === cartItemId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: cartItemId,
        productId: productId,
        name: prodName,
        price: prodPrice,
        originalPrice: prodOrigPrice,
        size: defaultSize,
        color: defaultColor,
        image: prodImage,
        fabric: prodFabric,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(`Added "${prodName}" to Bag!`, 'success');
    this.openCartDrawer();
  }

  addItem(...args) {
    return this.addToCart(...args);
  }

  openCart() {
    return this.openCartDrawer();
  }

  closeCart() {
    return this.closeCartDrawer();
  }

  removeFromCart(cartItemId) {
    const item = this.cart.find(i => i.id === cartItemId);
    this.cart = this.cart.filter(item => item.id !== cartItemId);
    this.saveCart();
    if (item) {
      this.showToast(`Removed "${item.name}" from Bag`, 'info');
    }
  }

  updateQuantity(cartItemId, delta) {
    const item = this.cart.find(i => i.id === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(cartItemId);
    } else {
      this.saveCart();
    }
  }

  toggleWishlist(productId) {
    const product = this.findProduct(productId);
    const prodName = product ? product.name : 'Item';

    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.saveWishlist();
      this.showToast(`Removed "${prodName}" from Wishlist`, 'info');
    } else {
      this.wishlist.push(productId);
      this.saveWishlist();
      this.showToast(`Added "${prodName}" to Wishlist!`, 'success');
    }
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  applyPromo(code) {
    const clean = (code || '').trim().toUpperCase();
    if (clean === 'GAZEBO10' || clean === 'GAZEBO1979') {
      this.promoCode = clean;
      this.discountPercentage = 0.10;
      localStorage.setItem(this.promoKey, clean);
      this.saveCart();
      this.showToast(`Promo code "${clean}" applied (10% OFF)!`, 'success');
      return { success: true, message: '10% Discount Applied' };
    } else {
      this.showToast('Invalid promo code. Try "GAZEBO10"', 'error');
      return { success: false, message: 'Invalid code' };
    }
  }

  removePromo() {
    this.promoCode = null;
    this.discountPercentage = 0;
    localStorage.removeItem(this.promoKey);
    this.saveCart();
    this.showToast('Promo code removed', 'info');
  }

  getTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
    const discount = Math.round(subtotal * this.discountPercentage);
    const freeShippingThreshold = 1999;
    const shipping = subtotal === 0 ? 0 : (subtotal >= freeShippingThreshold ? 0 : 99);
    const total = subtotal - discount + shipping;
    const totalCount = this.cart.reduce((sum, item) => sum + Number(item.quantity), 0);

    return {
      subtotal,
      discount,
      shipping,
      freeShippingThreshold,
      amountToFreeShipping: Math.max(0, freeShippingThreshold - subtotal),
      total,
      totalCount
    };
  }

  updateCounters() {
    const { totalCount } = this.getTotals();
    const cartCountEls = document.querySelectorAll('.cart-badge-count');
    cartCountEls.forEach(el => {
      el.textContent = totalCount;
      el.style.display = 'inline-flex';
    });

    const wishlistCountEls = document.querySelectorAll('.wishlist-badge-count');
    const wCount = this.wishlist.length;
    wishlistCountEls.forEach(el => {
      el.textContent = wCount;
      el.style.display = wCount > 0 ? 'inline-flex' : 'none';
    });
  }

  updateWishlistButtons() {
    document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
      const pid = btn.dataset.productId;
      if (this.isInWishlist(pid)) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
      this.renderCartDrawer();
      drawer.classList.add('is-open');
      overlay.classList.add('is-visible');
      document.body.classList.add('drawer-locked');
      document.body.style.overflow = 'hidden';
    } else {
      // Fallback if drawer elements are not on this page
      window.location.href = 'cart.html';
    }
  }

  closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.classList.remove('drawer-locked');
    document.body.style.overflow = '';
  }

  openWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
      this.renderWishlistDrawer();
      drawer.classList.add('is-open');
      overlay.classList.add('is-visible');
      document.body.classList.add('drawer-locked');
      document.body.style.overflow = 'hidden';
    }
  }

  closeWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('is-open');
    if (overlay && !document.getElementById('cartDrawer')?.classList.contains('is-open')) {
      overlay.classList.remove('is-visible');
      document.body.classList.remove('drawer-locked');
      document.body.style.overflow = '';
    }
  }

  renderCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;

    // Ensure header title is "Your Cart" with item count
    const titleEl = drawer.querySelector('.drawer-title');
    if (titleEl) {
      let countSpan = titleEl.querySelector('#cartDrawerTotalCount');
      if (!countSpan) {
        countSpan = document.createElement('span');
        countSpan.id = 'cartDrawerTotalCount';
        countSpan.className = 'drawer-count';
      }
      titleEl.innerHTML = `<span>Your Cart</span> `;
      titleEl.appendChild(countSpan);
    }

    const container = document.getElementById('cartDrawerItems');
    let footer = document.getElementById('cartDrawerFooter');
    let emptyState = document.getElementById('cartEmptyState');
    const countEl = document.getElementById('cartDrawerTotalCount');
    const freeShippingProgress = document.getElementById('freeShippingProgressBar');
    const freeShippingNotice = document.getElementById('freeShippingNotice');

    const totals = this.getTotals();
    if (countEl) countEl.textContent = `(${totals.totalCount} items)`;

    // Free shipping meter
    if (freeShippingProgress && freeShippingNotice) {
      if (totals.subtotal >= totals.freeShippingThreshold) {
        freeShippingProgress.style.width = '100%';
        freeShippingNotice.innerHTML = `<strong>✨ You've unlocked FREE Express Shipping!</strong>`;
      } else {
        const percent = Math.min(100, Math.round((totals.subtotal / totals.freeShippingThreshold) * 100));
        freeShippingProgress.style.width = `${percent}%`;
        freeShippingNotice.innerHTML = `Add <strong>₹${totals.amountToFreeShipping.toLocaleString('en-IN')}</strong> more for <strong>FREE Shipping</strong>`;
      }
    }

    // Ensure empty state has the required copy and button
    if (emptyState) {
      emptyState.innerHTML = `
        <div class="drawer-empty-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; text-transform: uppercase; margin: 12px 0 6px;">Your cart is empty</h3>
        <p style="font-size: 0.85rem; color: #666666; margin-bottom: 16px;">Explore our signature garments and curated collections.</p>
        <button type="button" class="btn btn--primary btn--sm" onclick="window.gazeboStore.closeCartDrawer()" style="padding: 10px 24px; font-weight: 800; cursor: pointer;">
          Continue Shopping
        </button>
      `;
    }

    // Ensure footer exists
    if (!footer) {
      footer = document.createElement('div');
      footer.id = 'cartDrawerFooter';
      footer.className = 'drawer-footer';
      drawer.appendChild(footer);
    }

    if (this.cart.length === 0) {
      if (container) container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'block';

    if (container) {
      container.innerHTML = this.cart.map(item => `
        <div class="cart-item" data-cart-id="${item.id}">
          <img class="cart-item__img" src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="cart-item__details">
            <div class="cart-item__top">
              <h4 class="cart-item__title">${item.name}</h4>
              <button class="cart-item__remove" onclick="window.gazeboStore.removeFromCart('${item.id}')" title="Remove item" aria-label="Remove item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <p class="cart-item__meta">Size: <strong>${item.size}</strong> &bull; Color: <strong>${item.color}</strong></p>
            <div class="cart-item__price-row">
              <span class="cart-item__price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
              ${item.originalPrice ? `<span class="cart-item__orig-price">₹${(item.originalPrice * item.quantity).toLocaleString('en-IN')}</span>` : ''}
            </div>
            <div class="cart-item__qty-selector">
              <button class="qty-btn" onclick="window.gazeboStore.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="window.gazeboStore.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Populate footer: Subtotal + Checkout + View Cart
    footer.innerHTML = `
      <div class="drawer-summary-row drawer-summary-row--subtotal">
        <span>Subtotal</span>
        <span id="cartSummarySubtotal" class="drawer-subtotal-val">₹${totals.subtotal.toLocaleString('en-IN')}</span>
      </div>
      <p class="drawer-tax-note">Shipping &amp; taxes calculated at checkout</p>
      <div class="drawer-actions">
        <a href="checkout.html" class="btn btn--accent btn--full drawer-checkout-btn">Checkout</a>
        <a href="cart.html" class="btn btn--outline btn--full drawer-viewcart-btn">View Cart</a>
      </div>
    `;
  }

  renderCartPage() {
    const emptyNotice = document.getElementById('cartPageEmptyNotice');
    const contentWrap = document.getElementById('cartPageContentWrap');
    const tableBody = document.getElementById('cartPageTableBody');
    const subtotalEl = document.getElementById('cartPageSubtotal');
    const totalEl = document.getElementById('cartPageTotal');

    if (!contentWrap && !tableBody) return;

    const totals = this.getTotals();

    if (this.cart.length === 0) {
      if (emptyNotice) emptyNotice.style.display = 'block';
      if (contentWrap) contentWrap.style.display = 'none';
      return;
    }

    if (emptyNotice) emptyNotice.style.display = 'none';
    if (contentWrap) contentWrap.style.display = 'grid';

    if (tableBody) {
      tableBody.innerHTML = this.cart.map(item => `
        <tr>
          <td>
            <div style="display: flex; gap: 16px; align-items: center;">
              <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 88px; object-fit: cover; border-radius: 4px;" />
              <div>
                <a href="product.html?id=${encodeURIComponent(item.productId)}" style="font-weight: 800; font-size: 0.95rem; text-decoration: none; color: inherit; display: block; margin-bottom: 4px;">${item.name}</a>
                <div style="font-size: 0.80rem; color: #666666;">Size: <strong>${item.size}</strong> &bull; Color: <strong>${item.color}</strong></div>
                <button type="button" onclick="window.gazeboStore.removeFromCart('${item.id}')" style="background: none; border: none; color: #EE5824; font-size: 0.76rem; font-weight: 700; cursor: pointer; padding: 0; margin-top: 6px; text-decoration: underline;">
                  Remove
                </button>
              </div>
            </div>
          </td>
          <td style="font-weight: 700;">₹${item.price.toLocaleString('en-IN')}</td>
          <td>
            <div style="display: inline-flex; align-items: center; border: 1px solid #DDDDDD; border-radius: 4px; overflow: hidden;">
              <button type="button" class="qty-btn" onclick="window.gazeboStore.updateQuantity('${item.id}', -1)" style="width: 32px; height: 32px; border: none; background: #F8F8F8; cursor: pointer; font-size: 1rem; font-weight: 700;">−</button>
              <span style="min-width: 36px; text-align: center; font-weight: 700; font-size: 0.88rem;">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="window.gazeboStore.updateQuantity('${item.id}', 1)" style="width: 32px; height: 32px; border: none; background: #F8F8F8; cursor: pointer; font-size: 1rem; font-weight: 700;">+</button>
            </div>
          </td>
          <td style="font-weight: 800; color: #111111;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
        </tr>
      `).join('');
    }

    if (subtotalEl) subtotalEl.textContent = `₹ ${totals.subtotal.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `₹ ${totals.total.toLocaleString('en-IN')}`;
  }

  renderCheckoutSummary() {
    const itemsContainer = document.getElementById('checkoutSummaryItems');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const totalEl = document.getElementById('checkoutTotal');
    const stickyTotalEl = document.getElementById('checkoutStickyTotal');

    if (!itemsContainer && !subtotalEl && !totalEl) return;

    const totals = this.getTotals();

    if (itemsContainer) {
      if (this.cart.length === 0) {
        itemsContainer.innerHTML = '<p style="color: #666; font-size: 0.88rem; padding: 12px 0;">Your shopping bag is empty.</p>';
      } else {
        itemsContainer.innerHTML = this.cart.map(item => `
          <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 52px; height: 65px; object-fit: cover; border-radius: 3px;" />
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 700; font-size: 0.84rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
              <div style="font-size: 0.74rem; color: #666;">Qty: ${item.quantity} &bull; Size: ${item.size}</div>
            </div>
            <div style="font-weight: 800; font-size: 0.84rem;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
          </div>
        `).join('');
      }
    }

    if (subtotalEl) subtotalEl.textContent = `₹ ${totals.subtotal.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `₹ ${totals.total.toLocaleString('en-IN')}`;
    if (stickyTotalEl) stickyTotalEl.textContent = `₹ ${totals.total.toLocaleString('en-IN')}`;
  }

  renderWishlistDrawer() {
    const container = document.getElementById('wishlistDrawerItems');
    const emptyState = document.getElementById('wishlistEmptyState');
    const countEl = document.getElementById('wishlistDrawerTotalCount');

    if (!container) return;

    if (countEl) countEl.textContent = `(${this.wishlist.length} items)`;

    if (this.wishlist.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    container.innerHTML = this.wishlist.map(productId => {
      const p = this.findProduct(productId);
      if (!p) return '';
      const pImg = (p.images && (p.images.primary || p.images.secondary)) || p.primaryImage || 'assets/images/favicon.png';
      const pSize = (p.sizes && p.sizes[0]) || 'M';
      const pColor = (p.colors && p.colors[0]?.name) || 'Default';
      return `
        <div class="wishlist-item" data-product-id="${p.id}">
          <img class="wishlist-item__img" src="${pImg}" alt="${p.name}" loading="lazy" />
          <div class="wishlist-item__details">
            <h4 class="wishlist-item__title">${p.name}</h4>
            <p class="wishlist-item__subtitle">${p.fabric || p.subtitle || ''}</p>
            <div class="wishlist-item__price">₹${Number(p.price).toLocaleString('en-IN')}</div>
            <div class="wishlist-item__actions">
              <button class="btn btn--outline btn--sm" onclick="window.gazeboStore.addToCart('${p.id}', '${pSize}', '${pColor}'); window.gazeboStore.toggleWishlist('${p.id}')">
                Move to Bag
              </button>
              <button class="wishlist-item__remove" onclick="window.gazeboStore.toggleWishlist('${p.id}')" title="Remove">
                Remove
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-pill toast-pill--${type}`;
    toast.innerHTML = `
      <span class="toast-pill__icon">${type === 'success' ? '✓' : 'ℹ'}</span>
      <span class="toast-pill__msg">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('is-visible'), 10);
    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  initListeners() {
    // Drawer overlay close
    document.addEventListener('click', (e) => {
      if (e.target && (e.target.id === 'drawerOverlay' || e.target.classList.contains('drawer-overlay'))) {
        this.closeCartDrawer();
        this.closeWishlistDrawer();
        if (window.closeSearchModal) window.closeSearchModal();
        if (window.closeMobileMenu) window.closeMobileMenu();
        if (window.closeQuickView) window.closeQuickView();
      }
    });

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCartDrawer();
        this.closeWishlistDrawer();
        if (window.closeSearchModal) window.closeSearchModal();
        if (window.closeQuickView) window.closeQuickView();
        if (window.closeMobileMenu) window.closeMobileMenu();
      }
    });

    // Real-time multi-tab localStorage synchronization
    window.addEventListener('storage', (e) => {
      if (e.key === this.cartKey) {
        this.cart = this.loadCart();
        this.updateCounters();
        this.renderCartDrawer();
        this.renderCartPage();
        this.renderCheckoutSummary();
      } else if (e.key === this.wishlistKey) {
        this.wishlist = this.loadWishlist();
        this.updateCounters();
        this.renderWishlistDrawer();
        this.updateWishlistButtons();
      }
    });
  }
}

// Global initialization - runs immediately or on DOM ready
function initGazeboStore() {
  if (!window.gazeboStore) {
    window.gazeboStore = new GazeboStore();
    window.gazeboCart = window.gazeboStore;
  }
  window.gazeboStore.updateCounters();
  if (typeof window.gazeboStore.renderCartPage === 'function') {
    window.gazeboStore.renderCartPage();
  }
  if (typeof window.gazeboStore.renderCheckoutSummary === 'function') {
    window.gazeboStore.renderCheckoutSummary();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGazeboStore);
} else {
  initGazeboStore();
}

if (!window.quickAddProduct) {
  window.quickAddProduct = function(e, productId) {
    if (typeof e === 'string' && !productId) {
      productId = e;
      e = null;
    }
    if (e && typeof e.stopPropagation === 'function') {
      e.stopPropagation();
      e.preventDefault();
    }
    const store = window.gazeboStore || window.gazeboCart;
    if (!store) return;
    const prod = store.findProduct(productId);
    const selSize = (prod && prod.sizes && prod.sizes[0]) || 'M';
    const colorName = (prod && prod.colors && prod.colors[0]?.name) || 'Default';
    store.addToCart(productId, selSize, colorName, 1);
  };
}
