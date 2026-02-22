'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createArticle } from '../../../../../api/api';
import styles from '../form.module.css';

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 제목과 내용이 비어있지 않은지 체크 (버튼 활성화용)
  const isValid = title.trim() !== '' && content.trim() !== '';

  const handleSubmit = async () => {
    if (!isValid) {
      return;
    }

    try {
      // 1. 게시글 생성 요청 및 응답 데이터 받기
      const res = await createArticle({ title, content });

      // 2. 응답받은 게시글의 id를 사용하여 상세 페이지로 이동
      if (res && res.id) {
        router.push(`/boards/free/${res.id}`);
        router.refresh();
      } else {
        // 혹시 id가 바로 안 올 경우를 대비한 목록 이동
        router.push('/boards/free');
      }
    } catch (error) {
      console.error('게시글 등록 에러:', error);
      alert('게시글 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>게시글 쓰기</h2>
        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          등록
        </button>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            <span className={styles.required}>*</span>제목
          </label>
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            <span className={styles.required}>*</span>내용
          </label>
          <textarea
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
        </div>
      </div>
    </main>
  );
}
