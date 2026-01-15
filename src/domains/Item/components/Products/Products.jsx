import { formatPrice } from '@/utils/formatPrice';
import { LikeButton } from '../LikeButton';
import defaultProductImg from '@/assets/img_default.svg';
import styles from './Products.module.css';

export function Product({ title, price, favoriteCount, className }) {
  return (
    <div className={className}>
      <a href="" className={styles.productLink}>
        <div className={styles.imgWrapper}>
          <img src={defaultProductImg} alt={title} className={styles.productImg} />
        </div>

        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{formatPrice(price)}원</p>
      </a>
      <LikeButton count={favoriteCount} />
    </div>
  );
}
