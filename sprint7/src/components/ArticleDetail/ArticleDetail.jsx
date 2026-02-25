import { getArticleDetail } from '@/lib/api';
import * as styles from './ArticleDetail.css.js';
import profile from '@public/itemCard/ic_profile.svg';
import hart from '@public/itemCard/ic_heart.svg';
import Image from 'next/image.js';
import { formatDate } from '@/lib/format.js';

export default async function ArticleDetail({ id }) {
  const { data } = await getArticleDetail(id);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.userProfileWrapper}>
        <div className={styles.userProfile}>
          <Image
            src={profile}
            alt="profile"
            width={40}
            height={40}
            className={styles.profileImg}
          />
          <div className={styles.userName}>backNo</div>
          <div className={styles.date}>{formatDate(data.createdAt)}</div>
        </div>
        <div className={styles.profileLine}>|</div>
        <div className={styles.likeWrapper}>
          <Image src={hart} alt="ic_heart" width={32} height={32} />
          <div className={styles.likeNumber}>123</div>
        </div>
      </div>
      <div className={styles.divideLine} />
      <div className={styles.contentText}>{data.content}</div>
    </div>
  );
}
