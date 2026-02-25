import Link from 'next/link';
import Button from '@/components/common/Button';
import ListControls from '@/components/common/ListControls';
import ArticleCard from '@/components/articles/ArticleCard';
import Pagination from '@/components/common/Pagination';
import { ARTICLE_PAGESIZE, PAGE_RANGE } from '@/utils/constants.js';
import { getArticleList } from '@/services/articleService';
import * as styles from './ArticleList.css.js';

export default async function ArticleList({ searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const sort = params.sort || 'recent';
  const keyword = params.q || '';

  const { articles, pagination } = await getArticleList({
    page,
    keyword,
    sort,
  });

  const totalPages = Math.ceil(pagination.totalCount / ARTICLE_PAGESIZE) || 1;

  return (
    <section className={styles.articleList}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>게시글</h2>

          <Link href="/articles/new">
            <Button color="primary" shape="square" size="md">
              글쓰기
            </Button>
          </Link>
        </div>

        <ListControls currentSort={sort} currentKeyword={keyword} />
      </div>

      <div className={styles.articleContainer}>
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <div className={styles.emptyMessage}>등록된 게시글이 없습니다.</div>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        pageLimit={PAGE_RANGE}
      />
    </section>
  );
}
