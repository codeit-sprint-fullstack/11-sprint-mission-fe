'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './ArticleWriteForm.css.js';
import { submitArticle } from '@/lib/actions.js';

export default function ArticleWriteForm() {
  const router = useRouter();
  const [write, setWrite] = useState({
    title: '',
    content: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setWrite((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = write.title.trim() !== '' && write.content.trim() !== '';

  const onSubmit = async (e) => {
    e.preventDefault();
    await submitArticle(write);
    setWrite({ title: '', content: '' });
    router.push('/freeboard');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleText}>글쓰기</div>
          <button
            type="submit"
            className={isValid ? styles.btnActive : styles.btn}
            disabled={!isValid}
          >
            등록
          </button>
        </div>
        <div className={styles.contentTitleWrapper}>
          <div className={styles.contentTitle}>*제목</div>
          <input
            className={styles.titleInput}
            placeholder="제목을 입력해주세요"
            name="title"
            value={write.title}
            onChange={onChange}
          />
        </div>
        <div className={styles.desWrapper}>
          <div className={styles.contentTitle}>*내용</div>
          <textarea
            className={styles.desTextarea}
            placeholder=" 내용을 입력해주세요"
            name="content"
            value={write.content}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}
