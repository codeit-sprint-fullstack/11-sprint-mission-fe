import clsx from 'clsx';
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const PAGE_COUNT = 5;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startIndex = Math.max(
    0,
    Math.min(currentPage - Math.ceil(PAGE_COUNT / 2), totalPages - PAGE_COUNT),
  );

  const visiblePages = pages.slice(startIndex, startIndex + PAGE_COUNT);

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {visiblePages.map((pageNumber) => (
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
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </nav>
  );
}

export default Pagination;
