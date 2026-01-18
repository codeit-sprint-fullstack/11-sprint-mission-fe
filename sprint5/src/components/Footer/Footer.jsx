import React from 'react';
import facebook from '../../asset/facebook.png';
import youtube from '../../asset/youtube.png';
import twitter from '../../asset/twitter.png';
import insta from '../../asset/insta.png';
import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.copyright}>@codeit _ 2024</div>
          <div className={styles.footer_link}>
            <a href="/pages/privacy.html">PrivacyPolicy</a>
            <a href="/pages/faq.html">FAQ</a>
          </div>
          <div className={styles.social}>
            <div target="_blank" href="https://facebook.com">
              <img src={facebook} />
            </div>
            <div target="_blank" href="https://x.com">
              <img src={twitter} />
            </div>
            <div target="_blank" href="https://youtube.com">
              <img src={youtube} />
            </div>
            <div target="_blank" href="https://instagram.com">
              <img src={insta} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
