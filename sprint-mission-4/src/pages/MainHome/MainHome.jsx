import styles from './MainHome.module.css';
import { Link } from 'react-router-dom';

export default function MainHome() {
  return (
    <>
      <header>
        <a href="/">
          <img src="./src/assets/logo.svg" alt="판다마켓 로고" />
        </a>
        <a className={styles.loginBtn} href="/login.html">
          로그인
        </a>
      </header>
      <main>
        <section className={styles.bannerTop}>
          <div className={styles.box}>
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <Link to="/products" className={styles.itemBtn} href="/items.html">
              구경하러가기
            </Link>
          </div>
          <div>
            <img
              className={styles.imgBannerTop}
              src="./src/assets/Img_home_top.png"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <img className={styles.img} src="./src/assets/Img_home_01.svg" />
            <div className={styles.frame1}>
              <p className={styles.keyword}>Hot item</p>
              <div className={styles.frame2}>
                <h2 className={styles.content}>
                  인기 상품을
                  <br />
                  확인해 보세요
                </h2>
                <p className={styles.content2}>
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.frame3}>
              <p className={styles.keyword}>Search</p>
              <div className={styles.frame3}>
                <h2 className={styles.content2}>
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h2>
                <p className={styles.content3}>
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
            <img className={styles.img} src="./src/assets/Img_home_02.svg" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <img className={styles.img} src="./src/assets/Img_home_03.svg" />
            <div className={styles.frame1}>
              <p className={styles.keyword}>Register</p>
              <div className={styles.frame2}>
                <h2 className={styles.content}>
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h2>
                <p className={styles.content2}>
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="banner-bottom">
          <div className={styles.box2}>
            <h1>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h1>
          </div>
          <div>
            <img
              className={styles.imgBannerBottom}
              src="./src/assets/Img_home_bottom.svg"
            />
          </div>
        </section>
      </main>
      <footer>
        <div className={styles.footerBox}>
          <p className={styles.footerText1}>©codeit - 2024</p>
          <div className={styles.footerBoxMiddle}>
            <a className={styles.footerText2} href="./privacy.html">
              Privacy Policy
            </a>
            <a className={styles.footerText2} href="./faq.html">
              FAQ
            </a>
          </div>
          <div className={styles.footerBoxEnd}>
            <a
              href="https://www.facebook.com/login.php/?lang=ko"
              target="_blank"
            >
              <img
                className={styles.icon}
                src="./src/assets/ic_facebook.svg"
                alt="facebook"
              />
            </a>
            <a href="https://x.com/" target="_blank">
              <img
                className={styles.icon}
                src="./src/assets/ic_twitter.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img
                className={styles.icon}
                src="./src/assets/ic_youtube.svg"
                alt="youtube"
              />
            </a>
            <a href="https://www.instagram.com/?hl=ko" target="_blank">
              <img
                className={styles.icon}
                src="./src/assets/ic_instagram.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
