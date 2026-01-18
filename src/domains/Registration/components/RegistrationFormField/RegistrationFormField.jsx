import clsx from 'clsx';
import styles from './RegistrationFormField.module.css';

export function RegistrationFormField({
  label = '',
  id = '',
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onKeyDown,
  error = '',
  errorMessage = '',
}) {
  const isTextarea = type === 'textarea';

  return !isTextarea ? (
    <div className={clsx(styles.container, error && styles.error)}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {error && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  ) : (
    <div className={clsx(styles.container, error && styles.error)}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
