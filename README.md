# 🐼 판다마켓 프로젝트 🐼

## ✨ 프로젝트 소개
**HTML**과 **CSS**로 판다마켓이라는 **중고거래를 위한 커뮤니티 플랫폼**을 제작했습니다.  
이번 *스프린트 1, 2 미션*에서는 메인 페이지와 로그인/ 회원가입 페이지를 구현하였습니다.

<br>

---

## 💻 기술 스택
![HTML](https://img.shields.io/badge/HTML-F16529?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-2965F1?style=flat-square&logo=css3&logoColor=white)

## 🔗 배포 링크
- 메인 페이지 : https://spiffy-sunburst-2a2107.netlify.app/
  
<br>

## 🛠️ 주요 기능
## 🏠 메인 페이지
- 상단 **내비게이션 바**는 스크롤해도 최상단에 고정
- 이동 링크 및 버튼
  - **판다마켓 로고** : 현재 페이지로 이동
  - **로그인** : 로그인 페이지로 이동
  - **구경하러 가기** : 아이템 페이지로 이동
  - 하단의 **Privay Policy / FAQ** : 각각의 페이지로 이동
  - **하단의 로고** : **새 창**으로 각각의 페이지로 이동
- 링크에 마우스를 올리면 **포인터** 표시

## 🔐 로그인 / 회원가입 페이지
- 각각의 HTML 파일로 구현, **공통 CSS 파일 적용**
- 비밀번호 입력 칸에는 **눈 모양 아이콘** 삽입
- 입력 칸에 포커스 시 **테두리 표시**
- 간편 로그인 로고를 클릭 시 각각의 페이지로 이동
- 페이지 하단의 링크 클릭 시 회원가입 / 로그인 페이지로 이동

<br>

## 📁 폴더 구조
아래는 작업 폴더 내 구조입니다.

```
작업폴더/
├─ image/ 
│  └─ ...            # 로고, 아이콘 등
│
├─ style/            # 스타일 파일 모음 폴더
│  ├─ style.css          # 메인 페이지 스타일
│  ├─ loginstyle.css     # 로그인/회원가입 페이지 공통 스타일
│  └─ reset.css          # 모든 페이지 공통 reset 스타일
│
├─ index.html        # 메인 페이지
├─ items.html 
├─ login.html        # 로그인 페이지
├─ signup.html       # 회원가입 페이지
├─ faq.html        
└─ privacy.html    
```

<br>

## 🧑‍💻 작성자
코드잇 풀스택 11기 백은결

