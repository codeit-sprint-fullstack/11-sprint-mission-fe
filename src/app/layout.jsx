// 최상위 루트 레이아웃 (html, body 태그, 글로벌 CSS)

import '../index.css';

export const metadata = {
  title: 'Panda Market',
  desctiption: '판다마켓 중고거래',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
