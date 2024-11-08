import getEnvConfig from "@/config";
import { useQuery } from "@tanstack/react-query";
import { GetUserResponse, GetUserResponseSchema, User } from "./user.types";

const getUserDetails = async (): Promise<User> => {
  const { apiUrl } = getEnvConfig();
  const token = localStorage.getItem("authToken");

  const response = await fetch(`${apiUrl}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user details");
  }

  try {
    const result: GetUserResponse = await response.json();
    return GetUserResponseSchema.parse(result).data;
  } catch (error) {
    console.error("Schema parsing error:", error);
    throw new Error("Failed to parse user response");
  }
};

const useGetUserDetails = () => {
  return useQuery<User>({ queryKey: ["user"], queryFn: getUserDetails });
};

export default useGetUserDetails;
