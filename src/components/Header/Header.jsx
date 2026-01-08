import { Logo } from '../common/Logo';
import { Menu } from './Menu';
import { Login } from './Login';
import logo from '@/assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.headerBar}>
      <h1 class={styles.srOnly}>판다마켓 중고마켓 페이지</h1>
      <div className={styles.container}>
        <Logo src={logo} alt="판다로고" />
        <div className={styles.menuContainer}>
          <Menu>자유게시판</Menu>
          <Menu>중고마켓</Menu>
        </div>
        <Login className={styles.button}>로그인</Login>
      </div>
    </header>
  );
}
