import {
  FooterContainer,
  FooterItem,
  FooterPTag,
  FooterWrapper,
  SnsImg,
} from "./Footer.styles";

import faceBooxk from "../../assets/sns/faceBook.svg";
import instagram from "../../assets/sns/instagram.svg";
import twitter from "../../assets/sns/twitter.svg";
import youTube from "../../assets/sns/youTube.svg";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterItem>
          <FooterPTag color="#9CA3AF"> ©codeit - 2024</FooterPTag>
        </FooterItem>
        <FooterItem gap="30px">
          <FooterPTag color="#E5E7EB">Privacy Policy</FooterPTag>
          <FooterPTag color="#E5E7EB">FAQ</FooterPTag>
        </FooterItem>
        <FooterItem gap="12px">
          <SnsImg src={faceBooxk} alt="faceBooxk" />
          <SnsImg src={instagram} alt="instagram" />
          <SnsImg src={twitter} alt="twitter" />
          <SnsImg src={youTube} alt="youTube" />
        </FooterItem>
      </FooterContainer>
    </FooterWrapper>
  );
};
