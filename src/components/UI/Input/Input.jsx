import styles from './Input.module.css';

export function Input({ className = '', ...props }) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...props} />;
}

