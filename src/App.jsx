

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

import MarketPage from "./pages/MarketPage/components/MarketPage";

function App() {
  return (
    <>
      <Header />
      <div className="withHeader">
        <MarketPage />
      </div>
      <Footer />
    </>
  );
}
export default App;
