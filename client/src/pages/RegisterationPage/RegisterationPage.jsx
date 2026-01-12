import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRegisterValidation from '../../hooks/useRegisterValidation';
import './RegisterationPage.css';

function RegisterationPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState({});

  const { validateForm, validateTag } = useRegisterValidation();

  // 입력 변경
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 태그 입력
  const handleTagInputChange = (e) => setTagInput(e.target.value);

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = tagInput.trim();
      const tagError = validateTag(newTag);

      if (tagError) {
        setErrors((prev) => ({ ...prev, tags: tagError }));
        return;
      }

      setTags((prev) => [...prev, newTag]);
      setTagInput('');
      setErrors((prev) => ({ ...prev, tags: null }));
    }
  };

  const handleTagRemove = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
  };

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm({ ...form, tags });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch('http://localhost:5001/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, price: Number(form.price), tags }),
      });

      const result = await res.json();
      if (result.success) navigate(`/items/${result.data.id}`);
    } catch (error) {
      console.error('상품 등록 실패', error);
    }
  };

  // 등록 버튼 활성화 여부 (필드 입력만으로 판단)
  const isSubmitDisabled = !form.name || !form.description || !form.price;

  return (
    <div className="RegisterationWrapper">
      <div className="RegisterHead">
        <h1>상품 등록하기</h1>
        <button type="submit" className="submitButton" onClick={handleSubmit} disabled={isSubmitDisabled}>
          등록
        </button>
      </div>

      <form className="RegisterationForm" onSubmit={handleSubmit}>
        <label>
          상품명
          <input
            name="name"
            placeholder="상품명을 입력해주세요"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="errorText">{errors.name}</p>}
        </label>

        <label>
          상품 소개
          <textarea
            name="description"
            placeholder="상품 소개를 입력해주세요"
            value={form.description}
            onChange={handleChange}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <p className="errorText">{errors.description}</p>}
        </label>

        <label>
          판매가격
          <input
            type="text"
            name="price"
            inputMode="numeric"
            placeholder="판매 가격을 입력해주세요"
            value={form.price}
            onChange={handleChange}
            className={errors.price ? 'error' : ''}
          />
          {errors.price && <p className="errorText">{errors.price}</p>}
        </label>

        <label>
          태그
          <input
            name="tagInput"
            placeholder="태그를 입력해주세요"
            value={tagInput}
            onChange={handleTagInputChange}
            onKeyDown={handleTagKeyDown}
            className={errors.tags ? 'error' : ''}
          />
          {errors.tags && <p className="errorText">{errors.tags}</p>}
        </label>

        <div className="tagList">
          {tags.map((tag, idx) => (
            <span key={tag + idx} className="tagItem">
              {tag}
              <button type="button" className="removeTag" onClick={() => handleTagRemove(tag)}>
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