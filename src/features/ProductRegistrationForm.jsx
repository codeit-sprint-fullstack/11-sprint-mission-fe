import InputBox from '@/components/InputBox';
import { IoIosCloseCircle } from 'react-icons/io';
import './ProductRegistrationForm.css';

function ProductRegistrationForm({ formData, changes, errors, validate }) {
  const handleInputChange = (type, value, change) => {
    change(value);
    validate(type, value);
  };

  // 태그 입력 후 엔터 시 칩 생성
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return; // 한글 마지막 글자 두번씩 저장되는거 방지

    if (e.key === 'Enter') {
      e.preventDefault();
      if (formData.tag.trim() !== '' && !errors.tag) {
        changes.setTags([...formData.tags, formData.tag]);
        changes.setTag('');
      }
    }
  };

  // 칩에서 x 클릭 시 삭제
  const handleDeleteTag = (deleteTag) => {
    const newTags = formData.tags.filter((_, i) => i !== deleteTag);
    changes.setTags(newTags);
  };

  return (
    <div className="registration-form">
      <InputBox
        label="상품명"
        guideText="10자 이내로 입력해주세요"
        errorMessage={formData.name === '' ? '' : errors.name}
      >
        <input
          placeholder="상품명을 입력해주세요"
          value={formData.name}
          onChange={(e) =>
            handleInputChange('name', e.target.value, changes.setName)
          }
        />
      </InputBox>

      <InputBox
        label="상품 소개"
        guideText="10자 이상 입력해주세요"
        errorMessage={formData.description === '' ? '' : errors.description}
      >
        <textarea
          placeholder="상품 소개를 입력해주세요"
          value={formData.description}
          onChange={(e) =>
            handleInputChange(
              'description',
              e.target.value,
              changes.setDescription,
            )
          }
        />
      </InputBox>

      <InputBox
        label="판매 가격"
        guideText="숫자로 입력해주세요"
        errorMessage={formData.price === '' ? '' : errors.price}
      >
        <input
          placeholder="판매 가격를 입력해주세요"
          value={formData.price}
          onChange={(e) =>
            handleInputChange('price', e.target.value, changes.setPrice)
          }
        />
      </InputBox>

      <InputBox
        label="태그"
        guideText="5자 이내로 입력해주세요"
        errorMessage={formData.tag === '' ? '' : errors.tag}
      >
        <input
          placeholder="태그를 입력해주세요"
          value={formData.tag}
          onChange={(e) =>
            handleInputChange('tag', e.target.value, changes.setTag)
          }
          onKeyDown={handleKeyDown}
        />

        <div className="tag-list">
          {formData.tags.map((tag, i) => (
            <span key={i} className="tag-chip">
              # {tag}
              <IoIosCloseCircle
                className="tag-delete"
                onClick={() => handleDeleteTag(i)}
              />
            </span>
          ))}
        </div>
      </InputBox>
    </div>
  );
}

export default ProductRegistrationForm;
