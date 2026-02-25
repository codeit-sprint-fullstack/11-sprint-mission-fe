import Link from 'next/link';

export default function BestArticleSection({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>게시글이 없습니다.</p>;
  }
  return (
    <div>
      <h1>베스트 게시글</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <div>
                <div>{article.title}</div>
                <div>{article.image}</div>
              </div>
              <div>
                <span>총명한 판다</span>
                <span>9999+</span>
                <span>{article.createdAt}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
