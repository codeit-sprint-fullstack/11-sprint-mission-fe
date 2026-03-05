import Header from '@/components/Header';
import Footer from '@/components/Footer';
import * as styles from './GlobalLayout.css.js';
export default function GlobalLayout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
