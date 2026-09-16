import React from 'react';
import { ArrowDown } from 'lucide-react';

const REVIEWS_DATA = [
  {
    name: 'Subhasis Banerjee',
    initial: 'S',
    avatarColor: '#F43F5E', // Pink
    rating: '4.5/5',
    comment:
      'Ordered a mini pc from This Platform. Recieved in great condition and it is running great. Would definately suggest others.',
  },
  {
    name: 'Ayan Ghosh',
    initial: 'A',
    avatarColor: '#06B6D4', // Cyan
    rating: '4.0/5',
    comment:
      'Ordered an Asus RTX 3090 Turbo, got a good deal on the price and the card arrived in good condition.',
  },
  {
    name: 'Rebanta Paul',
    initial: 'R',
    avatarColor: '#10B981', // Green
    rating: '4.1/5',
    comment:
      'Keeping it brief. Had a gpu I had been using for a long time and one I was looking to sell after upgrading. Found a few marketplaces to choose from and ...',
  },
  {
    name: 'Ahan Ganguly',
    initial: 'A',
    avatarColor: '#3B82F6', // Blue
    rating: '4.2/5',
    comment:
      'The website is great for many refurbished products which will be delivered directly at your door step with amazing warranty. I have recently ordered an i5-3470 processor and get ...',
  },
  {
    name: 'Soumili Mandal',
    initial: 'S',
    avatarColor: '#EF4444', // Red
    rating: '4.0/5',
    comment:
      'Product delivered as earliest. Product is same as shown in website. Thanks for best service.',
  },
  {
    name: 'Soumyojit Sengupta',
    initial: 'S',
    avatarColor: '#8B5CF6', // Purple
    rating: '4.7/5',
    comment:
      'Awesome deals, Quick response with follow ups when troubleshooting.',
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section-figma" id="reviews">
      <div className="reviews-frame-14375">
        {/* Title: Width 1420px, Height 48px, Poppins SemiBold 32px, 100% line-height, Center, #000000 */}
        <h2 className="reviews-title-figma">Customer Review</h2>

        {/* Frame 14374: Width Fill (1420px), Height Hug (188px), Flow Horizontal, Gap 24px, Scroll Overflow Horizontal */}
        <div className="reviews-row-14374">
          {REVIEWS_DATA.map((review, index) => (
            <div key={index} className="customer-review-card-figma">
              {/* Frame 14358: Width Fill (284px), Height Hug (47px), Flow Horizontal, Gap 12px */}
              <div className="review-top-frame-14358">
                <div
                  className="review-avatar-badge-figma"
                  style={{ backgroundColor: review.avatarColor }}
                >
                  {review.initial}
                </div>
                <div className="review-user-info-figma">
                  <h4 className="review-user-name-figma">{review.name}</h4>
                  {/* Frame 14359: Flow Horizontal, Width Hug (45px), Height Hug (18px), Gap 2px */}
                  <div className="review-rating-frame-14359">
                    <span className="review-score-tag">{review.rating}</span>
                    <span className="review-star-symbol">★</span>
                  </div>
                </div>
              </div>

              <p className="review-comment-text-figma">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* View All Button: Frame 14378 styling, #0F172A, radius 12px, arrow direction change on hover */}
        <div className="reviews-view-all-frame">
          <button className="reviews-view-all-btn">
            <span>View All</span>
            <ArrowDown size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
