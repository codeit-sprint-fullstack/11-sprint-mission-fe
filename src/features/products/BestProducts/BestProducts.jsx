import ProductCard from '@/components/products/ProductCard';
import { getProductList } from '@/services/productService';
import * as styles from './BestProducts.css.js';

export default async function BestProducts() {
  // const bestProducts = await getBestProducts();
  const response = await getProductList({ 
    orderBy: 'favorite', 
    pageSize: 4 
  });

  // 2. 서버 응답 객체에서 list 배열을 안전하게 꺼냅니다.
  const bestProducts = response.list || [];

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
