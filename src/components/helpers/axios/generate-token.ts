import { AuthProps } from "@/components/types";
import { jwtDecode } from "jwt-decode";
import { instance } from "./axiosInstance";


export const decodedToken = (token: string) => jwtDecode<AuthProps>(token);

export const GenerateAccessToken = async () => {
  return await instance({
    url: import.meta.env.VITE_PUBLIC_API_URL + "/auth/refresh-token",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
