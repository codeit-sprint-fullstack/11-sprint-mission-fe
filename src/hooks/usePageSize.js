import { useEffect, useState } from 'react';

export function usePageSize() {
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setPageSize(4);
      } else if (width <= 1200) {
        setPageSize(6);
      } else {
        setPageSize(10);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return pageSize;
}
