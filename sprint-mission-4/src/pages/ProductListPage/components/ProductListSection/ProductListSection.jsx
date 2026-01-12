import { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import styles from './ProductListSection.module.css';
import { Pagination } from '../../../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
// import { useDebouncedCallback } from 'use-debounce';

export default function ProductListSection() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
    setIsOpen(false);
  };
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const params = new URLSearchParams({
          page: currentPage,
          pageSize: 10,
          orderBy,
          keyword: debouncedKeyword,
        });
        const res = await fetch(
          `https://panda-market-api.vercel.app/products?${params.toString()}`
        );
        if (!res.ok) {
          throw new Error('상품 목록 조회 실패');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [orderBy, debouncedKeyword, currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  return (
    <section>
      <div className={styles.productSection}>
        <h2 className={styles.productItem}>판매 중인 상품</h2>
        <div className={styles.activeSection}>
          <img />
          <input
            className={styles.productInput}
            name="search"
            value={keyword}
            type="text"
            placeholder="검색할 상품을 입력하세요."
            onChange={handleSearch}
          />
          <Link to="/registration" className={styles.addProductButton}>
            상품 등록하기
          </Link>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.sortBtn} ${isOpen ? styles.open : ''}`}
              type="button"
              onClick={handleIsOpen}
            >
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
            </button>

            {isOpen ? (
              <ul className={styles.sortList}>
                <li>
                  <button
                    className={styles.sortChangeBtn}
                    onClick={() => {
                      handleOrderBy('recent');
                    }}
                  >
                    최신순
                  </button>
                </li>
                <li>
                  <button
                    className={styles.sortChangeBtn}
                    onClick={() => {
                      handleOrderBy('favorite');
                    }}
                  >
                    좋아요순
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <ProductList products={products.list} />
      <Pagination
        totalCount={products.totalCount}
        pageSize={10}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </section>
  );
}
