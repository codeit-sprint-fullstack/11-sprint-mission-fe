import clsx from 'clsx';
import styles from './LinkButton.module.css';
import { Link } from 'react-router';

export function LinkButton({ to, children, className, onClick, disabled }) {
  return to ? (
    <Link
      className={clsx(className, styles.loginButton)}
      to={to}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Link>
  ) : (
    <button
      className={clsx(className, styles.loginButton)}
      to={to}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
