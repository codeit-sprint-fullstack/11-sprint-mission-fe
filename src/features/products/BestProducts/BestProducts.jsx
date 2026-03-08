'use client';

import ProductCard from '@/components/products/ProductCard';
import { MINUTE_MS } from '@/utils/constants.js';
import { queryKeys } from '@/lib/queryKeys.js';
import { productsAPI } from '@/services/productsApi.js';
import { useSuspenseQuery } from '@tanstack/react-query';
import * as styles from './BestProducts.css.js';

export default function BestProducts() {
  const { data: bestProducts } = useSuspenseQuery({
    queryKey: queryKeys.products.best(),
    queryFn: productsAPI.getBestProducts,
    staleTime: MINUTE_MS * 10,
  });

  if (bestProducts.length === 0) {
    return null;
  }

  return (
    <section className={styles.bestContainer}>
      <h2 className={styles.sectionTitle}>베스트 상품</h2>

      <div className={styles.scrollArea}>
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} type="best" />
        ))}
      </div>
    </section>
  );
}
