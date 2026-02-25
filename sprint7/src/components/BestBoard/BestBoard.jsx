import * as styles from './BestBoard.css';
import { getArticles } from '@/lib/api';
import BestCard from './BestCard/BestCard';

export default async function BestBoard() {
  const articles = await getArticles();
  console.log(articles);
  return (
    <div className={styles.container}>
      <div className={styles.title}>베스트 게시글</div>
      <div className={styles.cardList}>
        {articles.map((article) => (
          <BestCard
            key={article.id}
            title={article.title}
            name={'kuzhi'}
            createdAt={article.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
