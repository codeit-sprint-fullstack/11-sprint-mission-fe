import { Footer } from './components/Footer';
import { Header } from './components/Header';
import thumbnail from './assets/thumbnail.png';
import likeIcon from './assets/icons/like.svg';
import { BestProductList } from './components/BestProductList';

function App() {
  return (
    <>
      <Header />

      <main className="grow max-w-300 mx-auto mt-6.5">
        <h1 className="sr-only">중고마켓 - 판다마켓</h1>

        <section>
          <h2 className="text[#111827] font-bold text-[20px] leading-8">
            베스트 상품
          </h2>
          <BestProductList />
        </section>

        <section className="mt-10">
          <h2 className="text[#111827] font-bold text-[20px] leading-8">
            판매 중인 상품
          </h2>
          <ul className="grid gap-6 mt-4 grid-cols-5">
            <li>
              <img
                width={221}
                height={221}
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
                width={221}
                height={221}
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
                width={221}
                height={221}
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
                width={221}
                height={221}
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
                width={221}
                height={221}
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
            </li>{' '}
            <li>
              <img
                width={221}
                height={221}
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
            </li>{' '}
            <li>
              <img
                width={221}
                height={221}
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
            </li>{' '}
            <li>
              <img
                width={221}
                height={221}
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
            </li>{' '}
            <li>
              <img
                width={221}
                height={221}
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
            </li>{' '}
            <li>
              <img
                width={221}
                height={221}
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
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
