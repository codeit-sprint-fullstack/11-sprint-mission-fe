'use client';

import { FiSearch } from 'react-icons/fi';
import * as styles from './SearchBar.css.js';

export default function SearchBar({ keyword, onChange, onKeyDown }) {
  return (
    <div className={styles.searchContainer}>
      <FiSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="검색할 게시글을 입력해주세요"
        className={styles.searchInput}
        value={keyword}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
