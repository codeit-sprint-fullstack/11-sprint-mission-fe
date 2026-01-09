import pandaLogo from '@/assets/panda-Logo.svg'
import pandaLogoWord from '@/assets/panda-Logo-word .svg'

import styles from "./MarketHeader.module.css"

function ItmesHeader (){
  return(
    <>
      <div className={styles.itemsHeaderContainer}>
        <div className={styles.nevRight}>
          {/* <Link to='/'> */}
            <img className={styles.pandaLogo} src={pandaLogo}/>
            <img className={styles.pandaLogoWord}src={pandaLogoWord}/>
          {/* </Link> */}
          
          <p className={styles.nevBtn}>자유게시판</p>
          <p className={styles.nevBtn}>중고마켓</p>

        </div>

        <button className={styles.loginBtn}>로그인</button>

      </div>
    </>
  )
}

export default ItmesHeader;