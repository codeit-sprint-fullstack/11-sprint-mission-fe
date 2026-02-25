'use client';

import { useState, useRef, useEffect } from 'react';
import * as styles from './SortDropdown.css';

const SORT_OPTIONS = [
  { value: 'recent', label: '최신순' },
  { value: 'oldest', label: '오래된순' },
];

export default function SortDropdown({ sort, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const currentLabel =
    SORT_OPTIONS.find((o) => o.value === sort)?.label ?? '최신순';

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        type="button"
        className={styles.btnWrapper}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={styles.btnText}>{currentLabel}</div>
        <div>▼</div>
      </div>

      {isOpen && (
        <ul className={styles.dropdownWrapper}>
          {SORT_OPTIONS.map((option) => (
            <li key={option.value} className={styles.listItem}>
              <div
                type="button"
                className={styles.option}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
