import facebook from '@/assets/ic_facebook.svg'
import instagram from '@/assets/ic_instagram.svg'
import twitter from '@/assets/ic_twitter.svg'
import youtube from '@/assets/ic_youtube.svg'
import styles from './Footer.module.css'

function Footer (){
  return(
    <>
      <div className={styles.footerContainer}>
        <p>©codeit-2024</p>

        <div>
        <a>Privacy Policy</a>
        <a> FAQ</a>
        </div>

        <div>
          <img src={facebook} alt='페이스북'/>
          <img src={twitter} alt='트위터'/>
          <img src={youtube} alt='유투브'/>
          <img src={instagram} alt="인스타그램"/>
        </div>
      </div>
    </>
  )
}

export default Footer;