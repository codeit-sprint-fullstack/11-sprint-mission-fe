import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard.jsx';
import styles from './BestProductList.module.css';

const BestProductList = () => {
  const { products, error } = useProducts({
    sort: 'favorite',
    page: 1,
    size: 8,
  });
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>베스트 상품</h2>
      <ul className={styles.grid}>
        {products.slice(0, 4).map((product, idx) => (
          <li key={product.id || idx}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestProductList;
