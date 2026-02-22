import styles from './DropdownList.module.css';

export function DropdownList({ onSelect }) {
  return (
    <ul className={styles.dropdownList}>
      <li
        className={styles.dropdownItem}
        onClick={() => {
          onSelect('recent');
        }}
      >
        최신순
      </li>
      <li
        className={styles.dropdownItem}
        onClick={() => {
          onSelect('favorite');
        }}
      >
        좋아요순
      </li>
    </ul>
  );
}
