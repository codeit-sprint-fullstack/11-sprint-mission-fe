import React from 'react';
import styles from '../style/ProductCard.module.css';
import heartImg from '../assets/ic_heart.png';
export const ProductCard = ({ product }) => {
  const { images, price, name, likes } = product;
  return (
    <>
      <article className={styles.contentwrap}>
        <div className={styles.imgesContent}>
          <img className={styles.imges} src={images} />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price.toLocaleString()}원</div>
        <div className={styles.likesContent}>
          <img src={heartImg} />
          <p>{likes}</p>
        </div>
      </article>
    </>
  );
};
