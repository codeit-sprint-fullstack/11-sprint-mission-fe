import logoMobile from '@/assets/images/header/logo-text.svg';
import logoDesktop from '@/assets/images/header/logo-full.svg';
import { Link, NavLink } from 'react-router';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-nav">
          <div className="logo-link">
            <Link to="/">
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
              <NavLink to='/board' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>자유게시판</NavLink>
            </li>
            <li>
              <NavLink to="/items" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>중고마켓</NavLink>
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
