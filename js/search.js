/**
 * Gazebo E-Commerce - Interactive Live Search
 */

(function() {
  let searchModal = null;
  let searchInput = null;
  let searchResults = null;
  let popularTags = null;
  let emptyState = null;

  function initSearch() {
    searchModal = document.getElementById('searchModal');
    searchInput = document.getElementById('searchInputField');
    searchResults = document.getElementById('searchResultsList');
    popularTags = document.getElementById('searchPopularTags');
    emptyState = document.getElementById('searchEmptyState');

    if (!searchModal || !searchInput) return;

    // Search input listener
    searchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value.trim());
    });

    // Clear input button
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        handleSearch('');
      });
    }

    // Popular tag clicks
    document.querySelectorAll('.search-tag-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.dataset.query || chip.textContent.trim();
        searchInput.value = query;
        handleSearch(query);
      });
    });
  }

  function handleSearch(query) {
    if (!searchResults) return;

    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? 'inline-flex' : 'none';
    }

    if (!query) {
      searchResults.innerHTML = '';
      if (popularTags) popularTags.style.display = 'block';
      if (emptyState) emptyState.style.display = 'none';
      return;
    }

    if (popularTags) popularTags.style.display = 'none';

    const q = query.toLowerCase();
    const products = window.GAZEBO_CONFIG?.products || [];
    
    const matches = products.filter(p => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.fabric && p.fabric.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q)) ||
        (p.colors && p.colors.some(c => c.name.toLowerCase().includes(q)))
      );
    });

    if (matches.length === 0) {
      searchResults.innerHTML = '';
      if (emptyState) {
        emptyState.style.display = 'block';
        const queryDisplay = document.getElementById('searchEmptyQuery');
        if (queryDisplay) queryDisplay.textContent = `"${query}"`;
      }
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    searchResults.innerHTML = `
      <div class="search-results-header">
        <span>Found <strong>${matches.length}</strong> styles for "${query}"</span>
      </div>
      <div class="search-results-grid">
        ${matches.map(p => `
          <div class="search-result-card" onclick="window.closeSearchModal(); window.openQuickView('${p.id}')">
            <img class="search-result-card__img" src="${p.primaryImage}" alt="${p.name}" loading="lazy" />
            <div class="search-result-card__info">
              <span class="search-result-card__cat">${p.category.toUpperCase()}</span>
              <h4 class="search-result-card__title">${p.name}</h4>
              <p class="search-result-card__fabric">${p.fabric || p.subtitle}</p>
              <div class="search-result-card__price">
                <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
                ${p.originalPrice ? `<span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
              </div>
            </div>
            <button class="search-result-card__btn" title="Quick View">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  window.openSearchModal = function() {
    if (!searchModal) searchModal = document.getElementById('searchModal');
    if (!searchInput) searchInput = document.getElementById('searchInputField');
    if (searchModal) {
      searchModal.classList.add('is-open');
      document.body.classList.add('drawer-locked');
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  window.closeSearchModal = function() {
    if (searchModal) {
      searchModal.classList.remove('is-open');
      if (!document.getElementById('cartDrawer')?.classList.contains('is-open') &&
          !document.getElementById('wishlistDrawer')?.classList.contains('is-open')) {
        document.body.classList.remove('drawer-locked');
      }
    }
  };

  window.addEventListener('DOMContentLoaded', initSearch);
})();
