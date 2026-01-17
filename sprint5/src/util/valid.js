export const valid = {
  name(value) {
    if (!value) return '상품명을 작성해주세요.';
    if (value.length > 10) return '10자 이내로 입력해주세요.';
    return null;
  },

  description(value) {
    if (value.length < 10) return '10자 이상으로 작성해주세요.';
    if (value.length > 100) return '100자 이내로 입력해주세요.';
    return null;
  },
  price(value) {
    //number가맞는지 확인 Number(value)===NaN 은 꺼져라,!value
    if (!Number(value)) return '숫자로 입력해주세요.';
    if (!value) return '판매가격을 입력해주세요.';
    return null;
  },
  tags(value) {
    if (!value) return '태그를 입력해주세요.';
    if (value.length > 5) return '5글자 이내로 입력해주세요.';
    return null;
  },
};
