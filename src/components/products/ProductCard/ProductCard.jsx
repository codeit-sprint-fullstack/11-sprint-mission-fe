import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { FiHeart } from 'react-icons/fi';
import { formatCount } from '@/utils';
import * as styles from './ProductCard.css.js';

export default function ProductCard({ product, type = 'list' }) {
  // const { id, name, image, price, _count } = product;
  // const likeCount = formatCount(_count.likes);
  // const thumbnail = image?.[0] || null;

  const { id, name, images, price, favoriteCount } = product;
  const likeCount = formatCount(favoriteCount || 0);
  const thumbnail = images?.[0] || null;

  return (
    <Link
      href={`/items/${id}`}
      className={clsx(styles.cardBase, styles.cardType[type])}
    >
      <div className={styles.imageContainer}>
        <Image
          src={thumbnail}
          alt={name}
          fill
          className={styles.productImg}
        />
      </div>

      <div className={styles.productInfo}>
        <span className={styles.productName}>{name}</span>

        <span className={styles.productPrice}>{price.toLocaleString()}원</span>

        <div className={styles.like}>
          <FiHeart className={styles.heartIcon} />
          <span>{likeCount}</span>
        </div>
      </div>
    </Link>
  );
}
