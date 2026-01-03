import { BestProductList } from '@/components/BestProductList';
import { Layout } from '@/components/Layout';
import { ProductList } from '@/components/ProductLIst';
import styles from './ProductListPage.module.css';
export function ProductListPage() {
  return (
    <Layout>
      <main>
        <section className={styles.bestProductList}>
          <BestProductList />
        </section>
        <ProductList />
      </main>
    </Layout>
  );
}
