import React from 'react';
import styles from '../App.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <a className={styles.headerLogo} href="/">
          <img src="/img/logo.svg" alt="판다마켓 로고" />
        </a>
        <nav className={styles.navMenu}>
          <a href="/" className={styles.navItem}>
            자유게시판
          </a>
          <a href="/items" className={styles.navItem}>
            중고마켓
          </a>
        </nav>
      </div>
      <a href="/login" className={styles.loginBtn}>
        로그인
      </a>
    </div>
  </header>
);

export default Header;
