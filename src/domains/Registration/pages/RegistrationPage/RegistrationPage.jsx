import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { RegistrationFormSection } from '../../components/RegistrationFormSection';
import { Footer } from '@/components/Footer';

export function RegistrationPage() {
  return (
    <>
      <Header title="판다마켓 중고마켓 페이지">
        <Menu>자유게시판</Menu>
        <Menu>중고마켓</Menu>
      </Header>

      <RegistrationFormSection />

      <Footer />
    </>
  );
}
