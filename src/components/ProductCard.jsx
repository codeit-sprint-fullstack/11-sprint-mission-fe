import heart from '../assets/ic_heart.svg';
import styles from './ProductCard.module.css';

export function BestProductCard({ BestItem }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img src={BestItem.images[0]} alt={BestItem.name} />
      </div>
      <div className={styles.cardDescription}>
        <p>{BestItem.name}</p>
        <p className={styles.productPrice}>
          {BestItem.price.toLocaleString()}원
        </p>
        <p className={styles.productLikes}>
          <img src={heart} alt="좋아요" />
          {BestItem.favoriteCount}
        </p>
      </div>
    </div>
  );
}

export function GeneralProductCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div className={styles.cardDescription}>
        <p>{item.name}</p>
        <p className={styles.productPrice}>{item.price.toLocaleString()}원</p>
        <p className={styles.productLikes}>
          <img src={heart} alt="좋아요" />
          {item.favoriteCount}
        </p>
      </div>
    </div>
  );
}
