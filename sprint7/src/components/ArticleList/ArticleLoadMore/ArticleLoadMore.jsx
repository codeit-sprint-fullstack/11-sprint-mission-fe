'use client';

import { useState } from 'react';
import { fetchMoreArticles } from '@/lib/actions';
import ArticleCard from '../ArticleCard/ArticleCard';
import * as styles from './ArticleLoadMore.css.js';

export default function ArticleLoadMore({
  initialItems,
  totalCount,
  keyword,
  sort,
}) {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    const { items: newItems } = await fetchMoreArticles({
      keyword,
      sort,
      page: page + 1,
    });
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {items.map((item) => (
        <ArticleCard
          key={item.id}
          id={item.id}
          title={item.title}
          createdAt={item.createdAt}
        />
      ))}
      {items.length < totalCount && (
        <div onClick={handleLoadMore} className={styles.moreBtn}>
          더보기
        </div>
      )}
    </>
  );
}
