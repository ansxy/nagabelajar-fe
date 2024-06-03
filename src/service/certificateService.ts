import { LoaderFunction } from "react-router-dom";
import { BaseResponse, Certificate } from "../types/BaseResponseType";
import axiosInstance from "../utils/axios";

export const CertificateLoader: LoaderFunction = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<Certificate[]>>(
      "/certificate",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Response("Failed to fetch data");
  }
};
