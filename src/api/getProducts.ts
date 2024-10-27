import { useQuery } from "@tanstack/react-query";
import getEnvConfig from "../config";
import { z } from "zod";

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  image: z.string().url(),
});

const GetProductsResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
  data: z.array(ProductSchema),
});

type Product = z.infer<typeof ProductSchema>;
type GetProductsResponse = z.infer<typeof GetProductsResponseSchema>;

const { apiUrl } = getEnvConfig();

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${apiUrl}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const result: GetProductsResponse = await response.json();
  return result.data;
};

const useGetProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export default useGetProducts;
