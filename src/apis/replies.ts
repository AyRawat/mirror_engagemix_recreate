import axiosInstance from "./axios";
import { GenerateReplyBodyDto, GenerateReplyResponseDto } from "./types";

const generate = async (
  requestDto: GenerateReplyBodyDto
): Promise<GenerateReplyResponseDto> => {
  try {
    const { data } = await axiosInstance.post("/reply/generate", requestDto);
    return data as GenerateReplyResponseDto;
  } catch {
    throw new Error("Bad Request");
  }
};

export const replies = {
  generate,
};
