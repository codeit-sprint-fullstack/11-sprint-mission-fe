export const formatPrice = (price) => {
  if (!price) return '';
  return new Intl.NumberFormat('ko-KR').format(price);
};
