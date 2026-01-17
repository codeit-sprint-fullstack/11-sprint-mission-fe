import React, { useEffect } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Registration.module.css';
import { Button } from '../Button/Button';
import { axios, createProduct } from '../../api/productService';
import { useNavigate } from 'react-router';
import { useInputValid } from '../../hooks/useInputValid';
import { valid } from '../../util/valid';

export const Registration = () => {
  const nav = useNavigate();
  const nameInput = useInputValid(valid.name);
  const descriptionInput = useInputValid(valid.description);
  const priceInput = useInputValid(valid.price);
  const tagsInput = useInputValid(valid.tags);

  const handleValid = (e) => {
    e.preventDefault();
    if (nameInput.error || descriptionInput.error || priceInput || tagsInput) {
      console.log('input valid : failed');
      return;
    }
    console.log('input valid : succeed');
  };

  const handlePostingProduct = async (e) => {
    e.preventDefault(); // ← 이게 없으면 무조건 URL에 쿼리 붙는다

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const description = formData.get('description');
    const price = Number(formData.get('price'));
    const tags = formData.get('tags').split(',');

    const product = await createProduct({
      //401 에러 토큰 발행필요
      name,
      description,
      price,
      tags,
      images: ['https://example.com/sample.png'],
    });

    nav(`/products/${product.id}`);
  };

  return (
    <>
      <Header />
      <div className={styles.content_wrap}>
        <form onSubmit={handlePostingProduct}>
          <div className={styles.head}>
            <p className={styles.title}>상품등록하기</p>
            <button type="submit">등록</button>
          </div>
          <div className={styles.form_wrap}>
            <p>상품명</p>
            <input
              value={nameInput.value}
              onBlur={nameInput.onTouched}
              onChange={nameInput.onChange}
              name="name"
              placeholder="상품명을 입력해주세요"
              required
            />
            {nameInput.error && <div className={valid}>{nameInput.error}</div>}
            <p>상품 소개</p>
            <textarea
              value={descriptionInput.value}
              onBlur={descriptionInput.onTouched}
              onChange={descriptionInput.onChange}
              name="description"
              placeholder="상품 소개를 입력해주세요"
              required
            />
            {descriptionInput.error && (
              <div className={valid}>{descriptionInput.error}</div>
            )}

            <p>판매가격</p>
            <input
              value={priceInput.value}
              onBlur={priceInput.onTouched}
              onChange={priceInput.onChange}
              name="price"
              placeholder="판매 가격을 입력해주세요"
              required
            />
            {priceInput.error && (
              <div className={valid}>{priceInput.error}</div>
            )}

            <p>태그</p>
            <input
              value={tagsInput.value}
              onBlur={tagsInput.onTouched}
              onChange={tagsInput.onChange}
              name="tags"
              placeholder="태그를 입력해주세요"
              required
            />
            {tagsInput.error && <div className={valid}>{tagsInput.error}</div>}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
