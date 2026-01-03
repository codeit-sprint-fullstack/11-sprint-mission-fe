import React from 'react';
import clsx from 'clsx';
import styles from './Pagination.module.css';
import arrowRight from '../../assets/icon/arrow_right.svg';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxButtons = 5;
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.pageButton}
      >
        <img src={arrowRight} alt="이전 버튼" />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={clsx(
            styles.pageButton,
            currentPage === pageNumber && styles.active,
          )}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.pageButton}
      >
        <img className={styles.right} src={arrowRight} alt="다음 버튼" />
      </button>
    </div>
  );
}
