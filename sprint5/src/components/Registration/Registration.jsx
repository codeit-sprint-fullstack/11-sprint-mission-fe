import React, { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Registration.module.css';
import { Button } from '../Button/Button';
import { createProduct } from '../../api/productService';
import { useNavigate } from 'react-router';
import { useInputValid } from '../../hooks/useInputValid';
import { valid } from '../../util/valid';

export const Registration = () => {
  const nav = useNavigate();

  const nameInput = useInputValid(valid.name);
  const descriptionInput = useInputValid(valid.description);
  const priceInput = useInputValid(valid.price);
  const tagsInput = useInputValid(valid.tags);
  const activated =
    nameInput.value &&
    descriptionInput.value &&
    priceInput.value &&
    tagsInput.value &&
    !nameInput.error &&
    !descriptionInput.error &&
    !priceInput.error &&
    !tagsInput.error;

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
  const handleValid = async (e) => {
    e.preventDefault();

    if (
      nameInput.error ||
      descriptionInput.error ||
      priceInput.error ||
      tagsInput.error
    ) {
      console.log('input valid : failed');

      return;
    }
    console.log('input valid : succeed');
    await handlePostingProduct(e);
  };

  return (
    <>
      <Header />
      <div className={styles.content_wrap}>
        <form onSubmit={handleValid}>
          <div className={styles.head}>
            <p className={styles.title}>상품등록하기</p>
            <button disabled={!activated} type="submit">
              등록
            </button>
          </div>
          <div className={styles.form_wrap}>
            <p>상품명</p>
            <input
              value={nameInput.value}
              onBlur={nameInput.onTouched}
              onChange={nameInput.onChange}
              className={nameInput.error ? styles.errorBorder : ''}
              name="name"
              placeholder="상품명을 입력해주세요"
              required
            />
            {nameInput.error && (
              <div className={styles.error}>{nameInput.error}</div>
            )}
            <p>상품 소개</p>
            <textarea
              value={descriptionInput.value}
              onBlur={descriptionInput.onTouched}
              onChange={descriptionInput.onChange}
              className={descriptionInput.error ? styles.errorBorder : ''}
              name="description"
              placeholder="상품 소개를 입력해주세요"
              required
            />
            {descriptionInput.error && (
              <div className={styles.error}>{descriptionInput.error}</div>
            )}

            <p>판매가격</p>
            <input
              value={priceInput.value}
              onBlur={priceInput.onTouched}
              onChange={priceInput.onChange}
              className={priceInput.error ? styles.errorBorder : ''}
              name="price"
              placeholder="판매 가격을 입력해주세요"
              required
            />
            {priceInput.error && (
              <div className={styles.error}>{priceInput.error}</div>
            )}

            <p>태그</p>
            <input
              value={tagsInput.value}
              onBlur={tagsInput.onTouched}
              onChange={tagsInput.onChange}
              className={tagsInput.error ? styles.errorBorder : ''}
              name="tags"
              placeholder="태그를 입력해주세요"
              required
            />
            {tagsInput.error && (
              <div className={styles.error}>{tagsInput.error}</div>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
