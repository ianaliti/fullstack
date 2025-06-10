import { ArrowRight, Droplets, Heart, Sparkles, Star } from "lucide-react";
import React from "react";

export default function Vitamin() {
  return (
    <section className="vitamin-section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Vitamin, concentrate on your skin
          </h2>
          <p className="section-subtitle">
            Square's vitamin enrichment technology.
          </p>
          <p className="section-description">
            Directly and concentrate the refreshing vitamin on the skin with an ultra-concentrated vitamin gel.
          </p>
        </div>

        <div className="vitamin-showcase">
          <div className="vitamin-power">
            <div className="power-circle">
              <Sparkles className="power-icon" />
              <div className="power-text">
                <span className="power-number">800x</span>
                <span className="power-label">vitamin power</span>
              </div>
            </div>
            <p className="power-description">
              800 times the amount of vitamin in a lemon
            </p>

          </div>
          <div className="vitamin-process">
            <div className="process-step">
              <div className="step-icon">
                <Droplets />
              </div>
              <h4>Ultra-concentrated</h4>
              <p>Vitamin gel technology</p>
            </div>
             <ArrowRight className="process-arrow" />
            <div className="process-step">
              <div className="step-icon">
                <Heart />
              </div>
              <h4>Direct application</h4>
              <p>Concentrated on skin</p>
            </div>
            <ArrowRight className="process-arrow" />
            <div className="process-step">
              <div className="step-icon">
                <Star />
              </div>
              <h4>Refreshing result</h4>
              <p>Healthy skin barrier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
