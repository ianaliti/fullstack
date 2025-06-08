import { X } from "lucide-react";
import React from "react";

export default function Chlorine() {
  return (
    <section className="chlorine-section">
      <div className="container">
        <div className="section-grid">
          <div className="section-content">
            <h2 className="section-title">
              Residual chlorine that remains even on the skin
            </h2>
            <p className="section-description">
              The fact that chlorine, which is intended to sterilize
              microorganisms in tap water, remains in our skin and is absorbed.
            </p>

            <div className="effects-list">
              <h3>Effects of residual chlorine:</h3>
              <div className="effect-item">
                <X className="effect-icon" />
                <span>Skin trouble</span>
              </div>
              <div className="effect-item">
                <X className="effect-icon" />
                <span>Dry Skin</span>
              </div>
              <div className="effect-item">
                <X className="effect-icon" />
                <span>Causing hair loss</span>
              </div>
            </div>

            <div className="delete-button-demo">
              <button className="delete-button">DELETE</button>
              <p>Powerful chlorine removal performance</p>
            </div>
          </div>

          <div className="section-visual">
            <div className="chlorine-visualization">
              <div className="chlorine-molecules">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="molecule"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      left: `${(i % 4) * 25}%`,
                      top: `${Math.floor(i / 4) * 33}%`,
                    }}
                  >
                    Cl
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
