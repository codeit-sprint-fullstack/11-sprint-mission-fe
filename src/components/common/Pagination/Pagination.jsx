'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import * as styles from './Pagination.css.js';

export default function Pagination({ currentPage, totalPages, pageLimit }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const half = Math.floor(pageLimit / 2);

  const startRawNum = currentPage - half; // 중간값 기준 시작 페이지 계산
  const startMaxNum = totalPages - pageLimit + 1; // 시작 페이지 최대 숫자 계산
  const startPage = Math.max(1, Math.min(startRawNum, startMaxNum)); // 시작 페이지 설정 (최소 1, 최대 startMaxNum)

  const displayCount = Math.min(pageLimit, totalPages);

  const pageNumbers = Array.from(
    { length: displayCount },
    (_, i) => startPage + i,
  );

  const handlePageChange = (page) => {
    const isInvalid = page < 1 || page > totalPages; // 못가는 페이지 막기

    if (isInvalid) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString()); // 현재 주소를 문자열로
    params.set('page', page.toString()); // 페이지 부분 수정
    router.push(`${pathname}?${params.toString()}`, { scroll: false }); // 수정 주소 적용 + 자동 스크롤 방지
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowIcon}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdNavigateBefore />
      </button>

      <div className={styles.pageNumbers}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={
              styles.buttonVariants[currentPage === page ? 'active' : 'default']
            }
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={styles.arrowIcon}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}
