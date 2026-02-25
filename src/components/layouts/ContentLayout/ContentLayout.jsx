import * as styles from './ContentLayout.css.js';

export default function ContentLayout({ children }) {
  return <div className={styles.contentWrapper}>{children}</div>;
}
