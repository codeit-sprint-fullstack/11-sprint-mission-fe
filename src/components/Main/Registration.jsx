import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import styles from './Registration.module.css';

const useRegistrationValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const newErrors = {};

    if (!formData.name?.trim() || formData.name.length > 10) {
      newErrors.name = '10자 이내로 입력해주세요.';
    }

    if (!formData.description || formData.description.length < 10) {
      newErrors.description = '10자 이상 입력해주세요.';
    }

    const price = parseInt(formData.price);
    if (!formData.price || isNaN(price) || price < 1000) {
      newErrors.price = '숫자로 입력해주세요';
    }

    const invalidTag = formData.tags.find((tag) => tag.length > 5);
    if (invalidTag) {
      newErrors.tags = '5글자 이내로 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  return { errors, validate };
};

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    tags: [],
  });
  const { errors, validate } = useRegistrationValidation(formData);
  const [tagInput, setTagInput] = useState('');

  const [hasInteracted, setHasInteracted] = useState({
    name: false,
    description: false,
    price: false,
    tags: false,
  });

  const handleInputBlur = useCallback((field) => {
    setHasInteracted((prev) => ({ ...prev, [field]: true }));
  }, []);

  useEffect(() => {
    validate();
  }, [formData, validate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, '#' + tagInput.trim()],
      }));
      setTagInput('');
      setHasInteracted((prev) => ({ ...prev, tags: true }));
    }
  };

  const handleRemoveTag = (index) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
    setHasInteracted((prev) => ({ ...prev, tags: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validate()) return;

    try {
      const submitData = new FormData();
      submitData.append('title', formData.name);
      submitData.append('description', formData.description);
      submitData.append('price', formData.price);
      formData.tags.forEach((tag) => submitData.append('tags', tag));

      const response = await fetch(
        'https://panda-market-api.vercel.app/products',
        {
          method: 'POST',
          body: submitData,
        },
      );

      if (response.ok) {
        alert('상품 등록 성공!');
        navigate('/products/1');
      } else {
        const errorText = await response.text();
        alert(`${response.status}\n${errorText}`);
      }
    } catch (error) {
      console.error('오류:', error);
      alert('네트워크 오류');
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.description.length >= 10 &&
    !isNaN(parseInt(formData.price)) &&
    parseInt(formData.price) >= 1000 &&
    formData.tags.length > 0 &&
    Object.keys(errors).length === 0;

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.registBtn}>
          <h1 className={styles.title}>상품 등록하기</h1>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`${styles.submitBtn} ${!isFormValid ? styles.disabled : ''}`}
          >
            등록
          </button>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>상품명</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={() => handleInputBlur('name')}
              className={
                errors.name && hasInteracted.name ? styles.errorInput : ''
              }
              placeholder="상품명을 입력해주세요"
            />
            {errors.name && hasInteracted.name && (
              <p className={styles.errorMsg}>{errors.name}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>상품 소개</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              onBlur={() => handleInputBlur('description')}
              className={
                errors.description && hasInteracted.description
                  ? styles.errorInput
                  : ''
              }
              placeholder="상품 소개를 입력해주세요"
              rows={4}
            />
            {errors.description && hasInteracted.description && (
              <p className={styles.errorMsg}>{errors.description}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>판매 가격</label>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              onBlur={() => handleInputBlur('price')}
              className={
                errors.price && hasInteracted.price ? styles.errorInput : ''
              }
              placeholder="판매 가격을 입력해주세요"
            />
            {errors.price && hasInteracted.price && (
              <p className={styles.errorMsg}>{errors.price}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>태그</label>
            <div className={styles.tagInputContainer}>
              <div
                className={`${styles.tagContainer} ${errors.tags && hasInteracted.tags ? styles.errorInput : ''}`}
              >
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  onBlur={() => handleInputBlur('tags')}
                  placeholder="태그를 입력해주세요 (Enter)"
                  className={styles.tagInput}
                />
              </div>
              {errors.tags && hasInteracted.tags && (
                <p className={styles.errorMsg}>{errors.tags}</p>
              )}

              <div className={styles.tagList}>
                {formData.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(index)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Registration;
