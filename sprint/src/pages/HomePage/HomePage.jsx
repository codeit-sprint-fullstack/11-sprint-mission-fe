import Header from "./components/Header/Header";
import MainArticle from "./components/MainArticle/MainArticle";
import MainSection from "./components/MainSection/MainSection";
import FooterArticle from "./components/FooterArticle/FooterArticle";
import Footer from "./components/Footer/Footer";
import styles from "./HomePage.module.css"

function HomePage(){
  
  return(
    <>   
      <Header />
      <div className={styles.HomeContainer}>
        <MainArticle />
        <MainSection />
        <FooterArticle />
        <Footer />
      </div>
    </>

  );
}

export default HomePage;