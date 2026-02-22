'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getArticleById, updateArticle } from '../../../../../../api/api';
import styles from '../../form.module.css';

export default function EditPage() {
  const router = useRouter();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await getArticleById(id);
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error('게시글 불러오는 중 에러 발생:', error);
        alert('게시글을 불러올 수 없습니다.');
        router.back();
      }
    };

    if (id) {
      loadArticle();
    }
  }, [id, router]);

  const isValid = title.trim() && content.trim();

  const handleSubmit = async () => {
    if (!isValid) {
      return;
    }

    try {
      await updateArticle(id, { title, content });
      router.push(`/boards/free/${id}`);
      router.refresh();
    } catch (error) {
      console.error('게시글 수정하는 중 에러 발생:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>게시글 수정하기</h2>
        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          수정하기
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
