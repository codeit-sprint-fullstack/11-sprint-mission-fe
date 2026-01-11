import React from 'react';
import { ProductCard } from './ProductCard';
import styles from '../style/ProductCardList.module.css';
export const ProductCardList = ({ items, type }) => {
  return (
    <>
      <div className={`${styles.cardContent} ${styles[type]}`}>
        {items.map((item) => (
          <ProductCard key={item.id} product={item} type={type} />
        ))}
      </div>
    </>
  );
};
