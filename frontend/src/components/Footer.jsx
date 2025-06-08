import { Droplets } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <Droplets className="logo-icon" />
                <span>NEMO The Vitamin</span>
              </div>
              <p>World's largest trademark rights among vitamin shower filters</p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Products</h4>
                <a href="#filters">Shower Filters</a>
                <a href="#replacement">Replacement Parts</a>
                <a href="#accessories">Accessories</a>
              </div>
              
              <div className="link-group">
                <h4>Support</h4>
                <a href="#installation">Installation Guide</a>
                <a href="#maintenance">Maintenance</a>
                <a href="#warranty">Warranty</a>
              </div>
              
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#technology">Technology</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 NEMO The Vitamin. All rights reserved.</p>
            <p>Making shower time more lovely with vitamin technology</p>
          </div>
        </div>
      </footer>
  )
}
