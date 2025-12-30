// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price.toLocaleString()}원</p>
    </div>
  );
}