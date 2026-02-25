'use client';

import { useEffect, useRef, useState } from 'react';
import * as styles from './Dropdown.css.js';

export default function Dropdown({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.triggerWrapper} onClick={handleToggle}>
        {trigger}
      </div>

      {isOpen && (
        <div className={styles.menuWrapper} onClick={handleClose}>
          {children}
        </div>
      )}
    </div>
  );
}
