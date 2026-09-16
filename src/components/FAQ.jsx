import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQS = [
  {
    num: '1.',
    q: 'What is a Refurbished Product ?',
    a: 'This is a used or open box product that has been professionally repaired, restored, cleaned and put into perfect condition - you get maximum performance like it is brand new but at significantly lower prices!',
  },
  {
    num: '2.',
    q: 'Do these product include warranty ?',
    a: 'Up to 12 months warranty covers every single component and you can buy the products without fear and worries.',
  },
  {
    num: '3.',
    q: 'Are the Low Prices actually real, or are they just a gimmick ?',
    a: 'Absolutely real! We provides you with open-box items and enterprise hardware and that is why the price is significantly lower than usual.',
  },
  {
    num: '4.',
    q: 'What is the return policy ?',
    a: 'There is always an opportunity for you to return an item that you ordered if it does not satisfy your requirements or does not fit into your configuration',
  },
  {
    num: '5.',
    q: 'How is the packaging ?',
    a: 'The packaging is professional and reliable. Every single product is packaged using anti-static ESD shields and special shock-proof material.',
  },
  {
    num: '6.',
    q: 'Is the performance thoroughly tested ?',
    a: 'The performance is tested and even rigorously tested. Stress test, thermal testing and voltage testing are carried out by multiple points.',
  },
  {
    num: '7.',
    q: 'What do other customer says ?',
    a: 'You can read the opinions of other satisfied builders in our verified buyer reviews section.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1); // All start collapsed as in Figma screenshot

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-frame-14397" id="faq">
      {/* Title: Poppins SemiBold 32px, 100% line-height, Center, #000000, 1200px x 48px */}
      <h2 className="faq-title-figma">Questions on your mind ?</h2>

      <div className="faq-accordion-rows-list">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`faq-row-item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="faq-row-trigger"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span className="faq-row-question">{faq.num} {faq.q}</span>
                <span className="faq-row-icon">
                  {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </span>
              </button>
              {isOpen && (
                <div className="faq-row-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
