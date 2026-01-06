import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;

  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1400px) {
    padding: 0 24px;
  }
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.img`
  margin-right: 39px;
  @media (max-width: 1400px) {
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    margin-right: 8px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MobileLogoImage = styled.img`
  display: none;

  @media (max-width: 600px) {
    display: block;
    margin-right: 8px;
  }
`;

export const MenuSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const LoginBtn = styled.button`
  padding: 12px 23px;
  background: #3692ff;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  border: none;
  line-height: 1.625;
`;
