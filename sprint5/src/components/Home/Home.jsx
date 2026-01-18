import React from 'react';
import logo from '../../asset/logo.png';
import topImg from '../../asset/image_top.png';
import firstImg from '../../asset/image_first.png';
import secondImg from '../../asset/image_second.png';
import thirdImg from '../../asset/image_third.png';
import footerImg from '../../asset/image_footer.png';
import styles from './Home.module.css';
import { useNavigate } from 'react-router';
import { Footer } from '../Footer/Footer';

export const Home = () => {
  // header footer 컴포넌트 분리 필요
  const nav = useNavigate();
  const onNav = () => {
    nav('/items');
  };
  return (
    <>
      <header className={styles.global_navigation_bar}>
        <nav>
          <div href="./">
            <img className={styles.logo_img} src={logo} />
          </div>

          <div className={styles.login_button}>로그인</div>
        </nav>
      </header>
      <main>
        {/* <!_ 메인화면에서 보이는 헤더역할 부분 _> */}
        <section className={styles.main_header}>
          <div className={styles.title_wrap}>
            <div className={styles.title}>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </div>
            <div className={styles.main_header_button} onClick={onNav}>
              구경하러 가기
            </div>
          </div>
          <img className={styles.main_header_img} src={topImg} />
        </section>
        {/* <!_ 메인에서 내용 부분 _> */}
        <section className={styles.content} alt="main_content">
          <div className={styles.content_wrap}>
            <div className={styles.background}>
              <img className={styles.content_img} src={firstImg} />
              <div className={styles.content_text}>
                <span className={styles.highlight}>hot item</span>
                <div className={styles.title}>
                  인기 상품을
                  <br />
                  확인해 보세요
                </div>
                <div className={styles.description}>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_wrap}>
            <div className={styles.background}>
              <div className={styles.content_text_left}>
                <span className={styles.highlight}>search</span>
                <div className={styles.title}>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </div>
                <div className={styles.description}>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </div>
              </div>
              <img className={styles.content_img} src={secondImg} />
            </div>
          </div>
          <div className={styles.content_wrap}>
            <div className={styles.background}>
              <img className={styles.content_img} src={thirdImg} />
              <div className={styles.content_text}>
                <span className={styles.highlight}>Register</span>
                <div className={styles.title}>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </div>
                <div className={styles.description}>
                  어떤 물건이든 판매하고 싶은
                  <br />
                  상품을 쉽게 등록하세요
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!_ 메인 부분에서 footer 부분 _> */}
        <section className={styles.main_header}>
          <div className={styles.title_wrap}>
            <div className={styles.title}>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </div>
          </div>
          <img className={styles.main_header_img} src={footerImg} />
        </section>
      </main>
      <Footer />
    </>
  );
};
