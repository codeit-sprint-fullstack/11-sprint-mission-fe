import ArticleList from '@/components/ArticleList/ArticleList';
import BastBoard from '@/components/BestBoard';

export default async function Freeboard({ searchParams }) {
  const { keyword = '', sort = 'recent' } = await searchParams;

  return (
    <div>
      <BastBoard />
      <ArticleList keyword={keyword} sort={sort} />
    </div>
  );
}
