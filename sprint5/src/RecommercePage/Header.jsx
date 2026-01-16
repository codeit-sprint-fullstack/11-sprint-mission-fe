import React from 'react';
import styles from './Header.module.css';
import logo from '../asset/logo.png';
export const Header = () => {
  return (
    <>
      <header className={styles.globalNavigationBar}>
        <nav className={styles.innerNav}>
          <section className={styles.menuContent}>
            <a href="./">
              <img className={styles.logoImg} src={logo} />
            </a>
            <div className={styles.menuStyle}>
              <a href="./">
                <p className={styles.menu}>자유게시판</p>
              </a>
              <a href="./">
                <p className={styles.menu}>중고마켓</p>
              </a>
            </div>
          </section>

          <a className={styles.loginButton} href="/pages/login.html">
            로그인
          </a>
        </nav>
      </header>
    </>
  );
};
