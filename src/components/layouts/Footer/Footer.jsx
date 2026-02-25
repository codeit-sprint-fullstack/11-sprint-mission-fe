import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from '@/assets/icons/sns/ic_facebook.svg';
import twitterIcon from '@/assets/icons/sns/ic_twitter.svg';
import youtubeIcon from '@/assets/icons/sns/ic_youtube.svg';
import instagramIcon from '@/assets/icons/sns/ic_instagram.svg';
import * as styles from './Footer.css.js';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerCopyright}>©codeit - 2024</div>

        <ul className={styles.footerLinks}>
          <li>
            <Link href="/policy" className={styles.linkItem}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.linkItem}>
              FAQ
            </Link>
          </li>
        </ul>

        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image src={facebookIcon} alt="페이스북" width={20} height={20} />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image src={twitterIcon} alt="트위터" width={20} height={20} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image src={youtubeIcon} alt="유튜브" width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src={instagramIcon}
              alt="인스타그램"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
