import { useState, useEffect } from 'react';
import { getProducts } from './api';
import { usePageSize } from './hooks/usePageSize';
import ProductCard from './components/ProductCard';
import styles from './App.module.css';

function App() {
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [order, setOrder] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  const pageSize = usePageSize();

  useEffect(() => {
    async function loadBest() {
      const data = await getProducts({ orderBy: 'favorite', pageSize: 4 });
      setBestProducts(data.list);
    }
    loadBest();
  }, []);

  useEffect(() => {
    async function loadAll() {
      const data = await getProducts({
        page,
        pageSize,
        orderBy: order,
        keyword,
      });
      setProducts(data.list);
      setTotalCount(data.totalCount);
    }
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
    const pageNumbers = [];
    const limit = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + limit - 1);
    if (end - start + 1 < limit) {
      start = Math.max(1, end - limit + 1);
    }
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      {/* 1. 헤더: 전체 너비 배경 + 내부 컨텐츠 제한 */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <a className={styles.headerLogo} href="/">
              <img src="/img/logo.svg" alt="판다마켓 로고" />
            </a>
            <nav className={styles.navMenu}>
              <a href="board.html" className={styles.navItem}>
                자유게시판
              </a>
              <a href="/" className={styles.navItem}>
                중고마켓
              </a>
            </nav>
          </div>
          <a className={styles.loginBtn} href="./login.html">
            로그인
          </a>
        </div>
      </header>

      {/* 2. 메인: container 클래스로 가운데 정렬 및 너비 제한 */}
      <main className={`${styles.container} ${styles.main}`}>
        <section>
          <h2 className={styles.sectionTitle}>베스트 상품</h2>
          <div className={`${styles.grid} ${styles.bestGrid}`}>
            {bestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className={styles.listSection}>
          <div className={styles.listHeader}>
            <h2 className={styles.sectionTitle}>판매 중인 상품</h2>
            <div className={styles.controls}>
              <input
                className={styles.searchInput}
                placeholder="검색할 상품을 입력해주세요"
                onChange={handleSearch}
              />
              <button className={styles.btnRegister}>상품 등록하기</button>
              <select className={styles.sortSelect} onChange={handleSort}>
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>

          <div className={`${styles.grid} ${styles.allGrid}`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
              disabled={page === totalPages}
              className={styles.arrowBtn}
            >
              &gt;
            </button>
          </div>
        </section>
      </main>

      {/* 3. 푸터: 전체 너비 배경 + 내부 컨테이너 정렬 */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <a>@codeit - 2024</a>
          </div>
          <div className={styles.footerCenter}>
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./faq.html">FAQ</a>
          </div>
          <div className={styles.snsIcon}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_facebook.png" alt="페이스북" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src="/img/ic_twitter.png" alt="트위터" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_youtube.png" alt="유튜브" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/ic_instagram.png" alt="인스타그램" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
