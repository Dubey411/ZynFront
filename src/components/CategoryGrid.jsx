import React from 'react';
import { CATEGORIES } from '../data/mockData';

export default function CategoryGrid({ selectedCategory, onSelectCategory }) {
  return (
    <div className="categories-block-card">
      <h3 className="categories-heading-figma">Categories</h3>

      <div className="category-cards-scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`category-item-card ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <div className="category-img-box">
              <img
                src={cat.image}
                alt={cat.name}
                className="category-thumb"
                loading="lazy"
              />
            </div>
            <span className="category-label">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
