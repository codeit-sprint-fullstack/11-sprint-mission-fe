import { LinkButton } from '../LinkButton';
import PandaMarketLogo from '@/assets/panda.svg';
import styles from './Header.module.css';

export function Header({ title, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="./">
          <img src={PandaMarketLogo} alt="판다마켓 로고" />
          <h1 className={styles.srOnly}>{title}</h1>
        </a>
        <div className={styles.menuContainer}>{children}</div>
      </div>
      <LinkButton className={styles.loginButton}>로그인</LinkButton>
    </header>
  );
}
