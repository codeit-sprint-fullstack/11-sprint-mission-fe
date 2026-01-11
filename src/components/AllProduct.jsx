import React, { useEffect, useState } from 'react';
import styles from '../style/AllProduct.module.css';
import { ProductCard } from './ProductCard';
import { AllProductSearch } from './AllProductSearch';
import { getProductList } from '../API/ProductServce';

const ALL_PRODUCT_LIMIT = 5;
export const AllProduct = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const getProductsMore = async () => {
    try {
      const { list } = await getProductList({
        page,
        pageSize: ALL_PRODUCT_LIMIT,
      });
      setItems((prevItems) => [...prevItems, ...list]);
      setPage(page + ALL_PRODUCT_LIMIT);
    } catch (e) {
      console.log(`BestProduct useEffect! - ${e}`);
    }
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { list } = await getProductList({
          pageSize: ALL_PRODUCT_LIMIT,
        });
        setItems(list);
      } catch (e) {
        console.log(`BestProduct useEffect! - ${e}`);
      }
    };
    getProducts();
  }, []);
  return (
    <section className={styles.content}>
      <div className={styles.titleWrap}>
        <p className={styles.title}>판매중인 상품</p>
        <AllProductSearch />
      </div>
      <div className={styles.cardContent}>
        {items &&
          items.map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
      <button onClick={getProductsMore}>더 불러 오기</button>
    </section>
  );
};
