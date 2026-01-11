import feature1 from '@/assets/images/home/feature1-image.png';
import feature2 from '@/assets/images/home/feature2-image.png';
import feature3 from '@/assets/images/home/feature3-image.png';
import { FeatureItem } from '../FeatureItem';

export function FeatureSection() {
  return (
    <section>
      <FeatureItem
        image={feature1}
        alt="인기 상품"
        tag="Hot item"
        title={`인기 상품을\n확인해 보세요`}
        description={`가장 HOT한 중고거래 물품을\n판다마켓에서 확인해 보세요`}
      />
      <FeatureItem
        image={feature2}
        alt="검색 기능"
        tag="Search"
        title={`구매를 원하는\n상품을 검색하세요`}
        description={`구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요`}
        reverse
      />
      <FeatureItem
        image={feature3}
        alt="판매 상품 등록"
        tag="Register"
        title={`판매를 원하는\n상품을 등록하세요`}
        description={`어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요`}
      />
    </section>
  );
}
