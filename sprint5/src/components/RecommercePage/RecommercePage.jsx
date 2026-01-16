import { AllProduct } from './AllProduct';
import { BestProduct } from './BestProduct';
import { Footer } from './Footer';
import { Header } from '../Header/Header';

function RecommercePage() {
  return (
    <>
      <Header />
      <div className="content">
        <BestProduct />
        <AllProduct />
      </div>
      <Footer />
    </>
  );
}

export default RecommercePage;
