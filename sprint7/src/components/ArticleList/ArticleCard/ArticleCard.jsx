import Image from 'next/image.js';
import Link from 'next/link';
import * as styles from './ArticleCard.css.js';
import ThImg from '@public/itemCard/image_71.png';
import profile from '@public/itemCard/ic_profile.svg';
import heart from '@public/itemCard/ic_heart.png';
import { formatDate } from '@/lib/format.js';

export default function ArticleCard({ id, title, createdAt }) {
  return (
    <Link href={`/freeboard/${id}`} className={styles.container}>
      <div className={styles.titleBox}>
        <div className={styles.titleFont}>{title}</div>
        <div className={styles.ImageBox}>
          <Image src={ThImg} alt="ThImg" />
        </div>
      </div>
      <div className={styles.profileContailer}>
        <div className={styles.userProfileWrapper}>
          <Image src={profile} alt="profile" />
          <div className={styles.nickNameFont}>backNo</div>
          <div className={styles.dateFont}>{formatDate(createdAt)}</div>
        </div>
        <div className={styles.hartWrapper}>
          <Image src={heart} alt="heart" />
          <div className={styles.LikeFont}>9999+</div>
        </div>
      </div>
    </Link>
  );
}
