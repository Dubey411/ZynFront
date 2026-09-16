import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer-figma">
      {/* Buttom Navbar Frame: Fixed 1603px, Fixed 381px, Padding 30px 90px, Flow Horizontal, Justify space-between, Fill #0F172A */}
      <div className="bottom-navbar-frame">
        {/* Left Column: Frame 14368 - Hug 595px x 272px, Flow Vertical, Gap 28px */}
        <div className="footer-left-frame-14368">
          {/* Frame 14322: Fixed 595px x 169px, Flow Vertical, Gap 24px */}
          <div className="footer-newsletter-frame-14322">
            {/* Frame 14373: Fill 595px x Hug 83px, Flow Vertical, Gap 16px */}
            <div className="footer-heading-frame-14373">
              <h2 className="footer-title-figma">“Get the best PC deals in your inbox”</h2>
              <p className="footer-subtitle-figma">Best Deal Always !</p>
            </div>

            {/* Newsletter Input + Subscribe Form: Frame 14324 */}
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              {subscribed ? (
                <div className="subscribe-success-figma">
                  <Check size={18} />
                  <span>You're subscribed!</span>
                </div>
              ) : (
                <div className="footer-input-row-14324">
                  {/* Frame 14323: Fill 345px, Height Hug 37px, Radius 8px, Padding 8px 16px, Fill #FFFFFF */}
                  <div className="footer-input-frame-14323">
                    <input
                      type="email"
                      className="footer-email-input-field"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* Frame 14365: Hug 106px x 41px, Radius 12px, Border 2px solid #FFFFFF, Padding 8px 16px */}
                  <button type="submit" className="footer-subscribe-btn-14365">
                    <span>Subscribe</span>
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Follow us on Section: Frame 14367 (Hug 184px x Hug 75px, Gap 24px, Flow Vertical) */}
          <div className="footer-social-frame-14367">
            {/* Text: Follow us on, Fill 184px x Hug 27px, Body Large, Poppins Medium 500, 18px, 100% line-height, Center, #FFFFFF */}
            <span className="footer-follow-label">Follow us on</span>
            {/* Frame 14366: Flow Horizontal, Hug 184px x Hug 24px, Gap 16px */}
            <div className="footer-social-icons-14366">
              {/* LinkedIn: 24px x 24px */}
              <a href="#linkedin" className="footer-social-link" title="LinkedIn" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
              </a>

              {/* Instagram: 24px x 24px */}
              <a href="#instagram" className="footer-social-link" title="Instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook: 24px x 24px */}
              <a href="#facebook" className="footer-social-link" title="Facebook" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              {/* YouTube: 24px x 24px */}
              <a href="#youtube" className="footer-social-link" title="YouTube" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Twitter / X: 24px x 24px */}
              <a href="#twitter" className="footer-social-link" title="Twitter" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Columns: DOWNLOAD OUR APP, COMPANY, QUICK LINKS */}
        <div className="footer-right-columns">
          {/* Column 1: Download Our App (Frame 14380: Hug 208px x Hug 181px, Gap 28px, Flow Vertical) */}
          <div className="footer-app-col-14380">
            {/* Frame 14383: Hug 208px x Hug 73px, Gap 24px, Flow Vertical */}
            <div className="footer-app-title-frame-14383">
              <h4 className="footer-app-title-h4">DOWNLOAD OUR APP</h4>
              <span className="footer-get-it-on-text">GET IT ON</span>
            </div>

            {/* Frame 14384: Fill 208px x Hug 80px, Gap 16px, Flow Vertical */}
            <div className="footer-app-badges-14384">
              {/* Google Play Button */}
              <a href="#googleplay" className="footer-app-link-row" title="Google Play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.6 1.8L13.8 12L3.6 22.2C3.2 21.8 3 21.2 3 20.4V3.6C3 2.8 3.2 2.2 3.6 1.8Z" fill="#2196F3"/>
                  <path d="M17.3 8.5L13.8 12L17.3 15.5L21.4 13.2C22.2 12.7 22.2 11.3 21.4 10.8L17.3 8.5Z" fill="#FFC107"/>
                  <path d="M13.8 12L3.6 1.8C4.1 1.4 4.8 1.4 5.5 1.8L17.3 8.5L13.8 12Z" fill="#4CAF50"/>
                  <path d="M13.8 12L17.3 15.5L5.5 22.2C4.8 22.6 4.1 22.6 3.6 22.2L13.8 12Z" fill="#F44336"/>
                </svg>
                <span className="footer-app-link-text">Google Play</span>
              </a>

              {/* Apple App Store Button */}
              <a href="#appstore" className="footer-app-link-row" title="Apple App Store">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-.99 1.7-0.87 2.72 1.01.08 2.04-.51 2.59-1.22z"/>
                </svg>
                <span className="footer-app-link-text">Apple App Store</span>
              </a>
            </div>
          </div>

          {/* Frame 14372: Flow Horizontal, Hug 392px x Hug 235px, Gap 28px */}
          <div className="footer-links-group-14372">
            {/* Column 2: Company (Frame 14370: Flow Vertical, Hug 184px x Fill 235px, Gap 24px) */}
            <div className="footer-company-col-14370">
              <h4 className="footer-col-title-h4">COMPANY</h4>
              {/* Frame 14369: Flow Vertical, Hug 184px x Hug 127px, Gap 8px */}
              <ul className="footer-nav-links-14369">
                <li><a href="#about">About US</a></li>
                <li><a href="#awards">Awards & Recognitions</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Links (Frame 14371: Flow Vertical, Hug 180px x Hug 235px, Gap 24px) */}
            <div className="footer-quicklinks-col-14371">
              <h4 className="footer-col-title-h4">QUICK LINKS</h4>
              <ul className="footer-nav-links-14371">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#shipping">Shipping Policy</a></li>
                <li><a href="#returns">Return & Replacement Policy</a></li>
                <li><a href="#cancellation">Cancellation Policy</a></li>
                <li><a href="#terms">Terms & Condition</a></li>
                <li><a href="#rma">RMA Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
