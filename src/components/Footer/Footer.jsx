import * as styles from './Footer.css';
import facebook from '../../../public/images/facebook.png';
import twitter from '../../../public/images/twitter.png';
import youtube from '../../../public/images/youtube.png';
import insta from '../../../public/images/insta.png';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>@codeit _ 2024</div>
        <div className={styles.footerLink}>
          <div>PrivacyPolicy</div>
          <div>FAQ</div>
        </div>
        <div className={styles.social}>
          <div target="_blank" href="https://facebook.com">
            <Image className={styles.socialImg} src={facebook} alt="facebook" />
          </div>
          <div target="_blank" href="https://x.com">
            <Image className={styles.socialImg} src={twitter} alt="twitter" />
          </div>
          <div target="_blank" href="https://youtube.com">
            <Image className={styles.socialImg} src={youtube} alt="youtube" />
          </div>
          <div target="_blank" href="https://instagram.com">
            <Image className={styles.socialImg} src={insta} alt="insta" />
          </div>
        </div>
      </div>
    </footer>
  );
}
