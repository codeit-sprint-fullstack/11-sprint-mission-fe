import InputBox from '@/components/InputBox';
import { useState } from 'react';

function ProductRegistrationPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tagInput, setTagInput] = useState('');

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h2>상품 등록하기</h2>
        <button className="button submit-button">등록</button>
      </div>

      <div className="registration-form">
        <InputBox label="상품명" guideText="10자 이내로 입력해주세요">
          <input
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputBox>

        <InputBox label="상품 소개" guideText="10자 이상 입력해주세요">
          <textarea
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputBox>

        <InputBox label="판매 가격" guideText="숫자로 입력해주세요">
          <input
            placeholder="판매 가격를 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputBox>

        <InputBox label="태그" guideText="5자 이내로 입력해주세요">
          <input
            placeholder="태그를 입력해주세요"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
        </InputBox>
      </div>
    </div>
  );
}

export default ProductRegistrationPage;
