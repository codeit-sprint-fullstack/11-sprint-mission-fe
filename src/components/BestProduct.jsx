import React, { useEffect, useState } from 'react';
import styles from '../style/BestProduct.module.css';

import { ProductCard } from './ProductCard';
import { getProductList } from '../API/ProductServce';
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
        console.log(list);
        setItems(list);
      } catch (e) {
        console.log(`BestProduct useEffect! - ${e}`);
      }
    };
    getProducts();
  }, []);
  return (
    <section className={styles.content}>
      <div className={styles.title}>베스트 상품</div>
      <div className={styles.cardContent}>
        {items && <ProductCardList items={items} />}
      </div>
    </section>
  );
};
