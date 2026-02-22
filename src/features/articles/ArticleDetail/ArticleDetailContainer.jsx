import { getArticleById } from '@/services/articleService';
import ArticleDetail from './ArticleDetail';

export default async function ArticleDetailContainer({ id }) {
  const article = await getArticleById(id);

  if (!article) {
    return null;
  }

  return <ArticleDetail article={article} />;
}
