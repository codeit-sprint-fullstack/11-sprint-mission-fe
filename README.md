This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 목표

- [] 로그인 구현
- [] 프로덕트 리스트 구현
- [] 등록폼 tiptap으로 구현
- [] 프로덕트 상세 - 삭제 / 수정
  [] 댓글 - 수정 / 삭제

- [ ] Github에 위클리 미션 PR을 만들어 주세요.
- [ ] React 혹은 Next.js를 사용해 진행합니다.
- [ ] 프론트엔드에서 api 요청 구현은 TanStack React Query를 활용해 주세요.
- [ ] API는 https://panda-market-api.vercel.app를 사용합니다. 명세는 https://panda-market-api.vercel.app/docs를 확인해 주세요.

### 로그인 구현

- [ ] "/auth/signIn"으로 POST 요청해서 성공 응답을 받으면 중고 마켓 페이지로 이동합니다. 참고로 JWT로 구현되어 있습니다.
- [ ] 로그인/회원가입 시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장합니다.
- [ ] 로그인/회원가입 페이지에 접근 시 로컬 스토리지에 accessToken이 있는 경우 '/items' 페이지로 이동합니다.
- [ ] 상단 내비게이션 바에 프로필 영역은 인가된 경우, 유저 정보 API를 활용해 주세요.
- [ ] 인가되지 않았을 경우 "로그인" 버튼이 보이게 해 주세요.

### 회원가입 구현

"회원 가입하기"를 클릭하면 '/signin' 페이지로 이동합니다

- [ ] 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입을 실행합니다.
- [ ] 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 "비밀번호가 일치하지 않아요." 에러 메시지를 표시해 주세요.
- [ ] 버튼이 활성화된 후, 회원가입은 "/auth/signUp" POST 요청해서 진행합니다. 참고로 JWT로 구현되어 있습니다.
- [ ] 회원가입 성공 응답을 받으면 중고마켓 페이지로 이동합니다.

### 프로덕트 리스트 구현

### 등록폼 tiptap으로 구현

비속어필터링, 컬러, 사진로딩, 코드블락(Syntax Highlight 설정),마크다운 기능 추가.

### 프로덕트 상세 - 게시글 / 댓글 -> 수정,삭제

- [ ] 상품 상세 페이지 url path는 "/items/{itemId)"로 설정하세요.
- [ ] '목록으로 돌아가기' 버튼 클릭 시 중고마켓 페이지 "/items"로 이동합니다.
- [ ] 상품 상세 데이터는 '/products/{productId}' GET 메서드 사용해 불러오세요. 이때, 상품 상세 조회는 인가된 사용자만 이용할 수 있도록 합니다.
- [ ] 상품에 대한 댓글 조회도 가능합니다.
- [ ] 상품 수정 및 삭제 기능을 API를 활용해 구현합니다. 이때, 인가된 사용자만 이용할 수 있도록 합니다.
- [ ] 상품 수정은 '/products/{productId}' PATCH을 사용합니다.
- [ ] 상품 삭제는 '/products/{productId}' DELETE를 사용합니다.
- [ ] 상품 삭제 전, 확인 모달을 띄워주세요.
- [ ] 상품에 대한 좋아요 및 좋아요 취소 기능을 https://panda-market-api.vercel.app/docs에 명세된 '/products/{productId}/favorite' POST & DELETE 활용해 구현합니다. 이때 인가된 사용자만 좋아요 기능을 이용할 수 있도록 합니다.
- [ ] 댓글 생성 및 삭제 기능을 API를 활용해 구현합니다. 이때, 인가된 사용자만 이용할 수 있도록 합니다.
- [ ] 댓글 수정은 https://panda-market-api.vercel.app/docs에 명세된 '/comments/{commentId}' PATCH을 사용합니다.
- [ ] 댓글 삭제는 https://panda-market-api.vercel.app/docs에 명세된 '/comments/{commentId}' DELETE를 사용합니다.
