import axios from "axios";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    }; 
     handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const autoSlide = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= products.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000); 

    return () => clearInterval(autoSlide);
  }, [products]);

   const nextSlide = () => {
    if (!products || products.length === 0) return;
    setCurrentIndex(prev => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (!products || products.length === 0) return;
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleProducts = () => {
    if (!products || products.length === 0) return [];
    
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % products.length;
      if (products[index]) {
        visible.push(products[index]);
      }
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">World Class Vitamin Shower Filter</h2>
        <p className="section-subtitle">
          Up to 24 types of vitamin shower filters available
        </p>

        <div className="carousel-container">
          <button 
            className={`carousel-btn carousel-btn-prev`}
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-wrapper">
            <div className="carousel-track">
              {visibleProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="product-card">
                  <div className="product-image">
                    {/* <Droplets size={80} className="product-icon" /> */}
                    <img src={product.image} alt={product.name} className="product-icon"/>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-features">
                    {product.features && product.features.slice(0, 4).map((feature, fIndex) => (
                      <div key={fIndex} className="feature-item">
                        <Check size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features && product.features.length > 4 && (
                      <div className="feature-item more-features">
                        <span>+{product.features.length - 4} more features</span>
                      </div>
                    )}
                  </div>
                  <div className="product-price">${product.price}</div>
                  <button onClick={() => handleProductClick(product.id)} className="product-button">Order Now</button>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

       {products && products.length > 0 && (
          <div className="carousel-indicators">
            {products.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}

        <div className="certifications">
          <h3>Certifications & Patents</h3>
          <div className="cert-grid">
            <div className="cert-item">Technical Management</div>
            <div className="cert-item">Corporate Certification</div>
            <div className="cert-item">Patent Registration</div>
            <div className="cert-item">Design Registration</div>
          </div>
        </div>
      </div>
    </section>
  );
}
