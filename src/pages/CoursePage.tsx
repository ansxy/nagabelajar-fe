import { ChevronRight } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { BaseResponse } from "../types/BaseResponseType";
import { Course } from "../types/CourseType";

export const CoursePage: React.FC = () => {
  const response = useLoaderData() as BaseResponse<Course>;
  return (
    <div className="flex w-[80%] md:w-[75%] flex-col justify-center items-center">
      <div className="flex flex-col w-full border-x-2 border-black border-b-2  items-center justify-center gap-10">
        <section className="w-full flex flex-col items-center gap-3 mt-10">
          <span className="text-3xl font-black uppercase tracking-wider">
            {response.data.name}
          </span>
          <figure className="h-[300px] flex justify-center items-center">
            <img
              src={response.data.media.url_media}
              alt={response.data.name}
              className="object-contain h-full"
            />
          </figure>
          {/* <span className="text-lg tracking-tighter">Course</span> */}
          <span className="font-light">{response.data.author}</span>
          <span className="flex w-[50%] text-justify">
            <p>{response.data.description}</p>
          </span>
        </section>
        <section className="flex w-[50%] flex-col justify-center items-center">
          <span className="text-2xl font-bold">Course Content</span>
          <ul className="flex flex-col gap-2 w-full">
            {response.data.course_detail.map((content, index) => (
              <Link
                key={index}
                to={`${content.course_detail_id}`}
                className="flex flex-row gap-2 border-2 border-gray-500 p-2 w-full justify-between items-center cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out"
              >
                <span className="font-bold">{content.name}</span>
                <span>
                  <ChevronRight />
                </span>
                {/* <span>{content.}</span> */}
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
