'use client';

import logo from '@/assets/logo/logo.svg';
import { Button } from '@/components/UI/Button';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link href="/">
            <Image
              src={logo}
              alt="판다마켓 홈"
              width="153"
              className={styles.headerLogo}
            />
          </Link>
          <nav>
            <ul className="gnb">
              <li>
                <Link href="/communityFeed">자유게시판</Link>
              </li>
              <li>
                <Link
                  href="/items"
                  className={pathname === '/items' ? `${styles.active}` : ''}
                >
                  중고마켓
                </Link>
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
