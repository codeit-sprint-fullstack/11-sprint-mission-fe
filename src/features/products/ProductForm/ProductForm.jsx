'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import FormField from '@/components/common/FormField';
import { createProduct, updateProduct } from '@/services/productService.js';
import { useFormSubmit, useTagInput } from '@/hooks';
import { IoIosCloseCircle } from 'react-icons/io';
import * as styles from './ProductForm.css.js';

export default function ProductForm({ initialData, isEdit = false }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    image: initialData?.image || [], // 기능 구현은 x
    price: initialData?.price || '',
    tags: initialData?.tags || [],
  });

  const { isLoading, handleFormSubmit } = useFormSubmit();
  const { tagInput, handleTagInputChange, handleTagKeyDown, handleDeleteTag } =
    useTagInput(formData.tags, setFormData);

  const isValid =
    formData.name.trim() &&
    formData.description.trim() &&
    formData.price.toString().trim();

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
          ? updateProduct(initialData.id, {
              ...formData,
              price: Number(formData.price),
            })
          : createProduct({ ...formData, price: Number(formData.price) }),
      '/products',
    );
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>
          {isEdit ? '상품 수정하기' : '상품 등록하기'}
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
        label="상품명"
        isRequired
        name="name"
        placeholder="상품명을 입력해주세요"
        value={formData.name}
        onChange={handleChange}
      />

      <FormField
        label="상품 소개"
        isRequired
        isTextArea
        variant="description"
        name="description"
        placeholder="상품 소개를 입력해주세요"
        value={formData.description}
        onChange={handleChange}
      />

      <FormField
        label="판매가격"
        isRequired
        name="price"
        placeholder="판매 가격을 입력해주세요"
        value={formData.price}
        onChange={handleChange}
      />

      <div className={styles.tagSection}>
        <FormField
          label="태그"
          name="tagInput"
          placeholder="태그를 입력해주세요"
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleTagKeyDown}
        />
        <div className={styles.tagList}>
          {formData.tags.map((tag, index) => (
            <span key={index} className={styles.tagChip}>
              # {tag}
              <IoIosCloseCircle
                type="button"
                className={styles.tagDeleteBtn}
                onClick={() => handleDeleteTag(index)}
              />
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}
