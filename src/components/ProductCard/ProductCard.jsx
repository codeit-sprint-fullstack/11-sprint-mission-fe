import styles from './ProductCard.module.css';
import heartIcon from '../../assets/icons/heart.svg';

function ProductCard({ product, variant }) {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <div
        style={{
          backgroundImage: `url(${product.images?.[0]})`,
        }}
        className={styles.productImage}
      />
      
      <div>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>
          {product.price?.toLocaleString()}원
        </p>
        <div className={styles.productFavorite}>
          <img src={heartIcon} alt="좋아요" className={styles.Icon} />
          <p className={styles.Count}>{product.favoriteCount}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
