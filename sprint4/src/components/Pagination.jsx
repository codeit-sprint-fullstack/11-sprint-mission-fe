import arrowRightIcon from '../assets/icons/arrow-right.svg';

const PAGE_BUTTONS = 5;

export function Pagination({
  totalCount,
  pageSize,
  currentPage,
  handlePageChange,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  let startPage = currentPage - Math.floor(PAGE_BUTTONS / 2);
  startPage = Math.max(1, startPage);
  startPage = Math.min(startPage, totalPages - PAGE_BUTTONS + 1);
  startPage = Math.max(1, startPage);

  const allPages = Array.from(
    { length: Math.min(PAGE_BUTTONS, totalPages) },
    (_, i) => startPage + i,
  );

  return (
    <nav>
      <ul className="flex gap-1 justify-center mt-10.75">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`w-10 h-10 rounded-full flex items-center justify-center border border-[#E5E7EB] bg-white ${
              currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={currentPage === 1}
          >
            <img src={arrowRightIcon} alt="이전 상품 페이지" />
          </button>
        </li>
        {allPages.map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full items-center justify-center border border-[#E5E7EB] cursor-pointer ${
                currentPage === page ? 'bg-[#2F80ED text-[#F9FAFB]' : 'bg-white'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
