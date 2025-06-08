import { Check, Shield } from "lucide-react";
import React, { useState } from "react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Powerful chlorine removal",
      description: "DELETE button to clear residual chlorine",
    },
    {
      title: "Micro-sediments protection",
      description: "Filters out heavy metals, dust and fine impurities",
    },
    {
      title: "Glycerin moisturizing",
      description: "Helps to build skin barriers and maintain moisture",
    },
    {
      title: "Cornstarch smoothing",
      description: "Makes skin softer and suppresses trouble",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Advanced Protection Features</h2>

        <div className="features-tabs">
          {features.map((feature, index) => (
              <button
                key={index}
                className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                {feature.title}
              </button>
            ))}
        </div>

        <div className="feature-content">
          <div className="feature-details">
            <h3>{features[activeFeature]?.title}</h3>
            <p>{features[activeFeature]?.description}</p>

            <div className="feature-benefits">
              <div className="benefit-item">
                <Check className="benefit-icon" />
                <span>Instant protection</span>
              </div>
              <div className="benefit-item">
                <Check className="benefit-icon" />
                <span>Long-lasting effect</span>
              </div>
              <div className="benefit-item">
                <Check className="benefit-icon" />
                <span>Safe for all skin types</span>
              </div>
            </div>
          </div>

          <div className="feature-visual">
            <div className="protection-shield">
              <Shield size={120} className="shield-icon" />
              <div className="protection-particles">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(80px)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
