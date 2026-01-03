import { useEffect, useState } from 'react';
import { getProductList } from '@/apis/fetchProducts';
import { SearchProducts } from './SearchProducts';
import { Product } from '@/components/common/Product';
import styles from './SellingProducts.module.css';

export function SellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const result = await getProductList({});
      setProducts(result.list);
      //   배열 이름으로 받아오기
    }

    fetchProducts();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.productsBar}>
        <h2 className={styles.productsTitle}>판매 중인 상품</h2>
        <SearchProducts />
      </div>
      
      <ul className={styles.sellingProductList}>
        {products.map(({ id, images, name, price, favoriteCount }) => (
          <li key={id}>
            <Product
              src={images[0]}
              title={name}
              price={price}
              favoriteCount={favoriteCount}
              className={styles.sellingProduct}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
