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
    this.discountPercentage = this.promoCode === 'GAZEBO10' ? 0.10 : 0;
    
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

  addToCart(productId, size, colorName, quantity = 1) {
    const product = window.getProductById ? window.getProductById(productId) : null;
    if (!product) return;

    const defaultSize = size || (product.sizes && product.sizes[0]) || 'M';
    const defaultColor = colorName || (product.colors && product.colors[0]?.name) || 'Default';
    const cartItemId = `${productId}-${defaultSize}-${defaultColor}`;

    const existingIndex = this.cart.findIndex(item => item.id === cartItemId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: cartItemId,
        productId: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        size: defaultSize,
        color: defaultColor,
        image: product.primaryImage,
        fabric: product.fabric,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(`Added "${product.name}" to Bag!`, 'success');
    this.openCartDrawer();
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
    const product = window.getProductById ? window.getProductById(productId) : null;
    if (!product) return;

    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      this.saveWishlist();
      this.showToast(`Removed "${product.name}" from Wishlist`, 'info');
    } else {
      this.wishlist.push(productId);
      this.saveWishlist();
      this.showToast(`Added "${product.name}" to Wishlist!`, 'success');
    }
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  applyPromo(code) {
    const clean = code.trim().toUpperCase();
    if (clean === 'GAZEBO10') {
      this.promoCode = clean;
      this.discountPercentage = 0.10;
      localStorage.setItem(this.promoKey, clean);
      this.saveCart();
      this.showToast('Promo code "GAZEBO10" applied (10% OFF)!', 'success');
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
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = Math.round(subtotal * this.discountPercentage);
    const freeShippingThreshold = 1999;
    const shipping = subtotal === 0 ? 0 : (subtotal >= freeShippingThreshold ? 0 : 99);
    const total = subtotal - discount + shipping;
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);

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
      el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
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
    }
  }

  closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.classList.remove('drawer-locked');
  }

  openWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
      this.renderWishlistDrawer();
      drawer.classList.add('is-open');
      overlay.classList.add('is-visible');
      document.body.classList.add('drawer-locked');
    }
  }

  closeWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer) drawer.classList.remove('is-open');
    if (overlay && !document.getElementById('cartDrawer')?.classList.contains('is-open')) {
      overlay.classList.remove('is-visible');
      document.body.classList.remove('drawer-locked');
    }
  }

  renderCartDrawer() {
    const container = document.getElementById('cartDrawerItems');
    const footer = document.getElementById('cartDrawerFooter');
    const emptyState = document.getElementById('cartEmptyState');
    const countEl = document.getElementById('cartDrawerTotalCount');
    const freeShippingProgress = document.getElementById('freeShippingProgressBar');
    const freeShippingNotice = document.getElementById('freeShippingNotice');

    if (!container) return;

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

    if (this.cart.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footer) footer.style.display = 'block';

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
          <p class="cart-item__meta">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></p>
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

    // Update Totals Summary in footer
    const subtotalEl = document.getElementById('cartSummarySubtotal');
    const discountEl = document.getElementById('cartSummaryDiscount');
    const discountRow = document.getElementById('cartSummaryDiscountRow');
    const shippingEl = document.getElementById('cartSummaryShipping');
    const totalEl = document.getElementById('cartSummaryTotal');
    const promoInput = document.getElementById('cartPromoInput');
    const promoApplied = document.getElementById('cartPromoApplied');

    if (subtotalEl) subtotalEl.textContent = `₹${totals.subtotal.toLocaleString('en-IN')}`;
    if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? 'FREE' : `₹${totals.shipping}`;
    if (totalEl) totalEl.textContent = `₹${totals.total.toLocaleString('en-IN')}`;

    if (discountRow) {
      if (totals.discount > 0) {
        discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-₹${totals.discount.toLocaleString('en-IN')}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (promoApplied) {
      if (this.promoCode) {
        promoApplied.style.display = 'flex';
        promoApplied.innerHTML = `
          <span>Code <strong>${this.promoCode}</strong> applied (-10%)</span>
          <button class="promo-remove-btn" onclick="window.gazeboStore.removePromo()">Remove</button>
        `;
        if (promoInput) promoInput.value = '';
      } else {
        promoApplied.style.display = 'none';
      }
    }
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
      const p = window.getProductById(productId);
      if (!p) return '';
      return `
        <div class="wishlist-item" data-product-id="${p.id}">
          <img class="wishlist-item__img" src="${p.primaryImage}" alt="${p.name}" loading="lazy" />
          <div class="wishlist-item__details">
            <h4 class="wishlist-item__title">${p.name}</h4>
            <p class="wishlist-item__subtitle">${p.fabric || p.subtitle}</p>
            <div class="wishlist-item__price">₹${p.price.toLocaleString('en-IN')}</div>
            <div class="wishlist-item__actions">
              <button class="btn btn--outline btn--sm" onclick="window.gazeboStore.addToCart('${p.id}', '${p.sizes[0]}', '${p.colors[0]?.name}'); window.gazeboStore.toggleWishlist('${p.id}')">
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
      if (e.target.id === 'drawerOverlay') {
        this.closeCartDrawer();
        this.closeWishlistDrawer();
        if (window.closeSearchModal) window.closeSearchModal();
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
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.gazeboStore = new GazeboStore();
  window.gazeboCart = window.gazeboStore;
});
