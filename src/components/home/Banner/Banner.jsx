import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import * as styles from './Banner.css.js';

export default function Banner({ title, buttonText, buttonLink, imageSrc }) {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>{title}</h2>

        {buttonText && (
          <Link href={buttonLink}>
            <Button
              shape="round"
              size="lg"
              color="primary"
              className={styles.bannerButton}
            >
              {buttonText}
            </Button>
          </Link>
        )}
      </div>

      <Image
        src={imageSrc}
        alt="배너 이미지"
        width={700}
        height={400}
        className={styles.bannerImage}
      />
    </section>
  );
}
