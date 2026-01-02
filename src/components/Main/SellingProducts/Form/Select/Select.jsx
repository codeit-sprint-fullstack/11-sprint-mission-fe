import styles from './Select.module.css';

export function Select({ id }) {
  return (
    <select id={id} name={id} className={styles.select}>
      <option value="recent">최신순</option>
      <option value="favorite">좋아요순</option>
    </select>
  );
}
