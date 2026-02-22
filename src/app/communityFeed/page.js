import { getArticleList, getBestArticleList } from '@/lib/api/ArticleService';
import AllFeedSection from './components/AllArticleSection';
import BestFeedSection from './components/BestArticleSection';

export default async function communityFeed({ searchParams }) {
  const { keyword = ''} = searchParams
  const { orderBy = 'latest'} = searchParams
  // const keyword = searchParams.keyword || '';
  // const orderBy = searchParams.orderBy || 'latest';

  const [bestArticles, allArticles] = await Promise.all([
    getBestArticleList(),
    getArticleList(keyword, orderBy),
  ]);
  return (
    <div>
      <BestArticleSection articles = {bestArticles}/>
      <AllArticleSection articles = {allArticles} />
    </div>
  );
}
