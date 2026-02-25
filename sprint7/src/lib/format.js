export function formatDate(dateString) {
  return new Date(dateString)
    .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\.$/, '');
}
