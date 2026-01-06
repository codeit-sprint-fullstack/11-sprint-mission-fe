import styled from "@emotion/styled";

export const SellingListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px; /* 가로 간격 */
  row-gap: 40px; /* ✅ 줄 간격 */
  flex-wrap: wrap;
`;

export const SellingCardSlot = styled.div`
  flex: 0 0 220px; /* 기본 221 */

  @media (max-width: 375px) {
    flex: 0 0 168px; /* 375일 때 168 */
  }
`;
