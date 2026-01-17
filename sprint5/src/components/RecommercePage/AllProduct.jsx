import React, { useEffect, useState } from 'react';
import styles from './AllProduct.module.css';
import { AllProductSearch } from './AllProductSearch';
import { getProductList } from '../../api/productService';
import { ProductCardList } from './ProductCardList';
import { useResize } from '../../hooks/useResize';
import { Pagination } from '../../features/Pagination';

export const AllProduct = () => {
  const [items, setItems] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = useResize();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { list, totalCount } = await getProductList({
          page: currentPage,
          pageSize: pageSize,
          orderBy,
        });
        setItems(list); // 첫렌더링이라서 아규먼트로 콜백함수를 사용할 필요없음.
        setTotalCount(totalCount);
      } catch (e) {
        console.log(`BestProduct useEffect! - ${e}`);
      }
    };
    getProducts();
  }, [currentPage, orderBy, pageSize]);

  return (
    <section className={styles.content}>
      <div className={styles.titleWrap}>
        <p className={styles.title}>판매중인 상품</p>
        <AllProductSearch orderBy={orderBy} onChangeOrderBy={setOrderBy} />
      </div>
      <div className={styles.cardContent}>
        {items && <ProductCardList items={items} type="All" />}
      </div>
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};
