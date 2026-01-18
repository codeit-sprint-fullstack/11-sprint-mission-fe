import React, { useEffect, useState } from 'react';
import styles from './BestProduct.module.css';
import { getProductList } from '../../api/productService';
import { ProductCardList } from './ProductCardList';

const BEST_PRODUCT_LIMIT = 4;

export const BestProduct = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { list } = await getProductList({
          pageSize: BEST_PRODUCT_LIMIT,
          orderBy: 'favorite',
        });

        setItems(list);
      } catch (e) {
        console.log(`BestProduct useEffect! - ${e}`);
      }
    };
    getProducts();
  }, []);
  return (
    <section>
      <div className={styles.title}>베스트 상품</div>
      <div className={styles.cardContent}>
        {items && <ProductCardList items={items} type="Best" />}
      </div>
    </section>
  );
};
