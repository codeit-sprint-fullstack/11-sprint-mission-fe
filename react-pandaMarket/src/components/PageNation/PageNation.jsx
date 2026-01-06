import { ArrowImg, BtnContainer, PageNationWrapper } from "./PageNation.styles";
import rightArrow from "../../assets/arrow_right.svg";
import leftArrow from "../../assets/arrow_left.svg";

export const PageNation = ({ page, totalPages, onChangePage }) => {
  const groupSize = 5;

  const startPage = Math.floor((page - 1) / groupSize) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pages = [];
  for (let p = startPage; p <= endPage; p++) pages.push(p);

  const canPrevGroup = startPage > 1;
  const goPrevGroup = () => {
    if (!canPrevGroup) return;
    const target = Math.max(1, startPage - 1); // 이전 묶음의 마지막 페이지 (예: 6~10 → 5)
    onChangePage(target);
  };

  const canNextGroup = endPage < totalPages;
  const goNextGroup = () => {
    if (!canNextGroup) return;
    const target = Math.min(totalPages, startPage + groupSize); // 예: 1~5 → 6
    onChangePage(target);
  };

  return (
    <PageNationWrapper>
      <BtnContainer
        type="button"
        onClick={goPrevGroup}
        disabled={!canPrevGroup}
        aria-label="previous group"
      >
        <ArrowImg src={rightArrow} alt="leftArrow" />
      </BtnContainer>

      {pages.map((p) => (
        <BtnContainer
          key={p}
          type="button"
          onClick={() => onChangePage(p)}
          data-active={p === page}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </BtnContainer>
      ))}
      <BtnContainer
        type="button"
        onClick={goNextGroup}
        disabled={!canNextGroup}
        aria-label="next group"
      >
        <ArrowImg src={leftArrow} alt="rightArrow" />
      </BtnContainer>
    </PageNationWrapper>
  );
};
