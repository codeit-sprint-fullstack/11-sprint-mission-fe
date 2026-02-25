import ContentLayout from '@/components/layouts/ContentLayout';
import ArticleForm from '@/features/articles/ArticleForm';
import { getArticleById } from '@/services/articleService';

export default async function EditArticle({ params }) {
  const { id } = await params;

  const article = await getArticleById(id);

  if (!article) {
    return null;
  }

  return (
    <ContentLayout>
      <ArticleForm initialData={article} isEdit={true} />
    </ContentLayout>
  );
}
