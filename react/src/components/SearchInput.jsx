// src/components/SearchInput.jsx
import React from "react";

export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="상품 검색"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}