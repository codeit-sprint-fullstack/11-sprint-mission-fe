import facebook from '@/assets/ic_facebook.svg';
import twitter from '@/assets/ic_twitter.svg';
import youtube from '@/assets/ic_youtube.svg';
import instagram from '@/assets/ic_instagram.svg';
import styles from './LogoContainer.module.css';
import clsx from 'clsx';

export function LogoContainer({className}) {
  return (
    <>
      <ul className={clsx(styles.logoContainer, className)}>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북 로고" />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank">
            <img src={twitter} alt="트위터 로고" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유튜브 로고" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="인스타그램 로고" />
          </a>
        </li>
      </ul>
    </>
  );
}
