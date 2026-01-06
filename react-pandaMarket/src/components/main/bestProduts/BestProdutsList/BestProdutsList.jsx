import { useEffect, useState } from "react";
import { safeAsync } from "../../../../utils/sageAsync";
import { getProductList } from "../../../../api/ProductService";
import { handleAxiosError } from "../../../../api/errorHandler";
import { ItemCard } from "../../../itemCard/ItemCard";
import { BestCardSlot, ProdutsListWrapper } from "./BestProdutsList.styles";

export const BestProdutsList = () => {
  const [bestProdutsData, setBestProdutsData] = useState([]);
  useEffect(() => {
    safeAsync(async () => {
      const data = await getProductList(1, 4, "recent");
      setBestProdutsData(data.list);
    }, handleAxiosError);
  }, []);
  console.log(bestProdutsData);

  return (
    <ProdutsListWrapper>
      {bestProdutsData.map((item) => (
        <BestCardSlot key={item.id}>
          <ItemCard
            name={item.name}
            images={item?.images[0]}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        </BestCardSlot>
      ))}
    </ProdutsListWrapper>
  );
};
