/**
 * Gazebo E-Commerce - Core Application Logic & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementBar();
  initHeaderScroll();
  initGenderTabs();
  initHeroSlider();
  initCategorySection();
  initProductGrid();
  initFilterAndSort();
  initQuickViewModal();
  initSizeGuideModal();
  initMobileMenu();
  initNewsletter();
});

/* ==========================================================================
   1. Announcement Bar
   ========================================================================== */
function initAnnouncementBar() {
  const bar = document.getElementById('announcementBar');
  const closeBtn = document.getElementById('announcementClose');
  if (closeBtn && bar) {
    closeBtn.addEventListener('click', () => {
      bar.style.display = 'none';
      document.body.classList.add('has-no-announcement');
    });
  }
}

/* ==========================================================================
   2. Sticky Header & Gender Tabs
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

function initGenderTabs() {
  const tabs = document.querySelectorAll('.gender-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const gender = tab.dataset.gender;
      if (gender === 'heritage') {
        const heritageSec = document.getElementById('heritageSection');
        if (heritageSec) {
          heritageSec.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const prodSec = document.getElementById('productsSection');
        if (prodSec) {
          prodSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ==========================================================================
   3. Hero Banner Slider (Dual Video Backgrounds + Lazy Loading)
   ========================================================================== */
let heroCurrentSlide = 0;
let heroTimer = null;
let isHeroUserPaused = false;
let heroVideo1Ready = false;
let heroVideo2Loaded = false;
let heroVideo2Ready = false;

function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-arrow--prev');
  const nextBtn = document.querySelector('.hero-arrow--next');
  const heroVideo1 = document.getElementById('heroVideo1');
  const heroVideo2 = document.getElementById('heroVideo2');
  const playbackBtn = document.getElementById('heroPlaybackBtn');

  if (!slides.length) return;

  // Gate video playback based on mobile (<768px), prefers-reduced-motion, or data saver
  const isMobile = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);
  const canPlayVideo = !isMobile && !prefersReducedMotion && !saveData;

  function loadSlideImage(slide) {
    if (!slide) return;
    const img = slide.querySelector('img[data-src]');
    if (img) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    }
    const sources = slide.querySelectorAll('source[data-srcset]');
    sources.forEach(s => {
      s.srcset = s.getAttribute('data-srcset');
      s.removeAttribute('data-srcset');
    });
  }

  // Load Slide 2's video on demand (when it becomes the next slide or is navigated to)
  function loadHeroVideo2() {
    if (heroVideo2Loaded || !heroVideo2 || !canPlayVideo) return;
    heroVideo2Loaded = true;

    const sources = heroVideo2.querySelectorAll('source[data-src]');
    sources.forEach(s => {
      s.src = s.getAttribute('data-src');
      s.removeAttribute('data-src');
    });

    heroVideo2.preload = 'metadata';
    heroVideo2.load();

    heroVideo2.addEventListener('playing', () => {
      heroVideo2.classList.add('is-ready');
      heroVideo2Ready = true;
    }, { once: true });

    heroVideo2.addEventListener('canplay', () => {
      if (!isHeroUserPaused && heroCurrentSlide === 1) {
        heroVideo2.play().catch(() => {});
      }
    });
  }

  function setupHeroVideos() {
    if (!canPlayVideo) {
      // Under 768px, reduced motion, or data saver: show only posters, never download video
      if (heroVideo1) heroVideo1.style.display = 'none';
      if (heroVideo2) heroVideo2.style.display = 'none';
      if (playbackBtn) playbackBtn.style.display = 'none';
      return;
    }

    // Populate Slide 1's video sources immediately on page load
    if (heroVideo1) {
      const sources1 = heroVideo1.querySelectorAll('source[data-src]');
      sources1.forEach(s => {
        s.src = s.getAttribute('data-src');
        s.removeAttribute('data-src');
      });

      heroVideo1.preload = 'metadata';
      heroVideo1.load();

      const onVideo1Ready = () => {
        heroVideo1.classList.add('is-ready');
        heroVideo1Ready = true;
        if (!isHeroUserPaused && !heroTimer) {
          startAutoPlay();
        }
        // Preload next slide's video (Slide 2) after Slide 1 is playing smoothly
        setTimeout(loadHeroVideo2, 1200);
      };

      heroVideo1.addEventListener('playing', onVideo1Ready, { once: true });
      heroVideo1.addEventListener('canplay', () => {
        if (!isHeroUserPaused && heroCurrentSlide === 0) {
          heroVideo1.play().catch(() => {});
        }
      });

      const p1 = heroVideo1.play();
      if (p1 !== undefined) {
        p1.then(onVideo1Ready).catch(() => {
          // Autoplay policy fallback: preload video 2 anyway after initial delay
          setTimeout(loadHeroVideo2, 2000);
        });
      }
    }
  }

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    heroCurrentSlide = index;

    // Load active slide media on-demand
    loadSlideImage(slides[index]);

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });

    // Handle Slide Video Playback & Switching
    if (canPlayVideo) {
      if (index === 0) {
        // Slide 1 active: play heroVideo1, pause heroVideo2
        if (heroVideo2 && !heroVideo2.paused) heroVideo2.pause();
        if (heroVideo1 && !isHeroUserPaused && !document.hidden) {
          heroVideo1.play().catch(() => {});
        }
      } else if (index === 1) {
        // Slide 2 active: make sure video 2 is loaded, play heroVideo2, pause heroVideo1
        loadHeroVideo2();
        if (heroVideo1 && !heroVideo1.paused) heroVideo1.pause();
        if (heroVideo2 && !isHeroUserPaused && !document.hidden) {
          heroVideo2.play().catch(() => {});
        }
      } else {
        // Slide 3 active: pause all videos
        if (heroVideo1 && !heroVideo1.paused) heroVideo1.pause();
        if (heroVideo2 && !heroVideo2.paused) heroVideo2.pause();
      }
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (isHeroUserPaused) return;

    // 8.2s for video slides (0 and 1), 5.5s for static slide (2)
    const interval = ((heroCurrentSlide === 0 || heroCurrentSlide === 1) && canPlayVideo) ? 8200 : 5500;
    heroTimer = setTimeout(() => {
      showSlide(heroCurrentSlide + 1);
      startAutoPlay();
    }, interval);
  }

  function stopAutoPlay() {
    if (heroTimer) {
      clearTimeout(heroTimer);
      heroTimer = null;
    }
  }

  // Playback & Pause Accessibility Button
  if (playbackBtn) {
    playbackBtn.addEventListener('click', () => {
      const pauseIcon = playbackBtn.querySelector('.icon-pause');
      const playIcon = playbackBtn.querySelector('.icon-play');

      // Identify active video for current slide
      const activeVideo = (heroCurrentSlide === 0) ? heroVideo1 : (heroCurrentSlide === 1 ? heroVideo2 : null);

      if (isHeroUserPaused) {
        isHeroUserPaused = false;
        if (activeVideo && canPlayVideo) {
          activeVideo.play().catch(() => {});
        }
        startAutoPlay();
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIcon) playIcon.style.display = 'none';
        playbackBtn.setAttribute('aria-label', 'Pause background video');
        playbackBtn.setAttribute('title', 'Pause background video');
      } else {
        isHeroUserPaused = true;
        if (heroVideo1) heroVideo1.pause();
        if (heroVideo2) heroVideo2.pause();
        stopAutoPlay();
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIcon) playIcon.style.display = 'block';
        playbackBtn.setAttribute('aria-label', 'Play background video');
        playbackBtn.setAttribute('title', 'Play background video');
      }
    });
  }

  // Navigation Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(heroCurrentSlide - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(heroCurrentSlide + 1);
      startAutoPlay();
    });
  }

  // Navigation Dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.slide, 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Slider Mouse & Touch Gestures
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', () => {
      if (!isHeroUserPaused) startAutoPlay();
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) showSlide(heroCurrentSlide + 1);
        else showSlide(heroCurrentSlide - 1);
      }
      if (!isHeroUserPaused) startAutoPlay();
    }, { passive: true });
  }

  // Page Visibility API: Pause video and slider when tab is hidden, resume when tab returns
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (heroVideo1 && !heroVideo1.paused) heroVideo1.pause();
      if (heroVideo2 && !heroVideo2.paused) heroVideo2.pause();
      stopAutoPlay();
    } else {
      if (!isHeroUserPaused) {
        if (heroCurrentSlide === 0 && heroVideo1 && canPlayVideo) {
          heroVideo1.play().catch(() => {});
        } else if (heroCurrentSlide === 1 && heroVideo2 && canPlayVideo) {
          heroVideo2.play().catch(() => {});
        }
        startAutoPlay();
      }
    }
  });

  // Initialize videos asynchronously without delaying first paint
  setupHeroVideos();

  // If video is not loaded (mobile / reduced motion), start autoplay after initial paint
  if (!canPlayVideo) {
    setTimeout(startAutoPlay, 5000);
  }
}

/* ==========================================================================
   4. Category Section Rendering & Navigation
   ========================================================================== */
function initCategorySection() {
  const container = document.getElementById('categoryRail');
  if (!container || !window.GAZEBO_CONFIG?.categories) return;

  container.innerHTML = window.GAZEBO_CONFIG.categories.map(cat => `
    <div class="category-tile" onclick="window.filterByCategory('${cat.id}')">
      <div class="category-tile__media">
        <img class="category-tile__img" src="${cat.image}" alt="${cat.title}" width="400" height="500" loading="lazy" decoding="async" />
        <span class="category-tile__badge">${cat.tag}</span>
        <div class="category-tile__overlay">
          <span class="category-tile__cta">Explore Collection →</span>
        </div>
      </div>
      <div class="category-tile__content">
        <h3 class="category-tile__title">${cat.title}</h3>
        <p class="category-tile__sub">${cat.subTitle} • <span>${cat.itemCount}</span></p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Product Grid & Filter System
   ========================================================================== */
let activeCategory = 'all';
let activeSort = 'featured';

function initProductGrid() {
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid || !window.GAZEBO_CONFIG?.products) return;

  let products = [...window.GAZEBO_CONFIG.products];

  // Category filter
  if (activeCategory !== 'all') {
    products = products.filter(p => p.category === activeCategory);
  }

  // Sort
  if (activeSort === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'newest') {
    products.reverse();
  }

  const countBadge = document.getElementById('productCountBadge');
  if (countBadge) countBadge.textContent = `${products.length} Styles`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="products-empty">
        <p>No products found in this category.</p>
        <button class="btn btn--outline" onclick="window.filterByCategory('all')">View All Styles</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(product => {
    const isWishlisted = window.gazeboStore ? window.gazeboStore.isInWishlist(product.id) : false;
    const discountPercent = product.originalPrice 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
      : 0;

    return `
      <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
        <div class="product-card__media">
          <div class="product-card__image-wrap" onclick="window.openQuickView('${product.id}')">
            <img class="product-card__img product-card__img--primary" src="${product.primaryImage}" alt="${product.name}" width="600" height="750" loading="lazy" decoding="async" />
            <img class="product-card__img product-card__img--secondary" src="${product.secondaryImage}" alt="${product.name} Alternate View" width="600" height="750" loading="lazy" decoding="async" />
          </div>

          ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}

          <button class="product-card__wishlist-btn ${isWishlisted ? 'is-active' : ''}" 
                  data-wishlist-btn 
                  data-product-id="${product.id}"
                  onclick="event.stopPropagation(); window.gazeboStore.toggleWishlist('${product.id}')"
                  title="Add to Wishlist"
                  aria-label="Add to Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <div class="product-card__quick-actions">
            <button class="product-card__quick-view-btn" onclick="window.openQuickView('${product.id}')">
              Quick View
            </button>
            <button class="product-card__quick-add-btn" onclick="window.gazeboStore.addToCart('${product.id}', '${product.sizes[0]}', '${product.colors[0]?.name}')">
              + Quick Add
            </button>
          </div>
        </div>

        <div class="product-card__info">
          <!-- Color Swatches -->
          <div class="product-card__swatches">
            ${product.colors.map((c, i) => `
              <span class="color-dot ${i === 0 ? 'is-active' : ''}" 
                    style="background-color: ${c.hex};" 
                    title="${c.name}"
                    data-color="${c.name}"></span>
            `).join('')}
          </div>

          <h3 class="product-card__title" onclick="window.openQuickView('${product.id}')">
            ${product.name}
          </h3>
          <p class="product-card__fabric">${product.fabric || product.subtitle}</p>

          <div class="product-card__price-row">
            <span class="product-card__price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `
              <span class="product-card__orig-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
              <span class="product-card__discount">${discountPercent}% OFF</span>
            ` : ''}
          </div>

          <!-- Quick Sizes Strip -->
          <div class="product-card__sizes">
            <span class="sizes-label">Sizes:</span>
            ${product.sizes.map(s => `
              <button class="size-pill-mini" onclick="event.stopPropagation(); window.gazeboStore.addToCart('${product.id}', '${s}', '${product.colors[0]?.name}')">${s}</button>
            `).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.gazeboStore) {
    window.gazeboStore.updateWishlistButtons();
  }
}

function initFilterAndSort() {
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      activeCategory = pill.dataset.filter || 'all';
      renderProducts();
    });
  });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }
}

window.filterByCategory = function(category) {
  activeCategory = category;
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(p => {
    p.classList.toggle('is-active', (p.dataset.filter || 'all') === category);
  });

  const sec = document.getElementById('productsSection');
  if (sec) {
    sec.scrollIntoView({ behavior: 'smooth' });
  }
  renderProducts();
};

/* ==========================================================================
   6. Product Quick View Modal
   ========================================================================= */
let currentModalProduct = null;
let currentSelectedSize = null;
let currentSelectedColor = null;

function initQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.getElementById('quickViewClose');
  const overlay = document.getElementById('quickViewOverlay');

  if (closeBtn) closeBtn.addEventListener('click', window.closeQuickView);
  if (overlay) overlay.addEventListener('click', window.closeQuickView);
}

window.openQuickView = function(productId) {
  const product = window.getProductById(productId);
  if (!product) return;

  currentModalProduct = product;
  currentSelectedSize = product.sizes[0];
  currentSelectedColor = product.colors[0]?.name;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('quickViewBody');
  if (!modal || !body) return;

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  body.innerHTML = `
    <div class="qv-grid">
      <!-- Media Gallery -->
      <div class="qv-gallery">
        <div class="qv-main-img-wrap">
          <img id="qvMainImage" class="qv-main-img" src="${product.primaryImage}" alt="${product.name}" />
          ${product.badge ? `<span class="qv-badge">${product.badge}</span>` : ''}
        </div>
        <div class="qv-thumbs">
          <button class="qv-thumb is-active" onclick="window.switchQvImage('${product.primaryImage}', this)">
            <img src="${product.primaryImage}" alt="Front" />
          </button>
          <button class="qv-thumb" onclick="window.switchQvImage('${product.secondaryImage}', this)">
            <img src="${product.secondaryImage}" alt="Alternate View" />
          </button>
        </div>
      </div>

      <!-- Details -->
      <div class="qv-info">
        <div class="qv-brand-tag">GAZEBO • ESTD. 1979</div>
        <h2 class="qv-title">${product.name}</h2>
        <p class="qv-subtitle">${product.subtitle}</p>

        <div class="qv-price-block">
          <span class="qv-price">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.originalPrice ? `
            <span class="qv-orig-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            <span class="qv-discount">${discountPercent}% OFF</span>
          ` : ''}
          <span class="qv-tax-note">Inclusive of all taxes</span>
        </div>

        <p class="qv-desc">${product.description}</p>

        <!-- Color Selector -->
        <div class="qv-option-group">
          <div class="qv-option-header">
            <span class="qv-option-label">Color:</span>
            <span id="qvSelectedColorName" class="qv-option-val">${currentSelectedColor}</span>
          </div>
          <div class="qv-swatches">
            ${product.colors.map((c, i) => `
              <button class="qv-swatch-btn ${i === 0 ? 'is-selected' : ''}" 
                      style="background-color: ${c.hex};" 
                      title="${c.name}"
                      onclick="window.selectQvColor('${c.name}', this)"></button>
            `).join('')}
          </div>
        </div>

        <!-- Size Selector -->
        <div class="qv-option-group">
          <div class="qv-option-header">
            <span class="qv-option-label">Select Size:</span>
            <button class="qv-size-guide-btn" onclick="window.openSizeGuide()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              Size Guide
            </button>
          </div>
          <div class="qv-sizes">
            ${product.sizes.map((s, i) => `
              <button class="qv-size-btn ${i === 0 ? 'is-selected' : ''}" 
                      onclick="window.selectQvSize('${s}', this)">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="qv-cta-row">
          <button class="btn btn--primary btn--lg qv-add-btn" onclick="window.addCurrentToCart()">
            Add to Shopping Bag
          </button>
          <button class="btn btn--outline btn--lg qv-wishlist-btn" onclick="window.gazeboStore.toggleWishlist('${product.id}')">
            Wishlist
          </button>
        </div>

        <!-- Trust Badges -->
        <div class="qv-perks">
          <div class="qv-perk">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>Express Shipping (Pune Flagship)</span>
          </div>
          <div class="qv-perk">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>100% Verified Quality Garments</span>
          </div>
          <div class="qv-perk">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span>Easy 7-Day Hassle-Free Exchange</span>
          </div>
        </div>

        <!-- Fabric & Details List -->
        <div class="qv-specs">
          <h4>Garment Highlights</h4>
          <ul>
            ${product.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('is-open');
  document.body.classList.add('drawer-locked');
};

window.closeQuickView = function() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('is-open');
  if (!document.getElementById('cartDrawer')?.classList.contains('is-open') &&
      !document.getElementById('wishlistDrawer')?.classList.contains('is-open')) {
    document.body.classList.remove('drawer-locked');
  }
};

window.switchQvImage = function(src, btn) {
  const img = document.getElementById('qvMainImage');
  if (img) img.src = src;
  document.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('is-active'));
  if (btn) btn.classList.add('is-active');
};

window.selectQvColor = function(name, btn) {
  currentSelectedColor = name;
  const label = document.getElementById('qvSelectedColorName');
  if (label) label.textContent = name;
  document.querySelectorAll('.qv-swatch-btn').forEach(b => b.classList.remove('is-selected'));
  if (btn) btn.classList.add('is-selected');
};

window.selectQvSize = function(size, btn) {
  currentSelectedSize = size;
  document.querySelectorAll('.qv-size-btn').forEach(b => b.classList.remove('is-selected'));
  if (btn) btn.classList.add('is-selected');
};

window.addCurrentToCart = function() {
  if (currentModalProduct && window.gazeboStore) {
    window.gazeboStore.addToCart(currentModalProduct.id, currentSelectedSize, currentSelectedColor);
    window.closeQuickView();
  }
};

/* ==========================================================================
   7. Size Guide Modal
   ========================================================================== */
function initSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  const closeBtn = document.getElementById('sizeGuideClose');
  const overlay = document.getElementById('sizeGuideOverlay');

  if (closeBtn) closeBtn.addEventListener('click', window.closeSizeGuide);
  if (overlay) overlay.addEventListener('click', window.closeSizeGuide);
}

window.openSizeGuide = function() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) {
    modal.classList.add('is-open');
  }
};

window.closeSizeGuide = function() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) {
    modal.classList.remove('is-open');
  }
};

/* ==========================================================================
   8. Mobile Navigation Drawer & Slide-Down Panel
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('mobileMenuClose');
  const overlay = document.getElementById('mobileMenuOverlay');

  window.closeMobileMenu = function() {
    if (drawer) drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    if (toggleBtn) {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('drawer-locked');
  };

  window.openMobileMenu = function() {
    if (drawer) drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    if (toggleBtn) {
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('drawer-locked');
  };

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('is-open')) {
        window.closeMobileMenu();
      } else {
        window.openMobileMenu();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', window.closeMobileMenu);
  if (overlay) overlay.addEventListener('click', window.closeMobileMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      window.closeMobileMenu();
    }
  });
}

/* ==========================================================================
   9. Newsletter Form Simulation
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterInput');
    const val = input ? input.value.trim() : '';

    if (!val || !val.includes('@')) {
      if (window.gazeboStore) {
        window.gazeboStore.showToast('Please enter a valid email address.', 'error');
      }
      return;
    }

    if (input) input.value = '';
    if (window.gazeboStore) {
      window.gazeboStore.showToast('Welcome to the Gazebo Insiders Club!', 'success');
    }
  });
}
