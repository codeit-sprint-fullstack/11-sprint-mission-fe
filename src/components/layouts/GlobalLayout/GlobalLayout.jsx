import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import * as styles from './GlobalLayout.css.js';

export default function GlobalLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
}
