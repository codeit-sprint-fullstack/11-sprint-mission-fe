export default async function ItemDetailPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>상품 상세 페이지 준비 중입니다.</h1>
      <p>상품 번호: {id}</p>

      <a href="/items">중고마켓 목록으로 돌아가기</a>
    </main>
  );
}
