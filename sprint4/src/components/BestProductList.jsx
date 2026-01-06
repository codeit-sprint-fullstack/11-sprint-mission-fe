import likeIcon from '../assets/icons/like.svg';
import { useEffect, useState } from 'react';
import { priceFormat } from '../utils/format';

export function BestProductList() {
  //
  //
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getBestProducts = async () => {
      const params = new URLSearchParams({
        page: 1,
        pageSize: 4,
        orderBy: 'favorite',
      });

      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`,
      );
      const data = await res.json();
      setProducts(data.list);
    };

    getBestProducts();
  }, []);

  return (
    <ul className="flex gap-6 mt-4">
      {products.map((product) => {
        const [imgSrc] = product.images;

        return (
          <li key={product.id}>
            <img
              width={282}
              height={282}
              src={imgSrc}
              alt="thumbnail"
              className="aspect-square rounded-2xl"
            />
            <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937] font-medium">
              <h3 className="text-[14px]">{product.name}</h3>
              <span className="font-bold">{priceFormat(product.price)}원</span>
              <div className="text-[12px] flex gap-1 text-[#rB5563]">
                <img src={likeIcon} alt="" /> {product.favoriteCount}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
