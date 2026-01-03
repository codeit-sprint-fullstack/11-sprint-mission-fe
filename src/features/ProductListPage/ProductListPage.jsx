import { BestProductList } from '@/components/BestProductList/BestProductList';
import { Layout } from '@/components/Layout';
import { ProductList } from '@/components/ProductLIst';
export function ProductListPage() {
  return (
    <Layout>
      <main>
        <h1>중고마켓-판다마켓</h1>
        <div>
          <section>
            <h2>베스트 상품</h2>

            <BestProductList />
            <ul className="flex gap-6">
              {/* <img width={282}
                 height={282}
                 src={thumbnail}
                 className='aspect-square rounded-2xl'
            /> */}
              <div className="flex fex-col gap1.5,"></div>
              <li>베스트상품리스트</li>

              {/* flex-wrap:wrap 말고 grid 사용할것 grid-cols-5  */}
            </ul>
          </section>
          <ProductList />
        </div>
      </main>
    </Layout>
  );
}
