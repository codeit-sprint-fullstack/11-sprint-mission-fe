import heart from '@/assets/ic_heart.svg';
import styles from './LikeButton.module.css';

export function LikeButton({ count }) {
  return (
    <button className={styles.likeButton}>
      <img src={heart} alt="좋아요 버튼" className={styles.heartImg} />
      {count}
    </button>
  );
}
