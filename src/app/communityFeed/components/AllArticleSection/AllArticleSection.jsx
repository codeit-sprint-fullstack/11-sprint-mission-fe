'use client';

import { Button } from '@/components/UI/Button';
import FeedCard from '../BestArticleCard/BestArticleCard';
import { DropdownList } from '@/components/UI/DropdownList';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ArticleCard from '../ArticleCard/ArticleCard';
import { useDebounce } from '@/hooks/useDebounce';
import Image from 'next/image';
import sortIconArrowDown from '@/assets/icons/ic_arrow_down.svg';
import searchIcon from '@/assets/icons/ic_search.svg';

const DEBOUNCE_DELAY_MS = 300;

export default function AllArticleSection({ articles }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState(
    searchParams.get('keyword') || '',
  ); // 검색키워드 상태
  const [orderBy, setorderBy] = useState(
    searchParams.get('orderBy') || 'recent',
  ); //정렬 상태
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 토글

  // 검색 디바운스
  const debouncedKeyword = useDebounce(inputValue, DEBOUNCE_DELAY_MS);

  // 검색 키워드 또는 정렬이 바뀌면 URL 업데이트
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedKeyword) {
      params.set('keyword', debouncedKeyword);
    } else {
      params.delete('keyword');
    }

    params.set('orderBy', orderBy);

    router.push(`/board?${params.toString()}`);
  }, [debouncedKeyword, orderBy]);

  // 정렬 선택
  const handleSortSelect = (value) => {
    setorderBy(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <h1>게시글</h1>
        <Button onClick={() => router.push('/communityFeed/creatArticle')}>
          글쓰기
        </Button>
      </div>
      <div>
        <div>
          <Image src={searchIcon} alt="검색 아이콘" />
          <input
            placeholder="검색할 상품을 입력해 주세요"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <div>
              <Image src={sortIconArrowDown} alt="정렬 아이콘" />
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
            </div>
          </button>
          {isOpen && <DropdownList onSelect={handleSortSelect} />}
        </div>
      </div>
      <div>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
      <FeedCard />
    </div>
  );
}
