'use client';
import { useRouter } from 'next/navigation';
import { deleteArticle } from '../../../../../api/api';
import styles from './detail.module.css';

export default function ArticleButtons({ articleId }) {
  const router = useRouter();
  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await deleteArticle(articleId);
      router.push('/boards/free');
      router.refresh();
    } catch (error) {
      console.error(error);
      alert('삭제 실패');
    }
  };
  return (
    <div className={styles.buttonGroup}>
      <button
        className={styles.btn}
        onClick={() => router.push(`/boards/free/${articleId}/edit`)}
      >
        수정
      </button>
      <button className={styles.btn} onClick={handleDelete}>
        삭제
      </button>
    </div>
  );
}
