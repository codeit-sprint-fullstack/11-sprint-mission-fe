import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logoGroup}>
            <Link to="/">
              <img
                src={logo}
                alt="판다마켓 로고"
                className={styles.headerLogo}
              />
            </Link>
            <a className={styles.Title} href="">
              자유게시판
            </a>
            <a className={styles.Title} href="">
              중고마켓
            </a>
          </div>
          <a className={styles.loginBtn} href="/login.html">
            로그인
          </a>
        </nav>
      </header>
    </>
  );
}
