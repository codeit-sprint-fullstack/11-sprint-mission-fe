export default async function MoviePage({ params }) {
  const { id } = await params;
  return <div>게시물 ID :{id}</div>;
}
