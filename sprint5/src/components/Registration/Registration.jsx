import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Registration.module.css';
import { Button } from '../Button/Button';
export const Registration = () => {
  return (
    <>
      <Header />
      <div className={styles.content_wrap}>
        <form>
          <div className={styles.head}>
            <p>상품등록하기</p>
            <Button content="등록" isActivate="false" />
          </div>
          <div className={styles.form_wrap}>
            <p>상품명</p>
            <input />
            <p>상품 소개</p>
            <input />
            <p>판매가격</p>
            <input />
            <p>태그</p>
            <input />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
