export default async function SearchPage({ searchParams }) {
  const { q = '' } = await searchParams;
  const keyword = typeof q === 'string' ? q : '';

  return <div>검색어: {keyword}</div>;
}
