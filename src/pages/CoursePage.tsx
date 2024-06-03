import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BaseResponse } from "../types/BaseResponseType";
import { Course } from "../types/CourseType";

export const CoursePage: React.FC = () => {
  const response = useLoaderData() as BaseResponse<Course>;
  const [continueID, setContinueID] = useState<number>(0);

  useEffect(() => {
    if (response.data.is_enrolled) {
      let found = false;
      response.data.progress.map((content) => {
        if (!content.is_finished && !found) {
          found;
          setContinueID(content.course_detail_id);
          found = true;
        }
      });
    }
  }, [response.data.is_enrolled, response.data.progress]);

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

        <div className="flex flex-row cursor-pointer relative mb-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 transform translate-x-[5px] translate-y-[5px]  border border-black opacity-90"></div>
            <div className="relative z-10 text-white bg-black font-bold">
              <p className="px-8 py-3 flex gap-2">
                {response.data.is_enrolled ? (
                  <Link to={`${continueID}`}>
                    <span>Continue</span>
                  </Link>
                ) : (
                  "Enroll Now"
                )}
                <span>
                  <ArrowRight />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
