import axiosInstance from "./axios";
import { CreateCompanyRequestDto, CompanyDto } from "./types";

const create = async (requestDto: CreateCompanyRequestDto): Promise<CompanyDto> => {
  try {
    const { data } = await axiosInstance.post("/company", requestDto);
    return data as CompanyDto;
  } catch {
    throw new Error("Failed to create company");
  }
};

const getCompany = async (userId: string): Promise<CompanyDto> => {
  try {
    const { data } = await axiosInstance.get(`/company`, {
      headers: { 'User-Id': userId }
    });
    return data as CompanyDto;
  } catch {
    throw new Error("Failed to fetch company");
  }
};

const getDescriptionFromUrl = async (url: string): Promise<string> => {
  try {
    const { data } = await axiosInstance.post(`/company/generate-description`, {}, {
      params: {url}
    });
    return data as string;
  } catch {
    throw new Error("Failed to generate description from URL");
  }
};

export const company = {
  create,
  getCompany,
  getDescriptionFromUrl
};