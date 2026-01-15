import clsx from 'clsx';
import arrowRight from '@/assets/arrow_right.svg';
import styles from './Pagination.module.css';

export function Pagination({
  pageButtons,
  goToPage,
  next,
  prev,
  currentPage,
  totalPages,
  className,
}) {
  return (
    <div className={clsx(styles.pagination, className)}>
      <button
        onClick={prev}
        disabled={currentPage === 1}
        className={styles.button}
      >
        <img
          src={arrowRight}
          alt="왼쪽 화살표"
          className={clsx(styles.arrowImg, styles.rotate)}
        />
      </button>

      {pageButtons.map((num) => (
        <button
          key={num}
          onClick={() => goToPage(num)}
          className={clsx(
            styles.button,
            currentPage === num ? styles.active : '',
          )}
        >
          {num}
        </button>
      ))}

      <button
        onClick={next}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        <img src={arrowRight} alt="오른쪽 화살표" className={styles.arrowImg} />
      </button>
    </div>
  );
}
