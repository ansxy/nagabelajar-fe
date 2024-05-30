export interface BaseResponse<T> {
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
