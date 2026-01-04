import { useEffect, useRef, useState } from 'react';
import { BiSortDown } from 'react-icons/bi'; // 모바일 정렬
import { TiArrowSortedDown } from 'react-icons/ti'; // 컴퓨터, 태블릿 정렬
import './SortDropdown.css';

function SortDropdown({ options, defaultValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options.find(opt => opt.value === defaultValue) || options[0]); // 디폴트 없으면 첫번째 값
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option.value);
    setIsOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫힘
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button type="button" className="sort-toggle" onClick={handleToggle}>
        <span className="mobile-sort">
          <BiSortDown />
        </span>
        <span className="desktop-sort">
          {selected.label}
          <TiArrowSortedDown />
        </span>
      </button>
      {isOpen && (
        <ul className="sort-menu">
          {options.map((option) => (
            <li key={option.value} className="sort-option" onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
