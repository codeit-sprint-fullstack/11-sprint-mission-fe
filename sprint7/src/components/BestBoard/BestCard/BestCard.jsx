import Image from 'next/image';
import badge from '@public/itemCard/img_badge.png';
import itemImage from '@public/itemCard/image_71.png';
import hart from '@public/itemCard/ic_heart.png';
import { formatDate } from '@/lib/format';
import * as styles from './BestCard.css';

export default function BestCard({ title, name, createdAt }) {
  return (
    <div className={styles.cardContainer}>
      <Image src={badge} alt="best badge" />
      <div className={styles.cardTitleWrapper}>
        <div className={styles.titleBox}>{title}</div>
        <div className={styles.ImageBox}>
          <Image src={itemImage} alt="image_71" />
        </div>
      </div>
      <div className={styles.nameWrapper}>
        <div className={styles.nameContents}>
          <div>{name}</div>
          <div className={styles.hartContents}>
            <Image src={hart} alt="hart" width={16} height={16} />
            <div>9999+</div>
          </div>
        </div>
        <div>{formatDate(createdAt)}</div>
      </div>
    </div>
  );
}
