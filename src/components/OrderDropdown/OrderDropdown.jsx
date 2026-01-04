import { useState, useRef, useEffect } from 'react';
import styles from './OrderDropdown.module.css';
import arrowDown from '../../assets/icon/ic_arrow_down.svg';

export function OrderDropdown({ orderBy, setOrderBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={`${styles.dropdownToggle} ${isOpen ? '': styles.open }`} 
           onClick={() => setIsOpen((prev)=> !prev)}>
        <img className={styles.arrow} src={arrowDown} alt="정렬옵션" />
        {orderBy === 'recent' ? '최신순' : '좋아요순'}
      </div>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li
            className={styles.dropdownItem}
            onClick={() => {
              setOrderBy('recent');
              setIsOpen(false);
            }}
          >
            최신순
          </li>
          <li
            className={styles.dropdownItem}
            onClick={() => {
              setOrderBy('favorite');
              setIsOpen(false);
            }}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
