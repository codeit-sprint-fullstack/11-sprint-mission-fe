import Image from 'next/image';
import inquiryImg from '@/assets/images/Img_inquiry_lg.svg';
import replyImg from '@/assets/images/Img_reply.svg';
import * as styles from './EmptyComment.css.js';

const EMPTY_CONFIG = {
  article: {
    image: replyImg,
    alt: '댓글 없음',
    message: '아직 댓글이 없어요,\n지금 댓글을 달아보세요!',
  },
  product: {
    image: inquiryImg,
    alt: '문의 없음',
    message: '아직 문의가 없어요',
  },
};

export default function EmptyComments({ type = 'article' }) {
  const config = EMPTY_CONFIG[type];
  const { image, alt, message } = config;

  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={alt}
        width={140}
        height={140}
        className={styles.infoImage}
      />
      <p className={styles.infoMessage}>{message}</p>
    </div>
  );
}
