import likeIcon from '../../assets/ic_heart.svg';
import { priceFormat } from '../../utils/format';
import styles from './ProductList.module.css';

export default function ProductList({ products }) {
  const productList = products || [];

  return (
    <>
      <ul className={styles.productListSection}>
        {productList.map((product) => (
          <li key={product.id}>
            <img
              className={styles.productImg}
              width={221}
              height={221}
              src={product.images[0]}
              alt="thumbnail"
            />
            <div className={styles.productContent}>
              <h3 className={styles.productName}>{product.name}</h3>
              <span className={styles.productPrice}>
                {priceFormat(product.price)}원
              </span>
              <div>
                <img src={likeIcon} alt="likeIcon" />
                {product.favoriteCount}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
