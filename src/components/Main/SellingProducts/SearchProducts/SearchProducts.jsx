import { Logo } from '@/components/common/Logo';
import { LinkButton } from '@/components/common/LinkButton';
import { DropdownButton } from '@/components/common/DropdownButton';
import search from '@/assets/ic_search.svg';
import styles from './SearchProducts.module.css';

export function SearchProducts({
  keyword,
  setKeyword,
  orderBy,
  setOrderBy,
  goToPage,
}) {
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
            className={styles.input}
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value)  // 키워드 새로 받음
              goToPage(1);
            }} 
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault(); // 엔터 눌렀을때만 submit 막음
                goToPage(1);
              }
            }}
          />
          <Logo src={search} alt="돋보기 아이콘" className={styles.search} />
        </div>
      </form>
      <LinkButton>상품 등록하기</LinkButton>
      <DropdownButton
        selected={orderBy === 'recent' ? '최신순' : '좋아요순'}
        onSelect={(value) => {
          setOrderBy(value === '최신순' ? 'recent' : 'favorite');
          goToPage(1);
        }}
      />
    </div>
  );
}
