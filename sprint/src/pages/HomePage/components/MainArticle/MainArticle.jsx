import styles from './MainArticle.module.css';
import PandaImg from '@/assets/Img_home_top.png'

function MainArticle (){
  return(
    <div className={styles.articleContainer}>
      <div className={styles.btnContiner}>
        <div>일상의 모든 물건을 <br/>거래해보세요</div>
        <button className={styles.showBtn}>구경하러 가기</button>
      </div>
      <img className={styles.pandaImg}src={PandaImg}/>
    </div>
  )
}

export default MainArticle;