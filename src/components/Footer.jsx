import React from 'react';
import styles from '../App.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <a>@codeit - 2024</a>
      </div>
      <div className={styles.footerCenter}>
        <a href="/">Privacy Policy</a>
        <a href="/">FAQ</a>
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
);

export default Footer;
