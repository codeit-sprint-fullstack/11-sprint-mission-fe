import ContentLayout from "@/components/layouts/ContentLayout";
import BestProducts from "@/features/products/BestProducts";
import ProductList from "@/features/products/ProductList";

export default function MarketPage({ searchParams }) {
  return (
    <ContentLayout>
      <BestProducts />
      <ProductList searchParams={searchParams} />
    </ContentLayout>
  );
}