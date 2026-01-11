import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import "./Header.css";

function Header() {
  return (
      <header className="globalHeader">
        <div className="headerLeft">
          <img
            src={Logo}
            alt="판다마켓 로고"
            width="153"
            className="headerLogo"
          />

          <nav>
            <ul>
              <li className={location.pathname === "/items" ? "active" : ""}>
              {/* <Link to="/items">중고마켓</Link> */}
            </li>
            <li>
              {/* <Link to="/board">자유게시판</Link> */}
            </li>
            </ul>
          </nav>
        </div>
        <button type="click" className="loginLink button">
          로그인
        </button>
      </header>
  );
}

export default Header;
