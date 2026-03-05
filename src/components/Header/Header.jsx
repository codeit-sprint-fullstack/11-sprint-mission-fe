import * as styles from './Header.css';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import Button from '../Button/Button.jsx';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.globalNavigationBar}>
      <nav className={styles.innerNav}>
        <section className={styles.menuContent}>
          <Link href="/">
            <Image className={styles.logoImg} src={logo} alt="logo" />
          </Link>
          <div className={styles.menuStyle}>
            <p className={styles.menu}>자유게시판</p>
            <p className={styles.menu}>중고마켓</p>
          </div>
        </section>

        <Button content="로그인" />
      </nav>
    </header>
  );
}
