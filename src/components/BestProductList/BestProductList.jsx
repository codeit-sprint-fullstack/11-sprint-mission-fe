import { ProductListItem } from '../ProductListItem';
import { useEffect, useState } from 'react';
import { fetchProductList } from '@/api/productList';
import styles from './BestProductList.module.css';


const PAGE_SIZE = 4; 
const INITIAL_PAGE = 1;

export function BestProductList({ itemWidth = 200, itemheight = 280 }) {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const getBestProducts = async () => {
      try {
        const { data } = await fetchProductList(
          INITIAL_PAGE,
          PAGE_SIZE,
          'favorite', 
          ''          
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
    <ul className={styles.productListContainer}>
      {bestProducts.map((product) => (
        <li key={product.id}>
          <ProductListItem item={product} />
        </li>
      ))}
    </ul>
  );
}
