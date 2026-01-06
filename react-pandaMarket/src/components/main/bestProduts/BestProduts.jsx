import { BestProdutsWrapper } from "./BestProduts.style";

import { ListTitleTypo } from "../../../foundation/typography.styles";
import { BestProdutsList } from "./BestProdutsList/BestProdutsList";

export const BestProduts = () => {
  return (
    <BestProdutsWrapper>
      <ListTitleTypo>베스트 상품</ListTitleTypo>
      <BestProdutsList />
    </BestProdutsWrapper>
  );
};
