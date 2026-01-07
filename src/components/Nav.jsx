import styles from './Nav.module.css';
import logo from '../assets/판다 얼굴.svg';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navMenu}>
        <div>
          <a href="/" className={styles.logo}>
            <img className={styles.logoImage} src={logo} alt="판다마켓 로고" />
            판다마켓
          </a>
        </div>
        <ul className={styles.navLists}>
          <li className={styles.navItems}>
            <a href="/">자유게시판</a>
          </li>
          <li className={styles.navItems}>
            <a href="/">중고마켓</a>
          </li>
        </ul>
      </div>
      <a href="/" className={styles.button}>
        로그인
      </a>
    </div>
  );
}

export default Nav;
