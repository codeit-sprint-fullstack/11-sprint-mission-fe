import React from 'react';
import styles from '../style/AllProduct.module.css';
import { ProductCard } from './ProductCard';

export const AllProduct = ({ products }) => {
  return (
    <section className={styles.content}>
      <div className={styles.titleWrap}>
        <p className={styles.title}>베스트 상품</p>
        <div className={styles.search}>
                  <input />
        <button></button>
        <select>
          <option>dd</option>
          <option>dd</option>
        </select>
        </div>

      </div>
      <div className={styles.cardContent}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};
