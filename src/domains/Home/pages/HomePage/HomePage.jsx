import { Header } from '@/components/Header';
import { PandaContainer } from '@/domains/Home/components/PandaContainer';
import { LinkButton } from '@/components/LinkButton';
import { HomeFeatureSection } from '@/domains/Home/components/HomeFeatureSection';
import { Footer } from '@/components/Footer';
import heroPanda from '@/assets/Img_home_top.png';
import bottomPanda from '@/assets/Img_home_bottom.png';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <Header title="판다마켓 메인 페이지" />

      <PandaContainer
        className={styles.hero}
        src={heroPanda}
        alt="장바구니를 들고 있는 판다"
      >
        <h2>
          일상의 모든 물건을
          <br />
          거래해 보세요
        </h2>
        <LinkButton to="/items" className={styles.itemButton}>
          구경하러 가기
        </LinkButton>
      </PandaContainer>

      <HomeFeatureSection />

      <PandaContainer
        className={styles.bottom}
        wrapClassName={styles.wrap}
        src={bottomPanda}
        alt="장바구니를 들고 있는 판다"
      >
        <h2>
          믿을 수 있는
          <br />
          판다마켓 중고 거래
        </h2>
      </PandaContainer>

      <Footer />
    </>
  );
}
