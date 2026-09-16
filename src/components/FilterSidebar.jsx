import React, { useState } from 'react';
import { ChevronRight, ChevronDown, X } from 'lucide-react';
import { PRICE_RANGES, CONDITIONS, COMPONENT_TYPES, SORT_OPTIONS } from '../data/mockData';

export default function FilterSidebar({
  selectedCondition,
  onConditionChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedComponents,
  onComponentToggle,
  sortOption,
  onSortChange,
  onApplyFilters,
  onResetFilters,
  onClose,
}) {
  // Accordion open states matching Figma Component variants
  const [openSections, setOpenSections] = useState({
    component: false,
    price: false,
    condition: false,
    sort: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="filter-accordion-card">
      {/* Header */}
      <div className="filter-card-header">
        <h3 className="filter-card-title">Filter</h3>
        <button
          className="filter-close-btn"
          onClick={onResetFilters}
          title="Reset All Filters"
          aria-label="Reset All Filters"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* Accordion Group 1: Component */}
      <div className={`filter-accordion-item-card ${openSections.component ? 'is-open' : ''}`}>
        <button
          type="button"
          className="filter-accordion-header-btn"
          onClick={() => toggleSection('component')}
        >
          <span>Component</span>
          {openSections.component ? (
            <ChevronDown size={18} className="filter-chevron" />
          ) : (
            <ChevronRight size={18} className="filter-chevron" />
          )}
        </button>

        <div className={`filter-accordion-content-wrapper ${openSections.component ? 'is-open' : ''}`}>
          <div className="filter-accordion-content-inner">
            <div className="filter-options-column">
              {COMPONENT_TYPES.map((comp) => (
                <label key={comp} className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    value={comp}
                    checked={selectedComponents.includes(comp)}
                    onChange={(e) => onComponentToggle(e.target.value)}
                  />
                  <span>{comp}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Group 2: Price */}
      <div className={`filter-accordion-item-card ${openSections.price ? 'is-open' : ''}`}>
        <button
          type="button"
          className="filter-accordion-header-btn"
          onClick={() => toggleSection('price')}
        >
          <span>Price</span>
          {openSections.price ? (
            <ChevronDown size={18} className="filter-chevron" />
          ) : (
            <ChevronRight size={18} className="filter-chevron" />
          )}
        </button>

        <div className={`filter-accordion-content-wrapper ${openSections.price ? 'is-open' : ''}`}>
          <div className="filter-accordion-content-inner">
            <div className="filter-options-column">
              {PRICE_RANGES.map((range) => (
                <label key={range.id} className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    name="price"
                    value={range.id}
                    checked={selectedPriceRange === range.id}
                    onChange={() => onPriceRangeChange(selectedPriceRange === range.id ? '' : range.id)}
                  />
                  <span>{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Group 3: Condition */}
      <div className={`filter-accordion-item-card ${openSections.condition ? 'is-open' : ''}`}>
        <button
          type="button"
          className="filter-accordion-header-btn"
          onClick={() => toggleSection('condition')}
        >
          <span>Condition</span>
          {openSections.condition ? (
            <ChevronDown size={18} className="filter-chevron" />
          ) : (
            <ChevronRight size={18} className="filter-chevron" />
          )}
        </button>

        <div className={`filter-accordion-content-wrapper ${openSections.condition ? 'is-open' : ''}`}>
          <div className="filter-accordion-content-inner">
            <div className="filter-options-column">
              {CONDITIONS.map((cond) => (
                <label key={cond} className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    name="condition"
                    value={cond}
                    checked={selectedCondition === cond}
                    onChange={() => onConditionChange(selectedCondition === cond ? '' : cond)}
                  />
                  <span>{cond}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Group 4: Sort */}
      <div className={`filter-accordion-item-card ${openSections.sort ? 'is-open' : ''}`}>
        <button
          type="button"
          className="filter-accordion-header-btn"
          onClick={() => toggleSection('sort')}
        >
          <span>Sort</span>
          {openSections.sort ? (
            <ChevronDown size={18} className="filter-chevron" />
          ) : (
            <ChevronRight size={18} className="filter-chevron" />
          )}
        </button>

        <div className={`filter-accordion-content-wrapper ${openSections.sort ? 'is-open' : ''}`}>
          <div className="filter-accordion-content-inner">
            <div className="filter-options-column">
              {SORT_OPTIONS.map((opt) => (
                <label key={opt.id} className="filter-radio-row">
                  <input
                    type="radio"
                    name="sort"
                    value={opt.id}
                    checked={sortOption === opt.id}
                    onChange={(e) => onSortChange(e.target.value)}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <button
        type="button"
        className="btn-filter-apply"
        onClick={() => {
          onApplyFilters && onApplyFilters();
        }}
      >
        Apply
      </button>
    </aside>
  );
}
