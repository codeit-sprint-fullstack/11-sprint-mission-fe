import InputBox from '@/components/InputBox';
import { useState } from 'react';
import { useProductValidation } from '@/hooks/useProductValidation';
import { IoIosCloseCircle } from 'react-icons/io';

function ProductRegistrationPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const { errors, validate } = useProductValidation();

  const handleInputChange = (type, value, change) => {
    change(value);
    validate(type, value);
  };

  // 태그 입력 후 엔터 시 칩 생성
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return; // 한글 마지막 글자 두번씩 저장되는거 방지

    if (e.key === 'Enter') {
      e.preventDefault();
      if (tag.trim() !== '' && !errors.tag) {
        setTags([...tags, tag]);
        setTag('');
      }
    }
  };

  // 칩에서 x 클릭 시 삭제
  const handleDeleteTag = (deleteTag) => {
    const newTags = tags.filter((_, i) => i !== deleteTag);
    setTags(newTags);
  };

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h2>상품 등록하기</h2>
        <button className="button submit-button">등록</button>
      </div>

      <div className="registration-form">
        <InputBox
          label="상품명"
          guideText="10자 이내로 입력해주세요"
          errorMessage={errors.name}
        >
          <input
            placeholder="상품명을 입력해주세요"
            value={name}
            onChange={(e) => handleInputChange('name', e.target.value, setName)}
          />
        </InputBox>

        <InputBox
          label="상품 소개"
          guideText="10자 이상 입력해주세요"
          errorMessage={errors.description}
        >
          <textarea
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={(e) =>
              handleInputChange('description', e.target.value, setDescription)
            }
          />
        </InputBox>

        <InputBox
          label="판매 가격"
          guideText="숫자로 입력해주세요"
          errorMessage={errors.price}
        >
          <input
            placeholder="판매 가격를 입력해주세요"
            value={price}
            onChange={(e) =>
              handleInputChange('price', e.target.value, setPrice)
            }
          />
        </InputBox>

        <InputBox
          label="태그"
          guideText="5자 이내로 입력해주세요"
          errorMessage={errors.tag}
        >
          <input
            placeholder="태그를 입력해주세요"
            value={tag}
            onChange={(e) => handleInputChange('tag', e.target.value, setTag)}
            onKeyDown={handleKeyDown}
          />

          <div className="tag-list">
            {tags.map((tag, i) => (
              <span key={i} className="tag-chip">
                #{tag}
                <IoIosCloseCircle
                  className="tag=delete"
                  onClick={() => handleDeleteTag(i)}
                />
              </span>
            ))}
          </div>
        </InputBox>
      </div>
    </div>
  );
}

export default ProductRegistrationPage;
