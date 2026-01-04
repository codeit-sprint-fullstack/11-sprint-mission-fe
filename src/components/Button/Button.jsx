import styles from './Button.module.css';

export function Button({ className = '', variant = 'primary', ...props }) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;
  return <button className={classNames} {...props} />;
}
