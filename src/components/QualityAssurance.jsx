import React from 'react';

export default function QualityAssurance() {
  return (
    <div className="refurb-process-frame-14419" id="about">
      {/* Title: Poppins SemiBold 32px, 720px x 48px */}
      <h2 className="refurb-process-title">Refurbishment Process</h2>

      {/* Frame 14418: Grid 2x2, Width 720px, Height 478px, Row gap 161px, Col gap 319px */}
      <div className="refurb-grid-frame-14418">
        {/* 1. Top-Left Box: Frame 14414 (200.5px x 158.5px) */}
        <div className="refurb-corner-card card-top-left">
          <span className="refurb-step-badge">Used</span>
          <p className="refurb-card-text">
            We carefully source pre-owned, open-box, and enterprise hardware from
            trusted channels.
          </p>
        </div>

        {/* 2. Top-Right Box: (200.5px x 158.5px) */}
        <div className="refurb-corner-card card-top-right">
          <span className="refurb-step-badge">Tested</span>
          <p className="refurb-card-text">
            Every component undergoes multi-point stress, voltage, and thermal
            benchmark checks.
          </p>
        </div>

        {/* 3. Bottom-Right Box: (200.5px x 158.5px) - Certified */}
        <div className="refurb-corner-card card-bottom-right">
          <span className="refurb-step-badge">Certified</span>
          <p className="refurb-card-text">
            Only component that pass 100% of our strict quality standards receive
            our stamp of approval
          </p>
        </div>

        {/* 4. Bottom-Left Box: (200.5px x 158.5px) - Ready to Ship */}
        <div className="refurb-corner-card card-bottom-left">
          <span className="refurb-step-badge">Ready to Ship</span>
          <p className="refurb-card-text">
            Cleaned, safely packed in anti-static protective gear, and ready to
            power your setup.
          </p>
        </div>

        {/* 4 Connecting Dashed Arrows with Open V-Arrowheads (Width 89.19px, Height 28.95px, 2px Dashed 4 4 #2563EB) */}
        <svg
          className="refurb-svg-cycle-full"
          viewBox="0 0 720 478"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrow 1: Top (Used -> Tested) - 89.19px span */}
          <path
            d="M 315 103 Q 360 48 405 103"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Arrow 1 Open V-Arrowhead */}
          <path
            d="M 395 95 L 405 103 L 397 113"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Arrow 2: Right (Tested -> Certified) - 89.19px span */}
          <path
            d="M 570 198 Q 625 243 570 287"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Arrow 2 Open V-Arrowhead */}
          <path
            d="M 578 279 L 570 287 L 560 283"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Arrow 3: Bottom (Certified -> Ready to Ship) - 89.19px span */}
          <path
            d="M 405 375 Q 360 430 315 375"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Arrow 3 Open V-Arrowhead */}
          <path
            d="M 325 383 L 315 375 L 323 365"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Arrow 4: Left (Ready to Ship -> Used) - Top: 198px, Left: 121px, Width: 89.19px, Height: 28.95px */}
          <path
            d="M 150 287 Q 95 243 150 198"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Arrow 4 Open V-Arrowhead */}
          <path
            d="M 142 206 L 150 198 L 160 202"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* 4 Yellow Pills: Frame 14410 (Fixed 203.78px x 52.33px, Radius 12px, #FFE27A, Rotation 29.39deg) */}
        <div className="refurb-pill-bar pill-used">Used</div>
        <div className="refurb-pill-bar pill-tested">Tested</div>
        <div className="refurb-pill-bar pill-certified">Certified</div>
        <div className="refurb-pill-bar pill-ready">Ready to Ship</div>
      </div>
    </div>
  );
}
