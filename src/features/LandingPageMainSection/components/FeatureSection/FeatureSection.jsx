import FeatureItem from '../FeatureItem';
import hotItemImage from '../../../../assets/images/hot_item_image.png';
import searchImage from '../../../../assets/images/search_image.png';
import registerImage from '../../../../assets/images/register_image.png';
import styles from './FeatureSection.module.css';

function FeatureSection() {
  return (
    <section className={styles.featureWrapper}>
      <FeatureItem
        label="Hot item"
        title={
          <>
            인기 상품을
            <br />
            확인해 보세요
          </>
        }
        description={
          <>
            가장 HOT한 중고거래 물품을
            <br />
            판다 마켓에서 확인해 보세요
          </>
        }
        image={hotItemImage}
      />

      <FeatureItem
        label="Search"
        title={
          <>
            구매를 원하는
            <br />
            상품을 검색하세요
          </>
        }
        description={
          <>
            구매하고 싶은 물품은 검색해서
            <br />
            쉽게 찾아보세요
          </>
        }
        image={searchImage}
        reverse
      />

      <FeatureItem
        label="Register"
        title={
          <>
            판매를 원하는
            <br />
            상품을 등록하세요
          </>
        }
        description={
          <>
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            쉽게 등록하세요
          </>
        }
        image={registerImage}
      />
    </section>
  );
}

export default FeatureSection;
