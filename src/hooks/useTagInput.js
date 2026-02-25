import { TAG_MAX_LENGTH } from '@/utils/constants';
import { useState } from 'react';

export function useTagInput(initialTags = [], setFormData) {
  const [tagInput, setTagInput] = useState('');

  const handleTagInputChange = (event) => setTagInput(event.target.value);

  // 태그 입력 후 엔터 시 칩 생성
  const handleTagKeyDown = (event) => {
    if (event.nativeEvent.isComposing) return; // 한글 마지막 글자 두번씩 저장되는거 방지

    if (event.key === 'Enter') {
      event.preventDefault();
      const newTag = tagInput.trim();

      if (
        newTag &&
        newTag.length <= TAG_MAX_LENGTH && // 글자 길이 제한
        !initialTags.includes(newTag) // 중복 방지
      ) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }));
        setTagInput('');
      }
    }
  };

  // 칩에서 x 클릭 시 삭제
  const handleDeleteTag = (targetIndex) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== targetIndex),
    }));
  };

  return { tagInput, handleTagInputChange, handleTagKeyDown, handleDeleteTag };
}
