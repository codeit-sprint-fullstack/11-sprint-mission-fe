import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { RegistrationFormSection } from '../../components/RegistrationFormSection';
import { Footer } from '@/components/Footer';
import styles from './RegistrationPage.module.css';

export function RegistrationPage() {
  return (
    <div className={styles.container}>
      <Header title="판다마켓 중고마켓 페이지">
        <Menu>자유게시판</Menu>
        <Menu>중고마켓</Menu>
      </Header>

      <div className={styles.main}>
        <RegistrationFormSection />
      </div>

      <Footer />
    </div>
  );
}
