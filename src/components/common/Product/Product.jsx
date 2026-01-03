import { HeartButton } from './HeartButton';
import styles from './Product.module.css';

export function Product({ src, title, price, favoriteCount, className }) {
  const formatPrice = (price) => new Intl.NumberFormat('ko-KR').format(price);
  
  return (
    <div className={className}>
      <a href="" className={styles.productLink}>
        <div className={styles.imgWrapper}>
          <img src={src} alt={title} className={styles.productImg} />
        </div>

        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{formatPrice(price)}원</p>
      </a>
      <HeartButton count={favoriteCount} />
    </div>
  );
}