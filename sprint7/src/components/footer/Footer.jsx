import Link from 'next/link';
import * as styles from './Footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerWrapper}>
        <div>©codeit - 2024</div>
        <div className={styles.footerMenuContainer}>
          <div>Privacy Policy</div>
          <div>FAQ</div>
        </div>
        <div className={styles.snsContainer}>
          <Link href="https://www.facebook.com/">
            <Image
              src="/sns/ic_facebook.svg"
              alt="페이스북"
              width={22}
              height={22}
            />
          </Link>
          <Link href="https://www.twitter.com/">
            <Image
              src="/sns/ic_twitter.svg"
              alt="트위터"
              width={22}
              height={22}
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image
              src="/sns/ic_youtube.svg"
              alt="유튜브"
              width={22}
              height={22}
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image
              src="/sns/ic_instagram.svg"
              alt="인스타그램"
              width={22}
              height={22}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
