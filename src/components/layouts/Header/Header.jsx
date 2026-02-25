'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import Button from '@/components/common/Button';
import logoMobile from '@/assets/logo/logo_text.svg';
import logoDesktop from '@/assets/logo/logo_sm.svg';
import * as styles from './Header.css.js';

export default function Header() {
  const pathname = usePathname(); // 현재 경로

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerNav}>
          <div className={styles.logoLink}>
            <Link href="/">
              <picture>
                <source media="(min-width: 744px)" srcSet={logoDesktop.src} />
                <Image
                  src={logoMobile}
                  alt="판다마켓 로고"
                  className={styles.logoImg}
                />
              </picture>
            </Link>
          </div>

          <ul className={styles.navMenu}>
            <li>
              <Link
                href="/articles"
                className={clsx(
                  styles.navLink,
                  pathname === '/articles' && styles.activeLink,
                )}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={clsx(
                  styles.navLink,
                  pathname === '/products' && styles.activeLink,
                )}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.headerButton}>
          <Link href="/login">
            <Button shape="square" size="md" color="primary">
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
