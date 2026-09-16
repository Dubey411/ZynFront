import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function DealsBanner({ onSelectCategory, onViewAllDeals }) {
  const [activeDealCard, setActiveDealCard] = useState(null); // 'monitors' | 'cabinet' | null
  const monitorCardRef = useRef(null);
  const cabinetCardRef = useRef(null);

  const handleCardClick = (cardName) => {
    setActiveDealCard((prev) => (prev === cardName ? null : cardName));
  };

  const handleMouseEnter = (cardName) => {
    setActiveDealCard(cardName);
  };

  const handleMouseLeave = () => {
    setActiveDealCard(null);
  };

  // Dismiss popup when clicking/tapping outside the cards
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const clickedOutside =
        monitorCardRef.current && !monitorCardRef.current.contains(e.target) &&
        cabinetCardRef.current && !cabinetCardRef.current.contains(e.target);
      if (clickedOutside) {
        setActiveDealCard(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  return (
    <section className="deals-section-14426" id="deals">
      <div className="deals-frame-14426">
        {/* Title: Width 1440px, Height 48px, Poppins SemiBold 32px, 100% line-height, Center, #000000 */}
        <h2 className="deals-title-figma">Limited Time Deal</h2>

        {/* Visual Cards Row: 1440px total, 842px left + 18px gap + 580px right */}
        <div className="deals-row-container">
          {/* Left Card: 842px Fill, 539px Fixed, Radius: TL 12px, BL 12px */}
          <div
            ref={monitorCardRef}
            className={`deal-card-left-figma ${activeDealCard === 'monitors' ? 'is-active' : ''}`}
            onClick={() => handleCardClick('monitors')}
            onMouseEnter={() => handleMouseEnter('monitors')}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
          >
            <div className="deal-card-overlay"></div>
            {/* Frame 14405: Width Fill (722px), Height Hug (275px), Flow Vertical */}
            <div className="deal-text-frame-14405">
              {/* Frame 14404: Row with DEALS (Bai Jamjuree 84px) & ON (Poetsen One 40px) */}
              <div className="deal-text-frame-14404">
                <span className="deal-text-deals">DEALS</span>
                <span className="deal-text-on">ON</span>
              </div>

              {/* Frame 14406: 730px x 4px Linear Gradient Line (#FC8E0E -> #D71A4F) */}
              <div className="deal-gradient-line-14406"></div>

              {/* T MONITORS: Bai Jamjuree 96px Italic, Gradient (#FE940A -> #D1065A) */}
              <h3 className="deal-text-monitors">MONITORS</h3>
            </div>

            {/* Hover Perks Card (Animates up when cursor hovers on image) */}
            <div className="deal-hover-perks-popup" onClick={(e) => e.stopPropagation()}>
              <div className="deal-perks-grid-figma">
                {/* Perk 1: Up to 40% Off */}
                <div className="deal-perk-card-figma">
                  <div className="deal-perk-icon-wrap">
                    <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                      <path d="M26.5 17.5L16.5 27.5C15.9 28.1 15 28.5 14.1 28.5C13.2 28.5 12.3 28.1 11.7 27.5L3.5 19.3C2.9 18.7 2.5 17.8 2.5 16.9V5.5C2.5 3.8 3.8 2.5 5.5 2.5H16.9C17.8 2.5 18.7 2.9 19.3 3.5L26.5 10.7C27.8 12 27.8 14.1 26.5 15.4L26.5 17.5Z" fill="#FFFFFF"/>
                      <circle cx="8" cy="8" r="2" fill="#FFAE33"/>
                      <circle cx="15" cy="14" r="1.5" fill="#FFAE33"/>
                      <circle cx="19" cy="18" r="1.5" fill="#FFAE33"/>
                      <line x1="19.5" y1="13.5" x2="14.5" y2="18.5" stroke="#FFAE33" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="deal-perk-label">Up to 40% Off</span>
                </div>

                {/* Perk 2: Fast Delivery */}
                <div className="deal-perk-card-figma">
                  <div className="deal-perk-icon-wrap">
                    <svg width="36" height="34" viewBox="0 0 36 32" fill="none">
                      <path d="M3 10H10M1 14H8M4 18H11" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M11 7H23V15H29L32 19V24H28.8C28.4 25.7 26.8 27 25 27C23.2 27 21.6 25.7 21.2 24H16.8C16.4 25.7 14.8 27 13 27C11.2 27 9.6 25.7 9.2 24H9V9C9 7.9 9.9 7 11 7Z" fill="#FFFFFF"/>
                      <circle cx="13" cy="24" r="2.2" fill="#FFAE33"/>
                      <circle cx="25" cy="24" r="2.2" fill="#FFAE33"/>
                      <path d="M23 15V19H29L27 15H23Z" fill="#FFAE33"/>
                    </svg>
                  </div>
                  <span className="deal-perk-label">Fast Delivery</span>
                </div>

                {/* Perk 3: Genuine Products */}
                <div className="deal-perk-card-figma">
                  <div className="deal-perk-icon-wrap">
                    <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="13" r="9" fill="#FFFFFF"/>
                      <path d="M12 20L9.5 28L15 25L16 28L18 20" fill="#FFFFFF"/>
                      <path d="M20 20L22.5 28L17 25L16 28L14 20" fill="#FFFFFF"/>
                      <path d="M16 8.5L17.5 11.5L20.5 12L18.2 14.2L18.8 17.5L16 16L13.2 17.5L13.8 14.2L11.5 12L14.5 11.5L16 8.5Z" fill="#FFAE33"/>
                    </svg>
                  </div>
                  <span className="deal-perk-label">Genuine<br />Products</span>
                </div>

                {/* Perk 4: Easy EMI Options */}
                <div className="deal-perk-card-figma">
                  <div className="deal-perk-icon-wrap">
                    <svg width="36" height="34" viewBox="0 0 36 32" fill="none">
                      <rect x="3" y="9" width="26" height="17" rx="3" fill="#FFFFFF"/>
                      <rect x="3" y="13" width="26" height="3.5" fill="#FFAE33"/>
                      <rect x="6" y="19" width="4" height="4" rx="1" fill="#FFAE33"/>
                      <path d="M22 4L28 6.5V11C28 14.5 25.5 17.5 22 18.5C18.5 17.5 16 14.5 16 11V6.5L22 4Z" fill="#FFFFFF" stroke="#FFAE33" strokeWidth="1.2"/>
                      <path d="M19.5 11L21.2 12.8L24.8 9.2" stroke="#FFAE33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="deal-perk-label">Easy EMI<br />Options</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                className="deal-checkout-btn-figma"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory('monitor');
                }}
              >
                <span>Checkout</span>
                <ArrowDown size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: 580px Fill, 539px Fixed (343px + 18px gap + 178px) */}
          <div className="deals-col-right-figma">
            {/* Top Card: 580px Fill, 343px Fixed, Radius: TR 12px, Border 0.7px */}
            <div
              ref={cabinetCardRef}
              className={`deal-card-cabinet-figma ${activeDealCard === 'cabinet' ? 'is-active' : ''}`}
              onClick={() => handleCardClick('cabinet')}
              onMouseEnter={() => handleMouseEnter('cabinet')}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
            >
              <div className="deal-card-overlay"></div>
              <div className="deal-text-frame-cabinet">
                <div className="deal-text-frame-14404">
                  <span className="deal-text-deals-cabinet">DEALS</span>
                  <span className="deal-text-on-cabinet">ON</span>
                </div>
                <div className="deal-gradient-line-cabinet"></div>
                <h3 className="deal-text-cabinet">CABINET</h3>
              </div>

              {/* Hover Perks Card for Cabinet (Animates up when cursor hovers) */}
              <div className="deal-hover-perks-popup deal-hover-perks-cabinet" onClick={(e) => e.stopPropagation()}>
                <div className="deal-perks-grid-figma">
                  {/* Perk 1: Up to 40% Off */}
                  <div className="deal-perk-card-figma">
                    <div className="deal-perk-icon-wrap">
                      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                        <path d="M26.5 17.5L16.5 27.5C15.9 28.1 15 28.5 14.1 28.5C13.2 28.5 12.3 28.1 11.7 27.5L3.5 19.3C2.9 18.7 2.5 17.8 2.5 16.9V5.5C2.5 3.8 3.8 2.5 5.5 2.5H16.9C17.8 2.5 18.7 2.9 19.3 3.5L26.5 10.7C27.8 12 27.8 14.1 26.5 15.4L26.5 17.5Z" fill="#FFFFFF"/>
                        <circle cx="8" cy="8" r="2" fill="#FFAE33"/>
                        <circle cx="15" cy="14" r="1.5" fill="#FFAE33"/>
                        <circle cx="19" cy="18" r="1.5" fill="#FFAE33"/>
                        <line x1="19.5" y1="13.5" x2="14.5" y2="18.5" stroke="#FFAE33" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="deal-perk-label">Up to 40% Off</span>
                  </div>

                  {/* Perk 2: Fast Delivery */}
                  <div className="deal-perk-card-figma">
                    <div className="deal-perk-icon-wrap">
                      <svg width="32" height="30" viewBox="0 0 36 32" fill="none">
                        <path d="M3 10H10M1 14H8M4 18H11" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
                        <path d="M11 7H23V15H29L32 19V24H28.8C28.4 25.7 26.8 27 25 27C23.2 27 21.6 25.7 21.2 24H16.8C16.4 25.7 14.8 27 13 27C11.2 27 9.6 25.7 9.2 24H9V9C9 7.9 9.9 7 11 7Z" fill="#FFFFFF"/>
                        <circle cx="13" cy="24" r="2.2" fill="#FFAE33"/>
                        <circle cx="25" cy="24" r="2.2" fill="#FFAE33"/>
                        <path d="M23 15V19H29L27 15H23Z" fill="#FFAE33"/>
                      </svg>
                    </div>
                    <span className="deal-perk-label">Fast Delivery</span>
                  </div>

                  {/* Perk 3: Genuine Products */}
                  <div className="deal-perk-card-figma">
                    <div className="deal-perk-icon-wrap">
                      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="13" r="9" fill="#FFFFFF"/>
                        <path d="M12 20L9.5 28L15 25L16 28L18 20" fill="#FFFFFF"/>
                        <path d="M20 20L22.5 28L17 25L16 28L14 20" fill="#FFFFFF"/>
                        <path d="M16 8.5L17.5 11.5L20.5 12L18.2 14.2L18.8 17.5L16 16L13.2 17.5L13.8 14.2L11.5 12L14.5 11.5L16 8.5Z" fill="#FFAE33"/>
                      </svg>
                    </div>
                    <span className="deal-perk-label">Genuine<br />Products</span>
                  </div>

                  {/* Perk 4: Easy EMI Options */}
                  <div className="deal-perk-card-figma">
                    <div className="deal-perk-icon-wrap">
                      <svg width="32" height="30" viewBox="0 0 36 32" fill="none">
                        <rect x="3" y="9" width="26" height="17" rx="3" fill="#FFFFFF"/>
                        <rect x="3" y="13" width="26" height="3.5" fill="#FFAE33"/>
                        <rect x="6" y="19" width="4" height="4" rx="1" fill="#FFAE33"/>
                        <path d="M22 4L28 6.5V11C28 14.5 25.5 17.5 22 18.5C18.5 17.5 16 14.5 16 11V6.5L22 4Z" fill="#FFFFFF" stroke="#FFAE33" strokeWidth="1.2"/>
                        <path d="M19.5 11L21.2 12.8L24.8 9.2" stroke="#FFAE33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="deal-perk-label">Easy EMI<br />Options</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  className="deal-checkout-btn-figma"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCategory('case');
                  }}
                >
                  <span>Checkout</span>
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>

            {/* Bottom Banner: 580px Fill, 178px Fixed, Radius: BR 12px, Padding 20px */}
            <div className="deal-banner-bottom-figma">
              <div className="deal-banner-overlay"></div>
              <div className="deal-banner-white-card">
                <div className="deal-quote-yellow-pill">
                  <span>“Upgrade your Setup Without Breaking the Bank”</span>
                </div>
                <button
                  className="deal-view-all-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewAllDeals();
                  }}
                >
                  <span>View All Deals</span>
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

