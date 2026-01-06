import { useEffect, useState } from "react";
import {
  SellingCardSlot,
  SellingListWrapper,
} from "./SeliingProductsList.styles";
import { safeAsync } from "../../../../utils/sageAsync";
import { getProductList } from "../../../../api/ProductService";
import { handleAxiosError } from "../../../../api/errorHandler";
import { ItemCard } from "../../../itemCard/ItemCard";
import { PageNation } from "../../../PageNation/PageNation";

export const SeliingProductsList = ({ orderBy, searchValue }) => {
  const [sellingData, setSellingData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  useEffect(() => {
    safeAsync(async () => {
      const data = await getProductList(
        pageNumber,
        pageSize,
        orderBy,
        searchValue
      );
      console.log(data);

      setTotalCount(data.totalCount);
      setSellingData(data.list);
    }, handleAxiosError);
  }, [pageNumber, orderBy, searchValue]);

  console.log(sellingData, "zzzz");

  return (
    <SellingListWrapper>
      {sellingData.map((item) => (
        <SellingCardSlot key={item.id}>
          <ItemCard
            name={item.name}
            images={item?.images[0]}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        </SellingCardSlot>
      ))}

      <PageNation
        page={pageNumber}
        totalPages={totalPages}
        onChangePage={setPageNumber}
      />
    </SellingListWrapper>
  );
};
