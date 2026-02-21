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

  // 날짜를 00. 00. 형식으로 맞춰주는 포맷 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}. ${m}. ${d}`;
  };

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
              <div className={styles.badge}>💡 Best</div>

              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <img
                  src={getDefaultImage(article.image)}
                  alt="게시글"
                  className={styles.cardThumb}
                />
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.profileWrapper}>
                  <div className={styles.profileIcon}></div>
                  <span className={styles.nickname}>
                    {getNickname(article.nickname)}
                  </span>
                </div>
                <div className={styles.metaWrapper}>
                  <span className={styles.heartIcon}>
                    ♡ {getLikes(article.likeCount, article.id)}
                  </span>
                  <span className={styles.date}>
                    {formatDate(article.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>게시글</h2>
        <Link href="/boards/free/write" className={styles.writeBtn}>
          글쓰기
        </Link>
      </div>

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
                <div className={styles.normalFooter}>
                  <div className={styles.profileWrapper}>
                    <div className={styles.profileIcon}></div>
                    <span className={styles.nickname}>
                      {getNickname(article.nickname)}
                    </span>
                  </div>
                  <span className={styles.date}>
                    {formatDate(article.createdAt)}
                  </span>
                </div>
              </div>
              <div className={styles.normalLikes}>
                ♡ {getLikes(article.likeCount, article.id)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
