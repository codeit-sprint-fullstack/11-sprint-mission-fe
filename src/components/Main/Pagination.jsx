import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  loading = false,
}) => {
  if (totalPages <= 1) return null;

  const pages = [];
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevBtn}
        disabled={currentPage === 1 || loading}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'<'}
      </button>

      {pages.map((page) => (
        <React.Fragment key={page}>
          {page === currentPage ? (
            <button className={styles.activeBtn}>{page}</button>
          ) : (
            <button
              className={styles.pageBtn}
              onClick={() => onPageChange(page)}
              disabled={loading}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        className={styles.nextBtn}
        disabled={currentPage === totalPages || loading}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
