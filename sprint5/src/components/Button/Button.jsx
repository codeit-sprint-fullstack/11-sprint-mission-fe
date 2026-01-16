import React from 'react';
import styles from './Button.module.css';
export const Button = ({content}) => {
  return <div className={styles.button}>{content}</div>;
};
