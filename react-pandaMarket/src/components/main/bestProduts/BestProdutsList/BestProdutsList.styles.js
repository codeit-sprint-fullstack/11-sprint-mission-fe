import styled from "@emotion/styled";

export const ProdutsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 16px;
  flex-wrap: wrap;
  /* 800px 이하: 343px · 2열 */
  @media (max-width: 800px) {
    gap: 10px;
  }
  @media (max-width: 500px) {
    gap: 0;
    align-items: center;
  }
`;

// 1200 기준: 4열(≈282) / 744: 2열(≈343) / 375: 1열
export const BestCardSlot = styled.div`
  /* 기본: 282px */
  flex: 0 0 282px;

  /* 800px 이하: 343px · 2열 */
  @media (max-width: 800px) {
    flex: 0 0 343px;
  }

  /* 500px 이하: 343px · 1열 */
  @media (max-width: 500px) {
    flex: 0 0 100%;
  }
`;
