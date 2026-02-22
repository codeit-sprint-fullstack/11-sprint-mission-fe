import HomeFeature from '@/components/home/HomeFeature';
import featureImg01 from '@/assets/images/home/Img_home_01.svg';
import featureImg02 from '@/assets/images/home/Img_home_02.svg';
import featureImg03 from '@/assets/images/home/Img_home_03.svg';
import * as styles from './HomeFeatures.css.js';

const FEATURE_DATA = [
  {
    id: 1,
    imageSrc: featureImg01,
    imageAlt: '인기 상품',
    badge: 'Hot item',
    title: '인기 상품을\n확인해 보세요',
    description: '가장 HOT한 중고거래 물품을\n판다마켓에서 확인해 보세요',
  },
  {
    id: 2,
    imageSrc: featureImg02,
    imageAlt: '상품 검색',
    badge: 'Search',
    title: '구매를 원하는\n상품을 검색하세요',
    description: '구매하고 싶은 물품은\n검색해서 쉽게 찾아보세요',
  },
  {
    id: 3,
    imageSrc: featureImg03,
    imageAlt: '상품 등록',
    badge: 'Register',
    title: '판매를 원하는\n상품을 등록하세요',
    description: '어떤 물건이든 판매하고 싶은\n상품을 쉽게 등록하세요',
  },
];

export default function HomeFeatures() {
  return (
    <section className={styles.featureWrapper}>
      {FEATURE_DATA.map((feature, index) => (
        <HomeFeature
          key={feature.id}
          {...feature}
          isReverse={index % 2 === 1} // [홀수]만 반대로
        />
      ))}
    </section>
  );
}
