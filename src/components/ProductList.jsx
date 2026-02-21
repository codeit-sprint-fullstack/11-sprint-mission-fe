'use client';

import { useState, useEffect } from 'react';
import { getProducts } from '../api/api';
import { usePageSize } from '../hooks/usePageSize';
import ProductCard from './ProductCard';
import styles from '../App.module.css';
import Link from 'next/link';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [order, setOrder] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = usePageSize();

  useEffect(() => {
    const loadAll = async () => {
      try {
        const { list, totalCount } = await getProducts({
          page,
          pageSize,
          orderBy: order,
          keyword,
        });
        setProducts(list);
        setTotalCount(totalCount);
      } catch (error) {
        console.error('상품 목록 로딩 실패:', error);
      }
    };

    loadAll();
  }, [page, pageSize, order, keyword]);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
    setPage(1);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
    setPage(1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  const getPageNumbers = () => {
    const limit = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + limit - 1);

    if (end - start + 1 < limit) {
      start = Math.max(1, end - limit + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  return (
    <section className={styles.listSection}>
      <div className={styles.listHeader}>
        <h2 className={styles.sectionTitle}>판매 중인 상품</h2>
        <div className={styles.controls}>
          <input
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해주세요"
            onChange={handleSearch}
          />
          <Link href="/registration" className={styles.btnRegister}>
            상품 등록하기
          </Link>
          <select className={styles.sortSelect} onChange={handleSort}>
            <option value="recent">최신순</option>
          </select>
        </div>
      </div>
      <div className={`${styles.grid} ${styles.allGrid}`}>
        {products?.map((product) => {
          // 이미지가 있는지 검사.. 이미지 없으면 디폴트 이미지
          const displayProduct = {
            ...product,
            images:
              product.images && product.images.length > 0
                ? product.images
                : ['/img/img_default.png'],
          };
          // 수정된 displayProduct 리턴
          return <ProductCard key={product.id} product={displayProduct} />;
        })}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={styles.arrowBtn}
        >
          &lt;
        </button>
        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={page === num ? styles.active : ''}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages || totalPages === 0}
          className={styles.arrowBtn}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ProductList;
