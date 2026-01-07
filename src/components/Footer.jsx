import facebook from '../assets/facebook.svg';
import instagram from '../assets/ic_instagram.svg';
import twitter from '../assets/ic_twitter.svg';
import youtube from '../assets/youtube.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.codeit}>@codeit-2024</div>
        <div className={styles.footerMenu}>
          <a href="/">PrivacyPolicy</a>
          <a href="/">FAQ</a>
        </div>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={twitter} alt="트위터" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유튜브" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
