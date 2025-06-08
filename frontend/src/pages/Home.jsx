import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Product from "../components/Product";
import Chlorine from "../components/Chlorine";
import Vitamin from "../components/Vitamin";


export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Chlorine />
      <Vitamin />
      <Features />
      <Product />
    </main>
  );
}
