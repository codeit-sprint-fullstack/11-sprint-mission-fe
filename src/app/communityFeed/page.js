import { getArticleList, getBestArticleList } from '@/lib/api/ArticleService';
import BestArticleSection from './components/BestArticleSection';
import AllArticleSection from './components/AllArticleSection';


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
