import logo from '../assets/logo-text.svg';

function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img className="logo" src={logo} alt="판다마켓 로고" />
        </a>
        <div className="board-box">
          <a className="board" href="/">
            자유게시판
          </a>
          <a className="board" href="/">
            중고마켓
          </a>
        </div>
      </nav>
      <a href="/login" className="btn-login center">
        로그인
      </a>
    </header>
  );
}

export default Header;
