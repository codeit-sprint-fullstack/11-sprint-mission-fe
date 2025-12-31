import styles from './ItemCard.module.css';
import heartIcon from '../assets/ic_heart.svg';

function ItemCard({ product }) {
  const imageUrl = product.images?.[0];
  const hasImage = Boolean(imageUrl);

  return (
    <li
      className={`${styles.card} ${
        !hasImage ? styles.noImage : ''
      }`}
    >
      {hasImage && (
        <img
          src={imageUrl}
          alt={product.name}
          className={styles.image}
        />
      )}
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>
        {product.price.toLocaleString()}원</p>
        <p className={styles.favorite}> <img src={heartIcon} alt="heartIcon"/> {product.favoriteCount}</p>
    </li>
  );
}

export default ItemCard;