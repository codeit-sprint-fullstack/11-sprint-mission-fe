import { useProductsStore } from '@/stores/productsStore';
import styles from './BestItems.module.css';
import { useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ItemCard } from '../ItemCard';

const MOBILE_PAGE_SIZE = 1;
const TABLET_PAGE_SIZE = 2;
const DESKTOP_PAGE_SIZE = 4;


export function BestItemsSection() {
  //페이지에 보여지는 상품 수
  const isMobile = useMediaQuery('(max-width: 744px)');
  const isTablet = useMediaQuery('(max-width: 1280px)');
  const pageSize = isMobile
    ? MOBILE_PAGE_SIZE
    : isTablet
    ? TABLET_PAGE_SIZE
    : DESKTOP_PAGE_SIZE;

  const { best, fetchBestProducts } = useProductsStore();
  const { itemList, isLoading } = best;

  useEffect(() => {
    fetchBestProducts({ pageSize });
  }, [pageSize, fetchBestProducts]);

  return (
    <section className={styles.bestItemsContainer}>
      <h1 className={styles.sectionTitle}>베스트 상품</h1>
      <div className={styles.bestItemsCardSection}>
        {isLoading && <p>로딩중...</p>}
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </section>
  );
}
