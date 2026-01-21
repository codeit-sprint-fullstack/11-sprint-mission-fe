import MarketFooter from '../../components/Layout/MarketFooter';
import MarketHeader from '../../components/Layout/MarketHeader';
import LandingPageMainSection from '../../features/LandingPageMainSection/LandingPageMainSection';

function Landing() {
  return (
    <div>
      <MarketHeader />
      <main>
        <LandingPageMainSection/>
      </main>
      <MarketFooter />
    </div>
  );
}

export default Landing;
