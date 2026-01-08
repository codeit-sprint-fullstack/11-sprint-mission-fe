import PandaLogo from '@/assets/panda-Logo.svg';
import styles from './Header.module.css';

function Header (){
  return(
    <>
      <div className={styles.headerContainer}>
        <a href='/'>
          <img className={styles.logoImg}src={PandaLogo} alt="판다마켓 로고"/>
        </a>
        <button className={styles.loginBtn} >로그인</button>
      </div>
    </>
  )
}

export default Header;