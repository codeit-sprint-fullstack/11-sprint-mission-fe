import React from 'react';
import styles from './Pagination.module.css';

const PAGE_WINDOW = 5;

export const Pagination = ({
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  if (totalPages <= 1) return null;

  const half = Math.floor(PAGE_WINDOW / 2);

  let startPage = currentPage - half;
  let endPage = currentPage + half;

  // 왼쪽 경계 보정
  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(PAGE_WINDOW, totalPages);
  }

  // 오른쪽 경계 보정
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(totalPages - PAGE_WINDOW + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {/* 처음 */}
      <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        &laquo;
      </button>

      {/* 이전 */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {/* 페이지 번호 */}
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : ''}
          onClick={() => onPageChange(page)}
        >
          <p>{page}</p>
        </button>
      ))}

      {/* 다음 */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>

      {/* 마지막 */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        &raquo;
      </button>
    </nav>
  );
};
