import axios from "axios";
import { LoaderFunction } from "react-router-dom";
import { BaseResponse } from "../types/BaseResponseType";
import { Course } from "../types/CourseType";
import axiosInstance from "../utils/axios";

export const GetCourseDetailLoader: LoaderFunction = async ({ params }) => {
  try {
    const response = await axiosInstance.get<BaseResponse<Course>>(
      `/course/detail/${params.course_detail_id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.error?.message ||
        "Failed to fetch course details";
      const status = error.response?.status || 500;
      throw new Response(message, { status });
    }
    throw new Response("Network or internal server error", { status: 500 });
  }
};

export const CourseLoader: LoaderFunction = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<Course[]>>(
      "/admin/course"
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.error?.message || "Failed to fetch courses";
      const status = error.response?.status || 500;
      throw new Response(message, { status });
    }
    throw new Response("Network or internal server error", { status: 500 });
  }
};

export const GetOneCourseLoader: LoaderFunction = async ({ params }) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get<BaseResponse<Course>>(
      `${token ? "" : "public"}/course/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.error?.message || "Failed to fetch course";
      const status = error.response?.status || 500;
      throw new Response(message, { status });
    }
    throw new Response("Network or internal server error", { status: 500 });
  }
};

export const GetListCourse = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axiosInstance.get<BaseResponse<Course[]>>(
      "/course",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.error?.message || "Failed to fetch courses";
      const status = error.response?.status || 500;
      throw new Response(message, { status });
    }
    throw new Response("Network or internal server error", { status: 500 });
  }
};

export const UpdateProgress = async (progressId: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.put<BaseResponse>(
      `/progress/${progressId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.error?.message || "Failed to update progress";
      const status = error.response?.status || 500;
      throw new Response(message, { status });
    }
    throw new Response("Network or internal server error", { status: 500 });
  }
};
