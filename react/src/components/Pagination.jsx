import React from "react";
import styles from "./Market.module.css"

export default function Pagination({ page, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        &lt;
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`${styles.pageButton} ${p === page ? "active" : ""}`}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        className={styles.pageButton}
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
}