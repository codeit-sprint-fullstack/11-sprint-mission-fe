'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';
import FormField from '@/components/common/FormField';
import { createComment } from '@/services/commentService.js';
import * as styles from './CommentInput.css.js';

const INPUT_CONFIG = {
  article: {
    label: '댓글달기',
    placeholder: '댓글을 입력해주세요.',
  },
  product: {
    label: '문의하기',
    placeholder:
      '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.',
  },
};

export default function CommentInput({ type = 'article', id, onSuccess }) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const config = INPUT_CONFIG[type];
  const { label, placeholder } = config;

  const handleSubmit = async () => {
    if (!content.trim() || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const newComment = await createComment(type, id, content);

      if (onSuccess) {
        onSuccess(newComment);
      }

      setContent('');
    } catch (error) {
      console.error(error);
      alert(error.message || '댓글 생성 실패');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <FormField
        label={label}
        isTextArea
        variant="comment"
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className={styles.submitButton}>
        <Button
          shape="square"
          size="sm"
          color={!content.trim() || isLoading ? 'inactive' : 'primary'}
          disabled={!content.trim() || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? '등록 중...' : '등록'}
        </Button>
      </div>
    </div>
  );
}
