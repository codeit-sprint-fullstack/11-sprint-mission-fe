import logo from '../assets/logo-with-text.svg';

export function Header() {
  return (
    <header className="h-17.5 border-b border-[#DFDFDF] flex items-center px-50 sticky top-0 bg-white shrink-0">
      <nav className="flex basis-380 justify-between mx-auto">
        <div className="font-bold text-[18px] text-[#4B5563] flex gap-7.5 items-center">
          <a href="/" className="mr-2.25">
            <img src={logo} alt="판다마켓 로고" />
          </a>
          <a href="">자유게시판</a>
          <a href="">중고마켓</a>
        </div>
        <a
          href="/login.html"
          className="w-32 h-12 rounded-lg bg-[#3692FF] text-[#F3F4F6] flex items-center justify-center"
        >
          로그인
        </a>
      </nav>
    </header>
  );
}
