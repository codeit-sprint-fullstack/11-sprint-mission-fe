import ArticleDetailContainer from '@/features/articles/ArticleDetail';
import CommentSectionContainer from '@/features/comments/CommentSection';
import ContentLayout from '@/components/layouts/ContentLayout';

export default async function ArticlePage({ params }) {
  const { id } = await params;

  return (
    <ContentLayout>
      <ArticleDetailContainer id={id} />
      <CommentSectionContainer type="article" id={id} />
    </ContentLayout>
  );
}
