import axios from "axios";
import {
  ArrowLeft,
  Check,
  Droplets,
  Heart,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShippingInfo from "../components/ShippingInfo";
import DetailedInfoProduct from "../components/DetailedInfoProduct";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);

  console.log(product);

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
        <button onClick={() => navigate("/")} className="back-btn">
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

          <div className="key-benefits">
            <h3>Key Benefits</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <Check size={16} />
                <span>Healthier skin and hair</span>
              </div>
              <div className="benefit-item">
                <Check size={16} />
                <span>Reduced chlorine odor</span>
              </div>
              <div className="benefit-item">
                <Check size={16} />
                <span>Softer water feel</span>
              </div>
              <div className="benefit-item">
                <Check size={16} />
                <span>Enhanced shower experience</span>
              </div>
            </div>
          </div>

          <div className="purchase-section">
            <div className="action-buttons">
              <button className="add-to-cart-btn">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>

          <ShippingInfo />
        </div>
      </div>
       <DetailedInfoProduct features={product.features} />
    </div>
  );
}
