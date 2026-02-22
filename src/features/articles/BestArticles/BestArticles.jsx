import BestArticleCard from '@/components/articles/BestArticleCard';
import { getBestArticles } from '@/services/articleService';
import * as styles from './BestArticles.css.js';

export default async function BestArticles() {
  const bestArticles = await getBestArticles();

  if (bestArticles.length === 0) {
    return null;
  }

  return (
    <section className={styles.bestContainer}>
      <h2 className={styles.sectionTitle}>베스트 게시글</h2>

      <div className={styles.scrollArea}>
        {bestArticles.map((article) => (
          <BestArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
