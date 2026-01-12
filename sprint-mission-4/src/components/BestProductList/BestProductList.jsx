import likeIcon from '../../assets/ic_heart.svg';
import { useEffect, useState } from 'react';
import { priceFormat } from '../../utils/format';
import styles from './BestProductList.module.css';

export default function BestProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          page: 1,
          pageSize: 4,
          orderBy: 'recent',
        });
        const res = await fetch(
          `https://panda-market-api.vercel.app/products?${params.toString()}`
        );
        if (!res.ok) {
          throw new Error('베스트 상품 목록 조회 실패');
        }

        const data = await res.json();
        setProducts(data.list);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  if (!Array.isArray(products) || products.length === 0) {
    return <p>표시할 상품이 없습니다.</p>;
  }
  return (
    <div className={styles.bestItemsSection}>
      <h2 className={styles.bestItem}>베스트 상품</h2>
      <ul className={styles.bestItemsContainer}>
        {products.map((product) => (
          <li className={styles.bestItemsBox} key={product.id}>
            <img
              className={styles.bestImage}
              width={282}
              height={282}
              src={product.images[0]}
              alt="thumbnail"
            />
            <div className={styles.bestItemContent}>
              <h3 className={styles.productName}>{product.name}</h3>
              <span className={styles.productPrice}>
                {priceFormat(product.price)}원
              </span>
              <div className={styles.favoriteSection}>
                <img
                  className={styles.likeIcon}
                  src={likeIcon}
                  alt="likeIcon"
                />
                {product.favoriteCount}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
