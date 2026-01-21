import { useState } from 'react';
import deleteIcon from '../../assets/icons/ic_X.svg';
import styles from './RegistrationForm.module.css';
import { useProductValidation } from '../../hooks/useProductValidation';
import { createProduct } from '../../api/productsApi';
import { useNavigate } from 'react-router';

function RegistrationForm() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
  });

  const [tag, setTag] = useState({
    input: '',
    list: [],
    error: '',
  });

  const [blurred, setBlurred] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors } = useProductValidation(values);

  const handleBlur = (name) =>
    setBlurred((prev) => ({ ...prev, [name]: true }));

  const handleChange = (name) => (e) =>
    setValues((prev) => ({ ...prev, [name]: e.target.value }));

  function addTag() {
    const newTag = tag.input.trim();
    if (!newTag) return;
    if (tag.list.includes(newTag)) return;

    if (newTag.length > 5) {
      setTag((prev) => ({
        ...prev,
        error: '태그는 5글자 이내로 입력해주세요',
      }));
      return;
    }

    setTag((prev) => ({
      ...prev,
      list: [...prev.list, newTag],
      input: '',
      error: '',
    }));
  }

  function handleTagKeyDown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  }

  const isValid =
    values.productName.trim() &&
    values.productDescription.trim() &&
    values.productPrice !== '' &&
    !errors.productName &&
    !errors.productDescription &&
    !errors.productPrice &&
    tag.error === '';

  async function handleSubmit(e) {
    e.preventDefault();

    setBlurred({
      productName: true,
      productDescription: true,
      productPrice: true,
      productTag: true,
    });

    if (!isValid) return;

    const payload = {
      name: values.productName,
      description: values.productDescription,
      price: Number(values.productPrice),
      tags: tag.list,
    };

    try {
      setIsSubmitting(true);
      await createProduct(payload);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('상품 등록 실패');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={styles.registrationLayout} onSubmit={handleSubmit}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.title}>상품 등록하기</h1>
        <button
          type="submit"
          className={`${styles.registrationButton} ${
            isValid ? styles.activeButton : ''
          }`}
          disabled={!isValid || isSubmitting}
        >
          등록
        </button>
      </div>

      <label className={styles.formLabel}>상품명</label>
      <input
        type="text"
        placeholder="상품명을 입력해주세요"
        value={values.productName}
        onChange={handleChange('productName')}
        onBlur={() => handleBlur('productName')}
        className={`${styles.formInput} ${
          blurred.productName && errors.productName ? styles.errorInput : ''
        }`}
      />
      {blurred.productName && errors.productName && (
        <p className={styles.errorText}>{errors.productName}</p>
      )}

      <label className={styles.formLabel}>상품소개</label>
      <textarea
        placeholder="상품 소개를 입력해주세요"
        value={values.productDescription}
        onChange={handleChange('productDescription')}
        onBlur={() => handleBlur('productDescription')}
        className={`${styles.formInput} ${styles.textArea} ${
          blurred.productDescription && errors.productDescription
            ? styles.errorInput
            : ''
        }`}
      />
      {blurred.productDescription && errors.productDescription && (
        <p className={styles.errorText}>{errors.productDescription}</p>
      )}

      <label className={styles.formLabel}>판매가격</label>
      <input
        type="number"
        placeholder="판매 가격을 입력해주세요"
        value={values.productPrice}
        onChange={handleChange('productPrice')}
        onBlur={() => handleBlur('productPrice')}
        className={`${styles.formInput} ${
          blurred.productPrice && errors.productPrice ? styles.errorInput : ''
        }`}
      />
      {blurred.productPrice && errors.productPrice && (
        <p className={styles.errorText}>{errors.productPrice}</p>
      )}

      <label className={styles.formLabel}>태그</label>
      <input
        type="text"
        placeholder="태그를 입력해주세요"
        value={tag.input}
        onChange={(e) => setTag((prev) => ({ ...prev, input: e.target.value }))}
        onKeyDown={handleTagKeyDown}
        onBlur={() => handleBlur('productTag')}
        className={`${styles.formInput} ${
          blurred.productTag && tag.error ? styles.errorInput : ''
        }`}
      />
      {blurred.productTag && tag.error && (
        <p className={styles.errorText}>{tag.error}</p>
      )}

      <ul>
        {tag.list.map((t) => (
          <li key={t} className={styles.tagList}>
            <span className={styles.tagText}>#{t}</span>
            <button
              type="button"
              className={styles.tagRemoveButton}
              onClick={() =>
                setTag((prev) => ({
                  ...prev,
                  list: prev.list.filter((x) => x !== t),
                }))
              }
            >
              <img src={deleteIcon} alt="태그 삭제하기" />
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default RegistrationForm;
