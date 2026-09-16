import React from 'react';
import { Star, Heart } from 'lucide-react';

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  isFavorite = false,
  onToggleFavorite,
}) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      {/* 136px height clean image container */}
      <div
        className="product-image-container"
        onClick={() => onQuickView && onQuickView(product)}
        title="Click to view details"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop&q=80';
          }}
        />
      </div>

      {/* Condition label: centered */}
      <div className="product-condition">Condition : {product.condition}</div>

      {/* Product title: Poppins 12px, 2 lines clamp */}
      <h3
        className="product-title"
        title={product.name}
        onClick={() => onQuickView && onQuickView(product)}
      >
        {product.name}
      </h3>

      {/* Frame 14360: Price & Rating Container (Fill 192px, Hug 52px, Gap 4px) */}
      <div className="product-price-frame-14360">
        {/* Price row 1: Price 20px Medium left, Black ★ rating & wishlist heart right */}
        <div className="product-price-row-1">
          <span className="product-sale-price">$ {product.price.toFixed(2)}</span>
          <div className="product-rating-inline">
            <span className="star-icon-black">★</span>
            <span className="rating-score-num">{product.rating}</span>
            <button
              type="button"
              className={`product-wishlist-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite && onToggleFavorite(product.id);
              }}
              title="Add to wishlist"
              aria-label="Add to wishlist"
            >
              <Heart
                size={16}
                fill={isFavorite ? '#000000' : 'none'}
                color="#000000"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* Price row 2: Strike original price + Save badge side by side */}
        <div className="product-price-row-2">
          {product.originalPrice > product.price && (
            <span className="product-orig-price">$ {product.originalPrice.toFixed(2)}</span>
          )}
          {discountPercent > 0 && (
            <span className="product-save-badge">Save {discountPercent}%</span>
          )}
        </div>
      </div>

      {/* Add to Cart pill button */}
      <button
        type="button"
        className="btn-card-add-cart"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
