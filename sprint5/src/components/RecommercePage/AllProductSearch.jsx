import React from 'react';
import styles from './AllProductSearch.module.css';
import { useNavigate } from 'react-router';
export const AllProductSearch = ({ orderBy, onChangeOrderBy }) => {
  const nav = useNavigate();
  const handleNav = () => {
    nav('/registration');
  };
  return (
    <div className={styles.search_warp}>
      <input />
      <button onClick={handleNav}>상품등록하기</button>
      <form className={styles.search}>
        <select
          value={orderBy}
          onChange={(e) => onChangeOrderBy(e.target.value)}
        >
          <option value="recent">최신순</option>
          <option value="favorite">좋아요</option>
        </select>
      </form>
    </div>
  );
};
