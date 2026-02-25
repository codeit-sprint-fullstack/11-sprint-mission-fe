import Link from 'next/link';
import * as styles from './ArticleList.css';
import SearchBar from './SearchBar/SearchBar';
import ArticleLoadMore from './ArticleLoadMore/ArticleLoadMore';
import { getArticleList } from '@/lib/api';

export default async function ArticleList({ keyword, sort }) {
  const { items, totalCount } = await getArticleList({ keyword, sort });

  return (
    <div className={styles.container}>
      <div className={styles.articleTtileWrapper}>
        <div className={styles.title}>게시글</div>
        <Link href="/freeboard/write" className={styles.writeBtn}>
          글쓰기
        </Link>
      </div>
      <SearchBar key={keyword} />
      <div className={styles.itemListWrapper}>
        <ArticleLoadMore
          initialItems={items}
          totalCount={totalCount}
          keyword={keyword}
          sort={sort}
        />
      </div>
    </div>
  );
}
