import likeIcon from '../../assets/ic_heart.svg';
import { priceFormat } from '../../utils/format';
import styles from './ProductList.module.css';

export default function ProductList({ products }) {
  const productList = products || [];

  return (
    <>
      <ul className={styles.productListContainer}>
        {productList.map((product) => (
          <li key={product.id}>
            <img
              width={221}
              height={221}
              src={product.images[0]}
              alt="thumbnail"
            />
            <div>
              <h3>{product.name}</h3>
              <span>{priceFormat(product.price)}원</span>
              <img src={likeIcon} alt="likeIcon" />
              {product.favoriteCount}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
