// src/components/SortDropdown.jsx
import React from "react";

export default function SortDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="recent">최신 순</option>
      <option value="favorite">좋아요 순</option>
    </select>
  );
}