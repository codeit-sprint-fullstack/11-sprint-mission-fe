"use client"

import { Button } from '@/components/UI/Button';
import FeedCard from '../BestArticleCard/BestArticleCard';
import { DropdownList } from '@/components/UI/DropdownList';
import { useState } from 'react';

const INITIAL_PAGE = 1;
const DEBOUNCE_DELAY_MS = 300;

export default function AllArticleSection({ articles}) {
  const [inputValue, setInputValue] = useState(''); // 검색키워드 상태
  const [orderBy, setorderBy] = useState('recent'); //정렬 상태
  const [page, setPage] = useState(INITIAL_PAGE); // 페이지 상태
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 토글

  // 검색 디바운스
  const debouncedKeyword = useDebounce(inputValue, DEBOUNCE_DELAY_MS);

  // 정렬 변경
  const handleSortSelect = (value) => {
    setorderBy(value);
    setPage(INITIAL_PAGE);
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <h1>게시글</h1>
        <Button>글쓰기</Button>
      </div>
      <div>
        <div>
          <img src={searchIcon} alt="검색 아이콘" />
          <input
            className={styles.searchBarInput}
            placeholder="검색할 상품을 입력해 주세요"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setPage(INITIAL_PAGE);
            }}
          />
        </div>
        <div className={styles.sortButtonWrapper} ref={dropdownRef}>
          <button
            className={styles.sortDropdownToggle}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className={styles.sortBtn}>
              <img src={sortIconArrowDown} alt="정렬 아이콘" />
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
            </div>
          </button>
          {isOpen && <DropdownList onSelect={handleSortSelect} />}
        </div>
      </div>
      <div>
        {feedList?.map((item) => (
          <FeedCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
      <FeedCard />
    </div>
  );
}
