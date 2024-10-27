import { useQuery } from "@tanstack/react-query";
import getEnvConfig from "../config";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  image: string;
};

type GetProductsResponse = {
  status: string;
  message: string;
  data: Product;
};

const { apiUrl } = getEnvConfig();

const getSingleProduct = async (productId: number): Promise<Product> => {
  const response = await fetch(`${apiUrl}/products/${productId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const result: GetProductsResponse = await response.json();
  return result.data;
};

const useGetSingleProduct = (productId: number) => {
  return useQuery<Product>({
    queryKey: ["product"],
    queryFn: () => getSingleProduct(productId),
  });
};

export default useGetSingleProduct;
