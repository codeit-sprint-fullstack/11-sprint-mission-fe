'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SortDropdown from '../SortDropdown/SortDropdown';
import * as styles from './SearchBar.css';
import search from '@public/search/ic_search.svg';
import Image from 'next/image';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '');
  const sort = searchParams.get('sort') ?? 'recent';

  const buildQuery = (kw, s) => {
    const params = new URLSearchParams();
    if (kw) params.set('keyword', kw);
    if (s) params.set('sort', s);
    return `?${params}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.replace(buildQuery(keyword, sort));
  };

  const handleSortChange = (value) => {
    router.replace(buildQuery(keyword, value));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <Image src={search} alt="search" className={styles.searchIcon} />
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색할 상품을 입력해주세요"
          className={styles.input}
        />
      </div>
      <SortDropdown sort={sort} onChange={handleSortChange} />
    </form>
  );
}
