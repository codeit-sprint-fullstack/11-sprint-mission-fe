import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterationPage.css';

function RegisterationPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          price: Number(form.price),
        }),
      });

      const result = await res.json();

      if (result.success) {
        // 상세 페이지로 이동 (지금은 빈 페이지)
        navigate(`/items/${result.data.id}`);
      }
    } catch (error) {
      console.error('상품 등록 실패', error);
    }
  };

  return (
    <div className="RegisterationWrapper">
      <h1>상품 등록</h1>

      <form className="RegisterationForm" onSubmit={handleSubmit}>
        <label>
          상품명
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          상품 설명
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          가격
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submitButton">
          등록하기
        </button>
      </form>
    </div>
  );
}

export default RegisterationPage;
