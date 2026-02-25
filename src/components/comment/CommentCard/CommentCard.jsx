'use client';

import { useState } from 'react';
import Image from 'next/image.js';
import Dropdown from '@/components/common/Dropdown';
import Button from '@/components/common/Button';
import { formatDate } from '@/utils';
import { BsThreeDotsVertical } from 'react-icons/bs';
import * as styles from './CommentCard.css.js';

export default function CommentCard({ comment, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const handleUpdate = async () => {
    if (!editContent.trim()) return;
    
    await onUpdate(comment.id, editContent);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className={styles.editForm}>
          <textarea
            className={styles.editTextarea}
            value={editContent}
            onChange={(event) => setEditContent(event.target.value)}
          />
          <div className={styles.editControls}>
            <div className={styles.commentInfo}>
              <Image
                src={comment.author.image}
                alt="프로필"
                width={32}
                height={32}
                className={styles.profile}
              />
              <div className={styles.infoText}>
                <span className={styles.nickname}>
                  {comment.author.nickname}
                </span>
                <span className={styles.time}>
                  {formatDate(comment.createdAt)}
                </span>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <Button
                size="sm"
                color="cancel"
                shape="square"
                onClick={() => setIsEditing(false)}
              >
                취소
              </Button>
              <Button
                size="sm"
                color="primary"
                shape="square"
                onClick={handleUpdate}
              >
                수정
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.commentCard}>
          <div className={styles.commentContent}>
            <p className={styles.commentText}>{comment.content}</p>

            <Dropdown
              trigger={<BsThreeDotsVertical className={styles.sortToggle} />}
            >
              <div
                className={styles.sortOption}
                onClick={() => setIsEditing(true)}
              >
                수정하기
              </div>
              <div
                className={styles.sortOption}
                onClick={() => onDelete(comment.id)}
              >
                삭제하기
              </div>
            </Dropdown>
          </div>

          <div className={styles.commentInfo}>
            <Image
              src={comment.author.image}
              alt="프로필"
              width={32}
              height={32}
              className={styles.profile}
            />
            <div className={styles.infoText}>
              <span className={styles.nickname}>{comment.author.nickname}</span>
              <span className={styles.time}>
                {formatDate(comment.createdAt)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
