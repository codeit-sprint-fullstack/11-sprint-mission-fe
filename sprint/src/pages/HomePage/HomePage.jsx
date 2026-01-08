import Header from "./components/Header/Header";
import MainArticle from "./components/MainArticle/MainArticle";
import styles from "./HomePage.module.css"

function HomePage(){
  
  return(
    <div className={styles.HomeContainer}>
      <Header />
      <MainArticle />
      <main>
        
      </main>
    </div>

  );
}

export default HomePage;