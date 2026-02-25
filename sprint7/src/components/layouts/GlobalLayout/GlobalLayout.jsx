import Footer from '@/components/footer';
import Header from '@/components/header';
import * as styles from './GlobalLayout.css';

export default function GlobalLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
