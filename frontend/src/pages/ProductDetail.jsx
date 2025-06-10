import axios from 'axios';
import { ArrowLeft, Award, Droplets, Heart, Share2, Shield, ShoppingCart, Star, Truck } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetail() {
    
    const [product, setProduct] = useState([]);

    const { id } = useParams();
  
    const navigate = useNavigate();

    useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
        console.log(error.response?.data?.message || "Failed to fetch product");
      });
  }, [id]);


  return (
     <div className="product-detail-page">
        <div className="detail-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </button>
        <div className="header-actions">
          <button className="action-btn">
            <Heart size={20} />
          </button>
          <button className="action-btn">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="detail-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
            <div className="image-overlay">
              <Droplets className="water-icon" size={40} />
            </div>
          </div>
        </div>


        <div className="product-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <div className="rating-section">
              <div className="stars">
                  <Star size={16} />
              </div>
            </div>
          </div>

          <div className="price-section">
            <div className="current-price">${product.price}</div>
          </div>

          <p className="product-description">{product.description}</p>


          <div className="purchase-section">
            <div className="action-buttons">
              <button className="add-to-cart-btn" >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="buy-now-btn">
                Buy Now
              </button>
            </div>
          </div>

          <div className="shipping-info">
            <div className="shipping-item">
              <Truck size={20} />
              <div>
                <strong>Free Shipping</strong>
                <span>On orders over $100</span>
              </div>
            </div>
            <div className="shipping-item">
              <Shield size={20} />
              <div>
                <strong>2 Year Warranty</strong>
                <span>Full coverage included</span>
              </div>
            </div>
            <div className="shipping-item">
              <Award size={20} />
              <div>
                <strong>Certified Quality</strong>
                <span>ISO 9001 approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     </div>
  )
}
