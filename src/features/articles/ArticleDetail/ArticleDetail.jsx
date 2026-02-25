'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Dropdown from '@/components/common/Dropdown';
import Button from '@/components/common/Button';
import { formatDate } from '@/utils';
import { deleteArticle } from '@/services/articleService.js';
import { toggleLike } from '@/services/likeService.js';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import * as styles from './ArticleDetail.css.js';

export default function ArticleDetail({ article }) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(article.isLiked || false);
  const [likeCount, setLikeCount] = useState(article._count.likes);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!article) return null;

  const images = article.image || [];

  const handleDelete = async () => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);
      await deleteArticle(article.id);

      alert('게시글 삭제 완료');
      router.push('/articles');
      router.refresh();
    } catch (error) {
      console.error(error);
      alert(error.message ||'게시글 삭제 실패');
    } finally {
      setIsDeleting(false);
    }
  };

  // 로그인 구현 후 수정 필요
  const handleLikeClick = async () => {
    try {
      const result = await toggleLike('article', article.id);

      setIsLiked(result.isLiked);
      setLikeCount((prev) => (result.isLiked ? prev + 1 : prev - 1));

      router.refresh();
    } catch (error) {
      console.error(error);
      alert(error.message ||'좋아요 처리 실패');
    }
  };

  return (
    <section className={styles.articleContainer}>
      <div className={styles.articleHeader}>
        <div className={styles.articleTitle}>
          <h1 className={styles.titleText}>{article.title}</h1>
          <Dropdown
            trigger={
              <button type="button" className={styles.sortToggle}>
                <BsThreeDotsVertical />
              </button>
            }
          >
            <div
              className={styles.sortOption}
              onClick={() => router.push(`/articles/${article.id}/edit`)}
            >
              수정하기
            </div>
            <div
              className={styles.sortOption}
              onClick={() => {
                if (confirm('정말 삭제하시겠습니까?')) {
                  handleDelete();
                }
              }}
            >
              {isDeleting ? '삭제 중...' : '삭제하기'}
            </div>
          </Dropdown>
        </div>

        <div className={styles.articleInfo}>
          <div className={styles.authorInfo}>
            <Image
              src={article.author.image}
              alt={`${article.author.nickname}님의 프로필`}
              width={40}
              height={40}
              className={styles.profileImg}
            />
            <span className={styles.nickname}>{article.author.nickname}</span>
          </div>

          <span className={styles.date}>{formatDate(article.createdAt)}</span>

          <span className={styles.divider}>|</span>

          <div>
            <Button
              shape="round"
              size="xs"
              color="heart"
              onClick={handleLikeClick}
            >
              <div className={styles.likeCount}>
                {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
                <span>{likeCount}</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.articleContent}>
        <p className={styles.contentText}>{article.content}</p>

        {images.length > 0 && (
          <div className={styles.imageContainer}>
            {images.map((imgUrl, index) => (
              <Image
                key={index}
                src={imgUrl}
                alt={`게시글 이미지 ${index + 1}`}
                width={1200}
                height={0}
                className={styles.contentImage}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
