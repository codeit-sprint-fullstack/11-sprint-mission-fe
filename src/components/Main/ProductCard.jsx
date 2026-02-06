import styles from './ProductCard.module.css';
import defaultImg from '@/assets/img/img_default.svg';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src={defaultImg}
        alt={product.name || '상품'}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price?.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default ProductCard;
