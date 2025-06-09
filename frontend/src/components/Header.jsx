import React from "react";
import { Droplets } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Droplets className="logo-icon" />
          <span>NEMO The Vitamin</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home"></a>Home</li>
            <li><a href="#features">Features</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
