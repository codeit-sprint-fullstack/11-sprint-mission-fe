'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteArticle } from '../../../../../api/api';
import styles from './detail.module.css';

export default function ArticleButtons({ articleId }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      await deleteArticle(articleId);
      router.push('/boards/free');
      router.refresh();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제 실패');
    }
  };

  return (
    <div className={styles.kebabWrapper}>
      <button className={styles.kebabBtn} onClick={() => setIsOpen(!isOpen)}>
        ⋮
      </button>
      {/* 메뉴가 열렸을 때만 드롭다운 표시 */}
      {isOpen && (
        <div className={styles.dropdown}>
          <button onClick={() => router.push(`/boards/free/${articleId}/edit`)}>
            수정하기
          </button>
          <button onClick={handleDelete} className={styles.deleteText}>
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
