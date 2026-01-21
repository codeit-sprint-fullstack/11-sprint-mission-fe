import Banner from '../components/banner/banner';
import image from '../../../assets/images/Img_home_bottom.png';

function PreFooter() {
  return (
    <>
      <Banner
        title={
          <>
            믿을 수 있는 <br />
            판다마켓 중고 거래
          </>
        }
        image={image}
        imageAlt="판다마켓 이미지"
      />
    </>
  );
}

export default PreFooter;
