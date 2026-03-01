import localFont from 'next/font/local';
import '@/styles/index';
import AppProviders from '@/providers/AppProviders';

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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
