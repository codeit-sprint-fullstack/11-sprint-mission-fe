// 기존 App.jsx 역할 (<Header />와 <Footer /> 포함)

import Header from './components/Header';
import Footer from './components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
