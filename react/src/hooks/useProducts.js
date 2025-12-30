import { useState, useEffect } from "react";
import { getProductList } from "../services/ProductService";

export function useProducts(initialPage = 1, initialPageSize = 10) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(initialPage);
  const [pageSize] = useState(initialPageSize);
  const [sort, setSort] = useState("recent");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProductList({ page, pageSize, sort, keyword });
        setProducts(data.list ?? []);
        setTotalCount(data.totalCount ?? 0);
      } catch (err) {
        setError(err.message || "상품 목록을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, pageSize, sort, keyword]);

  return {
    products,
    totalCount,
    loading,
    error,
    page,
    setPage,
    pageSize,
    sort,
    setSort,
    keyword,
    setKeyword,
  };
}