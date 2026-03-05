import * as styles from './Button.css';


export default function Button({ content, isActivate }) {
  const classNames = `${styles.button} ${styles[isActivate]}`;
  return (
    <div className={classNames}>
      <p className={content}>{content}</p>
    </div>
  );
}
