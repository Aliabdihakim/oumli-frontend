import getEnvConfig from "@/config";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  LoginUserData,
  LoginUserResponse,
  LoginUserResponseSchema,
  RegisterUserData,
  RegisterUserResponse,
  RegisterUserResponseSchema,
} from "./auth.types";

// <----------REGISTER USER ---------->

const registerUser = async (
  data: RegisterUserData
): Promise<RegisterUserResponse> => {
  const { apiUrl } = getEnvConfig();

  try {
    const response = await axios.post(`${apiUrl}/auth/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return RegisterUserResponseSchema.parse(response.data);
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

const useRegisterUserMutation = () => {
  return useMutation<RegisterUserResponse, Error, RegisterUserData>({
    mutationFn: registerUser,
  });
};

// <----------LOGIN USER ---------->

const loginUser = async (data: LoginUserData): Promise<LoginUserResponse> => {
  const { apiUrl } = getEnvConfig();

  try {
    const response = await axios.post(`${apiUrl}/auth/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return LoginUserResponseSchema.parse(response.data);
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

const useLoginUserMutation = () => {
  return useMutation<LoginUserResponse, Error, LoginUserData>({
    mutationFn: loginUser,
  });
};

export { useRegisterUserMutation, useLoginUserMutation };
