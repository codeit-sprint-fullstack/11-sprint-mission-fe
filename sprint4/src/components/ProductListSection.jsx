import { ProductList } from './ProductList';
import searchIcon from '../assets/icons/search.svg';
import arrowDownIcon from '../assets/icons/arrow-down.svg';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Pagination } from './Pagination';

const DELAY = 300;

export function ProductListSection() {
  const [products, setProducts] = useState([]);
  const [orderBy, setorderBy] = useState('recent');
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleOrderBy = (orderBy) => {
    setorderBy(orderBy);
    setIsOpen(false);
  };
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = useDebouncedCallback((e) => {
    const value = e.target.value;
    setKeyword(value);
  }, DELAY);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const getProducts = async () => {
      const params = new URLSearchParams({
        page: currentPage,
        pageSize: 10,
        orderBy,
        keyword,
      });

      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`,
      );
      const data = await res.json();
      setProducts(data);
    };

    getProducts();
  }, [orderBy, keyword]);
  // 1.디바운싱
  // - 연속적인 이벤트가 발생했을 때 이 이 벤트들을 하나로 취합해서 마지막에 실행
  // 2. 쓰로틀링
  // - 연속적인 이벤트가 발생했을 때 이벤트의 주기조절

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h2 className="text[#111827] font-bold text-[20px] leading-8">
          판매 중인 상품
        </h2>
        <div className="flex gap-3">
          <div className="relative">
            <img
              src={searchIcon}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-4"
            />
            <input
              name="search"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="pl-11 pr-4 py-2.25 text-[#9Ca3AF] bg-[#F3F4F6] rounded-xl outline-0 w-81.25"
              onChange={handleSearch}
              defaultValue={keyword}
            />
          </div>

          <a
            href=""
            className="self-center flex items-center justify-center w-33.25 h-10.5 rounded-lg bg[#3592FF] text-[#F3F4F6]"
          >
            상품 등록하기
          </a>

          <div className="relative">
            <button
              type="button"
              className="w-32.5 h-10.5 px-5 border border-[#E5E7EB] rounded-xl cursor-pointer text-left relative"
              onClick={handleIsOpen}
            >
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
              <img
                src={arrowDownIcon}
                alt=""
                className={`${
                  isOpen ? 'rotate-0' : 'rotate-180'
                } absolute top-1/2 -translate-y-1/2 right-5 rotate-0`}
              />
            </button>

            {isOpen ? (
              <ul className="absolute bg-white border border-[#E5E7EB] rodunded-xl translate-y-2 overflow-hidden">
                <li>
                  <button
                    className="w-32.5 h-10.5 cursor-pointer"
                    onClick={() => handleOrderBy('recent')}
                  >
                    최신순
                  </button>
                </li>
                <li>
                  <button
                    className="w-32.5 h-10.5 border-t border-[#E5E7EB] cursor-pointer"
                    onClick={() => handleOrderBy('favorite')}
                  >
                    좋아요순
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      <ProductList products={products.list} />
      <Pagenation
        totalCounst={products.totalCount}
        pageSize={10}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </section>
  );
}
