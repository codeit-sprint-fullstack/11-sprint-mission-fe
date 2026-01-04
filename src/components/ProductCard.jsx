import React from 'react';
import styles from '../style/ProductCard.module.css';
export const ProductCard = ({ product }) => {
  const { images, price, name } = product;
  return (
    <>
      <article className={styles.contentwrap}>
        <img className={styles.imges} src={images} />
        <div>{name}</div>
        <div>{price}원</div>
      </article>
    </>
  );
};
