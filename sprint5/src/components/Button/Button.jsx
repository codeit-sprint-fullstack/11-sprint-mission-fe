import React from 'react';
import styles from './Button.module.css';
export const Button = ({ content, isActivate }) => {
  const classNames = `${styles.button} ${styles[isActivate]}`;
  return (
    <div className={classNames}>
      <p className={content}>{content}</p>
    </div>
  );
};
