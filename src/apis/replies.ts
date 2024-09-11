import axiosInstance from "./axios";
import { ReplyRequestDto, GenerateReplyResponseDto } from "./types";

const generate = async (
  requestDto: ReplyRequestDto
): Promise<GenerateReplyResponseDto> => {
  try {
    const { data } = await axiosInstance.post("/posts/generate-reply", requestDto);
    return data as GenerateReplyResponseDto;
  } catch {
    throw new Error("Bad Request");
  }
};

export const replies = {
  generate,
};