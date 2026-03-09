import ContentLayout from '@/components/layouts/ContentLayout';
import CommentSectionContainer from '@/features/comments/CommentSection';
import ProductDetailContainer from '@/features/products/ProductDetail';

export default async function ProductDetail({ params }) {
  const { id } = await params;

  return (
    <ContentLayout>
      <ProductDetailContainer />
      <CommentSectionContainer type="product" id={id} />
    </ContentLayout>
  );
}
