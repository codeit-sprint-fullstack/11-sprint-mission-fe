import searchIcon from '../assets/ic_search.svg';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.barContainer}>
      <img src={searchIcon} alt="검색" />
      <input
        className={styles.input}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default SearchBar;
