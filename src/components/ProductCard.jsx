import React from 'react';
import { CiHeart } from 'react-icons/ci';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <div className={styles.imgBox}>
      {/* 이미지가 없을 경우 default 이미지 사용 */}
      <img
        src={product.images[0] || '/img/default_product.png'}
        alt="상품 이미지"
      />
    </div>
    <div className={styles.infoBox}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>{product.price.toLocaleString()}원</p>
      <div className={styles.likes}>
        <CiHeart className={styles.heartIcon} />
        <span>{product.favoriteCount}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
