import styles from './Header.module.css';
import pandaLogo from '../../assets/panda-market-logo.png'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* 왼쪽 영역 */}
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={pandaLogo} alt="판다마켓 로고" />
          </div>

          <nav className={styles.nav}>
            <a href="#">자유게시판</a>
            <a href="#">중고마켓</a>
          </nav>
        </div>

        {/* 오른쪽 영역 */}
        <div className={styles.right}>
          <a href="#" className={styles.login}>
            로그인
          </a>
        </div>
      </div>
    </header>
  );
}