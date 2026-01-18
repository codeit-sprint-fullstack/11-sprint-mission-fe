import styles from './FooterArticle.module.css';
import FooterImg from '@/assets/Img_home_bottom.png'

function FooterArticle (){
  return(
    <div className={styles.FooterArticleContainer}>
      <p className={styles.FooterWord}>
        믿을 수 있는 <br/>판다마켓 중고 거래
      </p>
      <img className={styles.FooterImg}src={FooterImg}/>
    </div>

  )
}

export default FooterArticle;