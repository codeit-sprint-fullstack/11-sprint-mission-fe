import facebook from '../../assets/ic_facebook.svg';
import instagram from '../../assets/ic_instagram.svg';
import twitter from '../../assets/ic_twitter.svg';
import youtube from '../../assets/ic_youtube.svg';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerBox}>
          <p className={styles.footerText1}>©codeit - 2024</p>
          <div className={styles.footerBoxMiddle}>
            <a className={styles.footerText2} href="./privacy.html">
              Privacy Policy
            </a>
            <a className={styles.footerText2} href="./faq.html">
              FAQ
            </a>
          </div>
          <div className={styles.footerBoxEnd}>
            <a
              href="https://www.facebook.com/login.php/?lang=ko"
              target="_blank"
            >
              <img className={styles.icon} src={facebook} alt="facebook" />
            </a>
            <a href="https://x.com/" target="_blank">
              <img className={styles.icon} src={twitter} alt="twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img className={styles.icon} src={youtube} alt="youtube" />
            </a>
            <a href="https://www.instagram.com/?hl=ko" target="_blank">
              <img className={styles.icon} src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
