import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.globalHeader}>
        <nav>
          <div className={styles.logoGroup}>
            <a>
              <img
                src={logo}
                alt="판다마켓 로고"
                className={styles.headerLogo}
              />
            </a>
            <a href="">자유게시판</a>
            <a href="">중고마켓</a>
          </div>
          <a className={styles.loginBtn} href="/login.html">
            로그인
          </a>
        </nav>
      </header>
    </>
  );
}
