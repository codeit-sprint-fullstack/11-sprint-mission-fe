const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 댓글 목록 조회
export async function getComments(type, targetId) {
  const response = await fetch(`${BASE_URL}/api/comments/${type}/${targetId}`);

  if (!response.ok) {
    throw new Error('댓글 목록 불러오기 실패');
  }

  return await response.json();
}

// 댓글 등록
export async function createComment(type, id, content) {
  const resource = type === 'article' ? 'articles' : 'products';
  
  const response = await fetch(`${BASE_URL}/api/${resource}/${id}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error('댓글 등록 실패');
  }

  return await response.json();
}

// 댓글 수정
export async function updateComment(type, id, content) {
  const response = await fetch(`${BASE_URL}/api/comments/${type}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '댓글 수정 실패');
  }

  return await response.json();
}

// 댓글 삭제
export async function deleteComment(type, id) {
  const response = await fetch(`${BASE_URL}/api/comments/${type}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('댓글 삭제 실패');
  }

  return true;
}
