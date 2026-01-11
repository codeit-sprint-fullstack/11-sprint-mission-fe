import React from 'react';
import { ProductCard } from './ProductCard';
import styles from '../style/ProductCardList.module.css';
export const ProductCardList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className={styles.cardContent}>
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};
