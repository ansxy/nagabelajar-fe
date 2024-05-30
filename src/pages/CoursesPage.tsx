import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/card";
import { Dropdown } from "../components/dropdown";
import { BaseResponse } from "../types/BaseResponseType";
import { Course } from "../types/CourseType";
import axiosInstance from "../utils/axios";

// type CourseFilter = {
//   sort: string;
//   search: string;
//   filter: string;
// };

export const CoursesPage: React.FC = () => {
  // const [courseFilter, setCourseFilter] = useState<CourseFilter>({
  //   sort: "",
  //   search: "",
  //   filter: "",
  // });
  const loaderData = useLoaderData() as BaseResponse<Course[]>;
  const [response, setResponse] = useState<BaseResponse<Course[]>>(loaderData);
  const [search, setSearch] = useState<string>("");
  // const [sort, setSort] = useState<string>("");

  // const fetchCourses = async (search: string) => {
  //   try {
  //     const res = await axiosInstance.get<BaseResponse<Course[]>>(
  //       `/admin/course?keyword=${search}`
  //     );
  //     setResponse(res as unknown as BaseResponse<Course[]>);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    axiosInstance
      .get<BaseResponse<Course[]>>(`/admin/course?keyword=${search}`)
      .then((res) => {
        setResponse(res as unknown as BaseResponse<Course[]>);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    //dbff29
    <div className="flex w-[80%] md:w-[75%] flex-col justify-center items-center">
      <div className="flex w-full border-x-2 border-black">
        <section className="flex  justify-start flex-row-reverse w-full border-b-2 border-black p-2 gap-5 bg-[#feef06]">
          <div className="flex flex-row border-2 border-black py-2 px-5 rounded-full">
            <input
              placeholder="Search Course"
              className="bg-inherit"
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
            />
            <Search />
          </div>
          {/* filter dropwdonw */}
          <Dropdown options={["Newest", "Oldest"]} />
        </section>
      </div>
      <section className="grid grid-cols-4 gap-5 px-10 py-5 border-x-2  border-black max-h-screen overflow-scroll w-full bg-[#ececec] h-screen">
        {response.data ? (
          <>
            {response.data.map((course) => (
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
