import styles from './LinkButton.module.css';
// 여기서 Module Not found 오류가 계속 뜨는데 캐시 삭제해도 안되고 css는 잘 적용돼서 그냥 두었습니다

export function LinkButton({ children }) {
  return <a className={styles.button}>{children}</a>;
}
