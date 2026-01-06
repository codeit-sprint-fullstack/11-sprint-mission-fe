import { useState } from "react";
import { ListTitleTypo } from "../../../foundation/typography.styles";
import { DropDownMenu } from "../../dropDownMenu/DropDownMenu.jsx";
import searchIcon from "../../../assets/ic_search.svg";

import {
  ProdutsAddBtn,
  ProdutsSearchInput,
  SearchIconImg,
  SellingHeaderContainer,
  SellingSearchContainer,
  SellingWrapper,
  SerachWrapper,
} from "./SellingProducts.styles";
import { SeliingProductsList } from "./SeliingProductsList/SeliingProductsList.jsx";

export const SellingProducts = () => {
  const [orderBy, setOrderBy] = useState("recent");
  const [searchValue, setSearchValue] = useState("");
  const changeOrderBy = (next) => {
    setOrderBy(next);
  };

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <SellingWrapper>
      <SellingHeaderContainer>
        <ListTitleTypo>판매중인 상품</ListTitleTypo>
        <SellingSearchContainer>
          <SerachWrapper>
            <ProdutsSearchInput
              placeholder="상품을 검색하세요"
              value={searchValue}
              onChange={changeSearchValue}
            />
            <SearchIconImg src={searchIcon} alt="searchIcon" />
          </SerachWrapper>
          <ProdutsAddBtn>상품 등록하기</ProdutsAddBtn>
          <DropDownMenu value={orderBy} onChange={changeOrderBy} />
        </SellingSearchContainer>
      </SellingHeaderContainer>
      <SeliingProductsList orderBy={orderBy} searchValue={searchValue} />
    </SellingWrapper>
  );
};
