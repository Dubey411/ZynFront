import React, { useState } from 'react';
import { MessageSquare, X, Search, Wrench, Package, Award } from 'lucide-react';

export default function Hero({ onShopNow, onExploreDeals }) {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="hero-section">
      <div className="container hero-container-wrapper">
        <div className="hero-banner-container">
          {/* Setup Background Image */}
          <img
            src="/images/ChatGPT Image Sep 9, 2026, 12_20_15 PM.png"
            alt="Refurbished PC Components Setup"
            className="hero-backdrop-image"
            onError={(e) => {
              e.target.src =
                '/images/ChatGPT Image Sep 9, 2026, 12_20_15 PM.png';
            }}
          />


          {/* Centered Hero Content (Frame 14432) */}
          <div className="hero-centered-content">
            <div className="hero-text-block">
              <h1 className="hero-title-figma">
                <span className="hero-title-desktop-prefix">Powerful PC Parts. </span>
                <span className="hero-title-main">
                  <span className="hero-title-word">Smarter</span>{' '}
                  <span className="hero-title-word">Prices.</span>
                </span>
              </h1>
              <p className="hero-subtext-figma">
                Certified refurbished components tested for performance and reliability
              </p>
            </div>

            <div className="hero-buttons-row">
              <button className="btn-hero-white" onClick={onShopNow}>
                Shop Refurbished Parts
              </button>
              <button className="btn-hero-trans" onClick={onExploreDeals}>
                <span className="btn-text">Explore Deals</span>
              </button>
            </div>
          </div>

          {/* Floating Chat Widget (White rounded box with black icon matching Figma) */}
          <div className="hero-chat-container">
            {chatOpen && (
              <div className="hero-chat-card">
                <div className="chat-card-header">
                  <span className="chat-wave">👋</span>
                  <span className="chat-heading">“Hi! How can we help ?”</span>
                  <button
                    className="chat-close-btn"
                    onClick={() => setChatOpen(false)}
                    aria-label="Close Chat"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="chat-options-list">
                  <button
                    className="chat-option-chip"
                    onClick={() => {
                      onShopNow();
                      setChatOpen(false);
                    }}
                  >
                    <Search size={14} />
                    <span>Find a product</span>
                  </button>
                  <button
                    className="chat-option-chip"
                    onClick={() => {
                      onShopNow();
                      setChatOpen(false);
                    }}
                  >
                    <Wrench size={14} />
                    <span>Product compatibility</span>
                  </button>
                  <button
                    className="chat-option-chip"
                    onClick={() => alert('Enter your order ID in the tracking section')}
                  >
                    <Package size={14} />
                    <span>Track my order</span>
                  </button>
                  <button
                    className="chat-option-chip"
                    onClick={() => {
                      const el = document.getElementById('faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      setChatOpen(false);
                    }}
                  >
                    <Award size={14} />
                    <span>Warranty & returns</span>
                  </button>
                </div>
              </div>
            )}

            <button
              className="hero-floating-chat-white"
              onClick={() => setChatOpen(!chatOpen)}
              title="Live Support"
              aria-label="Live Support"
            >
              {chatOpen ? (
                <X size={22} color="#000000" />
              ) : (
                <MessageSquare size={22} fill="#000000" color="#000000" />
              )}
            </button>
          </div>

          {/* Bottom Yellow Ticker Strip */}
          <div className="hero-bottom-yellow-strip">
            <span className="strip-item">
              &ldquo;Certified Refurbished PC Parts &ndash; Save Up to 40 %&rdquo;
            </span>
            <span className="strip-item">
              &ldquo;Up to 12 months warranty&rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
