import axiosInstance from "./axios";
import { RegisterRequestDto, UpdateUserProfile, UserDto } from "./types";

const register = async (requestDto: RegisterRequestDto): Promise<UserDto> => {
  try {
    const { data } = await axiosInstance.post("/users", requestDto);
    const user = data as UserDto;
    return user;
  } catch {
    throw new Error("Bad Request");
  }
};

const updateMe = async (
  requestDto: Partial<UpdateUserProfile>
): Promise<UserDto> => {
  try {
    const { data } = await axiosInstance.put("/users/me", requestDto);
    const user = data as UserDto;
    return user;
  } catch {
    throw new Error("Bad Request");
  }
};

export const user = {
  updateMe,
  register,
};
