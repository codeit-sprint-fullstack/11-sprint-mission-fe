'use client';

import Link from 'next/link.js';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as styles from './Header.css.js';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.menuContainer}>
          <Link href="/">
            <Image
              src="/logo/pandaLogo.png"
              alt="판다마켓 로고"
              width={153}
              height={51}
            />
          </Link>
          <Link href="/freeboard" className={clsx({ [styles.activeLink]: pathname === '/freeboard' })}>자유게시판</Link>
          <Link href="/market" className={clsx({ [styles.activeLink]: pathname === '/market' })}>중고마켓</Link>
        </div>
        <Link href="/" className={styles.loginBtn}>
          로그인
        </Link>
      </div>
    </header>
  );
}
