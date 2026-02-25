'use client';

import { submitArticle } from '@/actions/submitArticle';
import { useRouter } from 'next/router';
import { useActionState } from 'react';

export default function WriteArticleForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(submitArticle, {
    onSucess: (article) => {
      router.push(`/articles/${article.id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return (
    <div>
      <form action={formAction}>
        {state.error && (
          <div>{state.error}</div>
        )}
        <div>
          <h1>게시글 쓰기</h1>
          <button type="submit" disabled={isPending}>등록</button>
        </div>
        <label htmlFor="title">*제목</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          required
        />
        <label>*내용</label>
        <textarea
          id="content"
          name="content"
          placeholder="내용을 입력해주세요"
          required
        />
      </form>
    </div>
  );
}
