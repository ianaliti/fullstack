import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css"; 
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <div className="vitamin-app"> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
