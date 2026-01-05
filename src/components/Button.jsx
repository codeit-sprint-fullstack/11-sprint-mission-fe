import React from 'react';
import styles from '../style/Button.module.css';

export const Button = (buttonName,onChange) => {
    const handle = ()=>{
        onChange();
    }
  return(
    <>
        <button className={styles.button} onClick={handle}>{buttonName}</button>

    </>
  ) 
};
