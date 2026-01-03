import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import styles from "./App.module.css"

function App() {
  return(
    <>
      <div className={styles.appContainer}>
        <Header />

        <main>
          <h1>중고마켓</h1>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
