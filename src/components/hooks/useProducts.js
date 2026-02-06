import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../../api/products';

export const useProducts = (params = {}) => {
  const [data, setData] = useState({ list: [], totalCount: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (queryParams) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getProducts(queryParams);
      setData(result);
    } catch {
      setError('데이터를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(params);
  }, [fetchProducts, params.sort, params.page, params.size]);

  return {
    products: data.list,
    totalCount: data.totalCount,
    loading,
    error,
    refetch: fetchProducts,
  };
};
