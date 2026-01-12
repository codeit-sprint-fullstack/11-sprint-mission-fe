import styles from './Pagination.module.css';

const PAGE_BUTTONS = 5;

export function Pagination({
  totalCount,
  pageSize,
  currentPage,
  handlePageChange,
}) {
  const safeTotalCount = Number.isFinite(Number(totalCount))
    ? Number(totalCount)
    : 0;
  const safePageSize =
    Number.isFinite(Number(pageSize)) && Number(pageSize) > 0
      ? Number(pageSize)
      : 1;
  const totalPages = Math.ceil(safeTotalCount / safePageSize);

  let startPage = currentPage - Math.floor(PAGE_BUTTONS / 2);
  startPage = Math.max(1, startPage); // 스타트 페이지가 최소 1이 되는 로직
  startPage = Math.min(startPage, totalPages - PAGE_BUTTONS + 1); // 스타트 페이지가 토탈 페이지를 넘을 수 없게 되는 로직
  startPage = Math.max(1, startPage); // 토탈 페이지가 페이지 버튼 수보다 작을 때

  const allPages = Array.from(
    { length: Math.min(PAGE_BUTTONS, totalPages) },
    (_, i) => startPage + i
  );

  return (
    <nav>
      <ul className={styles.paginationContainer}>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={styles.paginationBtn}
          >
            ☜
          </button>
        </li>
        {allPages.map((page) => (
          <li key={page}>
            <button
              className={`${styles.paginationBtn} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={styles.paginationBtn}
          >
            ☞
          </button>
        </li>
      </ul>
    </nav>
  );
}
