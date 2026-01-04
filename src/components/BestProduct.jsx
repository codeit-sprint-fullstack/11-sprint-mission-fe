import React from 'react';
import styles from '../style/BestProduct.module.css';
import { ProductCard } from './ProductCard';
export const BestProduct = ({ products }) => {
  return (
    <section className={styles.content}>
      <div>
        <p>베스트 상품</p>
        <div className={styles.cardContent}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};
