import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #111827;
  box-sizing: border-box;
  padding: 32px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 77px;
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ gap = "8px" }) => gap};
`;
export const FooterPTag = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ color = "#ffffff" }) => color};
  cursor: pointer;
`;

export const SnsImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
