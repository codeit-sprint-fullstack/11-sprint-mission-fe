import styles from './Box.module.css';
import clsx from 'clsx';

export function Box({ children, src, alt, className, innerClassName }) {
  return (
    <div className={clsx(styles.box, className)}>
      <div className={clsx(styles.innerBox, innerClassName)}>
        <img src={src} alt={alt} />
        <div className={styles.exBox}>{children}</div>
      </div>
    </div>
  );
}