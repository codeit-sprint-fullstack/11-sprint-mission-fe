import logo from '../../assets/logo-with-text.svg';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isItemsPage = location.pathname === '/items';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" aria-label="홈">
          <img src={logo} alt="판다마켓 로고" />
        </Link>
        <div className={styles.headerLink}>
          <Link to="/" className={styles.free}>
            자유게시판
          </Link>
          <Link
            to="/items"
            className={styles.sell}
            style={{ color: isItemsPage ? '#3692FF' : 'inherit' }}
          >
            중고마켓
          </Link>
        </div>
      </div>
      <a href="/login.html" className={styles.loginBtn}>
        로그인
      </a>
    </header>
  );
}

export default Header;
