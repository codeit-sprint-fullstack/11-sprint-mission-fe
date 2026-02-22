import "@/styles/reset.css.js";
import "@/styles/globals.css.js";
import { Header } from "@/components/Layout/Header";

export const metadata = {
  title: "판다마켓",
  description: "판다마켓",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
