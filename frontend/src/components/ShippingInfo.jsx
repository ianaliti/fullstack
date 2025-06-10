import { Award, Shield, Truck } from "lucide-react";
import React from "react";

export default function ShippingInfo() {
  return (
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
  );
}
