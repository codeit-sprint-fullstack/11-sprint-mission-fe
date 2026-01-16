import React from 'react';
import styles from './Footer.module.css';
import facebook from '../asset/facebook.png';
import twitter from '../asset/twitter.png';
import youtube from '../asset/youtube.png';
import insta from '../asset/insta.png';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>@codeit - 2024</div>
          <div className={styles.footerLink}>
            <a href="/pages/privacy.html">PrivacyPolicy</a>
            <a href="/pages/faq.html">FAQ</a>
          </div>
          <div className={styles.social}>
            <a target="_blank" href="https://facebook.com">
              <img src={facebook} />
            </a>
            <a target="_blank" href="https://x.com">
              <img src={twitter} />
            </a>
            <a target="_blank" href="https://youtube.com">
              <img src={youtube} />
            </a>
            <a target="_blank" href="https://instagram.com">
              <img src={insta} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
