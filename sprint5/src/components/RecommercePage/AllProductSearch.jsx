import React from 'react';
import styles from './AllProductSearch.module.css';
import { useNavigate } from 'react-router';
export const AllProductSearch = ({ orderBy, onChangeOrderBy }) => {
  const nav = useNavigate();
  const handleNav = () => {
    nav('/form');
  };
  return (
    <div>
      <form className={styles.search}>
        <input />
        <button onClick={handleNav}>상품등록하기</button>
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
