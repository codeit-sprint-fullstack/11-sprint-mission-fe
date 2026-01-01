import { Logo } from './Logo';
import logo from '@/assets/logo.svg';
import { Menu } from './Menu';
import styles from './Header.module.css';
import { Login } from './Login';

export function Header() {
  return (
    <header className={styles.headerBar}>
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
