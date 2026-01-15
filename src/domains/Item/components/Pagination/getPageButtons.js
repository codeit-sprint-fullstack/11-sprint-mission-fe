export const getPageButtons = (currentPage, totalPages, PAGE_BUTTONS = 5) => {
  let startPage = currentPage - Math.floor(PAGE_BUTTONS / 2);
  startPage = Math.max(1, startPage);
  startPage = Math.min(startPage, totalPages - PAGE_BUTTONS + 1);
  startPage = Math.max(1, startPage);
  // UI 배열 보호

  const allPages = Array.from(
    { length: Math.min(PAGE_BUTTONS, totalPages) },
    (_, i) => startPage + i
  );

  return allPages;
};
