import styled from "@emotion/styled";

export const PageNationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const BtnContainer = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  border-radius: 50%;

  &[data-active="true"] {
    background: #2f80ed;
    color: #fff;
    border-color: #2f80ed;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not([data-active="true"]) {
    background-color: #2f80ed;
    color: #fff;
    border-color: #2f80ed;
  }

  &:hover:not(:disabled) img {
    filter: brightness(0) invert(1);
  }
`;

export const ArrowImg = styled.img`
  width: 16px;
  height: 16px;
`;
