import logoMobile from '@/assets/images/logo-text.svg';
import logoDesktop from '@/assets/images/logo-full.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-nav">
          <div className="logo-link">
            <a href="#">
              {/* 모바일 / 태블릿, 컴퓨터 로고 이미지 변경 */}
              <picture>
                <source media="(min-width: 744px)" srcSet={logoDesktop} />
                <img
                  src={logoMobile}
                  alt="판다마켓 로고"
                  className="logo-img"
                />
              </picture>
            </a>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#">자유게시판</a>
            </li>
            <li>
              <a href="#"></a>중고마켓
            </li>
          </ul>
        </div>
        <div className="header-button">
          <button className="button login-button">로그인</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
