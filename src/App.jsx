import './App.css';
import { AllProduct } from './components/AllProduct';
import { BestProduct } from './components/BestProduct';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  const mockData = [
    {
      id: 1,
      images: 'https://picsum.photos/600/400',
      tags: '전자제품',
      price: 99009,
      description: '조억억원치상당',
      name: '최애템',
    },
    {
      id: 2,
      images: 'https://picsum.photos/600/400',
      tags: '애완용품',
      price: 1010,
      description: '오만조원어치상당',
      name: '강아지밥그릇!',
    },
    {
      id: 3,
      images: 'https://picsum.photos/600/400',
      tags: '전자제품',
      price: 19009,
      description: '조억억원치상당',
      name: '아이패드팔아용',
    },
    {
      id: 4,
      images: 'https://picsum.photos/600/400',
      tags: '애완용품',
      price: 4300,
      description: '오만조원어치상당',
      name: '안입는옷팔아요~',
    },
  ];
  return (
    <>
      <Header />
      <div className="content">
        <BestProduct products={mockData} />
        <AllProduct products={mockData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
