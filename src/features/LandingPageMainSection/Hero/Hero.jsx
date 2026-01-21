import img_home_top from '../../../assets/images/Img_home_top.png';
import Banner from '../components/banner/banner';

function Hero() {
  return (
    <Banner
      title={
        <>
          일상의 모든 물건을 <br />
          거래해보세요
        </>
      }
      image={img_home_top}
      imageAlt="판다마켓 이미지"
      buttonText="구경하러 가기"
      buttonLink="/market"
    />
  );
}

export default Hero;
