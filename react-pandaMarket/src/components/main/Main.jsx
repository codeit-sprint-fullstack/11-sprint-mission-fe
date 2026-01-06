import { BestProduts } from "./bestProduts/BestProduts";
import { MainWrapper } from "./Main.styles";
import { SellingProducts } from "./sellingProducts/SellingProducts";

export const Main = () => {
  return (
    <MainWrapper>
      <BestProduts />
      <SellingProducts />
    </MainWrapper>
  );
};
