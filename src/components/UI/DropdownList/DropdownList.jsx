import styles from './DropdownList.module.css';

export function DropdownList({ onSelect }) {
  return (
    <ul className="dropdownList">
      <li
        className="dropdownItem"
        onClick={() => {
          onSelect('recent');
        }}
      >
        최신순
      </li>
      <li
        className="dropdownItem"
        onClick={() => {
          onSelect('favorite');
        }}
      >
        좋아요순
      </li>
    </ul>
  );
}
