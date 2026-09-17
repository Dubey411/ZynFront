import React, { useState, useRef, useEffect } from 'react';

const QUICK_OPTIONS = [
  { id: 'help', emoji: '👋', label: '"Hi! How can we help ?"' },
  { id: 'search', emoji: '🔍', label: 'Find a product' },
  { id: 'compatibility', emoji: '🔧', label: 'Product compatibility' },
  { id: 'track', emoji: '📦', label: 'Track my order' },
  { id: 'warranty', emoji: '🎗️', label: 'Warranty & returns' },
];

export default function ChatWidget({ onSelectOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  const handleOptionClick = (opt) => {
    setIsOpen(false);
    if (onSelectOption) {
      onSelectOption(opt);
    } else {
      if (opt.id === 'search') {
        const searchInput = document.querySelector('.search-input') || document.querySelector('.mobile-search-overlay input');
        if (searchInput) {
          searchInput.focus();
        }
      }
    }
  };

  return (
    <div className="chat-widget-root" ref={widgetRef}>
      {/* Options Stack (Frame 14448) */}
      <div className={`chat-widget-panel ${isOpen ? 'is-open' : ''}`}>
        {QUICK_OPTIONS.map((opt, i) => (
          <button
            key={opt.id}
            className="chat-widget-option-pill"
            style={{
              transitionDelay: isOpen
                ? `${(QUICK_OPTIONS.length - 1 - i) * 40}ms`
                : `${i * 30}ms`,
            }}
            onClick={() => handleOptionClick(opt)}
          >
            <span className="chat-widget-option-emoji">{opt.emoji}</span>
            <span className="chat-widget-option-label">{opt.label}</span>
          </button>
        ))}
      </div>

      {/* Floating Chat Button (Frame 14463) */}
      <button
        className={`chat-widget-btn ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Support chat"
        type="button"
      >
        <div className="chat-widget-icon-wrapper">
          {/* Default Figma Chat Bubble with 3 dots */}
          <svg
            className="chat-widget-svg chat-widget-svg--chat"
            width="34"
            height="34"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M6 7C6 5.34315 7.34315 4 9 4H23C24.6569 4 26 5.34315 26 7V19C26 20.6569 24.6569 22 23 22H15L9.5 26.5C8.6 27.2 7.2 26.6 7.2 25.4V22H6C4.34315 22 3 20.6569 3 19V7C3 5.34315 4.34315 4 6 4"
              fill="#000000"
            />
            {/* 3 white dots */}
            <circle cx="10.5" cy="13" r="1.8" fill="#FFFFFF" />
            <circle cx="16" cy="13" r="1.8" fill="#FFFFFF" />
            <circle cx="21.5" cy="13" r="1.8" fill="#FFFFFF" />
          </svg>

          {/* Close 'X' when open */}
          <svg
            className="chat-widget-svg chat-widget-svg--close"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <line x1="18" y1="6" x2="6" y2="18" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>
    </div>
  );
}
