import logoMobile from '@/assets/images/logo-text.svg';
import logoDesktop from '@/assets/images/logo-full.svg';
import { Link } from 'react-router';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-nav">
          <div className="logo-link">
            <Link to="/home">
              {/* 모바일 / 태블릿, 컴퓨터 로고 이미지 변경 */}
              <picture>
                <source media="(min-width: 744px)" srcSet={logoDesktop} />
                <img
                  src={logoMobile}
                  alt="판다마켓 로고"
                  className="logo-img"
                />
              </picture>
            </Link>
          </div>
          <ul className="nav-menu">
            <li>
              <Link to='/board'>자유게시판</Link>
            </li>
            <li>
              <Link to="/">중고마켓</Link>
            </li>
          </ul>
        </div>
        <div className="header-button">
          <Link to='/login'>
            <button className="button login-button">로그인</button>
          </Link>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
