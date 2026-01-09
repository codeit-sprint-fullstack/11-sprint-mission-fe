import { useProductsStore } from '@/stores/productsStore';
import { useEffect, useRef, useState } from 'react';
import { ItemCard } from '../ItemCard';
import orderIconMobile from '@/assets/icons/ic_sort_mobile.svg';
import orderIconArrowDown from '@/assets/icons/ic_arrow_down.svg';
import searchIcon from '@/assets/icons/ic_search.svg';
import styles from './AllitemsSection.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DropdownList } from '@/components/UI/DropdownList';
import { PaginationBar } from '@/components/UI/PaginationBar';


export function AllItemsSection() {
  // 화면 크기별 상품 수
  const isMobile = useMediaQuery('(max-width: 744px)');
  const isTablet = useMediaQuery('(max-width: 1280px)');
  const pageSize = isMobile ? 4 : isTablet ? 6 : 10;

  //UI 상태
  const [keyword, setKeyword] = useState(''); // 검색키워드 상태
  const [orderBy, setorderBy] = useState('recent'); //정렬 상태
  const [page, setPage] = useState(1); // 페이지 상태
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴 토글

  // Store 데이터 가져오기
  const { all, fetchAllProducts } = useProductsStore();
  const { itemList, totalCount, isLoading } = all;


  // 데이터 요청
  useEffect(() => {
    fetchAllProducts({
      orderBy,
      page, 
      pageSize,
      keyword,
    });
  }, [orderBy, page, pageSize, keyword, fetchAllProducts]);

  

  // 검색 핸들러
  const handleSearchInput = (value) => {
    setKeyword(value);
    // setPage(1); // 검색 시 페이지 초기화 (중요)
  };

  // 정렬 변경
  const handleOrderSelect = (value) => {
    setorderBy(value);
    setIsOpen(false);
  };
  // 드롭다운 밖에서 닫힘
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
      <div className={styles.allItemsSectionHeader}>
        <h1 className="sectionTitle">판매 중인 상품</h1>
        <div className={styles.searchBarWrapper}>
          <img src={searchIcon} alt="검색 아이콘" />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해 주세요"
            value={keyword}
            onChange={handleSearchInput}
          />
        </div>
        <button>상품 등록하기</button>
        <div className="orderButtonWrapper" ref={dropdownRef}>
          <button
            className={styles.orderDropdownToggle}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="orderBtn">
              <img src={orderIconArrowDown} alt="정렬 아이콘" />
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
            </div>
            {/* <img
              src={orderIconMobile}
              alt="정렬 아이콘 모바일"
              className="mobileorderBtn"
            /> */}
          </button>
          {isOpen && <DropdownList onSelect={handleOrderSelect} />}
        </div>
      </div>

      <div className={styles.allItemsCardSection}>
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>

      <div className="paginationBarWrapper">
        <PaginationBar
          totalPageNum={Math.ceil(totalCount / pageSize)}
          activePageNum={page}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
}
