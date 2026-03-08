import ContentLayout from '@/components/layouts/ContentLayout';
import BestProducts from '@/features/products/BestProducts';
import ProductList from '@/features/products/ProductList';
import { Suspense } from 'react';

export default function MarketPage() {
  return (
    <ContentLayout>
      <Suspense fallback={<div>베스트 상품 로딩 중...</div>}>
        <BestProducts />
      </Suspense>

      <Suspense fallback={<div>상품 목록 로딩 중...</div>}>
        <ProductList />
      </Suspense>
    </ContentLayout>
  );
}
