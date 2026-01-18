import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { SellingProductsSection } from '../../components/SellingProductsSection';
import { Footer } from '@/components/Footer';
import styles from './ItemPage.module.css';

export function ItemPage() {
  return (
    <div className={styles.container}>
      <Header title="판다마켓 중고마켓 페이지">
        <Menu>자유게시판</Menu>
        <Menu className={styles.color}>중고마켓</Menu>
      </Header>

      <div className={styles.main}>
        <SellingProductsSection />
      </div>

      <Footer />
    </div>
  );
}
