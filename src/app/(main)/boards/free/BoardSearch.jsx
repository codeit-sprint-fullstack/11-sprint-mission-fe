'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BoardSearch.module.css';

export default function BoardSearch({ defaultKeyword, defaultOrderBy }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [orderBy, setOrderBy] = useState(defaultOrderBy);

  const handleSearch = () => {
    router.push(`/boards/free?q=${keyword}&orderBy=${orderBy}`);
  };

  const handleSort = (event) => {
    const newOrder = event.target.value;
    setOrderBy(newOrder);
    router.push(`/boards/free?q=${keyword}&orderBy=${newOrder}`);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          className={styles.input}
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="검색할 상품을 입력해주세요"
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      <select className={styles.select} value={orderBy} onChange={handleSort}>
        <option value="recent">최신순</option>
        <option value="like">좋아요순</option>
      </select>
    </div>
  );
}
