import thumbnail from '../assets/thumbnail.png';
import likeIcon from '../assets/icons/like.svg';

export function BestProductList () {
  return (
  <ul className="flex gap-6 mt-4">
    <li>
      <img
        width={282}
        height={282}
        src={thumbnail}
        alt="thumbnail"
        className="aspect-square rounded-2xl"
      />
      <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937] font-medium">
        <h3 className="text-[14px]">아이패드 미니 팝니다</h3>
        <span className="font-bold">500,000원</span>
        <div className="text-[12px] flex gap-1 text-[#rB5563]">
          <img src={likeIcon} alt="" /> 240
        </div>
      </div>
    </li>
    <li>
      <img
        width={282}
        height={282}
        src={thumbnail}
        alt="thumbnail"
        className="aspect-square rounded-2xl"
      />
      <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937] font-medium">
        <h3 className="text-[14px]">아이패드 미니 팝니다</h3>
        <span className="font-bold">500,000원</span>
        <div className="text-[12px] flex gap-1">
          <img src={likeIcon} alt="" /> 240
        </div>
      </div>
    </li>
    <li>
      <img
        width={282}
        height={282}
        src={thumbnail}
        alt="thumbnail"
        className="aspect-square rounded-2xl"
      />
      <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937] font-medium">
        <h3 className="text-[14px]">아이패드 미니 팝니다</h3>
        <span className="font-bold">500,000원</span>
        <div className="text-[12px] flex gap-1">
          <img src={likeIcon} alt="" /> 240
        </div>
      </div>
    </li>
    <li>
      <img
        width={282}
        height={282}
        src={thumbnail}
        alt="thumbnail"
        className="aspect-square rounded-2xl"
      />
      <div className="flex flex-col gap-1.5 mt-4 text-[#1F2937] font-medium">
        <h3 className="text-[14px]">아이패드 미니 팝니다</h3>
        <span className="font-bold">500,000원</span>
        <div className="text-[12px] flex gap-1">
          <img src={likeIcon} alt="" /> 240
        </div>
      </div>
    </li>
  </ul>);
};
