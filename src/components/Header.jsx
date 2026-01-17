import React from 'react';
import styles from '../styles/Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  // 현재 페이지가 '중고마켓'인지 확인 (색상 변경용)
  const isItemsPage = location.pathname === '/items';

  // 현재 페이지가 '랜딩 페이지'인지 확인 (메뉴 숨김용)
  const isLandingPage = location.pathname === '/';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link to="/" className={styles.headerLogo}>
            <img src="/img/logo.svg" alt="판다마켓 로고" />
          </Link>
          {!isLandingPage && (
            <nav className={styles.navMenu}>
              <Link to="/" className={styles.navItem}>
                자유게시판
              </Link>
              <Link
                to="/items"
                className={`${styles.navItem} ${
                  location.pathname === '/items' ? styles.active : ''
                }`}
              ></Link>

              <Link
                to="/items"
                className={`${styles.navItem} ${
                  isItemsPage ? styles.navActive : ''
                }`}
              >
                중고마켓
              </Link>
            </nav>
          )}
        </div>
        <Link className={styles.loginBtn} to="/login">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
