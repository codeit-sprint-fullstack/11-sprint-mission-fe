import { getProductById } from '@/services/productService';
import ProductDetail from './ProductDetail';

export default async function ProductDetailContainer({ id }) {
  const product = await getProductById(id);

  if (!product) {
    return null;
  }

  return <ProductDetail product={product} />;
}
