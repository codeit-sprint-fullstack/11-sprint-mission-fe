import React, { useEffect } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Registration.module.css';
import { Button } from '../Button/Button';
import { axios, createProduct } from '../../api/productService';
import { useNavigate } from 'react-router';

export const Registration = () => {
  const nav = useNavigate();
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

  useEffect(() => {
    const interceptorId = axios.interceptors.request.use((config) => {
      console.log(config.headers);
      return config;
    });
    console.log(interceptorId.headers);
    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  }, []);
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
            <input name="name" placeholder="상품명을 입력해주세요" required />
            <p>상품 소개</p>
            <textarea
              name="description"
              placeholder="상품 소개를 입력해주세요"
              required
            />
            <p>판매가격</p>
            <input
              name="price"
              placeholder="판매 가격을 입력해주세요"
              required
            />
            <p>태그</p>
            <input name="tags" placeholder="태그를 입력해주세요" required />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
