import ArticleDetail from '@/components/ArticleDetail/ArticleDetail';
import Comments from '@/components/ArticleDetail/Comments/Comments';
import CommnetsList from '@/components/ArticleDetail/CommentsList/CommnetsList';

export default async function FreeboardDetailPage({ params }) {
  const { id } = await params;
  return (
    <>
      <ArticleDetail id={id} />
      <Comments id={id} />
      <CommnetsList id={id} />
    </>
  );
}
