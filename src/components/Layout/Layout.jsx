import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import styles from './Layout.module.css';

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}
      >{children}</div>
      <Footer />
    </div>
  );
}
