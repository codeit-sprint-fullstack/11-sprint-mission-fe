import logo from '@/assets/logo/logo.svg';
import { Button } from '@/components/UI/Button';
import './Header.css';

export function Header() {
  return (
    <header>
      <div className='header-container'>
      <div className="gnb-container">
        <a href="/">
          <img src={logo} className="headerLogo" alt="판다마켓 홈" width="153" />
        </a>
        <nav >
        <ul className="gnb">
          <li>
            <a href="/">자유게시판</a>
          </li>
          <li>
            <a href="/">중고마켓</a>
          </li>
        </ul>
        </nav>
      </div>
      <button type="click" className="loginLink button">
        {/* <a href="login.html" id="loginLinkButton"> */}
        로그인
        {/* </a> */}
      </button>
      </div>
    </header>
  );
}
export default Header;