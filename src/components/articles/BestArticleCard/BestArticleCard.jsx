import Link from 'next/link';
import Image from 'next/image';
import { formatCount, formatDate } from '@/utils';
import { FiHeart } from 'react-icons/fi';
import * as styles from './BestArticleCard.css.js';

export default function BestArticleCard({ article }) {
  const { id, title, image, author, _count, createdAt } = article;
  const likeCount = formatCount(_count.likes);
  const thumbnail = image?.[0];

  return (
    <Link href={`/articles/${id}`} className={styles.cardContainer}>
      <div className={styles.bestBadge}>
        <span>🎖 Best</span>
      </div>

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
                className={styles.cardImage}
              />
            </div>
          )}
        </div>

        <div className={styles.subContent}>
          <div className={styles.articleInfo}>
            <span className={styles.writer}>{author.nickname}</span>

            <div className={styles.like}>
              <FiHeart />
              <span>{likeCount}</span>
            </div>
          </div>

          <span className={styles.date}>{formatDate(createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}
