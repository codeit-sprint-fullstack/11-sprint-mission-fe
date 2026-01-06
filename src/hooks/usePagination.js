import { useState } from 'react';

export const usePagination = (
  initialPage = 1,
  itemsPerPage = 10,
  pageLimit = 5,
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItems, setTotalItems] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const goToPage = (pageNumber) => {
    if (pageNumber <= 0 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const next = () => goToPage(currentPage + 1);
  const prev = () => goToPage(currentPage - 1);

  const half = Math.floor(pageLimit / 2);

  let startPage = currentPage - half;
  let endPage = currentPage + half;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(pageLimit, totalPages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(totalPages - pageLimit + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return {
    currentPage,
    totalPages,
    setTotalItems,
    goToPage,
    next,
    prev,
    setCurrentPage,
    pageNumbers,
  };
};
