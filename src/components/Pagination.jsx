import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import './Pagination.css';

function Pagination({ currentPage, totalPages, pageNumbers, onPageChange }) {
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
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`page-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="arrow-icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}

export default Pagination;
