import { useState } from 'react';

export const usePagination = (
  initialPage = 1,
  itemsPerPage,
  totalCount = 0,
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber <= 0 || pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };
  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    totalPages,
    itemsPerPage,
    goToPage,
    nextPage,
    prevPage,
    setCurrentPage,
  };
};
