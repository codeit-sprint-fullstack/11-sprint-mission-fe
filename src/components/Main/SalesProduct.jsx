import React, { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../../api/products';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import SearchIcon from '../../assets/icons/search.svg';
import styles from './SalesProduct.module.css';
import { useNavigate } from 'react-router-dom';

const SalesProduct = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [products, setProducts] = useState({ list: [], totalCount: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOption, setSortOption] = useState('latest');
  const pageSize = 10;

  const fetchProducts = useCallback(
    async (page = 1) => {
      try {
        const params = {
          page,
          size: pageSize,
          sort: sortOption,
        };
        if (searchKeyword.trim()) {
          params.search = searchKeyword.trim();
        }
        const data = await getProducts(params);
        setProducts(data);
      } catch (error) {
        console.error('상품 로드 에러:', error);
      } finally {
        //
      }
    },
    [pageSize, sortOption, searchKeyword],
  );

  useEffect(() => {
    fetchProducts(1);
    setCurrentPage(1);
  }, [fetchProducts]);

  const handlePageChange = useCallback(
    (page) => {
      setCurrentPage(page);
      fetchProducts(page);
    },
    [fetchProducts],
  );
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/registration');
  };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortSelect = (option) => {
    setSortOption(option);
    setIsSortOpen(false);
    fetchProducts(1);
  };

  const totalPages = Math.ceil(products.totalCount / pageSize);

  return (
    <section className={styles.section}>
      <div className={styles.controls}>
        <h2 className={styles.h2}>판매중인 상품</h2>
        <div className={styles.rightControls}>
          <div className={styles.searchBox}>
            <div className={styles.searchInputContainer}>
              <img src={SearchIcon} alt="검색" className={styles.searchIcon} />
              <input
                type="text"
                placeholder="검색할 상품을 입력해주세요"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <button onClick={handleRegister} className={styles.searchBtn}>
              상품 등록하기
            </button>
          </div>
          <div className={styles.sortContainer}>
            <button onClick={toggleSort} className={styles.sortButton}>
              {sortOption === 'latest' ? '최신순' : '좋아요순'}
            </button>
            {isSortOpen && (
              <div className={styles.sortDropdown}>
                <button
                  className={styles.sortOption}
                  onClick={() => handleSortSelect('latest')}
                >
                  최신순
                </button>
                <button
                  className={styles.sortOption}
                  onClick={() => handleSortSelect('favorite')}
                >
                  좋아요순
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ul className={styles.grid}>
        {products.list.map((product) => (
          <li key={product.id} className={styles.item}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={false}
      />
    </section>
  );
};

export default SalesProduct;
