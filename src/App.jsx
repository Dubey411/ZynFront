import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductCard from './components/ProductCard';
import FilterSidebar from './components/FilterSidebar';
import QualityAssurance from './components/QualityAssurance';
import FAQ from './components/FAQ';
import DealsBanner from './components/DealsBanner';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import { PRODUCTS, PRICE_RANGES } from './data/mockData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('refurb_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('refurb_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [visibleCount, setVisibleCount] = useState(10); // Show 10 initially as in Page 3 (2 rows of 5)
  const [mobileCatalogTab, setMobileCatalogTab] = useState('categories');

  const activeFilterCount =
    (selectedCondition ? 1 : 0) +
    (selectedPriceRange ? 1 : 0) +
    selectedComponents.length +
    (sortOption !== 'relevance' ? 1 : 0);

  // Sync cart & wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('refurb_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('refurb_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlist]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Wishlist toggle
  const handleToggleFavorite = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Component filter toggle
  const handleComponentToggle = (component) => {
    setSelectedComponents((prev) =>
      prev.includes(component)
        ? prev.filter((c) => c !== component)
        : [...prev, component]
    );
  };

  // Filter & search logic
  const filteredProducts = useMemo(() => {
    let results = PRODUCTS.filter((product) => {
      // Category
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Condition
      if (selectedCondition && product.condition !== selectedCondition) {
        return false;
      }
      // Price range
      if (selectedPriceRange) {
        const range = PRICE_RANGES.find((r) => r.id === selectedPriceRange);
        if (range) {
          const priceInr = product.price * 83;
          if (priceInr < range.min || priceInr > range.max) return false;
        }
      }
      // Component type mapping
      if (selectedComponents.length > 0) {
        const componentMap = {
          Processor: 'processor',
          'Graphics Card': 'gpu',
          RAM: 'ram',
          SSD: 'ssd',
          'Hard Disk': 'hdd',
          Monitor: 'monitor',
          Keyboard: 'keyboard',
          Mouse: 'mouse',
          Motherboard: 'motherboard',
          Cooler: 'cooler',
          Laptop: 'laptop',
          'Power Supplies': 'power',
        };
        const matchedCategories = selectedComponents.map((c) => componentMap[c]);
        if (!matchedCategories.includes(product.category)) return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesSpecs = product.specs.some((s) => s.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesSpecs) return false;
      }
      return true;
    });

    // Sorting
    switch (sortOption) {
      case 'latest':
        results = [...results].sort((a, b) => b.id - a.id);
        break;
      case 'az':
        results = [...results].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        results = [...results].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-high':
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        results = [...results].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return results;
  }, [
    selectedCategory,
    selectedCondition,
    selectedPriceRange,
    selectedComponents,
    searchQuery,
    sortOption,
  ]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedCondition('');
    setSelectedPriceRange('');
    setSelectedComponents([]);
    setSearchQuery('');
    setSortOption('relevance');
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (link) => {
    if (link === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Shop') {
      scrollToCatalog();
    } else if (link === 'Deals') {
      const el = document.getElementById('deals');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (link === 'About') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* 1. Header (Navbar) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={scrollToCatalog}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavClick={handleNavClick}
      />

      {/* 2. Hero Section */}
      <Hero
        onShopNow={scrollToCatalog}
        onExploreDeals={() => {
          const el = document.getElementById('deals');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Catalog: Filter Sidebar + Categories Bar + Product Grid */}
      <section className="catalog-section" id="catalog">
        <div className="container">
          {/* Mobile Catalog Header Tabs matching Figma Mobile */}
          <div className="mobile-catalog-tabs">
            <button
              type="button"
              className={`mobile-catalog-tab-btn ${mobileCatalogTab === 'filter' ? 'active' : ''}`}
              onClick={() => setMobileCatalogTab('filter')}
            >
              Filter
              {activeFilterCount > 0 && (
                <span className="mobile-tab-count">{activeFilterCount}</span>
              )}
            </button>
            <button
              type="button"
              className={`mobile-catalog-tab-btn ${mobileCatalogTab === 'categories' ? 'active' : ''}`}
              onClick={() => setMobileCatalogTab('categories')}
            >
              Categories
            </button>
          </div>

          <div className="catalog-master-layout">
            {/* Left Sidebar: Filter Accordion (Page 3 & 15-19) */}
            <div className={`catalog-left-sidebar ${mobileCatalogTab === 'filter' ? 'mobile-visible' : 'mobile-hidden'}`}>
              <FilterSidebar
                selectedCondition={selectedCondition}
                onConditionChange={setSelectedCondition}
                selectedPriceRange={selectedPriceRange}
                onPriceRangeChange={setSelectedPriceRange}
                selectedComponents={selectedComponents}
                onComponentToggle={handleComponentToggle}
                sortOption={sortOption}
                onSortChange={setSortOption}
                onApplyFilters={() => setMobileCatalogTab('categories')}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Right Main Area: Categories Bar + Best Seller Grid */}
            <div className={`catalog-main-area ${mobileCatalogTab === 'categories' ? 'mobile-visible' : 'mobile-hidden'}`}>
              {/* Category Grid */}
              <div className="catalog-categories-wrap">
                <CategoryGrid
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>

              {/* Best Seller Section (Frame 14435: 1152px Fill, Hug 806px, Gap 32px) */}
              <div className="best-seller-container">
                <h2 className="best-seller-title-figma">Best Seller Product</h2>

                <div className="best-seller-products-grid">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, visibleCount).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        onQuickView={setQuickViewProduct}
                        isFavorite={wishlist.includes(product.id)}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))
                  ) : (
                    <div className="empty-catalog">
                      <h3>No components match your filters</h3>
                      <p>Try clearing filters or adjusting your selections.</p>
                      <button className="btn btn-outline btn-sm" onClick={handleResetFilters}>
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </div>

                {filteredProducts.length > 10 && (
                  <div className="view-all-center-row">
                    <button
                      className="btn-view-all-dark"
                      onClick={() => {
                        if (visibleCount > 10) {
                          setVisibleCount(10);
                        } else {
                          setVisibleCount(filteredProducts.length);
                        }
                      }}
                    >
                      <span>View All</span>
                      <span className="view-all-arrow-box">
                        <ArrowDown className="arrow-down-icon" size={16} />
                        <ArrowUpRight className="arrow-up-right-icon" size={16} />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 14433: Vertical flow, Width Fill (1483px), Height Hug (1149px), Gap 64px */}
      <section className="frame-14433-section">
        <div className="frame-14433-container">
          {/* Refurbishment Process (Frame 14419) */}
          <QualityAssurance />

          {/* Questions on your mind ? (Frame 14397) */}
          <FAQ />
        </div>
      </section>

      {/* 6. Limited Time Deal */}
      <DealsBanner
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          scrollToCatalog();
        }}
        onViewAllDeals={scrollToCatalog}
      />

      {/* 7. Customer Review */}
      <Reviews />

      {/* 8. Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
