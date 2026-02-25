import Image from 'next/image.js';
import * as styles from './CommentsListItem.css.js';
import profile from '@public/itemCard/ic_profile.svg';
import { formatDate } from '@/lib/format.js';

export default function CommentsListItem({ item }) {
  const { content, createdAt } = item;
  return (
    <div className={styles.container}>
      <div>{content}</div>
      <div className={styles.profileWrapper}>
        <Image src={profile} alt="profile" width={32} height={32} />
        <div className={styles.textWrapper}>
          <div className={styles.userName}>똑똑한판다</div>
          <div className={styles.date}>{formatDate(createdAt)}</div>
        </div>
      </div>
    </div>
  );
}
