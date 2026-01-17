import React, { useEffect, useState } from 'react';
const RESIZE = {
  MOBILE: 600,
  TABLET: 1200,
};

const PAGE_SIZE = {
  DEFAULT: 10,
  TABLET: 6,
  MOBILE: 4,
};
export const useResize = () => {
  const windowResize = () => {
    const width = window.innerWidth;
    if (width < RESIZE.MOBILE) return PAGE_SIZE.MOBILE;//if문 순서 조심
    if (width < RESIZE.TABLET) return PAGE_SIZE.TABLET;

    return PAGE_SIZE.DEFAULT;
  };
  const [pageSize, setPageSize] = useState(windowResize);

  useEffect(() => {
    const updateWindowSize = () => {
      const Nextsize = windowResize();
      setPageSize((prev) => (prev !== Nextsize ? Nextsize : prev));
    };
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [pageSize]);
  return pageSize;
};
