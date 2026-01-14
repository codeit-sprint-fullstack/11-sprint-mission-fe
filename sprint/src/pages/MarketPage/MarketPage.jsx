import Footer from "@/components/Footer/Footer";
import ItmesHeader from "../../components/ItmesHeader/MarketHeader";
import ProductListSection from "./components/ProductListSection/ProductListSection";




// import styles from './MarketPage.module.css'

function MarketPage (){
  return(
    <>
      <ItmesHeader />
      <ProductListSection />
      <Footer/>
    </>
  )
}

export default MarketPage;