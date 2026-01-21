import MarketFooter from '../../components/Layout/MarketFooter';
import MarketHeader from '../../components/Layout/MarketHeader';
import RegistrationForm from '../../features/RegistrationForm';

function Registration() {
  return (
    <div>
      <MarketHeader />
      <main>
        <RegistrationForm />
      </main>
      <MarketFooter />
    </div>
  );
}

export default Registration;
