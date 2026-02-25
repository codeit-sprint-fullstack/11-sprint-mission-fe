'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import FormField from '@/components/common/FormField';
import { createArticle, updateArticle } from '@/services/articleService.js';
import { useFormSubmit } from '@/hooks';
import * as styles from './ArticleForm.css.js';

export default function ArticleForm({ initialData, isEdit = false }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    image: initialData?.image || [], // 기능 구현은 x
  });

  const { isLoading, handleFormSubmit } = useFormSubmit();

  const isValid = formData.title.trim() && formData.content.trim();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValid || isLoading) return;

    await handleFormSubmit(
      () =>
        isEdit
          ? updateArticle(initialData.id, formData)
          : createArticle(formData),
      '/articles',
    );
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>
          {isEdit ? '게시글 수정하기' : '게시글 쓰기'}
        </h2>

        <div className={styles.buttonGroup}>
          {isEdit && (
            <Button
              type="button"
              shape="square"
              color="cancel"
              size="sm"
              onClick={() => router.back()}
            >
              취소
            </Button>
          )}

          <Button
            type="submit"
            color={isValid ? 'primary' : 'inactive'}
            shape="square"
            size="sm"
            disabled={!isValid || isLoading}
          >
            {isLoading ? '처리 중...' : isEdit ? '수정' : '등록'}
          </Button>
        </div>
      </div>

      {/* 이미지 등록 기능 아직 없음 */}
      <div className={styles.inputSection}>
        <label className={styles.label}>이미지</label>
        <div className={styles.imageUploadBox}>
          <span className={styles.plusIcon}>+</span>
          <span className={styles.uploadText}>이미지 등록</span>
        </div>
      </div>

      <FormField
        label="제목"
        isRequired
        name="title"
        placeholder="제목을 입력해주세요"
        value={formData.title}
        onChange={handleChange}
      />

      <FormField
        label="내용"
        isRequired
        isTextArea
        variant="description"
        name="content"
        placeholder="내용을 입력해주세요"
        value={formData.content}
        onChange={handleChange}
      />
    </form>
  );
}
