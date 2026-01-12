// (구 signup.html) 회원가입 화면 ('/signup')
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const SignupPage = () => {
  return (
    <div className="loginPageBody">
      <div className="signupContainer">
        <header>
          <div className="signupLogo">
            <Link to="/">
              <img src="/img/logo.svg" alt="판다마켓 로고" />
              <h1 className="srOnly">판다마켓 회원가입 페이지</h1>
            </Link>
          </div>
        </header>

        <main>
          <div className="inputGroup">
            <label htmlFor="email" className="inputLabel">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="inputBox"
              placeholder="이메일을 입력해주세요"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="nickname" className="inputLabel">
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              className="inputBox"
              placeholder="닉네임을 입력해주세요"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="password" className="inputLabel">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="inputBox"
              placeholder="비밀번호를 입력해주세요"
            />
            <button className="inputEyes" aria-label="비밀번호 보기"></button>
          </div>

          <div className="inputGroup">
            <label htmlFor="passwordCheck" className="inputLabel">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="passwordCheck"
              className="inputBox"
              placeholder="비밀번호를 다시 입력해주세요"
            />
            <button className="inputEyes" aria-label="비밀번호 보기"></button>
          </div>

          <button className="signupBtn">회원가입</button>

          <div className="socialBox">
            <span className="socialText">간편 회원가입</span>
            <div className="socailIcon">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="socialIconLink"
              >
                <img src="/img/ic_google.png" alt="구글 로그인" />
              </a>
              <a
                href="https://www.kakao.com/"
                target="_blank"
                rel="noreferrer"
                className="socialIconLink"
              >
                <img src="/img/ic_kakao.png" alt="카카오 로그인" />
              </a>
            </div>
          </div>

          <div className="loginLinkBox">
            <span>이미 회원이신가요?</span>
            <Link to="/login">로그인</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignupPage;
