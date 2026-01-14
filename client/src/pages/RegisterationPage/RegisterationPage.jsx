import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRegisterValidation from '../../hooks/useRegisterValidation';
import './RegisterationPage.css';

// 반복되는 input/label/errorText를 하나로 묶은 재사용 컴포넌트
function FormField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}) {
  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'error' : ''}
      />
      {error && <p className="errorText">{error}</p>}
    </label>
  );
}

function RegisterationPage() {
  /* 1. 외부 훅 */
  const navigate = useNavigate();

  /* 2. 상태 (State) */
  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState({});
  const [isComposing, setIsComposing] = useState(false); // IME 조합 상태

  /* 3. 커스텀 훅 : 향후 확장 대비 */
  const { validateForm, validateTag } = useRegisterValidation();

  /* 4. 이벤트 핸들러 */

  // input 변경
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 태그 input 변경
  const handleTagInputChange = (e) => setTagInput(e.target.value);

  // 태그 추가 (IME 대응)
  const handleTagKeyDown = (e) => {
    if (isComposing) return;
    if (e.key !== 'Enter') return;

    e.preventDefault();

    const newTag = tagInput.trim();
    if (!newTag) return;

    const tagError = validateTag(newTag,tags);
    setErrors((prev) => ({ ...prev, tags: tagError }));

    if (!tagError) {
      setTags((prev) => [...prev, newTag]);
      setTagInput('');
    }
  };

  // 태그 삭제
  const handleTagRemove = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm({ ...form, tags });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const url = new URL('/products', BASE_URL);

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          tags,
        }),
      });

      const result = await res.json();
      if (result.success) navigate(`/items/${result.data.id}`);
    } catch (error) {
      console.error('상품 등록 실패', error);
    }
  };

  /* 5. 파생 값  */
  const isSubmitDisabled =
    !form.name || !form.description || !form.price;

  /* 6. JSX  */
  return (
    <div className="RegisterationWrapper">
      <div className="RegisterHead">
        <h1>상품 등록하기</h1>
        <button
          type="submit"
          className="submitButton"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          등록
        </button>
      </div>

      <form className="RegisterationForm" onSubmit={handleSubmit}>
        <FormField
          label="상품명"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="상품명을 입력해주세요"
        />

        <FormField
          label="상품 소개"
          name="description"
          value={form.description}
          onChange={handleChange}
          error={errors.description}
          placeholder="상품 소개를 입력해주세요"
        />

        <FormField
          label="판매가격"
          name="price"
          value={form.price}
          onChange={handleChange}
          error={errors.price}
          placeholder="판매 가격을 입력해주세요"
        />

        {/* 태그 입력 */}
        <label>
          태그
          <input
            name="tagInput"
            placeholder="태그를 입력해주세요"
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyDown={handleTagKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            className={errors.tags ? 'error' : ''}
          />
          {errors.tags && <p className="errorText">{errors.tags}</p>}
        </label>

        <div className="tagList">
          {tags.map((tag) => (
            <span key={tag} className="tagItem">
              {tag}
              <button
                type="button"
                className="removeTag"
                onClick={() => handleTagRemove(tag)}
              >
                x
              </button>
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}

export default RegisterationPage;