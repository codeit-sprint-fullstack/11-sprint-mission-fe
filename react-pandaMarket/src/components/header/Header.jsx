import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderWrapper,
  LogoImage,
  MenuSet,
  LoginBtn,
  MobileLogoImage,
} from "./Header.styles";
import HeaderLogo from "../../assets/logo/padaHeaderLogo.png";
import HeaderLogoMobile from "../../assets/logo/Mlogo.png";
import { MenuTypography } from "../../foundation/typography.styles";

export const Hader = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoContainer>
          <MobileLogoImage src={HeaderLogoMobile} alt="HeaderLogoMobile" />
          <LogoImage src={HeaderLogo} alt="HeaderLogo" />
          <MenuSet>
            <MenuTypography>자유게시판</MenuTypography>
            <MenuTypography>중고마켓</MenuTypography>
          </MenuSet>
        </HeaderLogoContainer>
        <LoginBtn>로그인</LoginBtn>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
