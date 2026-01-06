import styled from "@emotion/styled";

export const SellingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
`;

export const SellingHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 1200px) {
    padding: 0 24px;
  }
`;

export const SellingSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ProdutsAddBtn = styled.button`
  background-color: #3692ff;
  border-radius: 8px;
  height: 42px;
  cursor: pointer;
  padding: 0 23px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.625;
  color: white;
  border: none;
`;

export const SerachWrapper = styled.div`
  position: relative;
`;

export const ProdutsSearchInput = styled.input`
  font-size: 1rem;
  border-radius: 8px;
  padding: 0 16px 0 48px; /* ✅ 왼쪽 패딩 증가 */
  height: 42px;
  background-color: #f3f4f6;
  border: none;
  width: 325px;

  &::placeholder {
    color: #9ca3af;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625;
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const SearchIconImg = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
