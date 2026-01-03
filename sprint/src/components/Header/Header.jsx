import pandaLogo from '@/assets/panda-Logo.svg'
import styles from "./Header.module.css"

function Header (){
  return(
    <>
      <div className={styles.HeaderContainer}>
        <div className={styles.headerSideMenu}>
          <img className={styles.logo} src = {pandaLogo} alt="판다마켓로고"/>
          <div>
            <a>자유게시판</a>
            <a>중고마켓</a>
          </div>
        </div>

        <button className={styles.loginBtn}>로그인</button> 
      </div>
    </>
  )
}

export default Header;