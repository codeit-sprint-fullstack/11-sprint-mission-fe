import styled from "@emotion/styled";

export const ItemCardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const LikeIconImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
