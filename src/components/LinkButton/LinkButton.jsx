import clsx from 'clsx';
import styles from './LinkButton.module.css';

export function LinkButton({ to, children, className }) {
  return (
    <a className={clsx(className, styles.loginButton)} href={to}>
      {children}
    </a>
  );
}
