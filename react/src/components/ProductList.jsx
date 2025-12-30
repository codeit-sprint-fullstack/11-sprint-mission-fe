import React from "react";
import ItemCard from "./ItemCard"; // ProductCard 대신 ItemCard 사용
import "./ItemCard.module.css";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}