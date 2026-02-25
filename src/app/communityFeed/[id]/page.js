import { deleteArticle, getArticle } from '@/lib/api/ArticleService';
import ArticleInfo from '../components/ArticleInfo';
import CommentForm from '../components/CommentForm';

export default async function article({ params }) {
  const { id } = await params;
  const [article] = await Promise.all([getArticle(id), deleteArticle(id)]);
  return (
    <div>
      <ArticleInfo {...article} />
      <CommentForm />
    </div>
  );
}
