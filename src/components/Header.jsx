'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.css';
// import styles from '../App.module.css';

const Header = () => {
  const pathname = usePathname();

  // 현재 페이지가 '중고마켓'인지 확인
  const isItemsPage = pathname === '/items';

  // 현재 페이지가 '랜딩 페이지'인지 확인
  const isLandingPage = pathname === '/';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.headerLogo}>
            <img src="/img/logo.svg" alt="판다마켓 로고" />
          </Link>

          {/* 랜딩페이지가 아닐떄만 보이게 */}
          {!isLandingPage && (
            <nav className={styles.navMenu}>
              <Link href="/" className={styles.navItem}>
                자유게시판
              </Link>

              <Link
                href="/items"
                className={`${styles.navItem} ${
                  isItemsPage ? styles.navActive : ''
                }`}
              >
                중고마켓
              </Link>
            </nav>
          )}
        </div>
        <Link className={styles.loginBtn} href="/login">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
