'use client';

import Link from 'next/link';
import Button from '@/components/common/Button';
import ListControls from '@/components/common/ListControls';
import ProductCard from '@/components/products/ProductCard';
import Pagination from '@/components/common/Pagination';
import { productsAPI } from '@/services/productsApi.js';
import { MINUTE_MS, PAGE_RANGE, PRODUCT_PAGESIZE } from '@/utils/constants.js';
import { useSuspenseQuery } from '@tanstack/react-query';
import { queryKeys } from '@/lib/queryKeys.js';
import { useSearchParams } from 'next/navigation.js';
import * as styles from './ProductList.css.js';

export default function ProductList() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const orderBy = searchParams.get('orderBy') || 'recent';
  const keyword = searchParams.get('q') || '';

  const params = { page, orderBy, keyword, pageSize: PRODUCT_PAGESIZE };

  const { data } = useSuspenseQuery({
    queryKey: queryKeys.products.list(params),
    queryFn: () => productsAPI.getProductList(params),
    staleTime: MINUTE_MS,
  });

  const products = data?.list || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / PRODUCT_PAGESIZE) || 1;

  return (
    <section className={styles.productList}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>전체 상품</h2>

          <Link href="/products/new">
            <Button color="primary" shape="square" size="md">
              상품 등록
            </Button>
          </Link>
        </div>

        <ListControls currentSort={orderBy} currentKeyword={keyword} />
      </div>

      {/* 반응형 + 페이지네이션 수정 필요!! */}
      <div className={styles.productContainer}>
        {products && products.length > 0 ? (
          products?.map((product) => (
            <ProductCard key={product.id} product={product} type="list" />
          ))
        ) : (
          <div className={styles.emptyMessage}>등록된 상품이 없습니다.</div>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        pageLimit={PAGE_RANGE}
      />
    </section>
  );
}
