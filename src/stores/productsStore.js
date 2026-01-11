import { getProducts } from '@/api/itemsApi';
import { create } from 'zustand';

export const useProductsStore = create((set) => ({
  best: {
    itemList: [],
    isLoading: false,
    error: null,
  },
  all: {
    itemList: [],
    isLoading: false,
    error: null,
    page: 1,
    totalCount: 0,
  },
  // 베스트 상품
  fetchBestProducts: async ({ pageSize }) => {
    set((state) => ({
      best: { ...state.best, isLoading: true, error: null },
    }));
    try {
      const { items } = await getProducts({
        orderBy: 'favorite',
        page: 1,
        pageSize,
      });
      set((state) => ({
        best: { ...state.best, itemList: items },
      }));
    } catch (error) {
      set((state) => ({
        best: { ...state.best, error: error.message },
      }));
    } finally {
      set((state) => ({
        best: { ...state.best, isLoading: false },
      }));
    }
  },
  //모든 상품
  fetchAllProducts: async ({ orderBy, page, pageSize, keyword = '' }) => {
    set((state) => ({
      all: { ...state.all, isLoading: true, error: null },
    }));
    try {
      const { items, total } = await getProducts({
        orderBy,
        page,
        pageSize,
        keyword,
      });
      set((state) => ({
        all: {
          ...state.all,
          itemList: items,
          totalCount: total,
          page,
        },
      }));
    } catch (error) {
      set((state) => ({
        all: { ...state.all, error: error.message },
      }));
    } finally {
      set((state) => ({
        all: { ...state.all, isLoading: false },
      }));
    }
  },
}));
