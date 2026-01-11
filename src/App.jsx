import './App.css';
import { AllProduct } from './components/AllProduct';
import { BestProduct } from './components/BestProduct';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Route } from 'react-router';


function App() {
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

export default App;
