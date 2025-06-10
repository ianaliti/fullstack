import { Check } from 'lucide-react'
import React, { useState } from 'react'

export default function DetailedInfoProduct({ features }) {

const [activeTab, setActiveTab] = useState('features');

const featuresArray = features || [];


  return (
    <div className="detail-tabs">
        <div className="tab-navigation">
          {['features', 'specifications', 'reviews'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'features' && (
            <div className="features-content">
              <h3>Product Features</h3>
              <div className="features-list">
                {featuresArray.length > 0 ? (features.map((feature, index) => (
                  <div key={index} className="feature-detail">
                    <Check size={18} />
                    <span>{feature}</span>
                  </div>
                ))) : (
                  <p>No features available for this product.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="specifications-content">
              <h3>Technical Specifications</h3>
              <div className="specs-grid">
                {/* {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))} */}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <h3>Customer Reviews</h3>
              <div className="review-summary">
                <div className="review-score">
                  {/* <span className="score">{product.rating}</span> */}
                  <div className="score-stars">
                    {/* {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(product.rating) ? 'filled' : ''}
                      />
                    ))} */}
                  </div>
                  {/* <span>Based on {product.reviews} reviews</span> */}
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}
