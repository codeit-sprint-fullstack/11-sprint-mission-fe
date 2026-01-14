export default function useRegisterValidation() {
  // 개별 태그 검증
  const validateTag = (tag, tags) => {
    if (!tag) return null;
    if (tag.length > 5) {
      return '태그는 5자 이내여야 합니다.';
    }
    if (tags.includes(tag)) {
      return '이미 추가된 태그입니다.';
    }
    return null;    
  };

  // 전체 폼 검증 (등록 버튼 클릭 시 한 번만)
  const validateForm = ({ name, description, price, tags }) => {
    const newErrors = {};

    if (!name || name.length > 10) newErrors.name = '상품명은 1~10자로 입력해주세요.';
    if (!description || description.length < 10 || description.length > 100)
      newErrors.description = '상품 소개는 10~100자로 입력해주세요.';
    if (!price || isNaN(price)) newErrors.price = '판매 가격은 숫자로 입력해주세요.';
   
    return newErrors;
  };

  return { validateForm, validateTag };
}