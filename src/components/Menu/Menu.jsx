import clsx from 'clsx';
import styles from './Menu.module.css';

export function Menu({ children, className }) {
  return (
    <a href="" className={clsx(styles.menuLink, className)}>
      {children}
    </a>
  );
}
