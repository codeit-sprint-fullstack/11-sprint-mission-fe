import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import SortDropdown from "../components/SortDropdown";
import SearchInput from "../components/SearchInput";

const INITIAL_PAGE = 1;
const INITIAL_PAGE_SIZE = 10;

export default function MarketPage() {
  const {
    products,
    totalCount,
    loading,
    error,
    page,
    setPage,
    pageSize,
    sort,
    setSort,
    keyword,
    setKeyword,
  } = useProducts(INITIAL_PAGE, INITIAL_PAGE_SIZE);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  const totalPages = Math.max(Math.ceil(totalCount / pageSize), 1); // 최소 1페이지 보장

  return (
    <div>
      <SearchInput value={keyword} onChange={setKeyword} />
      <SortDropdown value={sort} onChange={setSort} />
      <ProductList products={products} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </div>
  );
}