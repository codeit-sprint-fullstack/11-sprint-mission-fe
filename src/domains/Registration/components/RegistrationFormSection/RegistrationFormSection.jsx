import { useState } from 'react';
import { useNavigate } from 'react-router';
import clsx from 'clsx';
import { createProduct } from '@/apis';
import { useFormValidation } from '../../hooks/useFormValidation';
import { LinkButton } from '@/components/LinkButton';
import { RegistrationFormField } from '../RegistrationFormField';
import { ProductTag } from '../ProductTag';
import styles from './RegistrationFormSection.module.css';

export function RegistrationFormSection() {
  const [form, setForm] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    productTag: '',
  });
  const [tags, setTags] = useState([]);

  const isCompleted =
    form.productName.trim() !== '' &&
    form.productDescription.trim() !== '' &&
    form.productPrice.trim() !== '';

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addTag = (e) => {
    if (e.key !== 'Enter') return;
    if (e.nativeEvent.isComposing) return; // 한글 조합 버그 해결

    e.preventDefault();

    const value = e.target.value.trim(); // 앞뒤 공백 제거
    if (!value) {
      // 입력값이 없으면 태그 안만든다
      setForm((prev) => ({ ...prev, productTag: '' })); // 태그인풋만 초기화
      return;
    }

    setTags((prev) => [...prev, value]); // 배열에 태그 추가
    setForm((prev) => ({ ...prev, productTag: '' })); // 태그인풋만 초기화
  };

  const deleteTag = (targetTag) => {
    setTags((prev) => prev.filter((tag) => tag !== targetTag));
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // const newProduct = {
      //   name: form.productName,
      //   description: form.productDescription,
      //   price: form.productPrice,
      //   tags: tags,
      //   images: [],
      // };

      // const createdProduct = await createProduct(newProduct);

      const fakeProductId = 1234;
      navigate(`/items/${fakeProductId}`);
      // navigate(`/items/${createdProduct.id}`);
    } catch (error) {
      console.error('상품 등록 실패:', error);
      alert('로그인 후 상품 등록이 가능합니다.');
    }
  };

  const { errors, isNotError } = useFormValidation(form, tags);

  return (
    <section className={styles.section}>
      <div className={styles.bar}>
        <h2>상품 등록하기</h2>
        <LinkButton
          className={clsx(
            styles.registrationButton,
            isCompleted && isNotError && styles.completed,
          )}
          onClick={handleSubmit}
          disabled={!isCompleted || !isNotError}
        >
          등록
        </LinkButton>
      </div>

      <form className={styles.form}>
        <RegistrationFormField
          label="상품명"
          id="productName"
          placeholder="상품명을 입력해주세요"
          value={form.productName}
          onChange={handleFormChange}
          error={errors.productName}
          errorMessage={errors.productName}
        />

        <RegistrationFormField
          label="상품 소개"
          id="productDescription"
          placeholder="상품 소개를 입력해주세요"
          type="textarea"
          value={form.productDescription}
          onChange={handleFormChange}
          error={errors.productDescription}
          errorMessage={errors.productDescription}
        />

        <RegistrationFormField
          label="판매 가격"
          id="productPrice"
          placeholder="판매 가격을 입력해주세요"
          value={form.productPrice}
          onChange={handleFormChange}
          error={errors.productPrice}
          errorMessage={errors.productPrice}
        />

        <div>
          <RegistrationFormField
            label="태그"
            id="productTag"
            placeholder="태그를 입력해주세요"
            value={form.productTag}
            onChange={handleFormChange}
            onKeyDown={addTag}
            error={errors.productTag}
            errorMessage={errors.productTag}
          />
          <ul className={styles.productTags}>
            {tags.map((tag, index) => {
              // 태그 렌더링
              return (
                <ProductTag
                  key={`${tag} - ${index}`} // 키값 중복 제거
                  onClick={() => deleteTag(tag)}
                >
                  {tag}
                </ProductTag>
              );
            })}
          </ul>
        </div>
      </form>
    </section>
  );
}
