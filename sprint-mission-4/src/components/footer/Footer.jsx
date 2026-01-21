import facebook from '../../assets/ic_facebook.svg';
import instagram from '../../assets/ic_instagram.svg';
import twitter from '../../assets/ic_twitter.svg';
import youtube from '../../assets/ic_youtube.svg';
import ExternalLink from '../common/ExternalLink';
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
            <ExternalLink href="https://www.facebook.com/login.php/?lang=ko">
              <img className={styles.icon} src={facebook} alt="facebook" />
            </ExternalLink>

            <ExternalLink href="https://x.com/">
              <img className={styles.icon} src={twitter} alt="twitter" />
            </ExternalLink>

            <ExternalLink href="https://www.youtube.com/">
              <img className={styles.icon} src={youtube} alt="youtube" />
            </ExternalLink>

            <ExternalLink href="https://www.instagram.com/?hl=ko">
              <img className={styles.icon} src={instagram} alt="instagram" />
            </ExternalLink>
          </div>
        </div>
      </footer>
    </>
  );
}
