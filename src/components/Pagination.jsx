import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="arrow-icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdNavigateBefore />
      </button>
      <div className="page-numbers">
        {pages.map((page) => (
          <button
            key={page}
            className="page-button"
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="arrow-icon"
        onClick={() => onPageChange(currentPage + 1)}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}

export default Pagination;
