import { getArticleById } from '../../../../../api/api';
import CommentSection from './CommentSection';
import styles from './detail.module.css';
import Link from 'next/link';

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = await getArticleById(id);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          <span>{article.nickname || '익명'}</span>
          <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          <span>좋아요 {article.likeCount || 0}</span>
        </div>
        <div className={styles.articleBtns}>
          <Link href={`/boards/free/${id}/edit`} className={styles.editBtn}>
            수정하기
          </Link>
        </div>
      </header>

      <section className={styles.content}>
        {article.image && (
          <img
            src={article.image}
            alt="본문 이미지"
            className={styles.mainImg}
          />
        )}
        <p className={styles.text}>{article.content}</p>
      </section>

      <CommentSection articleId={id} />
    </main>
  );
}
