import { HeartButton } from './HeartButton';
import styles from './Product.module.css';

export function Product({ src, title, price, favoriteCount, className }) {
  return (
    <div className={className}>
      <a href="" className={styles.productLink}>
        <img src={src} alt={title} className={styles.productImg} />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}원</p>
      </a>
      <HeartButton count={favoriteCount} />
    </div>
  );
}

// productImg 나중에 프롭으로 받아야함 지금 베스트기준으로 만들어짐