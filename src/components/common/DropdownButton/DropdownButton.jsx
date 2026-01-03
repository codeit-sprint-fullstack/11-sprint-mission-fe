import { useState } from 'react';
import clsx from 'clsx';
import arrowDown from '@/assets/ic_arrow_down.svg';
import styles from './DropdownButton.module.css';

export function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('최신순');

  const handleSelect = (value) => {
    setIsOpen(false);
    setSelected(value);
  };

  return (
    <div className={styles.dropdownButton}>
      <button type="button" className={styles.button} onClick={() => setIsOpen(prev => !prev)}>
        {selected}
        <img
          src={arrowDown}
          alt="화살표 아래 방향"
          className={clsx(styles.arrowImg, !isOpen ? '' : styles.upArrow)}
        />
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className={clsx(styles.button, styles.options)}
            onClick={() => handleSelect('최신순')}
          >
            최신순
          </button>
          <button
            type="button"
            className={clsx(styles.button, styles.options)}
            onClick={() => handleSelect('좋아요순')}
          >
            좋아요순
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
