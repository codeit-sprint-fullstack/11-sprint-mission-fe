// 메인 화면 ('/')

import Link from 'next/link';
import '../../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <main>
      <section id="hero">
        <div className="heroContainer">
          <h2>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h2>
          <Link href="/items" className="itemBtn">
            구경하러 가기
          </Link>
        </div>
      </section>

      <section id="feature">
        <div className="featureItem">
          <div className="imgBox">
            <img src="/img/hot_item.png" alt="인기 상품 예시" />
          </div>
          <div className="textBox">
            <span className="subTitle">Hot Item</span>
            <h2>
              인기 상품을
              <br />
              확인해 보세요
            </h2>
          </div>
        </div>

        <div className="featureItem">
          <div className="imgBox">
            <img src="/img/search.png" alt="검색 예시 이미지" />
          </div>
          <div
            className="textBox"
            style={{ alignItems: 'flex-end', textAlign: 'right' }}
          >
            <span className="subTitle">Search</span>
            <h2>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h2>
            <h3>
              구매하고 싶은 물품은 검색에서
              <br />
              쉽게 찾아보세요
            </h3>
          </div>
        </div>

        <div className="featureItem">
          <div className="imgBox">
            <img src="/img/register.png" alt="레지스터 예시 이미지" />
          </div>
          <div className="textBox">
            <span className="subTitle">Register</span>
            <h2>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>
            <h3>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </h3>
            <br />
          </div>
        </div>
      </section>

      <section id="bottom">
        <div className="bottomContainer">
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h2>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
