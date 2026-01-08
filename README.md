# 🐼 판다마켓 프로젝트 🐼

## ✨ 프로젝트 소개
**React**를 활용해 판다마켓의 **중고마켓 사이트**을 제작했습니다.  

<br>

---

## 💻 기술 스택
![HTML](https://img.shields.io/badge/HTML-F16529?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-2965F1?style=flat-square&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)


<br>

## 🛠️ 주요 기능
## 🔧 주요 변경사항
- App.jsx
  - Header, Main, Footer 컴포넌트 배치 완료
- Header 컴포넌트
  - 로그인 버튼, 메뉴 구성
- Main 컴포넌트
  - BestProducts 컴포넌트
    - Product 컴포넌트 배열로 렌더링 완료
  - SellingProducts 컴포넌트
    - Product 컴포넌트 배열로 렌더링 완료
    - SearchProducts, Pagination 컴포넌트 포함
    - 페이지네이션, 검색 키워드, 정렬 기능 연동 완료
  - SearchProducts 컴포넌트
    - 키워드 입력(input) 및 Enter 키 이벤트 처리
    - 정렬(dropdown) 선택 시 페이지 1로 이동하도록 goToPage 연동
    - Debouncing 적용하여 키워드 검색 시 불필요한 요청 최소화
- Pagination 컴포넌트
  - currentPage, totalPages, next, prev, 페이지 버튼 기능 구현
  - 선택된 페이지 버튼 스타일링 완료
- DropdownButton 컴포넌트
  - 상위 컴포넌트의 orderBy와 연동
  - 선택 시 SellingProducts의 페이지와 fetch 연동
- Hooks & Utils
  - usePagination 훅으로 상태 관리, 페이지 이동 함수 제공
  - getPageButtons로 페이지 버튼 배열 생성
- 공용 컴포넌트
  - Product, Logo, LinkButton, HeartButton 등 통합

<br>

## 📁 폴더 구조
아래는 작업 폴더 내 구조입니다.

```
작업폴더/
index.html
public
src
├── App.jsx
├── apis
│   └── fetchProducts.js
├── assets
├── components
│   ├── Footer
│   │   └── LogoContainer
│   ├── Header
│   │   ├── Login
│   │   └── Menu
│   ├── Main
│   │   ├── BestProducts
│   │   └── SellingProducts
│   │       ├── Pagination
│   │       └── SearchProducts
│   └── common
│       ├── DropdownButton
│       ├── LinkButton
│       ├── Logo
│       └── Product
│           └── HeartButton
├── hooks
│   └── usePagination.js
├── main.jsx
├── styles
└── utils
    └── getPageButtons.js
```

<br>

## 🧑‍💻 작성자
코드잇 풀스택 11기 백은결

