'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation.js';
import CommentInput from '@/components/comment/CommentInput';
import CommentCard from '@/components/comment/CommentCard';
import EmptyComment from '@/components/comment/EmptyComment';
import Button from '@/components/common/Button';
import { updateComment, deleteComment } from '@/services/commentService';
import { LiaReplySolid } from 'react-icons/lia';
import * as styles from './CommentSection.css.js';

export default function CommentSection({ type, id, initialComments = [] }) {
  const router = useRouter();
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const handleUpdate = async (commentId, content) => {
    try {
      const updatedData = await updateComment(type, commentId, content);

      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId ? { ...comment, ...updatedData } : comment,
        ),
      );
    } catch (error) {
      console.error(error);
      alert(error.message || '댓글 수정 실패');
    }
  };

  const handleDelete = async (commentId) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteComment(type, commentId);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch (error) {
      console.error(error);
      alert(error.message || '댓글 삭제 실패');
    }
  };

  const handleBackToList = () => {
    const path = type === 'article' ? '/articles' : '/products';
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <CommentInput type={type} id={id} onSuccess={handleAddComment} />
      </div>

      <div className={styles.listWrapper}>
        {comments.length === 0 ? (
          <EmptyComment type={type} />
        ) : (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onDelete={() => handleDelete(comment.id)}
              onUpdate={handleUpdate}
            />
          ))
        )}
      </div>

      <Button
        shape="round"
        size="lg"
        color="primary"
        onClick={handleBackToList}
      >
        <div className={styles.buttonContent}>
          목록으로 돌아가기
          <LiaReplySolid className={styles.flipIcon} />
        </div>
      </Button>
    </div>
  );
}
