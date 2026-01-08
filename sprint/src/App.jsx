import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import BestItemList from "./components/BestItemList/BestItemList"
import ProductListSection from "./components/ProductListSection/ProductListSection"

import styles from "./App.module.css"

function App() {
  return(
    <>
      <div className={styles.appContainer}>
        <Header />

        <main>
          <BestItemList/>
          <ProductListSection/>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
