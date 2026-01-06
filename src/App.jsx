import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { getProductList } from '/src/api/ProductService';
import ProductCard from './components/ProductCard/Card';

function App() {
  //state 만들기: 제품 불러오기, 게시글 정렬
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState('recent');

  //데이터 요청
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductList(1, 10, order, '');

        console.log('가져온 데이터: ', data);

        setProducts(data.list);
      } catch (error) {
        console.error('응애', error);
      }
    };

    fetchProducts();
  }, [order]);

  return (
    <>
      {/* header */}
      <Header />
      {/* products */}
      <div className="content">
        <div className="best-products">
          <p>베스트 상품</p>
        </div>
        <div className="main-products">
          <div className="products-title">
            <p>판매 중인 상품</p>
          </div>
          <div className="grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                images={product.images}
              />
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
