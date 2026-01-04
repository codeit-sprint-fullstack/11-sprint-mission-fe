
import { Layout } from '@/components/Layout';

import styles from './ProductListPage.module.css';
import { BestProductList } from '../BestProductList';
import { ProductList } from '../ProductList'
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
