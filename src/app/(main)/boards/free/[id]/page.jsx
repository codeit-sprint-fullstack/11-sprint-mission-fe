import { getArticleById } from '../../../../../api/api';
import CommentSection from './CommentSection';
import ArticleButtons from './ArticleButtons';
import styles from './detail.module.css';
import Link from 'next/link';

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const article = await getArticleById(id);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>{article.title}</h1>
          <ArticleButtons articleId={id} />
        </div>

        <div className={styles.metaRow}>
          <div className={styles.profileWrapper}>
            <div className={styles.profileIcon}></div>
            <span className={styles.nickname}>
              {article.nickname || '익명 판다'}
            </span>
            <span className={styles.date}>
              {new Date(article.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className={styles.likes}>♡ {article.likeCount || 0}</div>
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

      <div className={styles.bottomWrapper}>
        <Link href="/boards/free" className={styles.backBtn}>
          목록으로 돌아가기 ↩
        </Link>
      </div>
    </main>
  );
}
