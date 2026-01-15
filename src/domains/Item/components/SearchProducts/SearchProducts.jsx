import searchImg from '@/assets/ic_search.svg';
import { OrderByButtton } from '../OrderByButton';
import styles from './SearchProducts.module.css';
import { LinkButton } from '@/components/LinkButton';

export function SearchProducts({ keyword, setKeyword, goToPage }) {
  // 타이핑마다 검색 조건 변경
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value); // 키워드 새로 받음
    goToPage(1);
  };

  // 검색 실행
  const handleSearchEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      goToPage(1);
    }
  };

  return (
    <div className={styles.bar}>
      <form>
        <label htmlFor="products" className={styles.srOnly}>
          상품 검색
        </label>
        <div className={styles.wrap}>
          <input
            id="products"
            name="products"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={keyword}
            onChange={handleKeywordChange}
            onKeyDown={handleSearchEnter}
          />
          <img src={searchImg} alt="돋보기 아이콘" className={styles.search} />
        </div>
      </form>
      <LinkButton className={styles.regitstrationButton}>
        상품 등록하기
      </LinkButton>
      <OrderByButtton />
    </div>
  );
}
