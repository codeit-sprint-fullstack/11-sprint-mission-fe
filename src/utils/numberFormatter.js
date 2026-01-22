export function formatNumberKorean(number) {
  if (typeof number !== 'number') return number;

  const intl = new Intl.NumberFormat('ko-KR', {
    maximumSignificantDigits: 3,
  });

  return intl.format(number);
}