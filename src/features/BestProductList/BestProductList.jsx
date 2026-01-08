import { useEffect, useState } from 'react';
import { fetchProductList } from '@/api/itemApi';
import styles from './BestProductList.module.css';
import { ProductListItem } from '@/components/ProductListItem';

const PAGE_SIZE = 4;
const INITIAL_PAGE = 1;

export function BestProductList() {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const getBestProducts = async () => {
      try {
        const { data } = await fetchProductList(
          INITIAL_PAGE,
          PAGE_SIZE,
          'favorite',
          '',
        );
        setBestProducts(data);
      } catch (error) {
        if (error.response) {
          const errorMessage = `[StatusCode ${error.response.status}] ${error.response.data.message}`;
          console.error(errorMessage);
          throw new Error(
            `[StatusCode ${error.response.status}] ${error.response.data.message}`,
          );
        }
        throw error;
      }
    };

    getBestProducts();
  }, []);

  return (
    <>
      <h2>베스트 상품</h2>
      <ul className={styles.productListContainer}>
        {bestProducts.map((bestProduct) => (
          <li key={bestProduct.id}>
            <ProductListItem
              item={bestProduct}
              imgWidth="282px"
              imgHeight="282px"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
