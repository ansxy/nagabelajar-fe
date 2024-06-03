import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/card";
import { Dropdown } from "../components/dropdown";
import { BaseResponse } from "../types/BaseResponseType";
import { Course } from "../types/CourseType";
import axiosInstance from "../utils/axios";

export const CoursesPage: React.FC = () => {
  const loaderData = useLoaderData() as Course[];
  const [response, setResponse] = useState<Course[]>(loaderData);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axiosInstance
      .get<BaseResponse<Course[]>>(`/admin/course?keyword=${search}`)
      .then((res) => {
        setResponse(res.data.data as unknown as Course[]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <div className="flex w-full border-x-2 border-black">
        <section className="flex justify-between flex-row w-full border-b-2 border-black p-2 gap-5 bg-[#feef06]">
          <div className="flex flex-row border-2 border-black py-2 px-5 rounded-full">
            <input
              placeholder="Search Course"
              className="bg-inherit outline-none"
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
            <Search />
          </div>
          {/* filter dropdown */}
          <Dropdown options={["Newest", "Oldest"]} />
        </section>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-5 border-x-2 border-black max-h-screen overflow-scroll w-full bg-[#ececec] h-screen">
        {response ? (
          <>
            {response.map((course) => (
              <Card
                key={course.code}
                Id={course.course_id}
                Description={course.description}
                Image={course.media.url_media}
                Title={course.name}
              />
            ))}
          </>
        ) : (
          <span>Loading...</span>
        )}
      </section>
    </div>
  );
};
