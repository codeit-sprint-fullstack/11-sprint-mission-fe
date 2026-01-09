import { AllItemsSection } from "./AllItemsSection";
import { BestItemsSection } from "./BestItemsSection";
import './MarketPage.css'


function MarketPage() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;