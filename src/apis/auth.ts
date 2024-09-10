import axiosInstance from "./axios";
import { LoginRequestDto, TokenDto } from "./types";

const login = async (requestDto: LoginRequestDto): Promise<TokenDto> => {
  try {
    console.log("Request dto: ", requestDto);
    const { data } = await axiosInstance.post("/auth/login", requestDto);
    return data as TokenDto;
  } catch {
    throw new Error("Unauthorized");
  }
};

const logout = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};

const refreshAccessToken = async (): Promise<TokenDto> => {
  try {
    const { data } = await axiosInstance.get("/auth/refresh-token");
    return data as TokenDto;
  } catch {
    throw new Error("Unauthorized");
  }
};

export const auth = {
  login,
  logout,
  refreshAccessToken,
};
