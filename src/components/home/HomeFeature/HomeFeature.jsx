import Image from 'next/image';
import clsx from 'clsx';
import * as styles from './HomeFeature.css.js';

export default function HomeFeature({
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
  isReverse,
}) {
  return (
    <div className={styles.featureContainer}>
      <div
        className={clsx(
          styles.featureContent,
          isReverse
            ? styles.contentVariants.reverse
            : styles.contentVariants.default,
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={988}
          height={444}
          className={styles.featureImage}
        />

        <div
          className={clsx(
            styles.featureText,
            isReverse
              ? styles.alignVariants.reverse
              : styles.alignVariants.default,
          )}
        >
          <span className={styles.badgeText}>{badge}</span>
          <h2 className={styles.titleText}>{title}</h2>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>
    </div>
  );
}
