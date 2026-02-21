'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '../styles/Header.module.css';
// import styles from '../App.module.css';

const Header = () => {
  const pathname = usePathname();

  const isFreeBoard = pathname.startsWith('/boards/free');
  const isItemsPage = pathname === '/items';
  const isLandingPage = pathname === '/';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.headerLogo}>
            <img src="/img/logo.svg" alt="판다마켓 로고" />
          </Link>

          {/* 랜딩페이지가 아닐떄만 보이게 */}
          {!isLandingPage && (
            <nav className={styles.navMenu}>
              <Link
                href="/boards/free"
                className={clsx(styles.navItem, {
                  [styles.navActive]: isFreeBoard,
                })}
              >
                자유게시판
              </Link>

              <Link
                href="/items"
                className={clsx(styles.navItem, {
                  [styles.navActive]: isItemsPage,
                })}
              >
                중고마켓
              </Link>
            </nav>
          )}
        </div>
        <Link className={styles.loginBtn} href="/login">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
