import { FeatureSection } from './FeatureSection';
import styles from './HomePage.module.css';
import { Button } from '@/components/UI/Button';

function HomePage() {
  return (
    <main>
      <section id="hero" className={`${styles.banner} ${styles.hero}`}>
        <div className="wrapper">
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <Button className={styles.pillButton} variant="pill">
            {/* <a href="items.html" class="button pill-button"> */}
            구경하러 가기
            {/* </a> */}
          </Button>
        </div>
      </section>
      <div className="wrapper">
        <FeatureSection className={styles.features} />
      </div>
      <section
        id="bottomBanner"
        className={`${styles.banner} ${styles.bottomBanner}`}
      >
        <div className="wrapper">
          <h1>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h1>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
