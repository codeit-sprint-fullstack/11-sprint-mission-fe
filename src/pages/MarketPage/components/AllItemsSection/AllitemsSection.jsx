import { useProductsStore } from '@/stores/productsStore';
import { useEffect, useRef, useState } from 'react';
import { ItemCard } from '../ItemCard';
import sortIconMobile from '@/assets/icons/ic_sort_mobile.svg';
import sortIconArrowDown from '@/assets/icons/ic_arrow_down.svg';
import searchIcon from '@/assets/icons/ic_search.svg';
import styles from './AllitemsSection.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DropdownList } from '@/components/UI/DropdownList';
import { PaginationBar } from '@/components/UI/PaginationBar';
import { useDebounce } from '@/hooks/useDebounce';
import { Button } from '@/components/UI/Button';

const INITIAL_PAGE = 1;
const DEBOUNCE_DELAY_MS = 300;

const MOBILE_PAGE_SIZE = 4;
const TABLET_PAGE_SIZE = 6;
const DESKTOP_PAGE_SIZE = 10;

export function AllItemsSection() {
  // 화면 크기별 상품 수
  const isMobile = useMediaQuery('(max-width: 744px)');
  const isTablet = useMediaQuery('(max-width: 1280px)');
  const pageSize = isMobile
    ? MOBILE_PAGE_SIZE
    : isTablet
    ? TABLET_PAGE_SIZE
    : DESKTOP_PAGE_SIZE;

  //UI 상태
  const [inputValue, setInputValue] = useState(''); // 검색키워드 상태
  const [orderBy, setorderBy] = useState('recent'); //정렬 상태
  const [page, setPage] = useState(INITIAL_PAGE); // 페이지 상태
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 토글

  // Store 데이터 가져오기
  const { all, fetchAllProducts } = useProductsStore();
  const { itemList, totalCount, isLoading } = all;

  // 검색 디바운스
  const debouncedKeyword = useDebounce(inputValue, DEBOUNCE_DELAY_MS);


  // 데이터 요청
  useEffect(() => {
    fetchAllProducts({
      orderBy,
      page,
      pageSize,
      keyword: debouncedKeyword,
    });
  }, [orderBy, page, pageSize, debouncedKeyword, fetchAllProducts]);

  // 정렬 변경
  const handleSortSelect = (value) => {
    setorderBy(value);
    setPage(INITIAL_PAGE)
    setIsOpen(false);
  };
  // 드롭다운 밖 클릭 시 닫기
  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  //페이지 변경

  return (
    <div>
      {/* 헤더 */}
      <div className={styles.allItemsSectionHeader}>
        <h1 className={styles.sectionTitle}>판매 중인 상품</h1>
        {/* 검색바 */}
        <div className={styles.searchBarWrapper}>
          <img src={searchIcon} alt="검색 아이콘" />
          <input
            className={styles.searchBarInput}
            placeholder="검색할 상품을 입력해 주세요"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setPage(INITIAL_PAGE);
            }}
          />
        </div>
        <Button  >상품 등록하기</Button>
        {/* 정렬 드롭다운 */}
        <div className={styles.sortButtonWrapper} ref={dropdownRef}>
          <button
            className={styles.sortDropdownToggle}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className={styles.sortBtn}>
              <img src={sortIconArrowDown} alt="정렬 아이콘" />
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
            </div>
            <img
              src={sortIconMobile}
              alt="정렬 아이콘 모바일"
              className={styles.mobileSortBtn}
            />
          </button>
          {isOpen && <DropdownList onSelect={handleSortSelect} />}
        </div>
      </div>
      {/* 상품 카드 목록 */}
      <div className={styles.allItemsCardSection}>
        {isLoading && <p>로딩중...</p>}
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>
      {/* 페이지네이션 */}
      <div className={styles.paginationBarWrapper}>
        <PaginationBar
          totalPageNum={Math.ceil(totalCount / pageSize)}
          activePageNum={page}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}
