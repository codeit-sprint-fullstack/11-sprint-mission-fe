import Banner from '@/components/home/Banner';
import HomeFeatures from '@/features/home/HomeFeatures';
import TopBannerImg from '@/assets/images/home/Img_home_top.svg';
import BottomBannerImg from '@/assets/images/home/Img_home_bottom.svg';

export default function HomePage() {
  return (
    <>
      <Banner
        title={`일상의 모든 물건을\n거래해 보세요`}
        buttonText={`구매하러 가기`}
        buttonLink="/items"
        imageSrc={TopBannerImg}
      />

      <HomeFeatures />

      <Banner
        title={`믿을 수 있는\n판다마켓 중고거래`}
        imageSrc={BottomBannerImg}
      />
    </>
  );
}
