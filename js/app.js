/**
 * Gazebo E-Commerce - Core Application Logic & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementBar();
  initHeaderScroll();
  initGenderTabs();
  initHeroSlider();
  initCategorySection();
  initOccasionSection();
  initPromosSection();
  initCutSizeBanner();
  initProductGrid();
  initFilterAndSort();
  initQuickViewModal();
  initSizeGuideModal();
  initMobileMenu();
  initNewsletter();
  initPDPPage();
  initPLPPage();
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
   3. Hero Banner Slider (Triple Video Backgrounds + Lazy Loading)
   ========================================================================== */
let heroCurrentSlide = 0;
let heroTimer = null;
let isHeroUserPaused = false;
let heroVideo1Ready = false;
let heroVideo2Loaded = false;
let heroVideo2Ready = false;
let heroVideo3Loaded = false;
let heroVideo3Ready = false;

function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-arrow--prev');
  const nextBtn = document.querySelector('.hero-arrow--next');
  const heroVideo1 = document.getElementById('heroVideo1');
  const heroVideo2 = document.getElementById('heroVideo2');
  const heroVideo3 = document.getElementById('heroVideo3');
  const playbackBtn = document.getElementById('heroPlaybackBtn');

  if (!slides.length) return;

  // Gate video playback based on mobile (<=768px unless fast connection and no data saver), prefers-reduced-motion, or data saver
  const isMobile = window.innerWidth <= 768;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);
  const isFastConnection = Boolean(navigator.connection && navigator.connection.effectiveType === '4g');
  const canPlayVideo = (!isMobile || (isFastConnection && !saveData)) && !prefersReducedMotion && !saveData;

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

  // Load Slide 3's video on demand (when it becomes the next slide or is navigated to)
  function loadHeroVideo3() {
    if (heroVideo3Loaded || !heroVideo3 || !canPlayVideo) return;
    heroVideo3Loaded = true;

    const sources = heroVideo3.querySelectorAll('source[data-src]');
    sources.forEach(s => {
      s.src = s.getAttribute('data-src');
      s.removeAttribute('data-src');
    });

    heroVideo3.preload = 'metadata';
    heroVideo3.load();

    heroVideo3.addEventListener('playing', () => {
      heroVideo3.classList.add('is-ready');
      heroVideo3Ready = true;
    }, { once: true });

    heroVideo3.addEventListener('canplay', () => {
      if (!isHeroUserPaused && heroCurrentSlide === 2) {
        heroVideo3.play().catch(() => {});
      }
    });
  }

  function setupHeroVideos() {
    if (!canPlayVideo) {
      // Under 768px, reduced motion, or data saver: show only posters, never download video
      if (heroVideo1) heroVideo1.style.display = 'none';
      if (heroVideo2) heroVideo2.style.display = 'none';
      if (heroVideo3) heroVideo3.style.display = 'none';
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
        // Slide 1 active: play heroVideo1, pause others, preload next slide video
        loadHeroVideo2();
        if (heroVideo2 && !heroVideo2.paused) heroVideo2.pause();
        if (heroVideo3 && !heroVideo3.paused) heroVideo3.pause();
        if (heroVideo1 && !isHeroUserPaused && !document.hidden) {
          heroVideo1.play().catch(() => {});
        }
      } else if (index === 1) {
        // Slide 2 active: make sure video 2 is loaded, play heroVideo2, preload video 3
        loadHeroVideo2();
        loadHeroVideo3();
        if (heroVideo1 && !heroVideo1.paused) heroVideo1.pause();
        if (heroVideo3 && !heroVideo3.paused) heroVideo3.pause();
        if (heroVideo2 && !isHeroUserPaused && !document.hidden) {
          heroVideo2.play().catch(() => {});
        }
      } else if (index === 2) {
        // Slide 3 active: make sure video 3 is loaded, play heroVideo3, pause others
        loadHeroVideo3();
        if (heroVideo1 && !heroVideo1.paused) heroVideo1.pause();
        if (heroVideo2 && !heroVideo2.paused) heroVideo2.pause();
        if (heroVideo3 && !isHeroUserPaused && !document.hidden) {
          heroVideo3.play().catch(() => {});
        }
      }
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (isHeroUserPaused) return;

    // 8.2s for video slides on desktop, 5.5s on mobile/reduced motion
    const interval = canPlayVideo ? 8200 : 5500;
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
      const activeVideo = (heroCurrentSlide === 0) ? heroVideo1 : (heroCurrentSlide === 1 ? heroVideo2 : heroVideo3);

      if (isHeroUserPaused) {
        isHeroUserPaused = false;
        if (activeVideo && canPlayVideo) {
          activeVideo.play().catch(() => {});
        }
        startAutoPlay();
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIcon) playIcon.style.display = 'none';
        playbackBtn.setAttribute('aria-label', 'Pause slideshow');
        playbackBtn.setAttribute('title', 'Pause slideshow');
      } else {
        isHeroUserPaused = true;
        if (heroVideo1) heroVideo1.pause();
        if (heroVideo2) heroVideo2.pause();
        if (heroVideo3) heroVideo3.pause();
        stopAutoPlay();
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIcon) playIcon.style.display = 'block';
        playbackBtn.setAttribute('aria-label', 'Play slideshow');
        playbackBtn.setAttribute('title', 'Play slideshow');
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
      if (heroVideo3 && !heroVideo3.paused) heroVideo3.pause();
      stopAutoPlay();
    } else {
      if (!isHeroUserPaused) {
        if (heroCurrentSlide === 0 && heroVideo1 && canPlayVideo) {
          heroVideo1.play().catch(() => {});
        } else if (heroCurrentSlide === 1 && heroVideo2 && canPlayVideo) {
          heroVideo2.play().catch(() => {});
        } else if (heroCurrentSlide === 2 && heroVideo3 && canPlayVideo) {
          heroVideo3.play().catch(() => {});
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
        <img class="category-tile__img" src="${cat.image}" alt="${cat.title}" width="600" height="800" loading="lazy" decoding="async" />
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
   4B. Shop By Occasion (Snitch Style Carousel)
   ========================================================================== */
function initOccasionSection() {
  const container = document.getElementById('occasionRail');
  if (!container || !window.GAZEBO_CONFIG?.occasions) return;

  container.innerHTML = window.GAZEBO_CONFIG.occasions.map(occ => `
    <div class="occasion-card" onclick="window.filterByCategory('${occ.categoryFilter || 'all'}')">
      <img class="occasion-card__img" src="${occ.image}" alt="${occ.title}" width="600" height="800" loading="lazy" decoding="async" />
      <span class="occasion-card__badge">${occ.tag}</span>
      <div class="occasion-card__overlay"></div>
      <div class="occasion-card__content">
        <h3 class="occasion-card__title">${occ.title}</h3>
        <p class="occasion-card__sub">${occ.subTitle}</p>
        <span class="occasion-card__cta">Explore Edit &rarr;</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4C. Special Edits & Value Promos
   ========================================================================== */
function initPromosSection() {
  const container = document.getElementById('promosGrid');
  if (!container || !window.GAZEBO_CONFIG?.promos) return;

  container.innerHTML = window.GAZEBO_CONFIG.promos.map(p => `
    <div class="promo-card" onclick="window.filterByCategory('${p.filter || 'all'}')">
      <img class="promo-card__img" src="${p.image}" alt="${p.title}" width="600" height="800" loading="lazy" decoding="async" />
      <span class="promo-card__badge">${p.tag}</span>
      <div class="promo-card__overlay"></div>
      <div class="promo-card__content">
        <h3 class="promo-card__title">${p.title}</h3>
        <p class="promo-card__sub">${p.subTitle}</p>
        <span class="promo-card__btn">${p.cta} &rarr;</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4D. Shop Your Size (Cut Size Banner)
   ========================================================================== */
let activeSize = 'all';

function initCutSizeBanner() {
  const pills = document.querySelectorAll('.cut-size-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const size = pill.dataset.size || 'all';
      window.filterBySize(size);
    });
  });
}

window.filterBySize = function(size) {
  activeSize = size;
  const pills = document.querySelectorAll('.cut-size-pill');
  pills.forEach(p => p.classList.toggle('is-active', (p.dataset.size || 'all') === size));

  const countBadge = document.getElementById('productCountBadge');
  if (countBadge && size !== 'all') {
    countBadge.textContent = `Size ${size} Styles`;
  }

  const sec = document.getElementById('productsSection');
  if (sec) {
    sec.scrollIntoView({ behavior: 'smooth' });
  }
  renderProducts();
};

/* ==========================================================================
   5. Product Grid & Filter System
   ========================================================================== */
let activeCategory = 'all';
let activeSort = 'featured';

function initProductGrid() {
  renderProducts();
  renderCategoryPageGrid();
}

function renderCategoryPageGrid() {
  const catGrid = document.getElementById('categoryProductGrid');
  if (!catGrid) return;
  const category = catGrid.dataset.category || 'all';
  const products = (typeof window.getProductsByCategory === 'function') 
    ? window.getProductsByCategory(category)
    : (window.GAZEBO_PRODUCTS || []).filter(p => p.category === category);
  
  if (!products || products.length === 0) return;
  
  catGrid.innerHTML = products.map(product => `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
      <div class="product-card__media">
        <div class="product-card__image-wrap" onclick="location.href='product.html'">
          <img class="product-card__img product-card__img--primary" 
               src="${product.image || product.primaryImage}" 
               alt="${product.name}" 
               width="600" height="800" 
               loading="lazy" decoding="async"
               style="object-fit: cover; object-position: center top;" />
        </div>
      </div>
      <div class="product-card__info">
        <h3 class="product-card__title"><a href="product.html">${product.name}</a></h3>
        <div class="product-card__price-row">
          <span class="product-card__price">${product.priceDisplay || '₹ ' + (product.price || 0).toFixed(2)}</span>
        </div>
        <button class="btn btn-sm btn-outline w-100" onclick="window.gazeboCart ? window.gazeboCart.addItem('${product.id}') : null">Add to Cart</button>
      </div>
    </article>
  `).join('');
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid || !window.GAZEBO_CONFIG?.products) return;

  let products = [...window.GAZEBO_CONFIG.products];

  // Category filter
  if (activeCategory !== 'all') {
    products = products.filter(p => p.category === activeCategory);
  }

  // Size filter from Cut Size Banner
  if (activeSize !== 'all') {
    products = products.filter(p => p.sizes && p.sizes.includes(activeSize));
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
          <div class="product-card__image-wrap" onclick="location.href='product.html?id=' + encodeURIComponent('${product.id}')">
            <img class="product-card__img product-card__img--primary" src="${product.primaryImage}" alt="${product.name}" width="600" height="800" loading="lazy" decoding="async" />
            <img class="product-card__img product-card__img--secondary" src="${product.secondaryImage}" alt="${product.name} Detail View" width="600" height="800" loading="lazy" decoding="async" />
          </div>

          ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}

          <button class="product-card__wishlist-btn ${isWishlisted ? 'is-active' : ''}" 
                  data-wishlist-btn 
                  data-product-id="${product.id}"
                  onclick="event.stopPropagation(); window.gazeboStore.toggleWishlist('${product.id}')"
                  title="Add to Wishlist"
                  aria-label="Add to Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? '#EE5824' : 'none'}" stroke="${isWishlisted ? '#EE5824' : 'currentColor'}" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <!-- Slide-up size bar on hover (Snitch style) -->
          <div class="product-card__size-bar" aria-label="Select size to add">
            <span class="product-card__size-label">Select Size:</span>
            ${product.sizes.map(s => `
              <button type="button" class="product-card__size-btn" onclick="event.stopPropagation(); window.gazeboStore ? window.gazeboStore.addToCart('${product.id}', '${s}', '${product.colors[0]?.name}') : (window.gazeboCart ? window.gazeboCart.addItem('${product.id}') : null);" title="Add size ${s}">${s}</button>
            `).join('')}
          </div>
        </div>

        <div class="product-card__info">
          <h3 class="product-card__title" onclick="location.href='product.html?id=' + encodeURIComponent('${product.id}')">
            ${product.name}
          </h3>
          <div class="product-card__price-row">
            <span class="product-card__price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.originalPrice ? `
              <span class="product-card__orig-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
              <span class="product-card__discount">${discountPercent}% OFF</span>
            ` : ''}
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


/* ==========================================================================
   16. PLP (Category Page) 4-Column Grid & Dynamic Filter Logic
   ========================================================================== */
function initPLPPage() {
  const catGrid = document.getElementById('categoryProductGrid');
  if (!catGrid) return;

  const pageCategory = catGrid.dataset.category || 'all';
  let plpSizeFilter = 'all';
  let plpSortFilter = 'featured';

  function renderPLP() {
    let list = (window.GAZEBO_CONFIG && window.GAZEBO_CONFIG.products) ? [...window.GAZEBO_CONFIG.products] : [];
    
    // Filter by gender or category
    if (pageCategory !== 'all') {
      list = list.filter(p => {
        if (p.gender && p.gender.includes(pageCategory)) return true;
        if (pageCategory === 'men' && (p.category === 'tshirts-polos' || p.category === 'linen-overshirts' || p.category === 'cargos-trousers')) return true;
        if (pageCategory === 'women' && (p.category === 'womens-coords' || p.category === 'womens-tops-pants' || p.category === 'jeans-flares')) return true;
        if (pageCategory === 'kids' && p.category === 'kids-sets') return true;
        return false;
      });
    }

    if (plpSizeFilter !== 'all') {
      list = list.filter(p => p.sizes && p.sizes.includes(plpSizeFilter));
    }

    if (plpSortFilter === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (plpSortFilter === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    }

    const badge = document.getElementById('plpCountBadge') || document.querySelector('.category-mobile-filter-bar span');
    if (badge) {
      badge.textContent = `${list.length} Styles Available`;
    }

    catGrid.className = 'plp-grid-4';
    catGrid.innerHTML = list.map(product => {
      const isWishlisted = window.gazeboStore ? window.gazeboStore.isInWishlist(product.id) : false;
      const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;

      return `
        <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
          <div class="product-card__media">
            <div class="product-card__image-wrap" onclick="location.href='product.html?id=' + encodeURIComponent('${product.id}')">
              <img class="product-card__img product-card__img--primary" src="${product.primaryImage}" alt="${product.name}" width="600" height="800" loading="lazy" decoding="async" />
              <img class="product-card__img product-card__img--secondary" src="${product.secondaryImage}" alt="${product.name} Detail" width="600" height="800" loading="lazy" decoding="async" />
            </div>

            ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}

            <button class="product-card__wishlist-btn ${isWishlisted ? 'is-active' : ''}" 
                    onclick="event.stopPropagation(); window.gazeboStore ? window.gazeboStore.toggleWishlist('${product.id}') : (window.gazeboCart ? window.gazeboCart.toggleWishlist('${product.id}') : null)"
                    title="Add to Wishlist"
                    aria-label="Add to Wishlist">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? '#EE5824' : 'none'}" stroke="${isWishlisted ? '#EE5824' : 'currentColor'}" stroke-width="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <div class="product-card__size-bar" aria-label="Select size to add">
              <span class="product-card__size-label">Select Size:</span>
              ${(product.sizes || ['S', 'M', 'L', 'XL']).map(s => `
                <button type="button" class="product-card__size-btn" onclick="event.stopPropagation(); window.gazeboStore ? window.gazeboStore.addToCart('${product.id}', '${s}', '${product.colors[0]?.name}') : (window.gazeboCart ? window.gazeboCart.addItem('${product.id}') : null);" title="Add size ${s}">${s}</button>
              `).join('')}
            </div>
          </div>

          <div class="product-card__info">
            <h3 class="product-card__title" onclick="location.href='product.html?id=' + encodeURIComponent('${product.id}')">
              ${product.name}
            </h3>
            <div class="product-card__price-row">
              <span class="product-card__price">₹${product.price.toLocaleString('en-IN')}</span>
              ${product.originalPrice ? `
                <span class="product-card__orig-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                <span class="product-card__discount">${discount}% OFF</span>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Bind size filters
  document.querySelectorAll('[data-filter-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-size]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      plpSizeFilter = btn.dataset.filterSize || 'all';
      renderPLP();
    });
  });

  // Bind sort
  const sortSelect = document.getElementById('categorySortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      plpSortFilter = e.target.value;
      renderPLP();
    });
  }

  renderPLP();
}

/* ==========================================================================
   17. PDP (Product Detail Page) Snitch-Style Dynamic View
   ========================================================================== */
function initPDPPage() {
  const container = document.getElementById('pdpMainContainer');
  if (!container || !window.GAZEBO_CONFIG?.products) return;

  const urlParams = new URLSearchParams(window.location.search);
  const prodId = urlParams.get('id') || 'gz-01';
  const product = (typeof window.getProductById === 'function') 
    ? (window.getProductById(prodId) || window.GAZEBO_CONFIG.products[0])
    : (window.GAZEBO_CONFIG.products.find(p => p.id === prodId) || window.GAZEBO_CONFIG.products[0]);

  if (!product) return;

  let selectedSize = product.sizes ? product.sizes[0] : 'M';
  let selectedColor = product.colors ? product.colors[0].name : '';
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const galleryImages = product.gallery && product.gallery.length 
    ? product.gallery 
    : [product.primaryImage, product.secondaryImage, 'assets/images/store/store-01.jpg', 'assets/images/store/store-02.jpg'];

  container.innerHTML = `
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="index.html">Home</a>
      <span>/</span>
      <a href="men.html">Catalog</a>
      <span>/</span>
      <strong>${product.name}</strong>
    </nav>

    <div class="pdp-grid">
      <!-- Gallery Column -->
      <div class="pdp-gallery">
        <div class="pdp-thumbs" id="pdpThumbnails">
          ${galleryImages.map((img, idx) => `
            <button type="button" class="pdp-thumb-btn ${idx === 0 ? 'is-active' : ''}" onclick="window.switchPDPImage('${img}', this)">
              <img src="${img}" alt="${product.name} View ${idx+1}" width="72" height="96" loading="lazy" />
            </button>
          `).join('')}
        </div>
        <div class="pdp-main-media">
          <img id="pdpMainImage" class="pdp-main-img" src="${galleryImages[0]}" alt="${product.name}" width="800" height="1066" />
        </div>
      </div>

      <!-- Info Column -->
      <div class="pdp-info">
        <span class="pdp-brand-eyebrow">GAZEBO FLAGSHIP • ESTD. 1979 • PUNE</span>
        <h1 class="pdp-title">${product.name}</h1>
        
        <div class="pdp-rating-row">
          <span class="pdp-rating-badge">4.8 ★</span>
          <span class="pdp-reviews-count">(142 Verified Reviews)</span>
          <span style="color: #4CAF50; font-size: 0.78rem; font-weight: 700;">• In Stock (Flagship Dispatch)</span>
        </div>

        <div class="pdp-price-row">
          <span class="pdp-price">₹${product.price.toLocaleString('en-IN')}</span>
          ${product.originalPrice ? `<span class="pdp-mrp">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          ${discount > 0 ? `<span class="pdp-discount">${discount}% OFF</span>` : ''}
        </div>
        <p class="pdp-tax-note">Inclusive of all taxes. Free express shipping on all orders.</p>

        <!-- Colors -->
        ${product.colors && product.colors.length ? `
          <div style="margin-bottom: 20px;">
            <div style="font-size: 0.80rem; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">
              Color: <span id="pdpSelectedColor" style="color: #EE5824;">${selectedColor}</span>
            </div>
            <div style="display: flex; gap: 8px;">
              ${product.colors.map((c, i) => `
                <button type="button" class="swatch-btn ${i === 0 ? 'is-active' : ''}" style="background-color: ${c.hex}; width: 28px; height: 28px; border-radius: 50%; border: 2px solid ${i === 0 ? '#000' : '#E0E0E0'}; cursor: pointer;" title="${c.name}" onclick="document.getElementById('pdpSelectedColor').textContent='${c.name}'; document.querySelectorAll('.swatch-btn').forEach(b=>b.style.borderColor='#E0E0E0'); this.style.borderColor='#000';"></button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Sizes -->
        <div class="pdp-size-header">
          <span class="pdp-size-label">Select Size:</span>
          <button type="button" class="pdp-size-guide-btn" onclick="window.openSizeGuideModal()">Size Guide</button>
        </div>
        <div class="pdp-size-pills" id="pdpSizePills">
          ${(product.sizes || ['S', 'M', 'L', 'XL']).map((s, idx) => `
            <button type="button" class="pdp-size-pill ${idx === 0 ? 'is-selected' : ''}" onclick="window.selectPDPSize('${s}', this)">${s}</button>
          `).join('')}
        </div>

        <!-- Actions -->
        <div class="pdp-actions-row">
          <button type="button" class="pdp-add-bag-btn" onclick="window.gazeboStore ? window.gazeboStore.addToCart('${product.id}', window.pdpSelectedSize || '${selectedSize}', '${selectedColor}') : (window.gazeboCart ? window.gazeboCart.addItem('${product.id}') : null)">
            Add To Bag
          </button>
          <button type="button" class="pdp-wishlist-toggle-btn" onclick="window.gazeboStore ? window.gazeboStore.toggleWishlist('${product.id}') : (window.gazeboCart ? window.gazeboCart.toggleWishlist('${product.id}') : null)" title="Save to Wishlist" aria-label="Save to Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>

        <!-- Pincode Delivery Check -->
        <div style="background: #F8F8F8; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
          <div style="font-size: 0.80rem; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">Delivery &amp; Store Availability</div>
          <div style="display: flex; gap: 8px;">
            <input type="text" id="pdpPincodeInput" placeholder="Enter 6-digit Pincode" maxlength="6" style="flex: 1; padding: 8px 12px; font-size: 0.84rem; border: 1px solid #D0D0D0; border-radius: 2px;" />
            <button type="button" class="btn btn--primary" style="padding: 0 16px; font-size: 0.78rem;" onclick="window.checkPincode()">Check</button>
          </div>
          <div id="pdpPincodeResult" style="font-size: 0.76rem; color: #4CAF50; font-weight: 700; margin-top: 6px; display: none;">
            ✓ Express Pan-India delivery available to this pincode in 2-3 business days.
          </div>
        </div>

        <!-- Accordions -->
        <div class="pdp-accordions">
          <!-- Accordion 1 -->
          <div class="pdp-accordion-item is-open">
            <button type="button" class="pdp-accordion-trigger" onclick="this.parentElement.classList.toggle('is-open')">
              <span>Product Details &amp; Fabric Specs</span>
              <span class="pdp-accordion-icon">+</span>
            </button>
            <div class="pdp-accordion-body">
              <p style="margin-bottom: 10px;">${product.description}</p>
              <ul style="padding-left: 18px; margin: 0;">
                ${(product.details || []).map(d => `<li style="margin-bottom: 4px;">${d}</li>`).join('')}
                <li>Fabric Composition: ${product.fabric}</li>
                <li>Origin: Pune Flagship Atelier (Estd. 1979)</li>
              </ul>
            </div>
          </div>

          <!-- Accordion 2 -->
          <div class="pdp-accordion-item">
            <button type="button" class="pdp-accordion-trigger" onclick="this.parentElement.classList.toggle('is-open')">
              <span>Model &amp; Fit Information</span>
              <span class="pdp-accordion-icon">+</span>
            </button>
            <div class="pdp-accordion-body">
              <p>${product.modelInfo || "Model is 6'1\" (185 cm) wearing size Large (Drop-Shoulder Boxy Fit)."}</p>
              <p style="margin-top: 6px; color: #777777;">Fit tip: For an oversized streetwear aesthetic, select true to size. For standard classic silhouette, size down by one.</p>
            </div>
          </div>

          <!-- Accordion 3 -->
          <div class="pdp-accordion-item">
            <button type="button" class="pdp-accordion-trigger" onclick="this.parentElement.classList.toggle('is-open')">
              <span>Wash &amp; Garment Care</span>
              <span class="pdp-accordion-icon">+</span>
            </button>
            <div class="pdp-accordion-body">
              <p>${product.washCare || 'Machine wash cold with similar shades. Bio-washed pre-shrunk cotton. Do not bleach. Flat dry in shade.'}</p>
            </div>
          </div>

          <!-- Accordion 4 -->
          <div class="pdp-accordion-item">
            <button type="button" class="pdp-accordion-trigger" onclick="this.parentElement.classList.toggle('is-open')">
              <span>About Gazebo (Heritage 1979)</span>
              <span class="pdp-accordion-icon">+</span>
            </button>
            <div class="pdp-accordion-body">
              <p>Founded on M.G. Road in Pune in 1979, Gazebo has mastered 45+ years of garment craftsmanship. Every piece embodies deliberate tailoring, heavyweight textiles, and everyday durability.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Related Products Carousel -->
    <section style="margin: 64px 0 32px;">
      <div class="section-header--snitch">
        <div>
          <span class="section-eyebrow">Pair It With</span>
          <h2 class="section-main-title">Complete The Look</h2>
        </div>
      </div>
      <div class="plp-grid-4">
        ${window.GAZEBO_CONFIG.products.filter(p => p.id !== product.id).slice(0, 4).map(p => `
          <article class="product-card" onclick="location.href='product.html?id=' + encodeURIComponent('${p.id}')">
            <div class="product-card__media">
              <img class="product-card__img" src="${p.primaryImage}" alt="${p.name}" width="600" height="800" loading="lazy" decoding="async" />
            </div>
            <div class="product-card__info">
              <h3 class="product-card__title">${p.name}</h3>
              <div class="product-card__price-row">
                <span class="product-card__price">₹${p.price.toLocaleString('en-IN')}</span>
                ${p.originalPrice ? `<span class="product-card__orig-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

window.switchPDPImage = function(imgSrc, btn) {
  const mainImg = document.getElementById('pdpMainImage');
  if (mainImg) {
    mainImg.src = imgSrc;
  }
  document.querySelectorAll('.pdp-thumb-btn').forEach(b => b.classList.remove('is-active'));
  if (btn) btn.classList.add('is-active');
};

window.selectPDPSize = function(size, btn) {
  window.pdpSelectedSize = size;
  document.querySelectorAll('.pdp-size-pill').forEach(b => b.classList.remove('is-selected'));
  if (btn) btn.classList.add('is-selected');
};

window.checkPincode = function() {
  const val = document.getElementById('pdpPincodeInput')?.value.trim();
  const res = document.getElementById('pdpPincodeResult');
  if (res) {
    if (val && val.length === 6 && /^\d+$/.test(val)) {
      res.style.display = 'block';
      res.textContent = `✓ Express Pan-India delivery verified for pincode ${val} (2-3 business days)`;
    } else {
      res.style.display = 'block';
      res.style.color = '#F44336';
      res.textContent = 'Please enter a valid 6-digit Indian pincode.';
    }
  }
};
