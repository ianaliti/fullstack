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
            <li><a href=""></a>Home</li>
            <li><a href="">Features</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
