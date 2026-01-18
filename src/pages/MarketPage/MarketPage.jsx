import Footer from "@/components/Footer/Footer";
import ItmesHeader from "../../components/ItmesHeader/MarketHeader";
import ProductListSection from "./components/ProductListSection/ProductListSection";
import ProductList from "./components/ProductList/ProductList";




// import styles from './MarketPage.module.css'

function MarketPage (){
  return(
    <>
      <ItmesHeader />
      <ProductListSection />
      {/* <ProductList/> */}
      <Footer/>
    </>
  )
}

export default MarketPage;