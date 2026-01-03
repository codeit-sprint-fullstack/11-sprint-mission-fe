import facebookLogo from '../../assets/social/facebook-logo.svg';
import twitterLogo from '../../assets/social/twitter-logo.svg';
import youtubeLogo from '../../assets/social/youtube-logo.svg';
import instagramLogo from '../../assets/social/instagram-logo.svg';
import styles from './Footer.module.css';

export function Footer() {
  return (
      <footer className={styles.footer}>
        <div>©codeit - 2024</div>
        <div className={styles.footerMenu}>
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="페이스북" width="20" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="트위터" width="20" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeLogo} alt="유튜브" width="20" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramLogo}
              alt="인스타그램"
              width="20"
            />
          </a>
        </div>
      </footer>
  );
}
