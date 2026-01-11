import MarketPage from "./pages/MarketPage/MarketPage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      {/* Global Navigation Bar */}
      <Header />

      <div className="withHeader">
        <MarketPage />
      </div>
       
      <Footer />
    </>
  );
}

export default App;
