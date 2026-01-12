import Banner from '@/components/Banner';
import HomeFeatures from '@/features/HomeFeatures';
import TopBannerImg from '@/assets/images/home/top-banner.svg';
import BottomBannerImg from '@/assets/images/home/bottom-banner.svg';

function HomePage() {
  return (
    <>
      <Banner
        title="일상의 모든 물건을 거래해 보세요"
        buttonText="구매하러 가기"
        buttonLink="/"
        imageSrc={TopBannerImg}
      />

      <HomeFeatures />

      <Banner
        title=<>
          믿을 수 있는
          <br />
          판다마켓 중고거래
        </>
        imageSrc={BottomBannerImg}
      />
    </>
  );
}

export default HomePage;
