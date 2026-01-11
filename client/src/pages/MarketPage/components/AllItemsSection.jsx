import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../api/itemApi';
import ItemCard from './ItemCard';
import SortIconMobile from '../../../assets/images/icons/ic_sort_mobile.svg';
import SortIconArrowDown from '../../../assets/images/icons/ic_arrow_down.svg';
import SearchIcon from '../../../assets/images/icons/ic_search.svg';
import DropdownList from '../../../components/UI/DropdownList';
import PaginationBar from '../../../components/UI/PaginationBar';
import { useNavigate } from 'react-router-dom';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 4;
  if (width < 1280) return 6;
  return 10;
};

function AllItemsSection() {
  const navigate = useNavigate();
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [keyword, setKeyword] = useState('');

  const fetchSortedData = async ({ orderBy, page, pageSize, keyword }) => {
    try {
      const response = await getProducts({ orderBy, page, pageSize, keyword });
      setItemList(response.data || []);
      setTotalPageNum(Math.ceil((response.totalCount || 0) / pageSize));
    } catch (error) {
      console.error('상품 데이터를 가져오는 중 에러 발생:', error);
      setItemList([]);
      setTotalPageNum(0);
    }
  };

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    window.addEventListener('resize', handleResize);

    fetchSortedData({ orderBy, page, pageSize, keyword });
    return () => window.removeEventListener('resize', handleResize);
  }, [orderBy, page, pageSize, keyword, totalPageNum]);

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  const handleInputChange = (e) => setKeyword(e.target.value);
  const handleKeyPress = (e) => e.key === 'Enter' && handleSearch();
  const handleSearch = () => {
    setPage(1);
    fetchSortedData({ orderBy, page: 1, pageSize, keyword });
  };

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    fetchSortedData({ orderBy, page: pageNumber, pageSize, keyword });
  };

  const convertToKorean = (orderBy) => {
    switch (orderBy) {
      case 'recent':
        return '최신순';
      case 'favorite':
        return '인기순';
      default:
        return '최신순';
    }
  };
  const handleGoToRegisteration = () => {
    navigate('/Registeration');
  };

  return (
    <div>
      {/* Header */}
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">판매 중인 상품</h1>

        <div className="searchBarWrapper">
          <img src={SearchIcon} alt="search" />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해 주세요"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div
          className="createItemButton button"
          onClick={handleGoToRegisteration}
        >
          상품 등록하기
        </div>

        <div className="sortButtonWrapper">
          <button
            className="sortDropdownTriggerButton"
            onClick={toggleDropdown}
          >
            <div className="sortBtn">
              <span>{convertToKorean(orderBy)}</span>
              <img src={SortIconArrowDown} alt="sortIconArrowDown" />
            </div>
            <img
              src={SortIconMobile}
              className="mobileSortBtn"
              alt="sortMobile"
            />
          </button>

          {isDropdownVisible && (
            <DropdownList onSortSelection={handleSortSelection} />
          )}
        </div>
      </div>

      {/* Items */}
      <div className="allItemsCardSection">
        {itemList.length > 0 ? (
          itemList.map((item) => (
            <ItemCard item={item} key={`market-item-${item.id}`} />
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="paginationBarWrapper">
        {totalPageNum > 1 && (
          <PaginationBar
            totalPageNum={totalPageNum}
            activePageNum={page}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
}

export default AllItemsSection;
