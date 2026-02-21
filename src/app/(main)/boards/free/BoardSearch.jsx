// 자유게시판 검색/정렬
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
      <select value={orderBy} onChange={handleSort}>
        <option value="recent">최신순</option>
        <option value="like">좋아요순</option>
      </select>

      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="검색어를 입력하세요"
      />

      <button onClick={handleSearch}>검색</button>
      <button onClick={() => router.push('/boards/free/write')}>글쓰기</button>
    </div>
  );
}
