import { Routes, Route } from 'react-router';
import './styles/reset.css';
import { Home } from './components/Home/Home';
import { ProductList } from './components/ProductList/ProductList';
import { Registration } from './components/Registration/Registration';

function App() {
  return (
    <>
      <div>✅😆🍒🐶☺️💞✨</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
