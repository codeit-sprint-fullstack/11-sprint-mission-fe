import React from 'react';
import styles from '../style/Header.module.css';
import logo from '../assets/logo.png';
export const Header = () => {
  return (
    <>
      <header className={styles.globalNavigationBar}>
        <nav className={styles.innerNav}>
          <a href="./">
            <img className={styles.logoImg} src={logo} />
          </a>

          <a className={styles.loginButton} href="/pages/login.html">
            로그인
          </a>
        </nav>
      </header>
    </>
  );
};
