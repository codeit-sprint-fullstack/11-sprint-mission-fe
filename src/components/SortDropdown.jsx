import styles from './SortDropdown.module.css';

function SortDropdown({ onSort }) {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <select className={styles.sortSelect} onChange={handleSortChange}>
      <option value="recent">최신순</option>
      <option value="favorite">좋아요순</option>
    </select>
  );
}

export default SortDropdown;
