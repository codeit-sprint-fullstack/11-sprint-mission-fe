import BestArticles from '@/features/articles/BestArticles';
import ArticleList from '@/features/articles/ArticleList';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function ArticlesPage({ searchParams }) {
  return (
    <ContentLayout>
      <BestArticles />
      <ArticleList searchParams={searchParams} />
    </ContentLayout>
  );
}
