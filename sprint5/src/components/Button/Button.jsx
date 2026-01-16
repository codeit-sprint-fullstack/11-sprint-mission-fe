import React from 'react';
import styles from './Button.module.css';
export const Button = ({ content, isActivate }) => {
  const classNames = `${styles.button} ${styles[isActivate]}`;
  return <div className={classNames}>{content}</div>;
};
