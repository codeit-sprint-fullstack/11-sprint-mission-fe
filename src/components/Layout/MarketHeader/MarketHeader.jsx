import styles from './MarketHeader.module.css';
import logo from '../../../assets/logo/logo.svg';
import { Link } from 'react-router';

function MarketHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="판다마켓 로고" className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navItem}>
            자유게시판
          </Link>
          <Link to="/items" className={styles.navItem}>
            중고마켓
          </Link>
        </nav>
      </div>
      <Link to="/" className={styles.loginBtn}>
        로그인
      </Link>
    </header>
  );
}

export default MarketHeader;
