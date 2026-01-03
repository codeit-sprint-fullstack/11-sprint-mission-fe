import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import BestItemList from "./context/BestItemList"
import ProductList from "./context/ProductList"

import styles from "./App.module.css"

function App() {
  return(
    <>
      <div className={styles.appContainer}>
        <Header />

        <main>

          <section>
            <div>
              <h2>베스트 상품</h2>
              <BestItemList/>
            </div>
          </section>

          <section>
            <div>
              <h2>판매 중인 상품</h2>
              <ProductList/>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
