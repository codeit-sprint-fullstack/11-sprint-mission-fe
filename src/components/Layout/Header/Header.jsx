import logo from '@/assets/logo/logo.svg';
import { Button } from '@/components/UI/Button';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link to="/">
            <img
              src={logo}
              alt="판다마켓 홈"
              width="153"
              className={styles.headerLogo}
            />
          </Link>
          <nav>
            <ul className="gnb">
              <li>
                <a href="/">자유게시판</a>
              </li>
              <li>
                <NavLink
                  to="/items"
                  className={({ isActive }) => 
                    isActive
                    ? `${styles.active}`
                    : ''}
                >
                  중고마켓
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Button type="click" className={styles.loginLink}>
          {/* <a href="login.html" id="loginLinkButton"> */}
          로그인
          {/* </a> */}
        </Button>
      </div>
    </header>
  );
}
