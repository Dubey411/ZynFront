import React from 'react';

export default function Hero({ onShopNow, onExploreDeals }) {
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
                <span className="hero-line hero-line-1">Powerful</span>{' '}
                <span className="hero-line hero-line-2">PC Parts.</span>{' '}
                <span className="hero-line hero-line-3">Smarter</span>{' '}
                <span className="hero-line hero-line-4">Prices.</span>
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
