import xImag from '@/assets/ic_X.svg';
import styles from './ProductTag.module.css';

export function ProductTag({ children, onClick }) {
  const prefix = '#';

  return (
    <li className={styles.productTag}>
      {prefix}
      {children}
      <button type="button" onClick={onClick}>
        {/* type="button" 없으면 submit으로 동작해서 써주는게 좋음 */}
        <img src={xImag} alt='태그 삭제 버튼' />
      </button>
    </li>
  );
}
