export interface Course {
  course_id: number;
  name: string;
  code: string;
  category_id: number;
  price: number;
  description: string;
  media_id: string;
  is_paid: boolean;
  is_archived: boolean;
  author: string;
  created_at: string;
  updated_at: string;
  is_enrolled: boolean;

  deleted_at: string;
  category: Category;
  media: Media;
  course_detail: CourseDetail[];
  progress: Progress[];
}

export interface Progress {
  progress_id: number;
  user_id: string;
  course_id: number;
  course_detail_id: number;
  is_finished: boolean;
}

export interface CourseDetail {
  course_detail_id: number;
  name: string;
  objective: string;
  position: number;
  course_id: number;
  content: Content[];
}

export interface Category {
  category_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Media {
  media_id: string;
  name: string;
  type: string;
  url_media: string;
  created_at: string;
  updated_at: string;
}

export interface Content {
  course_content_id: number;
  course_detail_id: number;
  title: string;
  course_content: string;
  sub_content: SubContent[];
  // practice: any[]
  exercise: Exercise[];
}

export interface SubContent {
  course_subcontent_id: number;
  title: string;
  content: string;
  course_content_id: number;
}

export interface Exercise {
  course_exercise_id?: number;
  title: string;
  content: string;
  course_content_id?: number;
}
