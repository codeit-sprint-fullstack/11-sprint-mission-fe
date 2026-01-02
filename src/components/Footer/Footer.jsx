import styles from './Footer.module.css';
import { LogoContainer } from './LogoContainer';

export function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.copyright}>©codeit - 2024</p>
        <div className={styles.textContainer}>
          <a href="">Privacy Policy</a>
          <a href="">FAQ</a>
        </div>
        <LogoContainer />        
      </div>
    </footer>
  );
}
