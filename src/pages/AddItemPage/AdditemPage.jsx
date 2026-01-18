import { Button } from '@/components/UI/Button';
import { Input } from '@/components/UI/Input';
import { useEffect, useRef, useState } from 'react';
import styles from './AdditemPage.module.css';
import Textarea from '@/components/UI/Textarea/Textarea';
import iconDelete from '@/assets/icons/ic_X.svg';
import { usePostProductStore } from '@/stores/productsStore';
import { Navigate, useNavigate } from 'react-router';

function AdditemPage() {
  //form 제출
  const { postProduct } = usePostProductStore;
  const Navigate = useNavigate();

  const submit = (formData) => {
    const data = Object.fromEntries(formData.fromEntries());

    postProduct({
      ...data,
      tags,
    });
    Navigate("/produdct")
    // onSubmit(payload)
  };

  // 포커싱
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  //태그 추가 및 삭제
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState('');

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) {
      return;
    }
    event.preventDefault();
    handleAddTag();
  };

  const handleAddTag = () => {
    const value = inputTag.trim();
    if (!value) return;
    if (tags.includes(value)) return;

    setTags((prev) => [...prev, value]);
    setInputTag('');
  };

  const handleDeleteTag = (tag) => {
    setTags((prev) => prev.fillter((t) => t !== tag));
  };

  return (
    <div className="wrapper">
      <form action={submit}>
        <div className={styles.title}>
          <h1 className={styles.sectionTitle}>상품 등록하기</h1>
          <Button type="submit">등록</Button>
        </div>
        <div className={styles.inputForm}>
          <div>
            <label>상품명</label>
            <Input
              name="name"
              type="text"
              placeholder="상품명을 입력해주세요"
              ref={inputRef}
            />
          </div>
          <div>
            <label>상품 소개</label>
            <Textarea
              name="description"
              placeholder="상품소개를 입력해주세요"
            />
          </div>
          <div>
            <label>판매가격</label>
            <Input
              name="price"
              type="text"
              placeholder="판매가격을 입력해주세요"
            />
          </div>
          <div>
            <label>태그</label>
            <Input
              name="tags"
              type="text"
              placeholder="태그를 입력해주세요"
              value={inputTag}
              onChange={(event) => setInputTag(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <ul className={styles.tagList}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  #{tag}
                  <button onClick={() => handleDeleteTag(tag)}>
                    {' '}
                    <img src={iconDelete} />{' '}
                  </button>
                </span>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdditemPage;
