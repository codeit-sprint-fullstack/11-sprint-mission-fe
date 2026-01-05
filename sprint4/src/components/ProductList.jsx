import likeIcon from '../assets/icons/like.svg';
import { priceFormat } from '../utils/format';

export function ProductList({ products }) {
  const productList = products || [];

  return (
    <ul className="grid gap-6 mt-4 grid-cols-5">
      {productList.map((product) => {
        const [imgSrc] = product.images;

        return (
          <li key={product.id}>
            <img
              width={221}
              height={221}
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
