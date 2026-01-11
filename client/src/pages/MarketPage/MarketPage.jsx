import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="wrapper">
      
      {/* Mission 5에서 Best Item 삭제 요청 /> */} 
      {/* <BestItemsSection /> */} 
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;


