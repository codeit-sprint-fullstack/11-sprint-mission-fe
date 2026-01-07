import likeIcon from '../../assets/ic_heart.svg';
import { useEffect, useState } from 'react';
import { priceFormat } from '../../utils/format';
import styles from './BestProductList.module.css';

export default function BestProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const params = new URLSearchParams({
        page: 1,
        pageSize: 4,
        orderBy: 'recent',
      });
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`
      );
      const data = await res.json();
      setProducts(data.list);
    };

    getProducts();
  }, []);

  return (
    <div className={styles.bestItemsContainer}>
      <h2 className={styles.bestItem}>베스트 상품</h2>
      <ul className={styles.bestItemsBox}>
        {products.map((product) => (
          <li key={product.id}>
            <img
              width={282}
              height={282}
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
    </div>
  );
}
