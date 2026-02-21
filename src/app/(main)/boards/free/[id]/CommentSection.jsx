'use client';

import { useState, useEffect } from 'react';
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from '../../../../../api/api';
import styles from './detail.module.css';

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    const loadComments = async () => {
      if (!articleId) return;
      try {
        const data = await getComments({ articleId });
        setComments(data.list || []);
      } catch (err) {
        console.error('댓글 로딩 실패:', err);
      }
    };

    loadComments();
  }, [articleId]);

  const handleRegister = async () => {
    if (!newComment.trim()) return;
    try {
      await createComment({ articleId, content: newComment });
      setNewComment('');
      const data = await getComments({ articleId });
      setComments(data.list || []);
    } catch (error) {
      console.error('Error:', error);
      alert('댓글 등록 실패');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('삭제하시겠습니까?')) return;
    try {
      await deleteComment(id);
      const data = await getComments({ articleId });
      setComments(data.list || []);
    } catch (error) {
      console.error('Error:', error);
      alert('삭제 실패');
    }
  };

  const handleUpdate = async (id) => {
    if (!editContent.trim()) return;
    try {
      await updateComment(id, { content: editContent });
      setEditingId(null);
      const data = await getComments({ articleId });
      setComments(data.list || []);
    } catch (error) {
      console.error('Error:', error);
      alert('수정 실패');
    }
  };

  return (
    <section className={styles.commentSection}>
      <h3>댓글</h3>
      <div className={styles.commentForm}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력해주세요"
          className={styles.commentInput}
        />
        <button
          onClick={handleRegister}
          disabled={!newComment.trim()}
          className={styles.registerBtn}
        >
          등록
        </button>
      </div>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentItem}>
            {editingId === comment.id ? (
              <div className={styles.editBox}>
                <textarea
                  className={styles.editInput}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className={styles.editBtns}>
                  <button onClick={() => handleUpdate(comment.id)}>
                    수정 완료
                  </button>
                  <button onClick={() => setEditingId(null)}>취소</button>
                </div>
              </div>
            ) : (
              <div className={styles.commentView}>
                <p className={styles.commentText}>{comment.content}</p>
                <div className={styles.commentAction}>
                  <button
                    onClick={() => {
                      setEditingId(comment.id);
                      setEditContent(comment.content);
                    }}
                  >
                    수정
                  </button>
                  <button onClick={() => handleDelete(comment.id)}>삭제</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
