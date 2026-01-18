import { LinkButton } from '../LinkButton';
import PandaLogo from '@/assets/logo.svg';
import PandaMarket from '@/assets/pandamarket.svg';
import styles from './Header.module.css';
import clsx from 'clsx';

export function Header({ title, children, className }) {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.container}>
        <a href="./">
          <div className={styles.logoBox}>
            <img
              src={PandaLogo}
              alt="판다 로고"
              className={styles.pandaLogo}
            />
            <img
              src={PandaMarket}
              alt="판다마켓"
              className={styles.pandaMarket}
            />
          </div>
          <h1 className={styles.srOnly}>{title}</h1>
        </a>
        <div className={styles.menuContainer}>{children}</div>
      </div>
      <LinkButton className={styles.loginButton}>로그인</LinkButton>
    </header>
  );
}
