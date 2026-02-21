// (구 login.html) 로그인 화면 ('/login')

import Link from 'next/link';
import '../../../styles/Login.css';

const LoginPage = () => {
  return (
    <div className="loginPageBody">
      <div className="loginContainer">
        <header>
          <div className="loginLogo">
            <Link href="/">
              <img src="/img/logo.svg" alt="판다마켓 로고" />
              <h1 className="srOnly">판다마켓 로그인 페이지</h1>
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
            <label htmlFor="password" className="inputLabel">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="inputBox"
              placeholder="비밀번호를 입력해주세요"
            />
            <button className="loginEyes" aria-label="비밀번호 보기"></button>
          </div>

          <button className="loginBtn">로그인</button>

          <div className="socialBox">
            <span className="socialText">간편 로그인하기</span>
            <div className="socialIcon">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/ic_google.png" alt="구글 로그인" />
              </a>
              <a href="https://www.kakao.com/" target="_blank" rel="noreferrer">
                <img src="/img/ic_kakao.png" alt="카카오 로그인" />
              </a>
            </div>
          </div>

          <div className="signup">
            <span>판다마켓이 처음이신가요?</span>
            <Link href="/signup">회원가입</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
