import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import styles from './ProductListSection.module.css';
import { Pagination } from '../Pagination/Pagination';
// import { useDebouncedCallback } from 'use-debounce';

export default function ProductListSection() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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
      const params = new URLSearchParams({
        page: currentPage,
        pageSize: 10,
        orderBy,
        keyword,
      });
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`
      );
      const data = await res.json();
      setProducts(data);
    };

    getProducts();
  }, [orderBy, keyword, currentPage]);

  return (
    <>
      <section>
        <div className={styles.productSection}>
          <h2>판매 중인 상품</h2>
          <div>
            <img />
            <input
              name="search"
              value={keyword}
              type="text"
              placeholder="검색할 상품을 입력하세요."
              onChange={handleSearch}
            />
            <a>상품 등록하기</a>
            <button type="button" onClick={handleIsOpen}>
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
            </button>
          </div>

          {isOpen ? (
            <ul>
              <li>
                <button
                  onClick={() => {
                    handleOrderBy('recent');
                  }}
                >
                  최신순
                </button>
              </li>
              <li>
                <button
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
        <ProductList products={products.list} />
        <Pagination
          totalCount={products.totalCount}
          pageSize={10}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </section>
    </>
  );
}
