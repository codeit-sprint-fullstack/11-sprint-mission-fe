import localFont from 'next/font/local';
import AppProviders from '@/providers/AppProviders';
import Modal from '@/components/common/Modal';
import '@/styles/index';

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'Panda Market',
  description: '중고 거래 마켓: 일상의 모든 물건을 거래해 보세요',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <AppProviders>
          {children}
          <Modal />
        </AppProviders>
      </body>
    </html>
  );
}
