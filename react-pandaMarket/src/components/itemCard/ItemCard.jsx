import {
  ImgBox,
  ItemCardWrapper,
  ItemImg,
  LikeContainer,
  LikeIconImg,
} from "./ItemCard.styles";
import emptyImg from "../../assets/empty.png";
import {
  ItemPriceText,
  ItemText,
  LikeText,
} from "../../foundation/typography.styles";
import likeIcon from "../../assets/like/ic_heart.svg";

export const ItemCard = ({ name, images, price, favoriteCount }) => {
  return (
    <ItemCardWrapper>
      <ImgBox>
        <ItemImg src={images ? images : emptyImg} alt="img" />
      </ImgBox>
      <ItemText>{name}</ItemText>
      <ItemPriceText>{price.toLocaleString("ko-KR")}원</ItemPriceText>

      <LikeContainer>
        <LikeIconImg src={likeIcon} alt="likeIcon" />
        <LikeText>{favoriteCount}</LikeText>
      </LikeContainer>
    </ItemCardWrapper>
  );
};
