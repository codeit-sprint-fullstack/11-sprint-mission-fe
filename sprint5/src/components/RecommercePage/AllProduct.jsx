import React, { useEffect, useState } from 'react';
import styles from './AllProduct.module.css';
import { AllProductSearch } from './AllProductSearch';
import { getProductList } from '../../api/productService';
import { ProductCardList } from './ProductCardList';

const ALL_PRODUCT_LIMIT = 5;
export const AllProduct = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState('recent');
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
          orderBy,
        });
        setItems(list); // 첫렌더링이라서 아규먼트로 콜백함수를 사용할 필요없음.
      } catch (e) {
        console.log(`BestProduct useEffect! - ${e}`);
      }
    };
    getProducts();
  }, [orderBy]);
  return (
    <section className={styles.content}>
      <div className={styles.titleWrap}>
        <p className={styles.title}>판매중인 상품</p>
        <AllProductSearch orderBy={orderBy} onChangeOrderBy={setOrderBy} />
      </div>
      <div className={styles.cardContent}>
        {items && <ProductCardList items={items} type="All" />}
      </div>
      <button onClick={getProductsMore}>더 불러 오기</button>
    </section>
  );
};
