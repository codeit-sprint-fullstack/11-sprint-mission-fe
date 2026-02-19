import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/RegistrationPage.module.css'; // 아까 드린 새 CSS 파일
import { createProduct } from '../api/api';
import useFormInput from '../hooks/useFormInput'; // 커스텀 훅 불러오기

const RegistrationPage = () => {
  const navigate = useNavigate();

  // 1. 유효성 검사 규칙 (심화 요구사항 반영)
  // - 상품명: 10자 이내
  const validateName = (val) => {
    if (!val) {
      return '상품명을 입력해주세요.';
    }
    if (val.length > 10) {
      return '10자 이내로 입력해주세요.';
    }
    return '';
  };

  // - 상품 소개: 10자 이상 100자 이내
  const validateDesc = (val) => {
    if (!val) {
      return '상품 소개를 입력해주세요.';
    }
    if (val.length < 10 || val.length > 100) {
      return '10자 이상 입력해주세요.';
    }
    return '';
  };

  // - 가격: 숫자만
  const validatePrice = (val) => {
    if (!val) {
      return '가격을 입력해주세요.';
    }
    if (isNaN(val)) {
      return '숫자로 입력해주세요.';
    }
    return '';
  };

  // 2. 커스텀 훅을 사용해 입력값과 에러 관리
  const nameInput = useFormInput('', validateName);
  const descInput = useFormInput('', validateDesc);
  const priceInput = useFormInput('', validatePrice);

  // 3. 태그는 별도로 관리 (배열 + 칩 기능)
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState('');

  // 태그 입력 핸들러 (엔터 키)
  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      const newTag = tagValue.trim();

      // 태그 유효성: 빈값 아니고, 중복 아니면 추가
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagValue(''); // 입력창 비우기
      }
    }
  };

  // 태그 삭제 핸들러
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // 4. 전체 폼 유효성 검사 (버튼 활성화 여부)
  const isFormValid =
    nameInput.value &&
    !nameInput.error &&
    descInput.value &&
    !descInput.error &&
    priceInput.value &&
    !priceInput.error;

  // 5. 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    try {
      const productData = {
        name: nameInput.value,
        description: descInput.value,
        price: Number(priceInput.value),
        tags: tags,
        images: [],
      };

      console.log('서버로 보낼 데이터:', productData);

      const savedProduct = await createProduct(productData);
      alert('상품 등록 성공!');
      navigate(`/items/${savedProduct.id}`); // 상세 페이지로 이동
    } catch (error) {
      console.error(error);
      alert('등록 실패! 서버 상태를 확인해주세요.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* 헤더: 타이틀 + 등록 버튼 */}
        <div className={styles.header}>
          <h1 className={styles.title}>상품 등록하기</h1>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!isFormValid} // 조건 안 맞으면 버튼 비활성화
          >
            등록
          </button>
        </div>

        <div className={styles.form}>
          {/* 1. 상품명 */}
          <div className={styles.section}>
            <label className={styles.label}>상품명</label>
            <input
              type="text"
              // 에러가 있으면 빨간 테두리 클래스 추가
              className={`${styles.input} ${
                nameInput.error ? styles.inputError : ''
              }`}
              placeholder="상품 이름을 입력해주세요"
              value={nameInput.value}
              onChange={nameInput.handleChange}
              onBlur={nameInput.handleBlur}
            />
            {/* 에러 메시지 출력 */}
            {nameInput.error && (
              <p className={styles.errorMessage}>{nameInput.error}</p>
            )}
          </div>

          {/* 2. 상품 소개 */}
          <div className={styles.section}>
            <label className={styles.label}>상품 소개</label>
            <textarea
              className={`${styles.textarea} ${
                descInput.error ? styles.inputError : ''
              }`}
              placeholder="상품 소개를 적어주세요"
              value={descInput.value}
              onChange={descInput.handleChange}
              onBlur={descInput.handleBlur}
            />
            {descInput.error && (
              <p className={styles.errorMessage}>{descInput.error}</p>
            )}
          </div>

          {/* 3. 판매 가격 */}
          <div className={styles.section}>
            <label className={styles.label}>판매가격</label>
            <input
              type="number"
              className={`${styles.input} ${
                priceInput.error ? styles.inputError : ''
              }`}
              placeholder="판매 가격을 입력해주세요"
              value={priceInput.value}
              onChange={priceInput.handleChange}
              onBlur={priceInput.handleBlur}
            />
            {priceInput.error && (
              <p className={styles.errorMessage}>{priceInput.error}</p>
            )}
          </div>

          {/* 4. 태그 (칩 기능) */}
          <div className={styles.section}>
            <label className={styles.label}>태그</label>
            <input
              type="text"
              className={styles.input}
              placeholder="태그를 입력하고 엔터를 누르세요"
              value={tagValue}
              onChange={(e) => setTagValue(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
            {/* 태그 칩들이 쌓이는 곳 */}
            <div className={styles.tagWrapper}>
              {tags.map((tag, index) => (
                <div key={index} className={styles.tagChip}>
                  #{tag}
                  <span
                    className={styles.deleteTag}
                    onClick={() => removeTag(tag)}
                  >
                    ✕
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
