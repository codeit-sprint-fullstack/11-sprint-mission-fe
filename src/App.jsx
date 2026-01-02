import { ProductListPage } from './features/ProductListPage';
import { ProductProvider } from './providers/ProductProvider';

function App() {
  return (
    <ProductProvider>
      <ProductListPage />
    </ProductProvider>
  );
}
export default App;
