'use client';
import { useState, useEffect } from 'react';

/**
 * 반응형 화면 너비에 따라 적절한 pageSize를 반환하는 커스텀 훅
 * - Mobile (~743px): 4개
 * - Tablet (~1199px): 6개
 * - Desktop (1200px~): 10개
 */
export function usePageSize() {
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 743) {
        setPageSize(4);
      } else if (width <= 1199) {
        setPageSize(6);
      } else setPageSize(10);
    };

    // 초기 실행 및 리사이즈 이벤트 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    // 언마운트 시 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return pageSize;
}
