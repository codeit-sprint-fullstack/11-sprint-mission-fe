import { useEffect, useState } from 'react';
import { getProductList } from '@/apis/fetchProducts';
import { Product } from '@/components/common/Product';
import styles from './BestProducts.module.css';

export function BestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const result = await getProductList({ pageSize: 4, orderBy: 'favorite' });
      setProducts(result.list);
    //   배열 이름으로 받아오기
    }

    fetchProducts();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.productsTitle}>베스트 상품</h2>
      {/* 여기서 맵 돌려서 가져온 배열을 프로덕트 컴포넌트에 받는다 */}
      <ul className={styles.bestProductList}>
        {products.map(({ id, images, name, price, favoriteCount }) => (
          <li key={id}>
            <Product
              src={images[0]}
              title={name}
              price={price}
              favoriteCount={favoriteCount}
              className={styles.bestProduct}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
