import { LogoContainer } from './LogoContainer';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
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
