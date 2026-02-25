'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './Comments.css.js';
import { submitCreateCommnets } from '@/lib/actions.js';

export default function Comments({ id }) {
  const router = useRouter();
  const [commnet, setCommnet] = useState('');
  const isValid = commnet.trim() !== '';

  const onSubmit = async (e) => {
    e.preventDefault();
    await submitCreateCommnets(commnet, id);
    setCommnet('');
    router.refresh();
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.titleText}>댓글달기</div>
      <textarea
        className={styles.commentsTextarea}
        placeholder="댓글을 입력해주세요"
        value={commnet}
        onChange={(e) => setCommnet(e.target.value)}
      />
      <div className={styles.btnWrapper}>
        <button
          type="submit"
          className={isValid ? styles.btnActive : styles.btn}
          disabled={!isValid}
        >
          등록
        </button>
      </div>
    </form>
  );
}
