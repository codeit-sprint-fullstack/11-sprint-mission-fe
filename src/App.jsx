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
    <div className="body">
      {/* header */}
      <Header />

      <div className="main-content">
        <div className="best-products"></div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            images={product.images}
            favoriteCount={product.favoriteCount}
          />
        ))}
      </div>
      {/* footer */}

      <Footer />
    </div>
  );
}

export default App;
