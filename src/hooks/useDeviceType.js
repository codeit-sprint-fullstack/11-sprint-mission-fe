import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const [device, setDevice] = useState('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setDevice('desktop');
      } else if (width >= 744) {
        setDevice('tablet');
      } else {
        setDevice('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};
