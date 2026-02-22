import Link from "next/link";

export default function BestArticleCard ({articles}) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/articles/${article.id}`}>
          <div>
            <div>{article.title}</div>
            <di>{article.image}</di>
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
  )
}