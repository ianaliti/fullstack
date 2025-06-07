import axios from "axios";
import { Droplets, Shield } from "lucide-react";
import React, { useEffect } from "react";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-bg">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Title</h1>
            <p className="hero-subtitle">Subtitle</p>

            <div className="problems-grid">
              <div className="hero__problems">
                <div className="problem-item">
                  <span className="problem-item__icon">🦠</span>
                  <span className="problem-item__text">Rust</span>
                </div>
                <div className="problem-item">
                  <span className="problem-item__icon">⚡</span>
                  <span className="problem-item__text">Heavy metal</span>
                </div>
                <div className="problem-item">
                  <span className="problem-item__icon">💧</span>
                  <span className="problem-item__text">Residual chlorine</span>
                </div>
              </div>
            </div>

            <button className="cta-button">
              <Shield className="mr-2" size={20} />
              Protect Your Skin Now
            </button>
          </div>

          <div className="hero-visual">
            <div className="filter-demo">
              <div className="water-drop dirty">
                <Droplets size={60} />
                <span>Before</span>
              </div>
              <div className="arrow">→</div>
              <div className="water-drop clean">
                <Droplets size={60} />
                <span>After</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
