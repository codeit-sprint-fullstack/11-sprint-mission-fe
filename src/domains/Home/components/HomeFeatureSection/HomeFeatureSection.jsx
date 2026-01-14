import { Box } from '@/domains/Home/components/Box';
import homeHotItem from '@/assets/Img_home_01.png';
import homeSearchItem from '@/assets/Img_home_02.png';
import homeRegisterItem from '@/assets/Img_home_03.png';
import styles from './HomeFeatureSection.module.css';

export function HomeFeatureSection() {
  return (
    <main>
      <Box src={homeHotItem} alt="인기 상품 확인">
        <p className={styles.badge}>Hot item</p>
        <h2>
          인기 상품을
          <br />
          확인해 보세요
        </h2>
        <p className={styles.explanation}>
          가장 HOT한 중고거래 물품을
          <br />
          판다 마켓에서 확인해 보세요
        </p>
      </Box>

      <Box
        className={styles.rightAlign}
        innerClassName={styles.flexRowReverse}
        src={homeSearchItem}
        alt="상품 검색"
      >
        <p className={styles.badge}>Search</p>
        <h2>
          구매를 원하는
          <br />
          상품을 검색하세요
        </h2>
        <p className={styles.explanation}>
          구매하고 싶은 물품은 검색해서
          <br />
          쉽게 찾아보세요
        </p>
      </Box>

      <Box src={homeRegisterItem} alt="상품 등록">
        <p className={styles.badge}>Register</p>
        <h2>
          판매를 원하는
          <br />
          상품을 등록하세요
        </h2>
        <p className={styles.explanation}>
          어떤 물건이든 판매하고 싶은 상품을
          <br />
          쉽게 등록하세요
        </p>
      </Box>
    </main>
  );
}
