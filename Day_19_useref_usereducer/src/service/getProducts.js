import http from "./http";

const GetAllProducts = async () => {
  const result = await http.get(`/products`);
  return result.data;
};

const GetSingleProducts = async (productId) => {
  const result = await http.get(`/products/${productId}`);
  return result.data;
};
export { GetSingleProducts , GetAllProducts};