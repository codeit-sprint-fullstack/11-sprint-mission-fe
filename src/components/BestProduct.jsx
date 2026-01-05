import React from 'react';
import styles from '../style/BestProduct.module.css';
import { ProductCard } from './ProductCard';
export const BestProduct = ({ products }) => {
  return (
    <section className={styles.content}>
      <div className={styles.title}>판매중인 상품</div>
      <div className={styles.cardContent}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};
