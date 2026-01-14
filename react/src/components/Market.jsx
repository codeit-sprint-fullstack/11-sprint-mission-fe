import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import styles from './Market.module.css';

const API_URL = 'https://panda-market-api.vercel.app/products';

const PAGE_SIZE = 10;   // 한 페이지당 상품 수
const PAGE_LIMIT = 5;   // 페이지 버튼 최대 개수

export default function Market() {
  /* =====================
     State
  ===================== */
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [inputValue, setInputValue] = useState('');       // 타이핑용
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색 실행 기준

  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);

  /* =====================
     Data Fetch
  ===================== */
  useEffect(() => {
    async function fetchProducts() {
      try {
        /* ===== 베스트 상품 (좋아요순) ===== */
        const bestRes = await fetch(
          `${API_URL}?orderBy=favorite&page=1&pageSize=4`
        );
        if (!bestRes.ok) {
          console.error("Product list error:", bestRes.status);
          throw new Error(`베스트 상품데이타를 가져오지 못하였습니다:${bestRes.status}, text:${bestRes.statusText}` );
        }
        const bestData = await bestRes.json();
        setBestProducts(bestData.list ?? []);

        /* ===== 판매중인 상품 ===== */
        const productRes = await fetch(
          `${API_URL}?orderBy=${orderBy}&page=${page}&limit=${PAGE_SIZE}&keyword=${searchKeyword}`
        );

        if (!productRes.ok) {
          console.error("Product list error:", productRes.status);
          throw new Error(`일반 상품데이타를 가져오지 못하였습니다:${productRes.status}, text:${productRes.statusText}` );
        }
        const productData = await productRes.json();

        setProducts(productData.list ?? []);
        setTotalCount(productData.totalCount ?? 0);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, [orderBy, page, searchKeyword]); 

  /* =====================
     Pagination Logic
  ===================== */
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const currentGroup = Math.ceil(page / PAGE_LIMIT);
  const startPage = (currentGroup - 1) * PAGE_LIMIT + 1;
  const endPage = Math.min(startPage + PAGE_LIMIT - 1, totalPages);

  /* =====================
     Handlers
  ===================== */
  const handleSearch = () => {
    setPage(1);
    setSearchKeyword(inputValue.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  /* =====================
     Render
  ===================== */
  return (
    <section className={styles.container}>
      {/* ===== 베스트 상품 ===== */}
      <h2 className={styles.sectionTitle}>베스트 상품</h2>
      <ul className={styles.bestGrid}>
        {bestProducts.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            isBest
          />
        ))}
      </ul>

      {/* ===== 판매중 상품 헤더 ===== */}
      <div className={styles.productHeader}>
        <h2 className={styles.sectionTitle}>판매 중인 상품</h2>

        <div className={styles.controls}>
          <input
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해주세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            className={styles.registerButton}
            onClick={() => alert('상품 등록 페이지로 이동')}
          >
            상품등록하기
          </button>

          <select
            className={styles.select}
            value={orderBy}
            onChange={(e) => {
              setOrderBy(e.target.value);
              setPage(1);
            }}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      {/* ===== 판매중 상품 리스트 ===== */}
      <ul className={styles.productGrid}>
        {products.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
          />
        ))}
      </ul>

      {/* ===== Pagination ===== */}
      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          disabled={page === 1}
          onClick={() => setPage((page) => Math.max(page - 1, 1))}
        >
          &lt;
        </button>

        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${styles.pageButton} ${
              page === pageNumber ? styles.active : ''
            }`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className={styles.pageButton}
          disabled={page === totalPages}
          onClick={() =>
            setPage((page) => Math.min(page + 1, totalPages))
          }
        >
          &gt;
        </button>
      </div>
    </section>
  );
}