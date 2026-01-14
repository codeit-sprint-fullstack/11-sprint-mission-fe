import styles from './Footer.module.css';
import facebookLogo from '../../assets/facebook-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import instagramLogo from '../../assets/instagram-logo.svg';
import youtubeLogo from '../../assets/youtube-logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 왼쪽: 저작권 */}
      <div className={styles.left}>
        <div className={styles.copy}>©codeit - 2024</div>
      </div>

      {/* 중앙: 메뉴 */}
      <div className={styles.center}>
        <a href="privacy.html">Privacy Policy</a>
        <a href="faq.html">FAQ</a>
      </div>

      {/* 오른쪽: 소셜 아이콘 */}
      <div className={styles.right}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="페이스북" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="트위터" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="유튜브" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="인스타그램" />
        </a>
      </div>
    </footer>
  );
}