import FacebookIcon from '@/assets/ic_facebook.svg'
import TwitterIcon from '@/assets/ic_twitter.svg'
import YoutubeIcon from '@/assets/ic_youtube.svg'
import InstagramIcon from '@/assets/ic_instagram.svg'
import styles from './Footer.module.css';


function Footer () {
  return(
    <div className={styles.footerContainer}>
      <p className={styles.CodeitLogo}>©codeit - 2024</p>

      <div className={styles.footerCenter}>
        <a>Privacy Policy</a>
        <a>FAQ</a>
      </div>

      <div className={styles.snsContainer}>
        <a className={styles.snsBtn} href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <img src={FacebookIcon} alt="페이스북"/>
        </a>
        <a className={styles.snsBtn} href="https://x.com/?lang=ko" target="_blank">
          <img src={TwitterIcon} alt="트위터"/>
        </a>
        <a className={styles.snsBtn} href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop" target="_blank">
          <img src={YoutubeIcon} alt="유투브"/>
        </a>      
        <a className={styles.snsBtn} href="https://www.instagram.com/" target="_blank">
          <img src={InstagramIcon} alt="인스타그램"/>
        </a>  
      </div>

    </div>
  )
}

export default Footer;


