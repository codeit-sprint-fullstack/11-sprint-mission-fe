import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import styles from './Layout.module.css';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
}
