import Link from 'next/link';
import Image from 'next/image';
import { formatCount, formatDate } from '@/utils';
import { FiHeart } from 'react-icons/fi';
import * as styles from './ArticleCard.css.js';

export default function ArticleCard({ article }) {
  const { id, title, image, author, _count, createdAt } = article;
  const likeCount = formatCount(_count.likes);
  const thumbnail = image?.[0];
  const profileImage = author.image;

  return (
    <Link href={`/articles/${id}`} className={styles.cardContainer}>
      <div className={styles.articleContent}>
        <div className={styles.mainContent}>
          <h3 className={styles.articleTitle}>{title}</h3>

          {thumbnail && (
            <div className={styles.imageWrapper}>
              <Image
                src={thumbnail}
                alt={title}
                width={72}
                height={72}
                className={styles.articleImage}
              />
            </div>
          )}
        </div>

        <div className={styles.subContent}>
          <div className={styles.articleInfo}>
            <div className={styles.profileWrapper}>
              {profileImage && (
                <Image
                  src={profileImage}
                  alt="프로필"
                  width={24}
                  height={24}
                  className={styles.profileImage}
                />
              )}
              <span className={styles.writer}>{author.nickname}</span>
            </div>

            <span className={styles.date}>{formatDate(createdAt)}</span>
          </div>

          <div className={styles.like}>
            <FiHeart />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
