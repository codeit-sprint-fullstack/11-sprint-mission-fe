import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import BestItemList from "./context/BestItemList"
import ProductList from "./context/ProductList"
import ProductListSection from "./context/ProductListSection"

import styles from "./App.module.css"

function App() {
  return(
    <>
      <div className={styles.appContainer}>
        <Header />

        <main>

          <section>
            <div>
              <BestItemList/>
            </div>
          </section>

          <section>
            <ProductListSection/>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
