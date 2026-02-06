import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import youtube from '../../assets/icons/youtube.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <p className={styles.footerLogo}>©codeit-2024</p>

        <div className={styles.footerCenter}>
          <a href="">Privacy Policy</a>
          <a href="">FAQ</a>
        </div>

        <div className={styles.footerIcon}>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북" />
          </a>
          <a href="https://x.com/" target="_blank">
            <img src={twitter} alt="트위터" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유투브" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="인스타그램" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
