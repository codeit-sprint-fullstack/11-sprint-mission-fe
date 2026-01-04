import React from 'react';
import styles from '../style/AllProduct.module.css';
import { ProductCard } from './ProductCard';

export const AllProduct = ({ products }) => {
  return (
    <section className={styles.content}>
      <div>
        <div>판매중인 상품</div>
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
