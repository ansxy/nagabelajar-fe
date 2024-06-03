import { EyeIcon, LucideEyeOff } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import brutal from "../assets/brutlismimage.jpg";
import { useAuthContext } from "../hooks/AuthHook";
import { BaseResponse, Certificate } from "../types/BaseResponseType";

export const ProfilePage: React.FC = () => {
  const { userData } = useAuthContext();

  const response = useLoaderData() as BaseResponse<Certificate[]>;

  return (
    <div className="min-h-screen bg-[#49ae92] flex w-full justify-center overflow-hidden">
      <section className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] border-2 bg-[#1d2321] border-[#3acda5] mt-20">
        <div className="flex flex-row bg-[#1d2321] justify-between px-5 md:px-10 py-2 md:py-4">
          <EyeIcon size={48} className="text-[#49ae92]" />
          <EyeIcon size={48} className="text-[#49ae92]" />
          <EyeIcon size={48} className="text-[#49ae92]" />
          <LucideEyeOff size={48} className="text-[#49ae92]" />
          <EyeIcon size={48} className="text-[#49ae92]" />
          <EyeIcon size={48} className="text-[#49ae92]" />
          <EyeIcon size={48} className="text-[#49ae92]" />
        </div>
        <div className="relative w-full h-[20%] md:h-[30%] flex">
          <span className="bg-[#337d67]/70 w-full h-full absolute z-10"></span>
          <img src={brutal} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#49ae92] w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#1d2321] z-20">
            <img
              src={userData?.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between px-5 md:px-10 py-2 md:py-4 bg-[#1d2321] text-[#3acda5]">
          <div className="flex flex-col items-center">
            <h2 className="text-base md:text-lg font-medium">
              {userData?.displayName}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-base md:text-lg font-medium">
              Courses Enrolled
            </h3>
            <p className="text-xl md:text-2xl font-bold">
              {response.paging.count}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#1d2321] py-4 overflow-hidden">
          <h1 className="text-base md:text-lg font-medium text-[#3acda5]">
            Certificate List
          </h1>
          <ul className="flex flex-col gap-2 w-full max-h-80 overflow-y-auto px-4">
            {response.data.map((certificate, index) => (
              <li
                key={index}
                className="flex flex-row justify-between items-center border-2 text-[#3acda5] border-[#3acda5] w-full p-2"
              >
                <span className="flex flex-col ">
                  <p className="text-sm md:text-xl font-bold">
                    {certificate.course.name}
                  </p>
                  <Link
                    target="_blank"
                    to={`${certificate.file_url}`}
                    className="text-xs md:text-sm font-bold"
                  >
                    View
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
