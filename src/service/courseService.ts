import { LoaderFunction } from "react-router-dom";
import { BaseResponse } from "../types/BaseResponseType";
import { Course } from "../types/CourseType";
import axiosInstance from "../utils/axios";

export const CourseLoader: LoaderFunction = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<Course[]>>(
      "/admin/course"
    );

    return response.data.data;
  } catch (error) {
    throw new Response("Failed to fetch data");
  }
};

export const GetOneCourseLoader: LoaderFunction = async ({ params }) => {
  try {
    const response = await axiosInstance.get<BaseResponse<Course>>(
      `/course/${params.id}`,
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

export const GetCourseDetailLoader: LoaderFunction = async ({ params }) => {
  try {
    const response = await axiosInstance.get<BaseResponse<Course>>(
      `/course/detail/${params.contentId}`
    );
    return response.data;
  } catch (error) {
    throw new Response("Failed to fetch data");
  }
};
