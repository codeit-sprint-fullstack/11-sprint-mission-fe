import BestArticleCard from "../BestArticleCard";


export default function BestArticleSection({ articles }) {
  return (
    <div>
      <h1>베스트 게시글</h1>
      <BestArticleCard articles={articles} />
    </div>
  );
}
