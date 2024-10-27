import getEnvConfig from "@/config";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const ReviewSchema = z.object({
  id: z.number().int(),
  name: z.string().max(255),
  title: z.string().max(255),
  description: z.string(),
  image: z.string().url(),
  location: z.string().max(255),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});

const GetReviewsSchema = z.object({
  status: z.string(),
  data: z.array(ReviewSchema),
});

type Review = z.infer<typeof ReviewSchema>;
type GetReviewsResponse = z.infer<typeof GetReviewsSchema>;

const getReviews = async (): Promise<Review[]> => {
  const { apiUrl } = getEnvConfig();

  const response = await fetch(`${apiUrl}/reviews`);
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  const result: GetReviewsResponse = await response.json();

  return result.data;
};

const useGetReviews = () => {
  return useQuery<Review[]>({ queryKey: ["reviews"], queryFn: getReviews });
};

export default useGetReviews;
