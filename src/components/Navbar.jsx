import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, X, Menu } from 'lucide-react';

export default function Navbar({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onNavClick,
  wishlistCount = 0,
  onOpenWishlist,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'Home' },
    { label: 'Shop', id: 'Shop' },
    { label: 'Deals', id: 'Deals' },
    { label: 'About', id: 'About' },
  ];

  const handleLinkClick = (id) => {
    onNavClick && onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-content">
        {/* Brand Logo */}
        <div className="nav-brand" onClick={() => handleLinkClick('Home')}>
          <span className="brand-logo">LOGO</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Search Bar */}
        <div className="search-container desktop-search">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search PC Component"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Desktop Actions matching Figma Header: Shopping Cart, Solid Black Heart, User Avatar */}
        <div className="nav-actions desktop-actions">
          <button
            className="action-icon-btn cart-icon-btn"
            onClick={onOpenCart}
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={22} color="#000000" strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="action-badge">{cartCount}</span>
            )}
          </button>

          <button
            className="action-icon-btn wishlist-icon-btn"
            onClick={onOpenWishlist}
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart size={20} fill="#000000" color="#000000" strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="action-badge">{wishlistCount}</span>
            )}
          </button>

          <div className="user-avatar-btn" title="Account">
            <img
              src="/images/user-avatar.png"
              alt="User profile"
              className="user-avatar-img"
            />
          </div>
        </div>

        {/* Mobile Header Icons: Search & Hamburger */}
        <div className="mobile-actions">
          <button
            className="action-icon-btn mobile-search-btn"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Toggle Search"
          >
            <Search size={22} />
          </button>

          <button
            className="action-icon-btn mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Expand */}
      {mobileSearchOpen && (
        <div className="mobile-search-bar container">
          <div className="search-container mobile-search-input">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search PC Component"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown (Matching Page 7 of PDF) */}
      {mobileMenuOpen && (
        <nav className="mobile-nav open">
          <div className="container mobile-nav-inner">
            {/* Top row: Avatar, Cart, Wishlist */}
            <div className="mobile-nav-user-row">
              <div className="user-avatar-btn">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="User profile"
                  className="user-avatar-img"
                />
              </div>

              <button
                className="action-icon-btn"
                onClick={() => {
                  onOpenCart();
                  setMobileMenuOpen(false);
                }}
                title="Shopping Cart"
              >
                <ShoppingBag size={22} />
                {cartCount > 0 && <span className="action-badge">{cartCount}</span>}
              </button>

              <button
                className="action-icon-btn"
                onClick={() => {
                  onOpenWishlist && onOpenWishlist();
                  setMobileMenuOpen(false);
                }}
                title="Wishlist"
              >
                <Heart size={22} />
              </button>
            </div>

            {/* Centered links: Home, Shop, Deals, About */}
            <div className="mobile-nav-links-list">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className="mobile-nav-link"
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
