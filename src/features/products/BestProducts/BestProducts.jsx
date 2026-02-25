import ProductCard from '@/components/products/ProductCard';
import { getBestProducts } from '@/services/productService';
import * as styles from './BestProducts.css.js';

export default async function BestProducts() {
  const bestProducts = await getBestProducts();

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
