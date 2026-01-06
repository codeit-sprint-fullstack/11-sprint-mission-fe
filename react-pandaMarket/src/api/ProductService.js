import { api } from "./basicUrl";
// import { handleAxiosError } from "./errorHandler";

export const getProductList = async (page, pageSize, orderBy, keyword) => {
  try {
    const res = await api.get("/products", {
      params: {
        page,
        pageSize,
        orderBy,
        ...(keyword?.trim() && { keyword }),
      },
    });
    return res.data;
  } catch (error) {
    console.error("Product API 실패", error);
    throw error;
  }
};
