import { Form } from './Form';
import styles from './SellingProducts.module.css';

export function SellingProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.productsBar}>
        <h2 className={styles.productsTitle}>판매 중인 상품</h2>
        <Form id="products" placeholder="검색할 상품을 입력해주세요">
          상품 검색
        </Form>
      </div>
    </section>
  );
}
