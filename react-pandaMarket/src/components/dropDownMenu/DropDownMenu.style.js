import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 130px;
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  padding: 0 20px;
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #1f2937;
`;

export const Chevron = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #111827;
  transition: transform 140ms ease;

  ${({ open }) => open && `transform: rotate(180deg);`}
`;

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
`;

export const Item = styled.button`
  width: 100%;
  height: 42px;
  border: 0;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f7faff;
  }

  & + & {
    border-top: 1px solid #eef2f7;
  }
`;
