import React from 'react';
import { X, ShieldCheck, Star, ShoppingCart, Check } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="product-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Left: Image showcase */}
          <div className="modal-image-col">
            <img
              src={product.image}
              alt={product.name}
              className="modal-main-img"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop&q=80';
              }}
            />
            <div className="modal-badge-row">
              <span className="badge-condition">
                Condition : {product.condition}
              </span>
              <span className="modal-warranty-pill">{product.warranty || '12 months warranty'}</span>
            </div>
          </div>

          {/* Right: Info & Specs */}
          <div className="modal-info-col">
            <span className="modal-brand">{product.brand}</span>
            <h2 className="modal-title">{product.name}</h2>

            <div className="modal-rating-row">
              <div className="stars-group">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < Math.floor(product.rating || 5) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="rating-score">{product.rating}</span>
              <span className="rating-count">({product.reviewsCount || 89} reviews)</span>
            </div>

            <div className="modal-price-box">
              <span className="modal-price">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <span className="modal-original-price">${product.originalPrice.toFixed(2)}</span>
              )}
              {discountPercent > 0 && (
                <span className="modal-save-pill">Save {discountPercent}%</span>
              )}
            </div>

            {product.specs && product.specs.length > 0 && (
              <div className="modal-specs-block">
                <strong>Specifications:</strong>
                <div className="modal-spec-chips">
                  {product.specs.map((s, idx) => (
                    <span key={idx} className="spec-tag">{s}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-inspection-card">
              <div className="inspection-header">
                <ShieldCheck size={18} className="inspection-icon" />
                <strong>Certification Pass</strong>
              </div>
              <ul className="inspection-list">
                <li><Check size={14} /> Thermal stress tested</li>
                <li><Check size={14} /> Heatsink cleaned</li>
                <li><Check size={14} /> Ports verified</li>
              </ul>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-primary btn-block"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <ShoppingCart size={18} />
                <span>Add To Cart - ${product.price.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
