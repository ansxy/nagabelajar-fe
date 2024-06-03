import { Course } from "./CourseType";

export interface BaseResponse<T = void> {
  success: boolean;
  paging: Paging;
  data: T;
  error: Error;
}

export interface Paging {
  page: number;
  per_page: number;
  count: number;
  page_count: number;
  next: string;
  previous: string;
}

export interface Error {
  code: number;
  status: number;
  message: string;
}

export interface Certificate {
  certificate_id: string;
  user_id: string;
  file_name: string;
  file_url: string;
  md5: string;
  blockchain_address: string;
  created_at: string;
  updated_at: string;
  delete_at: string;
  course: Course;
}
