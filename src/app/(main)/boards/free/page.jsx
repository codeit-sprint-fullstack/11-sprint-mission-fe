import Link from 'next/link';
import BoardSearch from './BoardSearch';
import styles from './page.module.css';

export default async function FreeBoardPage({ searchParams }) {
  const awaitedParams = await searchParams;
  const q = awaitedParams?.q || '';
  const orderBy = awaitedParams?.orderBy || 'recent';

  // eslint-disable-next-line no-undef
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

  const [bestRes, listRes] = await Promise.all([
    fetch(`${API_URL}/articles?orderBy=recent&limit=3`, { cache: 'no-store' }),
    fetch(`${API_URL}/articles?orderBy=${orderBy}&keyword=${q}&limit=10`, {
      cache: 'no-store',
    }),
  ]);

  const bestData = await bestRes.json();
  const bestArticles = bestData.list || [];

  const listData = await listRes.json();
  const articles = listData.list || [];

  const getDefaultImage = (img) => img || '/img/img_default.png';
  const getNickname = (name) => name || '익명 판다';
  const getLikes = (likes, id) => likes ?? id % 50;

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.sectionTitle}>베스트 게시글</h2>

      <div className={styles.bestList}>
        {bestArticles.map((article) => (
          <Link
            key={article.id}
            href={`/boards/free/${article.id}`}
            className={styles.link}
          >
            <div className={styles.bestCard}>
              <img
                src={getDefaultImage(article.image)}
                alt="게시글 이미지"
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardInfo}>
                  {getNickname(article.nickname)}{' '}
                  <span className={styles.heart}>♥</span>{' '}
                  {getLikes(article.likeCount, article.id)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>자유게시판</h2>
      <BoardSearch defaultKeyword={q} defaultOrderBy={orderBy} />

      <div className={styles.normalList}>
        {articles.length === 0 && (
          <p className={styles.emptyMsg}>게시글이 없습니다.</p>
        )}
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/boards/free/${article.id}`}
            className={styles.link}
          >
            <div className={styles.normalItem}>
              <div className={styles.normalInfo}>
                <h3 className={styles.normalTitle}>{article.title}</h3>
                <p className={styles.normalMeta}>
                  {getNickname(article.nickname)} |{' '}
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className={styles.normalLikes}>
                좋아요 {getLikes(article.likeCount, article.id)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
