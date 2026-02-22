import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div>
      <Link href={`/articles/${article.id}`}>
        <div>
          <div>{article.title}</div>
          <div>{article.image}</div>
        </div>
        <div>
          <span>총명한 판다</span>
          <span>{article.createdAt}</span>
          <span>9999+</span>
        </div>
      </Link>
    </div>
  );
}
