import logo from '../../assets/logo/logo.svg';
import { Button } from '@/components/Button';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gnbContainer}>
        <a href="/">
          <img src={logo} alt="판다마켓 홈" width="153" />
        </a>
        <ul className={styles.gnb}>
          <li><a href="/">자유게시판</a></li>
          <li><a href="/">중고마켓</a></li>
        </ul>
      </div>
      <Button variant={'primary'}>
        {/* <a href="login.html" id="loginLinkButton"> */}
          로그인
        {/* </a> */}
      </Button>
    </header>
  );
}
