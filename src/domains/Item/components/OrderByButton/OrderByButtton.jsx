import clsx from 'clsx';
import { useState } from 'react';
import arrowDownImg from '@/assets/ic_arrow_down.svg';
import styles from './OrderByButtton.module.css';

export function OrderByButtton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = () => setIsOpen(false);

  return (
    <div className={styles.dropdownButton}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        최신순
        <img
          src={arrowDownImg}
          alt="화살표 아래 방향"
          className={clsx(styles.arrowImg, !isOpen ? '' : styles.upArrow)}
        />
      </button>

      {isOpen ? (
        <button
          type="button"
          className={clsx(styles.button, styles.options)}
          onClick={() => handleSelect('최신순')}
        >
          최신순
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
