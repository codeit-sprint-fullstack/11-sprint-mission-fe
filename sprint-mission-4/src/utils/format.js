export const priceFormat = (price) => {
  const intl = new Intl.NumberFormat('ko-kr', {
    maximumSignificantDigits: 3,
  });

  return intl.format(price);
};
