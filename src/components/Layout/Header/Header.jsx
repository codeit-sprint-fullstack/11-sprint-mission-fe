import logo from '@/assets/logo/logo.svg';
import { Button } from '@/components/UI/Button';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <a href="/">
            <img
              src={logo}
              alt="판다마켓 홈"
              width="153"
              className={styles.headerLogo}
            />
          </a>
          <nav>
            <ul className="gnb">
              <li>
                <a href="/">자유게시판</a>
              </li>
              <li>
                <a href="/">중고마켓</a>
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
