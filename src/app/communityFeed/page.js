import { getArticleList, getBestArticleList } from '@/lib/api/ArticleService';
import BestArticleSection from './components/BestArticleSection';
import AllArticleSection from './components/AllArticleSection';


export default async function communityFeed({ searchParams }) {
  const { keyword = ''} = await searchParams
  const { orderBy = 'recent'} = await searchParams
  // const keyword = searchParams.keyword || '';
  // const orderBy = searchParams.orderBy || 'latest';

  const [bestArticles, allArticles] = await Promise.all([
    getBestArticleList(),
    getArticleList(keyword, orderBy),
  ]);
  return (
    <div>
      <BestArticleSection articles = {bestArticles.articles}/>
      <AllArticleSection articles = {allArticles.articles} />
    </div>
  );
}
