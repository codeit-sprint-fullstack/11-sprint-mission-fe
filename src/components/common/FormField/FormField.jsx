import * as styles from './FormField.css.js';

export default function FormField({
  label,
  isRequired = false,
  isTextArea = false, // 기본 input으로 설정
  variant = 'default',
  ...props
}) {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className={styles.inputSection}>
      <label className={styles.label}>
        {isRequired && '* '}
        {label}
      </label>
      <InputComponent className={styles.inputVariants[variant]} {...props} />
    </div>
  );
}
