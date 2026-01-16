import React from 'react';
import styles from './Header.module.css';
import logo from '../../asset/logo.png';
import { useNavigate } from 'react-router';

export const Header = () => {
  //랜딩페이지 header와 자유,중고header 구현
  const navHome = useNavigate();
  const onNavHome = () => {
    navHome('/');
  };

  return (
    <>
      <header className={styles.globalNavigationBar}>
        <nav className={styles.innerNav}>
          <section className={styles.menuContent}>
            <div onClick={onNavHome}>
              <img className={styles.logoImg} src={logo} />
            </div>
            <div className={styles.menuStyle}>
              <p className={styles.menu}>자유게시판</p>
              <p className={styles.menu}>중고마켓</p>
            </div>
          </section>

          <div className={styles.loginButton}>로그인</div>
        </nav>
      </header>
    </>
  );
};
