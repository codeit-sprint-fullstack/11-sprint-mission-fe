'use client';

import { useState, useEffect } from 'react';
import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from '../../../../../api/api';
import styles from './detail.module.css';

// 👈 상대 시간 변환 함수
const getRelativeTime = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffMin = Math.floor((now - past) / (1000 * 60));
  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}시간 전`;
  return `${Math.floor(diffHour / 24)}일 전`;
};

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');

  // 👈 어떤 댓글의 케밥 메뉴가 열려있는지 저장하는 상태
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const loadComments = async () => {
      if (!articleId) return;
      try {
        const data = await getComments({ articleId });
        setComments(data.list || []);
      } catch (error) {
        console.error(error);
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
      console.error('댓글 등록 실패:', error);
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
      console.error('삭제 실패:', error);
      alert('삭제 실패');
    }
  };

  const handleUpdate = async (id) => {
    if (!editContent.trim()) return;
    try {
      await updateComment(id, { content: editContent });
      setEditingId(null);
      setOpenMenuId(null);
      const data = await getComments({ articleId });
      setComments(data.list || []);
    } catch (error) {
      console.error('수정 실패:', error);
      alert('수정 실패');
    }
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <section className={styles.commentSection}>
      <h3 className={styles.commentTitle}>댓글달기</h3>

      {/* 테두리 없는 회색 박스 디자인 적용 */}
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
        {/* 댓글 빈 상태 처리 */}
        {comments.length === 0 ? (
          <div className={styles.emptyComment}>
            <div className={styles.emptyIcon}>💬</div>
            <p>
              아직 댓글이 없어요,
              <br />
              지금 댓글을 달아보세요!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className={styles.commentItem}>
              {editingId === comment.id ? (
                <div className={styles.editBox}>
                  <textarea
                    className={styles.commentInput}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <div className={styles.editBtns}>
                    <button
                      onClick={() => handleUpdate(comment.id)}
                      className={styles.registerBtn}
                    >
                      수정 완료
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className={styles.cancelBtn}
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.commentView}>
                  <div className={styles.commentHeader}>
                    <p className={styles.commentText}>{comment.content}</p>

                    {/* 댓글용 케밥 메뉴 */}
                    <div className={styles.kebabWrapper}>
                      <button
                        className={styles.kebabBtn}
                        onClick={() => toggleMenu(comment.id)}
                      >
                        ⋮
                      </button>
                      {openMenuId === comment.id && (
                        <div className={styles.dropdown}>
                          <button
                            onClick={() => {
                              setEditingId(comment.id);
                              setEditContent(comment.content);
                              setOpenMenuId(null);
                            }}
                          >
                            수정
                          </button>
                          <button
                            onClick={() => handleDelete(comment.id)}
                            className={styles.deleteText}
                          >
                            삭제
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 프로필과 상대 시간 적용 */}
                  <div className={styles.profileWrapper}>
                    <div className={styles.profileIcon}></div>
                    <span className={styles.nickname}>
                      {comment.nickname || '익명 판다'}
                    </span>
                    <span className={styles.date}>
                      {getRelativeTime(comment.createdAt)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
