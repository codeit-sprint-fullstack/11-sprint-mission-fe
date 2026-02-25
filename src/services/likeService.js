const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function toggleLike(type, id) {
  const resource = type === 'article' ? 'articles' : 'products';
  
  const response = await fetch(`${BASE_URL}/api/${resource}/${id}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) throw new Error('좋아요 처리 실패');
  
  return response.json(); 
}