import Footer from '@/components/Footer/Footer';
import MarketHeader from '@/components/MarketHeader/MarketHeader';
import styles from './AddItem.module.css';
import { IoCloseCircle } from 'react-icons/io5';
import { useState } from 'react';

function AddItem() {
  const [value, setTagValue] = useState('');

  const handleChange = (e) => {
    const tagValue = e.target.value;
    setTagValue(tagValue);
  };

  return (
    <>
      <MarketHeader />
      <div className={styles.addItemContainer}>
        <div className={styles.AddNev}>
          <h2>상품 등록하기</h2>
          <button className={styles.addBtn}>등록</button>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <h2>상품명</h2>
            <input
              className={styles.itemName}
              type="text"
              placeholder="상품명을 입력해주세요"
            />
          </div>

          <div className={styles.inputBox}>
            <h2>상품 소개</h2>
            <input
              className={styles.itemContent}
              type="text"
              placeholder="상품 소개를 입력해주세요"
            />
          </div>

          <div className={styles.inputBox}>
            <h2>판매가격</h2>
            <input
              className={styles.price}
              type="text"
              placeholder="판매 가격을 입력해주세요"
            />
          </div>
          <div className={styles.inputBox}>
            <h2>태그</h2>
            <input
              onChange={handleChange}
              className={styles.tagInput}
              type="text"
              placeholder="태그를 입력해주세요 "
            />
          </div>
        </div>

        <button className={styles.tags}>
          #태그
          <span className={styles.closeBtn}>
            <IoCloseCircle />
          </span>
        </button>
      </div>

      <Footer />
    </>
  );
}

export default AddItem;
