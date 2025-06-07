import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductShowcase from "../components/ProductShowcase";
import Technology from "../components/Technology";
import Chlorine from "../components/Chlorine";


export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Chlorine />
      <Features />
      <ProductShowcase />
      <Technology />
    </main>
  );
}
